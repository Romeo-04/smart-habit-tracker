import { NextResponse } from "next/server";

// Edge runtime middleware - can't use Prisma database adapter here
// Auth checks will be done in pages and server actions
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
