import { NextResponse } from 'next/server';
import { authenticateUser } from '../../../../../lib/auth-simple.js';
import { headers } from 'next/headers';
import validator from 'validator';

// Rate limiting storage (in production, use Redis or database)
const rateLimitStore = new Map();

function getRateLimitKey(ip) {
  return `login_${ip}`;
}

function isRateLimited(ip) {
  const key = getRateLimitKey(ip);
  const now = Date.now();
  const windowMs = (parseInt(process.env.LOGIN_RATE_LIMIT_WINDOW) || 15) * 60 * 1000; // 15 minutes
  const maxAttempts = parseInt(process.env.LOGIN_RATE_LIMIT_MAX) || 5;
  
  const attempts = rateLimitStore.get(key) || { count: 0, resetTime: now + windowMs };
  
  // Reset if window has passed
  if (now > attempts.resetTime) {
    rateLimitStore.set(key, { count: 0, resetTime: now + windowMs });
    return false;
  }
  
  return attempts.count >= maxAttempts;
}

function incrementRateLimit(ip) {
  const key = getRateLimitKey(ip);
  const now = Date.now();
  const windowMs = (parseInt(process.env.LOGIN_RATE_LIMIT_WINDOW) || 15) * 60 * 1000;
  
  const attempts = rateLimitStore.get(key) || { count: 0, resetTime: now + windowMs };
  attempts.count++;
  rateLimitStore.set(key, attempts);
}

function getClientIP(request) {
  // Check various headers for the real IP
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const remoteAddr = request.headers.get('x-forwarded-host');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  
  if (cfConnectingIP) {
    return cfConnectingIP;
  }
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  // For local development, return localhost
  return '127.0.0.1';
}

async function verifyRecaptcha(token) {
  if (!token) {
    return false;
  }
  
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: token
      })
    });
    
    const data = await response.json();
    return data.success && data.score > 0.5; // Require score > 0.5 for reCAPTCHA v3
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

export async function POST(request) {
  try {
    const clientIP = getClientIP(request);
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    
    // Check rate limiting
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Too many login attempts. Please try again later.',
          code: 'RATE_LIMITED'
        },
        { status: 429 }
      );
    }
    
    // Parse and validate request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { success: false, message: 'Invalid request format' },
        { status: 400 }
      );
    }
    
    const { username, password, recaptchaToken } = body;
    
    // Input validation
    if (!username || !password) {
      incrementRateLimit(clientIP);
      return NextResponse.json(
        { success: false, message: 'Username and password are required' },
        { status: 400 }
      );
    }
    
    // Validate input format
    if (typeof username !== 'string' || typeof password !== 'string') {
      incrementRateLimit(clientIP);
      return NextResponse.json(
        { success: false, message: 'Invalid input format' },
        { status: 400 }
      );
    }
    
    // Sanitize username
    const sanitizedUsername = validator.escape(username.trim());
    if (sanitizedUsername !== username.trim()) {
      incrementRateLimit(clientIP);
      return NextResponse.json(
        { success: false, message: 'Invalid characters in username' },
        { status: 400 }
      );
    }
    
    // Length validation
    if (username.length > 50 || password.length > 200) {
      incrementRateLimit(clientIP);
      return NextResponse.json(
        { success: false, message: 'Input too long' },
        { status: 400 }
      );
    }
    
    // reCAPTCHA temporarily disabled
    // if (process.env.RECAPTCHA_SECRET_KEY && process.env.RECAPTCHA_SECRET_KEY !== 'your_recaptcha_secret_key_here') {
    //   const recaptchaValid = await verifyRecaptcha(recaptchaToken);
    //   if (!recaptchaValid) {
    //     incrementRateLimit(clientIP);
    //     return NextResponse.json(
    //       { success: false, message: 'reCAPTCHA verification failed' },
    //       { status: 400 }
    //     );
    //   }
    // }
    
    // Attempt authentication
    const authResult = await authenticateUser(username, password, clientIP, userAgent);
    
    if (authResult.success) {
      console.log('🍪 Setting session cookie:', authResult.sessionToken);
      
      // Create secure cookie
      const response = NextResponse.json({
        success: true,
        user: authResult.user,
        message: 'Login successful'
      });
      
      // Set HTTP-only secure cookie with minimal restrictions for testing
      response.cookies.set('admin-session', authResult.sessionToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 2700, // 45 minutes
        path: '/'
      });
      
      console.log('🍪 Cookie set with token:', authResult.sessionToken.substring(0, 20) + '...');
      return response;
    } else {
      incrementRateLimit(clientIP);
      return NextResponse.json(
        { success: false, message: 'Authentication failed' },
        { status: 401 }
      );
    }
    
  } catch (error) {
    console.error('Login API error:', error);
    
    incrementRateLimit(getClientIP(request));
    
    // Don't expose internal errors
    if (error.message.includes('Invalid credentials') || 
        error.message.includes('Account') || 
        error.message.includes('attempts')) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 401 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'Authentication service temporarily unavailable' },
      { status: 503 }
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