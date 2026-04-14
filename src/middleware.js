import { NextResponse } from 'next/server';

export function middleware(request) {
  // Vercel provides the 'x-vercel-ip-country' header
  const country = request.headers.get('x-vercel-ip-country');

  // Block access from China (CN)
  if (country === 'CN') {
    return new NextResponse(
      JSON.stringify({ message: 'Access denied from your location.' }),
      { status: 403, headers: { 'content-type': 'application/json' } }
    );
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
