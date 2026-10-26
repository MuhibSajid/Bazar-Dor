import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";


const protectedRoutes = ["/product", "/profile"];

export function proxy(request: NextRequest) {
    const { pathname, search } = request.nextUrl;

    const isProtected = protectedRoutes.some(
        (route) => pathname === route || pathname.startsWith(`${route}/`)
    );

    if (!isProtected) return NextResponse.next();

  
    const sessionCookie = getSessionCookie(request);

  
    if (!sessionCookie) {
        const signInUrl = new URL("/signin", request.url);
        signInUrl.searchParams.set("callbackUrl", pathname + search);
        return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
}


export const config = {
    matcher: ["/product/:path*", "/profile/:path*"],
};