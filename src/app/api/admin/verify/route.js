import { NextResponse } from 'next/server';
import { validateSession } from '../../../../../lib/auth-simple.js';

export async function GET(request) {
  try {
    // Get session token from cookie
    const sessionToken = request.cookies.get('admin-session')?.value;
    
    if (!sessionToken) {
      return NextResponse.json(
        { success: false, message: 'No session found' },
        { status: 401 }
      );
    }
    
    // Validate session
    const sessionData = await validateSession(sessionToken);
    
    if (!sessionData) {
      // Clear invalid cookie
      const response = NextResponse.json(
        { success: false, message: 'Invalid or expired session' },
        { status: 401 }
      );
      
      response.cookies.set('admin-session', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 0,
        path: '/admin'
      });
      
      return response;
    }
    
    // Return session info
    return NextResponse.json({
      success: true,
      user: {
        id: sessionData.userId,
        username: sessionData.username
      }
    });
    
  } catch (error) {
    console.error('Session verification error:', error);
    
    return NextResponse.json(
      { success: false, message: 'Session verification failed' },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function POST() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}