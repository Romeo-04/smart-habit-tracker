import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true, // Enable debug to see what's failing
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      checks: ["none"], // Disable PKCE and state checks - fixes Vercel serverless issues
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  useSecureCookies: process.env.NODE_ENV === "production",
  callbacks: {
    async signIn({ user }) {
      try {
        if (!user.email) {
          console.error("No email provided for user");
          return false;
        }
        
        // Create or update user in database
        await prisma.user.upsert({
          where: { email: user.email },
          update: {
            name: user.name,
          },
          create: {
            email: user.email,
            name: user.name,
          },
        });
        
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
    async session({ session, token }) {
      if (session.user && token.email) {
        // Get user from database
        const dbUser = await prisma.user.findUnique({
          where: { email: token.email },
        });
        
        if (dbUser) {
          session.user.id = dbUser.id;
        }
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  trustHost: true,
  // Let NextAuth handle cookies automatically - custom config was preventing cookie setting
});
