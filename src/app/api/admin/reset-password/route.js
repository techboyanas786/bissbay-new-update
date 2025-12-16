import { NextResponse } from 'next/server';
import { createConnection } from '../../../../lib/db.js';
import { hashPassword, validatePassword } from '../../../../../lib/auth-simple.js';

function getClientIP(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  
  if (cfConnectingIP) return cfConnectingIP;
  if (forwarded) return forwarded.split(',')[0].trim();
  if (realIP) return realIP;
  return '127.0.0.1';
}

// Rate limiting
const rateLimitStore = new Map();

function isRateLimited(ip) {
  const key = `reset_${ip}`;
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxAttempts = 5;
  
  const attempts = rateLimitStore.get(key) || { count: 0, resetTime: now + windowMs };
  
  if (now > attempts.resetTime) {
    rateLimitStore.set(key, { count: 0, resetTime: now + windowMs });
    return false;
  }
  
  return attempts.count >= maxAttempts;
}

function incrementRateLimit(ip) {
  const key = `reset_${ip}`;
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  
  const attempts = rateLimitStore.get(key) || { count: 0, resetTime: now + windowMs };
  attempts.count++;
  rateLimitStore.set(key, attempts);
}

export async function POST(request) {
  try {
    const clientIP = getClientIP(request);
    
    // Check rate limiting
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Too many reset attempts. Please wait 15 minutes.'
        },
        { status: 429 }
      );
    }

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { success: false, message: 'Invalid request format' },
        { status: 400 }
      );
    }

    const { token, password } = body;

    // Input validation
    if (!token || !password) {
      incrementRateLimit(clientIP);
      return NextResponse.json(
        { success: false, message: 'Token and password are required' },
        { status: 400 }
      );
    }

    // Validate input types and lengths
    if (typeof token !== 'string' || typeof password !== 'string') {
      incrementRateLimit(clientIP);
      return NextResponse.json(
        { success: false, message: 'Invalid input format' },
        { status: 400 }
      );
    }

    if (token.length !== 128 || password.length > 200) { // generateSecureToken creates 128 char tokens
      incrementRateLimit(clientIP);
      return NextResponse.json(
        { success: false, message: 'Invalid token or password too long' },
        { status: 400 }
      );
    }

    // Validate password meets requirements
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      incrementRateLimit(clientIP);
      return NextResponse.json(
        { 
          success: false, 
          message: `Password validation failed: ${passwordValidation.errors.join(', ')}` 
        },
        { status: 400 }
      );
    }

    const connection = await createConnection();
    
    try {
      // Find valid reset token
      const [resetTokens] = await connection.execute(
        `SELECT pr.*, u.id as user_id, u.username, u.email, u.is_active
         FROM admin_password_resets pr
         JOIN admin_users u ON pr.user_id = u.id
         WHERE pr.reset_token = ? AND pr.expires_at > NOW() AND pr.used_at IS NULL AND u.is_active = TRUE`,
        [token]
      );

      if (resetTokens.length === 0) {
        incrementRateLimit(clientIP);
        return NextResponse.json(
          { success: false, message: 'Invalid or expired reset token' },
          { status: 400 }
        );
      }

      const resetData = resetTokens[0];

      // Hash new password
      const { hash, salt } = await hashPassword(password);

      // Update password and mark token as used
      await connection.execute(
        `UPDATE admin_users 
         SET password_hash = ?, salt = ?, failed_attempts = 0, locked_until = NULL, 
             password_changed_at = NOW()
         WHERE id = ?`,
        [hash, salt, resetData.user_id]
      );

      // Mark reset token as used
      await connection.execute(
        'UPDATE admin_password_resets SET used_at = NOW() WHERE id = ?',
        [resetData.id]
      );

      // Invalidate all existing sessions for this user
      await connection.execute(
        'UPDATE admin_sessions SET is_active = FALSE WHERE user_id = ?',
        [resetData.user_id]
      );

      // Log the password reset
      const userAgent = request.headers.get('user-agent') || 'Unknown';
      await connection.execute(
        `INSERT INTO admin_login_attempts (username, ip_address, success, failure_reason, user_agent)
         VALUES (?, ?, ?, ?, ?)`,
        [resetData.username, clientIP, true, 'Password reset via email', userAgent]
      );

      return NextResponse.json({
        success: true,
        message: 'Password reset successfully. Please login with your new password.'
      });

    } finally {
      await connection.end();
    }

  } catch (error) {
    console.error('Reset password API error:', error);
    incrementRateLimit(getClientIP(request));
    
    return NextResponse.json(
      { success: false, message: 'Password reset service temporarily unavailable' },
      { status: 500 }
    );
  }
}

// GET endpoint to validate token
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Token is required' },
        { status: 400 }
      );
    }

    const connection = await createConnection();
    
    try {
      // Check if token is valid
      const [resetTokens] = await connection.execute(
        `SELECT pr.expires_at, u.username
         FROM admin_password_resets pr
         JOIN admin_users u ON pr.user_id = u.id
         WHERE pr.reset_token = ? AND pr.expires_at > NOW() AND pr.used_at IS NULL AND u.is_active = TRUE`,
        [token]
      );

      if (resetTokens.length === 0) {
        return NextResponse.json(
          { success: false, message: 'Invalid or expired reset token' },
          { status: 400 }
        );
      }

      return NextResponse.json({
        success: true,
        message: 'Token is valid',
        username: resetTokens[0].username
      });

    } finally {
      await connection.end();
    }

  } catch (error) {
    console.error('Token validation error:', error);
    return NextResponse.json(
      { success: false, message: 'Token validation service temporarily unavailable' },
      { status: 500 }
    );
  }
}