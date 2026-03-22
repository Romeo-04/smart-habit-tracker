import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";

export default async function SignInPage() {
  const session = await auth();
  
  // If already logged in, redirect to dashboard
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/signin-bg.png"
        alt="Night sky pixel art"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0f172a]/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-4">
        {/* Logo + Brand */}
        <Link href="/" className="inline-flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="TrackHab Logo"
            width={44}
            height={44}
            className="pixelated group-hover:scale-110 transition-transform duration-300"
          />
          <span
            className="text-3xl font-bold tracking-wider text-white hero-text-shadow"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            TrackHab
          </span>
        </Link>

        {/* Heading */}
        <div className="text-center space-y-2">
          <h1
            className="text-4xl font-bold text-white hero-text-shadow"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Welcome back
          </h1>
          <p className="text-slate-400 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
            Sign in to continue tracking your habits
          </p>
        </div>

        {/* Google Sign-in Button */}
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/dashboard" });
          }}
        >
          <button
            type="submit"
            className="flex items-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-full hover:bg-white/20 hover:border-indigo-400/40 hover:shadow-[0_0_24px_rgba(99,102,241,0.25)] transition-all duration-300 font-semibold cursor-pointer group backdrop-blur-sm"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign in with Google
          </button>
        </form>

        {/* Back to home */}
        <Link
          href="/"
          className="text-sm text-slate-500 hover:text-indigo-300 transition-colors"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
