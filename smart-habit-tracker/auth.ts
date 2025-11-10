import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      checks: ["none"], // Disable all OAuth checks to fix Vercel cookie issues
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
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
  },
  trustHost: true,
  cookies: {
    pkceCodeVerifier: {
      name: "next-auth.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
      },
    },
  },
});
