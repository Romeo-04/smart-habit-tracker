import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "TrackHab",
  description: "Track your daily and weekly habits with intelligent streak tracking. Stay motivated with real-time insights.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="px-8 md:px-16 lg:px-16 py-6 flex justify-between items-center absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="TrackHab Logo" width={48} height={48} className="pixelated" />
          <h1 className="text-3xl font-bold tracking-wider inter" style={{ fontFamily: 'var(--font-sans)', color: '#000000' }}>
            TrackHab
          </h1>
        </div>
        <div className="flex space-x-4 items-center">
          <Button variant="ghost" asChild>
            <Link href="#features" className="text-lg font-bold tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: '#000000' }}>
              Features
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#about" className="text-lg font-bold tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: '#000000' }}>
              How It Works
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#insights" className="text-lg font-bold tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: '#000000' }}>
              Insights
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/auth/signin" className="text-lg font-bold tracking-wider" style={{ fontFamily: 'var(--font-sans)', color: '#000000' }}>
              Get Started
            </Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section - Quote with Mountain Background */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-linear-to-b white/70
        "></div>
        <div className="relative z-10 text-center px-8 max-w-screen">
          <div className="text-3xl md:text-3xl lg:text-4xl font-bold leading-relaxed mt-15 mb-3 drop-shadow-lg" style={{ fontFamily: 'var(--font-sans)', color: '#ffffff', }}>
            &ldquo;
            We are what we repeatedly do. <br />
            Excellence, then, is not an act, but a habit.&rdquo;
          </div>
          <div className="text-xl md:text-2xl font-bold mt-8" style={{ fontFamily: 'var(--font-sans)', color: '#000000' }}>
            - Aristotle
          </div>
        </div>
      </section>

      {/* Features Section - 3 Cards */}
      <section id="features" className="relative py-24 bg-linear-to-b from-blue-400 to-blue-600" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.05) 2px, rgba(0,0,0,.05) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.05) 2px, rgba(0,0,0,.05) 4px)' }}>
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Goals Card */}
            <Card className="border-8 border-gray-900 hover:translate-y-[-8px] transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Image src="/images/goals-icon.png" alt="Goals" width={128} height={128} className="pixelated" />
                </div>
                <CardTitle className="text-2xl font-bold text-center" style={{ fontFamily: '"Press Start 2P", monospace', color: '#1a1a1a' }}>
                  GOALS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-800 leading-loose text-sm" style={{ fontFamily: '"Press Start 2P", monospace' }}>
                  Set daily habits or flexible weekly targets
                </p>
              </CardContent>
            </Card>

            {/* Streaks Card */}
            <Card className="border-8 border-gray-900 hover:translate-y-[-8px] transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Image src="/images/streaks-icon.png" alt="Streaks" width={128} height={128} className="pixelated" />
                </div>
                <CardTitle className="text-2xl font-bold text-center" style={{ fontFamily: '"Press Start 2P", monospace', color: '#1a1a1a' }}>
                  STREAKS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-800 leading-loose text-sm" style={{ fontFamily: '"Press Start 2P", monospace' }}>
                  Watch your streaks grow day by day
                </p>
              </CardContent>
            </Card>

            {/* Insights Card */}
            <Card className="border-8 border-gray-900 hover:translate-y-[-8px] transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Image src="/images/insights-icon.png" alt="Insights" width={128} height={128} className="pixelated" />
                </div>
                <CardTitle className="text-2xl font-bold text-center" style={{ fontFamily: '"Press Start 2P", monospace', color: '#1a1a1a' }}>
                  INSIGHTS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-800 leading-loose text-sm" style={{ fontFamily: '"Press Start 2P", monospace' }}>
                  Track your progress with beautiful charts
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Are You Ready */}
      <section 
        className="relative py-40 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/cta-bg.png)' }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-blue-50/80 to-blue-100/80"></div>
        <div className="relative z-10 text-center px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12" style={{ fontFamily: '"Press Start 2P", monospace', color: '#00008B', textShadow: '4px 4px 0px rgba(255,255,255,0.8)' }}>
            Are you ready?
          </h2>
          <p className="text-xl md:text-2xl mb-16 font-bold" style={{ fontFamily: '"Press Start 2P", monospace', color: '#1a1a1a', textShadow: '2px 2px 0px rgba(255,255,255,0.8)' }}>
            Start building better habits today
          </p>
          <Button 
            asChild 
            size="lg" 
            className="px-12 py-6 bg-blue-400 hover:bg-blue-500 text-white text-xl border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all"
            style={{ fontFamily: '"Press Start 2P", monospace' }}
          >
            <Link href="/auth/signin">
              SIGN UP
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
