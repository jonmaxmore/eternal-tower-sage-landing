
import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
    const isLoggedIn = !!req.auth
    const isOnAdmin = req.nextUrl.pathname.startsWith("/admin")
    const isLoginPage = req.nextUrl.pathname === "/admin/login"

    if (isOnAdmin) {
        if (isLoginPage) {
            if (isLoggedIn) return NextResponse.redirect(new URL("/admin", req.nextUrl))
            return null // Allow access to login page
        }

        if (!isLoggedIn) {
            return NextResponse.redirect(new URL("/admin/login", req.nextUrl))
        }
    }

    return null
})

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
