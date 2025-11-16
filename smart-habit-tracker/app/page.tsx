import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrackHab",
  description: "Track your daily and weekly habits with intelligent streak tracking. Stay motivated with real-time insights.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="px-8 md:px-16 lg:px-24 py-6 flex justify-between items-center bg-gradient-to-b from-gray-800/80 to-transparent backdrop-blur-sm absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="TrackHab Logo" width={48} height={48} />
          <h1 className="text-3xl font-bold" style={{ fontFamily: 'monospace', color: '#5C3D2E' }}>
            TrackHab
          </h1>
        </div>
        <div className="flex space-x-8 items-center">
          <Link
            href="#features"
            className="text-lg font-medium text-blue-900 hover:text-blue-700"
          >
            Start
          </Link>
          <Link
            href="/auth/signin"
            className="text-lg font-medium text-blue-900 hover:text-blue-700"
          >
            Sign In
          </Link>
          <Link
            href="#about"
            className="text-lg font-medium text-blue-900 hover:text-blue-700"
          >
            About
          </Link>
        </div>
      </nav>

      {/* Hero Section - Quote with Mountain Background */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/mountain-bg.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-300/30 to-blue-400/50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'monospace', color: '#1a1a1a' }}>
            &ldquo;Every action you take is a vote for the type of person you wish to become.&rdquo;
          </p>
          <p className="text-2xl font-medium" style={{ fontFamily: 'monospace', color: '#8B4513' }}>
            - James Clear
          </p>
        </div>
      </section>

      {/* Features Section - 3 Cards */}
      <section id="features" className="relative py-20 bg-linear-to-b from-blue-300 to-gray-700">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Goals Card */}
            <div className="bg-linear-to-b from-gray-100 to-gray-300 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform">
              <div className="flex justify-center mb-6">
                <Image src="/images/goals-icon.png" alt="Goals" width={128} height={128} className="object-contain" />
              </div>
              <h3 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: 'monospace', color: '#1a1a1a' }}>
                GOALS
              </h3>
              <p className="text-center text-gray-800 leading-relaxed" style={{ fontFamily: 'monospace' }}>
                Set daily habits or flexible weekly targets. Choose what works best for you.
              </p>
            </div>

            {/* Streaks Card */}
            <div className="bg-linear-to-b from-gray-100 to-gray-300 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform ">
              <div className="flex justify-center mb-6">
                <Image src="/images/streaks-icon.png" alt="Streaks" width={128} height={128} className="object-contain" />
              </div>
              <h3 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: 'monospace', color: '#1a1a1a' }}>
                STREAKS
              </h3>
              <p className="text-center text-gray-800 leading-relaxed" style={{ fontFamily: 'monospace' }}>
                Watch your streaks grow! See your current streak, longest streak, and total completions.
              </p>
            </div>

            {/* Insights Card */}
            <div className="bg-linear-to-b from-gray-100 to-gray-300 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform">
              <div className="flex justify-center mb-6">
                <Image src="/images/insights-icon.png" alt="Insights" width={128} height={128} className="object-contain" />
              </div>
              <h3 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: 'monospace', color: '#1a1a1a' }}>
                INSIGHTS
              </h3>
              <p className="text-center text-gray-800 leading-relaxed" style={{ fontFamily: 'monospace' }}>
                Get detailed analytics on your progress with beautiful visualizations and completion rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Are You Ready */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/cta-bg.png)' }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-blue-200/60 to-blue-300/60"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-6xl md:text-7xl font-bold mb-8" style={{ fontFamily: 'monospace', color: '#1a1a2e' }}>
            Are you ready?
          </h2>
          <p className="text-2xl mb-12 font-medium" style={{ fontFamily: 'monospace', color: '#1a1a1a' }}>
            Join and start building better habits today.
          </p>
          <Link
            href="/auth/signin"
            className="inline-block px-16 py-5 bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold rounded-full shadow-2xl transition-all hover:scale-105"
            style={{ fontFamily: 'monospace' }}
          >
            SIGN UP
          </Link>
        </div>
      </section>
    </div>
  );
}
