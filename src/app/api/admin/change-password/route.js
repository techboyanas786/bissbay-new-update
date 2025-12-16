import { NextResponse } from 'next/server';
import { validateSession, verifyPassword, hashPassword, validatePassword } from '../../../../../lib/auth-simple.js';
import { createConnection } from '../../../../lib/db.js';
import validator from 'validator';

function getClientIP(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  
  if (cfConnectingIP) return cfConnectingIP;
  if (forwarded) return forwarded.split(',')[0].trim();
  if (realIP) return realIP;
  return '127.0.0.1';
}

export async function POST(request) {
  console.log('🔄 Password change API route accessed');
  
  try {
    // Get session token from cookie
    const sessionToken = request.cookies.get('admin-session')?.value;
    console.log('🍪 Password change request - Session token:', sessionToken ? 'Present' : 'Missing');
    
    if (!sessionToken) {
      console.log('No session token found');
      return NextResponse.json(
        { success: false, message: 'Authentication required' },
        { status: 401 }
      );
    }

    // Validate session
    console.log('Validating session...');
    const sessionData = await validateSession(sessionToken);
    console.log('Session validation result:', sessionData ? 'Valid' : 'Invalid');
    
    if (!sessionData) {
      return NextResponse.json(
        { success: false, message: 'Invalid or expired session' },
        { status: 401 }
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

    const { currentPassword, newPassword } = body;

    // Input validation
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { success: false, message: 'Current password and new password are required' },
        { status: 400 }
      );
    }

    // Validate input types and lengths
    if (typeof currentPassword !== 'string' || typeof newPassword !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Invalid input format' },
        { status: 400 }
      );
    }

    if (currentPassword.length > 200 || newPassword.length > 200) {
      return NextResponse.json(
        { success: false, message: 'Input too long' },
        { status: 400 }
      );
    }

    // Validate new password meets requirements
    const passwordValidation = validatePassword(newPassword);
    if (!passwordValidation.isValid) {
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
      // Get current user data
      const [users] = await connection.execute(
        'SELECT id, username, password_hash, salt, is_active FROM admin_users WHERE id = ? AND is_active = TRUE',
        [sessionData.userId]
      );

      if (users.length === 0) {
        return NextResponse.json(
          { success: false, message: 'User not found or inactive' },
          { status: 404 }
        );
      }

      const user = users[0];

      // Verify current password
      const isCurrentPasswordValid = await verifyPassword(currentPassword, user.password_hash, user.salt);
      
      if (!isCurrentPasswordValid) {
        // Log failed password change attempt
        const clientIP = getClientIP(request);
        const userAgent = request.headers.get('user-agent') || 'Unknown';
        
        await connection.execute(
          `INSERT INTO admin_login_attempts (username, ip_address, success, failure_reason, user_agent)
           VALUES (?, ?, ?, ?, ?)`,
          [user.username, clientIP, false, 'Invalid current password on change attempt', userAgent]
        );
        
        return NextResponse.json(
          { success: false, message: 'Current password is incorrect' },
          { status: 401 }
        );
      }

      // Check if new password is same as current password
      const isSamePassword = await verifyPassword(newPassword, user.password_hash, user.salt);
      if (isSamePassword) {
        return NextResponse.json(
          { success: false, message: 'New password must be different from current password' },
          { status: 400 }
        );
      }

      // Hash new password
      const { hash, salt } = await hashPassword(newPassword);

      // Update password in database
      await connection.execute(
        `UPDATE admin_users 
         SET password_hash = ?, salt = ?, failed_attempts = 0, locked_until = NULL, 
             password_changed_at = NOW()
         WHERE id = ?`,
        [hash, salt, user.id]
      );

      // Invalidate all existing sessions for this user (except current one temporarily)
      await connection.execute(
        'UPDATE admin_sessions SET is_active = FALSE WHERE user_id = ? AND session_token != ?',
        [user.id, sessionToken]
      );

      // Log successful password change
      const clientIP = getClientIP(request);
      const userAgent = request.headers.get('user-agent') || 'Unknown';
      
      await connection.execute(
        `INSERT INTO admin_login_attempts (username, ip_address, success, failure_reason, user_agent)
         VALUES (?, ?, ?, ?, ?)`,
        [user.username, clientIP, true, 'Password changed successfully', userAgent]
      );

      return NextResponse.json({
        success: true,
        message: 'Password changed successfully'
      });

    } finally {
      await connection.end();
    }

  } catch (error) {
    console.error('Password change API error:', error);
    
    return NextResponse.json(
      { success: false, message: 'Password change service temporarily unavailable' },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}