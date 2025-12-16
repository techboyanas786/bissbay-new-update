import { NextResponse } from 'next/server';
import { validateSession } from '../../../../../lib/auth-simple.js';

export async function GET(request) {
  console.log('🧪 Test session API route accessed');
  console.log('🍪 All cookies received:', request.cookies);
  
  try {
    const sessionToken = request.cookies.get('admin-session')?.value;
    console.log('🍪 Session token:', sessionToken ? `Present: ${sessionToken.substring(0, 20)}...` : 'Missing');
    
    if (!sessionToken) {
      return NextResponse.json({
        success: false,
        message: 'No session token'
      }, { status: 401 });
    }

    const sessionData = await validateSession(sessionToken);
    console.log('✅ Session validation result:', sessionData);
    
    return NextResponse.json({
      success: true,
      sessionData,
      message: 'Session is valid'
    });

  } catch (error) {
    console.error('❌ Test session error:', error);
    return NextResponse.json({
      success: false,
      message: error.message
    }, { status: 500 });
  }
}