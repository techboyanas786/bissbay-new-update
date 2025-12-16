import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { createConnection } from '../src/lib/db.js';

// Password policy enforcement
export const PASSWORD_POLICY = {
  minLength: 12,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecialChars: true,
  specialChars: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

export function validatePassword(password) {
  const errors = [];
  
  if (password.length < PASSWORD_POLICY.minLength) {
    errors.push(`Password must be at least ${PASSWORD_POLICY.minLength} characters long`);
  }
  
  if (PASSWORD_POLICY.requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (PASSWORD_POLICY.requireLowercase && !/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (PASSWORD_POLICY.requireNumbers && !/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  if (PASSWORD_POLICY.requireSpecialChars) {
    const specialCharsRegex = new RegExp(`[${PASSWORD_POLICY.specialChars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]`);
    if (!specialCharsRegex.test(password)) {
      errors.push('Password must contain at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

export async function hashPassword(password) {
  const saltRounds = 12;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  
  return {
    hash,
    salt
  };
}

export async function verifyPassword(password, hash, salt) {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    console.error('Password verification error:', error);
    return false;
  }
}

export function generateSecureToken() {
  return crypto.randomBytes(64).toString('hex');
}

export function generateJWT(payload) {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { 
      expiresIn: process.env.JWT_EXPIRES_IN || '45m',
      issuer: 'bissbay-admin',
      audience: 'bissbay-admin-panel'
    }
  );
}

export function verifyJWT(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET, {
      issuer: 'bissbay-admin',
      audience: 'bissbay-admin-panel'
    });
  } catch (error) {
    console.error('JWT verification error:', error);
    return null;
  }
}

export async function createUser(username, password) {
  // Validate input
  if (!username || !password) {
    throw new Error('Username and password are required');
  }
  
  if (username.length < 3 || username.length > 50) {
    throw new Error('Username must be between 3 and 50 characters');
  }
  
  // Validate username format (alphanumeric + underscore only)
  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    throw new Error('Username can only contain letters, numbers, and underscores');
  }
  
  // Validate password
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) {
    throw new Error(`Password validation failed: ${passwordValidation.errors.join(', ')}`);
  }
  
  // Check if user already exists
  const connection = await createConnection();
  const [existingUser] = await connection.execute(
    'SELECT id FROM admin_users WHERE username = ?',
    [username]
  );
  
  if (existingUser.length > 0) {
    await connection.end();
    throw new Error('Username already exists');
  }
  
  // Hash password
  const { hash, salt } = await hashPassword(password);
  
  // Create user
  const [result] = await connection.execute(
    `INSERT INTO admin_users (username, password_hash, salt, password_changed_at) 
     VALUES (?, ?, ?, NOW())`,
    [username, hash, salt]
  );
  
  await connection.end();
  
  return {
    id: result.insertId,
    username,
    created: true
  };
}

export async function updatePassword(userId, newPassword) {
  // Validate password
  const passwordValidation = validatePassword(newPassword);
  if (!passwordValidation.isValid) {
    throw new Error(`Password validation failed: ${passwordValidation.errors.join(', ')}`);
  }
  
  // Hash new password
  const { hash, salt } = await hashPassword(newPassword);
  
  // Update password and reset failed attempts
  await executeQuery(
    `UPDATE admin_users 
     SET password_hash = ?, salt = ?, failed_attempts = 0, locked_until = NULL, 
         password_changed_at = NOW(), updated_at = NOW()
     WHERE id = ?`,
    [hash, salt, userId]
  );
  
  // Invalidate all existing sessions for this user
  await executeQuery(
    'UPDATE admin_sessions SET is_active = FALSE WHERE user_id = ?',
    [userId]
  );
  
  return { passwordUpdated: true };
}

export async function authenticateUser(username, password, ipAddress, userAgent) {
  const now = new Date();
  
  try {
    // Get user with lock check
    const users = await executeQuery(
      `SELECT id, username, password_hash, salt, failed_attempts, locked_until, is_active
       FROM admin_users 
       WHERE username = ? AND is_active = TRUE`,
      [username]
    );
    
    if (users.length === 0) {
      // Log failed attempt (even for non-existent users)
      await logLoginAttempt(username, ipAddress, false, 'User not found', userAgent);
      throw new Error('Invalid credentials');
    }
    
    const user = users[0];
    
    // Check if account is locked
    if (user.locked_until && new Date(user.locked_until) > now) {
      await logLoginAttempt(username, ipAddress, false, 'Account locked', userAgent);
      const lockTimeRemaining = Math.ceil((new Date(user.locked_until) - now) / (1000 * 60));
      throw new Error(`Account is locked. Try again in ${lockTimeRemaining} minutes.`);
    }
    
    // Verify password
    const isValidPassword = await verifyPassword(password, user.password_hash, user.salt);
    
    if (!isValidPassword) {
      // Increment failed attempts
      const newFailedAttempts = user.failed_attempts + 1;
      const maxAttempts = parseInt(process.env.ADMIN_MAX_FAILED_ATTEMPTS) || 3;
      const lockoutDuration = parseInt(process.env.ADMIN_LOCKOUT_DURATION) || 3600; // 1 hour in seconds
      
      let lockUntil = null;
      if (newFailedAttempts >= maxAttempts) {
        lockUntil = new Date(now.getTime() + lockoutDuration * 1000);
      }
      
      await executeQuery(
        'UPDATE admin_users SET failed_attempts = ?, locked_until = ?, updated_at = NOW() WHERE id = ?',
        [newFailedAttempts, lockUntil, user.id]
      );
      
      await logLoginAttempt(username, ipAddress, false, 'Invalid password', userAgent);
      
      if (lockUntil) {
        throw new Error('Too many failed attempts. Account has been locked for 1 hour.');
      } else {
        const remainingAttempts = maxAttempts - newFailedAttempts;
        throw new Error(`Invalid credentials. ${remainingAttempts} attempts remaining.`);
      }
    }
    
    // Successful login - reset failed attempts and update last login
    await executeQuery(
      'UPDATE admin_users SET failed_attempts = 0, locked_until = NULL, last_login = NOW(), updated_at = NOW() WHERE id = ?',
      [user.id]
    );
    
    // Log successful login
    await logLoginAttempt(username, ipAddress, true, null, userAgent);
    
    // Create session
    const sessionToken = generateSecureToken();
    const expiresAt = new Date(now.getTime() + (parseInt(process.env.SESSION_MAX_AGE) || 2700) * 1000);
    
    await executeQuery(
      `INSERT INTO admin_sessions (user_id, session_token, expires_at, ip_address, user_agent)
       VALUES (?, ?, ?, ?, ?)`,
      [user.id, sessionToken, expiresAt, ipAddress, userAgent]
    );
    
    // Generate JWT
    const jwtPayload = {
      userId: user.id,
      username: user.username,
      sessionToken
    };
    
    const token = generateJWT(jwtPayload);
    
    return {
      success: true,
      user: {
        id: user.id,
        username: user.username
      },
      token,
      sessionToken,
      expiresAt
    };
    
  } catch (error) {
    // Log any unexpected errors
    if (!error.message.includes('Invalid credentials') && !error.message.includes('Account')) {
      await logLoginAttempt(username, ipAddress, false, 'System error', userAgent);
    }
    throw error;
  }
}

export async function validateSession(sessionToken) {
  if (!sessionToken) return null;
  
  const sessions = await executeQuery(
    `SELECT s.*, u.username, u.is_active as user_active
     FROM admin_sessions s
     JOIN admin_users u ON s.user_id = u.id
     WHERE s.session_token = ? AND s.expires_at > NOW() AND s.is_active = TRUE AND u.is_active = TRUE`,
    [sessionToken]
  );
  
  if (sessions.length === 0) {
    return null;
  }
  
  const session = sessions[0];
  
  // Update session activity
  await executeQuery(
    'UPDATE admin_sessions SET updated_at = NOW() WHERE id = ?',
    [session.id]
  );
  
  return {
    userId: session.user_id,
    username: session.username,
    sessionId: session.id
  };
}

export async function logoutUser(sessionToken) {
  if (!sessionToken) return;
  
  await executeQuery(
    'UPDATE admin_sessions SET is_active = FALSE WHERE session_token = ?',
    [sessionToken]
  );
}

async function logLoginAttempt(username, ipAddress, success, failureReason, userAgent) {
  try {
    await executeQuery(
      `INSERT INTO admin_login_attempts (username, ip_address, success, failure_reason, user_agent)
       VALUES (?, ?, ?, ?, ?)`,
      [username, ipAddress, success, failureReason, userAgent]
    );
  } catch (error) {
    console.error('Failed to log login attempt:', error);
  }
}

export async function cleanupExpiredSessions() {
  try {
    await executeQuery(
      'DELETE FROM admin_sessions WHERE expires_at < NOW()',
      []
    );
  } catch (error) {
    console.error('Failed to cleanup expired sessions:', error);
  }
}