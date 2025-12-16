import { NextResponse } from 'next/server';
import { createConnection } from '../../../../lib/db.js';
import { generateSecureToken } from '../../../../../lib/auth-simple.js';
import validator from 'validator';

const rateLimitStore = new Map();

function getRateLimitKey(ip) {
  return `forgot_${ip}`;
}

function isRateLimited(ip) {
  const key = getRateLimitKey(ip);
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const maxAttempts = 3;
  
  const attempts = rateLimitStore.get(key) || { count: 0, resetTime: now + windowMs };
  
  if (now > attempts.resetTime) {
    rateLimitStore.set(key, { count: 0, resetTime: now + windowMs });
    return false;
  }
  
  return attempts.count >= maxAttempts;
}

function incrementRateLimit(ip) {
  const key = getRateLimitKey(ip);
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  
  const attempts = rateLimitStore.get(key) || { count: 0, resetTime: now + windowMs };
  attempts.count++;
  rateLimitStore.set(key, attempts);
}

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
  try {
    const clientIP = getClientIP(request);
    
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Too many reset attempts. Please wait 15 minutes before trying again.',
        },
        { status: 429 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { success: false, message: 'Invalid request format' },
        { status: 400 }
      );
    }

    const { email } = body;

    if (!email) {
      incrementRateLimit(clientIP);
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    if (!validator.isEmail(email)) {
      incrementRateLimit(clientIP);
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    const sanitizedEmail = validator.normalizeEmail(email.toLowerCase().trim());
    
    console.log('🔍 Looking for email:', sanitizedEmail);

    const connection = await createConnection();
    
    try {
      const [users] = await connection.execute(
        'SELECT id, username, email, is_active FROM admin_users WHERE email = ? AND is_active = TRUE',
        [sanitizedEmail]
      );

      console.log('👤 Found users:', users.length);

      if (users.length > 0) {
        const user = users[0];
        console.log('✅ User found:', user.username);
        
        const resetToken = generateSecureToken();
        const expiresAt = new Date(Date.now() + 3600000);
        
        await connection.execute(
          `INSERT INTO admin_password_resets (user_id, reset_token, expires_at)
           VALUES (?, ?, ?)
           ON DUPLICATE KEY UPDATE reset_token = VALUES(reset_token), expires_at = VALUES(expires_at)`,
          [user.id, resetToken, expiresAt]
        );

        const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/admin/reset-password?token=${resetToken}`;

        console.log('🔗 Reset URL generated:', resetUrl);
        // console.log('⚠️ Email functionality disabled - manual password reset required');
      } else {
        console.log('❌ No user found with email:', sanitizedEmail);
      }

      return NextResponse.json({
        success: true,
        message: 'Password reset token generated. Check server logs for the reset URL (email functionality disabled).'
      });

    } finally {
      await connection.end();
    }

  } catch (error) {
    console.error('Forgot password API error:', error);
    incrementRateLimit(getClientIP(request));
    
    return NextResponse.json(
      { success: false, message: 'Password reset service temporarily unavailable' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}