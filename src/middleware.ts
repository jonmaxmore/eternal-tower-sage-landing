
import { auth } from "@/auth"
import { NextResponse } from "next/server"

const ratelimit = new Map<string, { count: number; lastReset: number }>();

export default auth((req) => {
    const isLoggedIn = !!req.auth
    const isOnAdmin = req.nextUrl.pathname.startsWith("/admin")
    const isLoginPage = req.nextUrl.pathname === "/admin/login"

    // Rate Limiting (Simple In-Memory)
    // Note: In a serverless/edge environment, this Map is not shared across all instances.
    // For production, use Redis (e.g., upstash/ratelimit).
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute

    if (req.method === "POST" && (req.nextUrl.pathname.startsWith("/api/register") || req.nextUrl.pathname.startsWith("/api/auth"))) {
        const limit = req.nextUrl.pathname.startsWith("/api/auth") ? 10 : 5;

        let record = ratelimit.get(ip);
        if (!record || now - record.lastReset > windowMs) {
            record = { count: 0, lastReset: now };
        }

        if (record.count >= limit) {
            return new NextResponse("Too Many Requests", { status: 429 });
        }

        record.count++;
        ratelimit.set(ip, record);
    }

    // Admin Auth Logic
    if (isOnAdmin) {
        if (isLoginPage) {
            if (isLoggedIn) return NextResponse.redirect(new URL("/admin", req.nextUrl))
            // Allow access to login page
        } else if (!isLoggedIn) {
            return NextResponse.redirect(new URL("/admin/login", req.nextUrl))
        }
    }

    // Security Headers
    const response = NextResponse.next();

    // HSTS
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
    // Anti-Clickjacking
    response.headers.set('X-Frame-Options', 'DENY');
    // Content Type Options
    response.headers.set('X-Content-Type-Options', 'nosniff');
    // Referrer Policy
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    // XSS Protection
    response.headers.set('X-XSS-Protection', '1; mode=block');

    return response;
})

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
