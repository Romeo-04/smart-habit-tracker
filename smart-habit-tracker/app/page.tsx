import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleFadingArrowUpIcon } from "lucide-react";
import Particles from "@/components/Particles";

export const metadata: Metadata = {
  title: "TrackHab",
  description:
    "Track your daily and weekly habits with intelligent streak tracking. Stay motivated with real-time insights.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="px-8 md:px-16 lg:px-16 py-6 flex justify-between items-center absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="TrackHab Logo"
            width={48}
            height={48}
            className="pixelated"
          />
          <h1
            className="text-3xl font-bold tracking-wider inter"
            style={{ fontFamily: "var(--font-sans)", color: "#000000" }}
          >
            TrackHab
          </h1>
        </div>
        <div className="flex space-x-4 items-center">
          <Button variant="ghost" className="hover:bg-[#dcdde0]" asChild>
            <Link
              href="#features"
              className="text-lg font-bold tracking-wider "
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Features
            </Link>
          </Button>
          <Button variant="ghost" className="hover:bg-[#dcdde0]" asChild>
            <Link
              href="#about"
              className="text-lg font-bold tracking-wider "
              style={{ fontFamily: "var(--font-sans)" }}
            >
              How It Works
            </Link>
          </Button>
          <Button variant="ghost" className="hover:bg-[#dcdde0]" asChild>
            <Link
              href="#insights"
              className="text-lg font-bold tracking-wider "
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Insights
            </Link>
          </Button>
          <Button variant="default" asChild>
            <Link
              href="/auth/signin"
              className="text-lg font-bold tracking-wider"
              style={{ fontFamily: "var(--font-sans)", color: "#ffffff" }}
            >
              Get Started
            </Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center">
        <div
          className="absolute inset-0 bg-linear-to-b white/70
        "
        ></div>
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-[#f7f7f7] pointer-events-none"></div>
        <div className="relative z-10 text-center px-8 max-w-screen">
          <div
            className="text-3xl md:text-3xl lg:text-4xl font-bold leading-relaxed mt-15 mb-3 drop-shadow-lg"
            style={{ fontFamily: "var(--font-serif)", color: "#000000" }}
          >
            &ldquo; We are what we repeatedly do. <br />
            Excellence, then, is not an act, but a habit.&rdquo;
          </div>
          <div
            className="text-xl md:text-2xl font-bold mt-8"
            style={{ fontFamily: "var(--font-serif)", color: "#000000" }}
          >
            - Aristotle
          </div>

          <div className="flex flex-col items-center">
            <div
              className="text-lg mt-20"
              style={{ fontFamily: "var(--font-sans)", color: "#586069" }}
            >
              Build better habits, one day at a time.
            </div>

            <div className="flex items-center justify-center gap-4 mt-4">
              <Button variant="default">
                <Link href="/auth/signin">Start Tracking</Link>
              </Button>
              <Button variant="outline">
                <Link href="#features">How does it work?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - 6 Cards */}
      <section
        id="features"
        className="relative py-16 overflow-hidden bg-[#f7f7f7]"
      >
        <div className="absolute inset-0 z-0 ">
          <Particles
            particleColors={["#f3eded"]}
            particleCount={600}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        <div className="container relative z-10 mx-auto px-8 md:px-16 lg:px-24 ">
          <div className="text-3xl flex font-semibold items-center justify-center text-center mb-10"
          style = {{ fontFamily: "var(--font-sans)"}}>
              Everything you need to build lasting habits
            </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Goals Card */}
            <Card className="hover:shadow-lg hover:translate-y-[-8px] max-h-80 transition duration-500">
              <CardHeader className="py-2">
                <div className="flex mb-4 justify-center">
                  <Image
                    src="/images/trophy.png"
                    alt="Goals"
                    width={36}
                    height={36}
                    className="pixelated mt-10"
                  />
                </div>
                <CardTitle
                  className="text-2xl font-bold text-center mt-3 "
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "#4a4d7d",
                  }}
                >
                  Multi-Cadence Habits
                </CardTitle>
              </CardHeader>
              <CardContent className="py-0">
                <p
                  className="text-center text-gray-800 leading-loose text-xs"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Track both daily and weekly habits with flexible scheduling to
                  match your routine.
                </p>
              </CardContent>
            </Card>

            {/* Streaks Card */}
            <Card className="hover:shadow-lg hover:translate-y-[-8px] max-h-80 transition duration-500">
              <CardHeader className="py-2">
                <div className="flex mb-4 justify-center">
                  <Image
                    src="/images/fire.png"
                    alt="Streaks"
                    width={36}
                    height={36}
                    className="pixelated mt-10"
                  />
                </div>
                <CardTitle
                  className="text-2xl font-bold text-center mt-3"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "#4a4d7d",
                  }}
                >
                  Streak Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="py-0">
                <p
                  className="text-center text-gray-800 leading-loose text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Real-time current and best streak calculations to keep you
                  motivated and consistent.
                </p>
              </CardContent>
            </Card>

            {/* Dashboard Card */}
            <Card className="hover:shadow-lg hover:translate-y-[-8px] max-h-80 transition duration-500">
              <CardHeader className="py-2"> 
                <div className="flex mb-4 justify-center">
                  <Image
                    src="/images/bar-chart.png"
                    alt="Dashboard"
                    width={36}
                    height={36}
                    className="pixelated mt-10"
                  />
                </div>
                <CardTitle
                  className="text-2xl font-bold text-center mt-3"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "#4a4d7d",
                  }}
                >
                  Interactive Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent className="py-0">
                <p
                  className="text-center text-gray-800 leading-loose text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Visualize your progress with interactive charts and insights
                  to stay motivated and informed.
                </p>
              </CardContent>
            </Card>

            {/* Heatmap Card */}
            <Card className="hover:shadow-lg hover:translate-y-[-8px] max-h-80 transition duration-500">
              <CardHeader>
                <div className="flex mb-4 justify-center">
                  <Image
                    src="/images/heatmap.png"
                    alt="Heatmap"
                    width={36}
                    height={36}
                    className="pixelated mt-10"
                  />
                </div>
                <CardTitle
                  className="text-2xl font-bold text-center mt-3"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "#4a4d7d",
                  }}
                >
                  Habit Heatmap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className="text-center text-gray-800 leading-loose text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  GitHub-style activity visualization showing your consistency
                  patterns at a glance.
                </p>
              </CardContent>
            </Card>

            {/* Theme Card */}
            <Card className="hover:shadow-lg hover:translate-y-[-8px] max-h-80 transition duration-500">
              <CardHeader>
                <div className="flex mb-4 justify-center">
                  <Image
                    src="/images/moon.png"
                    alt="Dark / Light Theme"
                    width={36}
                    height={36}
                    className="pixelated mt-10"
                  />
                </div>
                <CardTitle
                  className="text-2xl font-bold text-center mt-3"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "#4a4d7d",
                  }}
                >
                  Dark / Light Theme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className="text-center text-gray-800 leading-loose text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Easy on the eyes — toggle between themes with your preference
                  saved automatically.
                </p>
              </CardContent>
            </Card>

            {/* Motivation Card */}
            <Card className="hover:shadow-lg hover:translate-y-[-8px] max-h-80 transition duration-500">
              <CardHeader>
                <div className="flex mb-4 justify-center">
                  <Image
                    src="/images/creativity.png"
                    alt="Motivation"
                    width={36}
                    height={36}
                    className="pixelated mt-10"
                  />
                </div>
                <CardTitle
                  className="text-2xl font-bold text-center mt-3"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "#4a4d7d",
                  }}
                >
                  Motivational Quotes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className="text-center text-gray-800 leading-loose text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Dynamic quotes and celebratory confetti when you hit
                  milestones to keep the energy high.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Are You Ready */}
      <section
        className="relative py-40 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/cta-bg.png)" }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-blue-50/80 to-blue-100/80"></div>
        <div className="relative z-10 text-center px-8">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12"
            style={{
              fontFamily: '"Press Start 2P", monospace',
              color: "#00008B",
              textShadow: "4px 4px 0px rgba(255,255,255,0.8)",
            }}
          >
            Are you ready?
          </h2>
          <p
            className="text-xl md:text-2xl mb-16 font-bold"
            style={{
              fontFamily: '"Press Start 2P", monospace',
              color: "#1a1a1a",
              textShadow: "2px 2px 0px rgba(255,255,255,0.8)",
            }}
          >
            Start building better habits today
          </p>
          <Button
            asChild
            size="lg"
            className="px-12 py-6 bg-blue-400 hover:bg-blue-500 text-white text-xl border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all"
            style={{ fontFamily: '"Press Start 2P", monospace' }}
          >
            <Link href="/auth/signin">SIGN UP</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
