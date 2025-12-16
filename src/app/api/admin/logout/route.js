import { NextResponse } from 'next/server';
import { logoutUser } from '../../../../../lib/auth-simple.js';

export async function POST(request) {
  try {
    // Get session token from cookie
    const sessionToken = request.cookies.get('admin-session')?.value;
    
    if (sessionToken) {
      // Invalidate session in database
      await logoutUser(sessionToken);
    }
    
    // Create response
    const response = NextResponse.json({
      success: true,
      message: 'Logged out successfully'
    });
    
    // Clear cookie
    response.cookies.set('admin-session', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/admin'
    });
    
    return response;
    
  } catch (error) {
    console.error('Logout API error:', error);
    
    // Still clear cookie even if database operation fails
    const response = NextResponse.json(
      { success: false, message: 'Logout error occurred' },
      { status: 500 }
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
}

// Handle other methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}