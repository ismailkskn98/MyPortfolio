import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { verifyJwtToken } from './lib/auth';

const authPages = ['/login', '/forgot-password'];
const isAuthPages = (pathname: string) => authPages.some(page => page.startsWith(pathname));

export async function middleware(request: NextRequest) {
    const {url, nextUrl, cookies} = request;
    const {value: token} = cookies.get('token') ?? {value: null};
    console.log(token); // null

    const hasVerifiedToken = token && await verifyJwtToken(token);
    const isAuthPageRequested = isAuthPages(nextUrl.pathname);
    
    if(isAuthPageRequested) {
        if(!hasVerifiedToken) {
            const response = NextResponse.next();
            return response;
        }
        const response = NextResponse.redirect(new URL('/admin', url));
        return response;
    }
    if(!hasVerifiedToken) {
        const searchParams = new URLSearchParams(nextUrl.searchParams);
        searchParams.set('next', nextUrl.pathname);
        return NextResponse.redirect(new URL(`/login?${searchParams}`, url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/admin/:path*',
        '/login',
        '/forgot-password'
    ],
}