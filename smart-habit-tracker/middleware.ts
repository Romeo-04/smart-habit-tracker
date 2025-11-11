import { NextResponse } from "next/server";

// Simple middleware - auth checks are done in individual pages
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
