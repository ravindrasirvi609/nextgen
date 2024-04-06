import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  // Grant access to `/books` without login
  if (pathname === "/books" || pathname === "/membership") {
    return NextResponse.next(); // Allow access
  }

  // Enforce login for other book routes (including `/books/:id`)
  const isPublicPath =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/verifyemail";
  const token = request.cookies.get("token")?.value || "";

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next(); // Allow access for public or authenticated routes
}

export const config = {
  matcher: [
    "/books",
    "/membership/:path*",
    "/createBlog",
    "/login",
    "/signup",
    "/verifyemail",
    "/books/:path*",
  ],
};
