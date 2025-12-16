import { NextResponse } from 'next/server';
import { validateSession } from './lib/auth-simple.js';

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Security headers for all requests
  const response = NextResponse.next();
  
  // Set security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https://www.google.com",
    "frame-src 'self' https://www.google.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', csp);
  
  // Check if this is an admin route
  if (pathname.startsWith('/admin')) {
    // Allow login page and API routes to pass through - middleware shouldn't interfere with API routes
    if (pathname === '/admin' || pathname.startsWith('/api/admin/')) {
      return response;
    }
    
    // For all other admin routes, verify authentication
    try {
      const sessionToken = request.cookies.get('admin-session')?.value;
      
      if (!sessionToken) {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
      
      // Validate session
      const sessionData = await validateSession(sessionToken);
      
      if (!sessionData) {
        // Clear invalid cookie and redirect
        const redirectResponse = NextResponse.redirect(new URL('/admin', request.url));
        redirectResponse.cookies.set('admin-session', '', {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 0,
          path: '/admin'
        });
        return redirectResponse;
      }
      
      // Add user info to request headers for use in components
      response.headers.set('X-Admin-User-Id', sessionData.userId.toString());
      response.headers.set('X-Admin-Username', sessionData.username);
      
    } catch (error) {
      console.error('Middleware session validation error:', error);
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};