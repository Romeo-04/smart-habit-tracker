import Link from "next/link";
import Image from "next/image";

export default function AuthError({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const error = searchParams.error;

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/signin-bg.png"
        alt="Night sky pixel art"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0f172a]/60"></div>

      {/* Error Card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_60px_rgba(99,102,241,0.1)]">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">⚠️</div>
            <h1
              className="text-3xl font-bold text-white mb-3 hero-text-shadow"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Authentication Error
            </h1>
            <p
              className="text-slate-400 text-sm"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Something went wrong during sign in
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-4 mb-6">
              <p className="text-sm text-red-300" style={{ fontFamily: "var(--font-sans)" }}>
                <strong>Error:</strong> {error}
              </p>
            </div>
          )}

          <div className="space-y-4">
            <p className="text-slate-400 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
              This could be due to:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-400 space-y-2" style={{ fontFamily: "var(--font-sans)" }}>
              <li>Browser cookies are disabled</li>
              <li>Your Google account couldn&apos;t be verified</li>
              <li>A temporary server issue</li>
            </ul>
          </div>

          <div className="mt-8">
            <Link
              href="/auth/signin"
              className="block w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 hover:translate-y-[-2px] animate-pulse-glow"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Try Again
            </Link>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/"
              className="text-sm text-slate-400 hover:text-indigo-300 transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
