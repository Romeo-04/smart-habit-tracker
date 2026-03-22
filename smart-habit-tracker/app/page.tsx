import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleFadingArrowUpIcon } from "lucide-react";
import Particles from "@/components/Particles";
import SplitText from "@/components/SplitText";
import LightRays from "@/components/LightRays";

export const metadata: Metadata = {
  title: "TrackHab",
  description:
    "Track your daily and weekly habits with intelligent streak tracking. Stay motivated with real-time insights.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Light Rays - landing page only */}
      <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
        <LightRays
          raysOrigin="top-left"
          raysColor="#ffffff"
          raysSpeed={1.0}
          lightSpread={1.0}
          rayLength={1.7}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      {/* Navigation */}
      <nav className="px-8 md:px-16 lg:px-16 py-6 flex justify-between items-center absolute top-0 left-0 right-0 z-20">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="TrackHab Logo"
            width={48}
            height={48}
            className="pixelated"
          />
          <h1
            className="text-3xl font-bold tracking-wider"
            style={{ fontFamily: "var(--font-sans)", color: "#ffffff" }}
          >
            TrackHab
          </h1>
        </div>
        <div className="flex space-x-4 items-center">
          <Button variant="ghost" className="hover:bg-white/10 text-white" asChild>
            <Link
              href="#features"
              className="text-lg font-bold tracking-wider"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Features
            </Link>
          </Button>
          <Button variant="ghost" className="hover:bg-white/10 text-white" asChild>
            <Link
              href="#works"
              className="text-lg font-bold tracking-wider"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              How It Works
            </Link>
          </Button>
          <Button variant="ghost" className="hover:bg-white/10 text-white" asChild>
            <Link
              href="#insights"
              className="text-lg font-bold tracking-wider"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Insights
            </Link>
          </Button>
          <Button
            className="bg-white text-[#1e293b] font-bold hover:bg-white/90 transition-all duration-300 hover:translate-y-[-2px]"
            asChild
          >
            <Link
              href="/auth/signin"
              className="text-lg font-bold tracking-wider"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Get Started
            </Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/mountain-bg.png"
          alt="Mountain pixel art background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 via-[#1e293b]/50 to-[#0f172a]/80"></div>
        {/* Bottom fade into features section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#f7f7f7] pointer-events-none z-10"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-8 max-w-4xl">
          {/* Floating Value Prop Badge */}
          <div className="animate-float mb-8">
            <span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-semibold tracking-wide"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              🔥 Track Daily & Weekly Habits · Streaks · Heatmaps
            </span>
          </div>

          {/* Main Headline */}
          <div className="hero-text-shadow mb-2">
            <SplitText
              text="Build Habits That Stick."
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
              delay={40}
              duration={1.0}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-50px"
              textAlign="center"
            />
          </div>

          {/* Quote Accent */}
          <div
            className="hero-text-shadow mt-6"
          >
            <SplitText
              text={`"We are what we repeatedly do. Excellence, then, is not an act, but a habit."`}
              className="text-lg md:text-xl text-white/70 font-normal italic"
              delay={25}
              duration={1.25}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-50px"
              textAlign="center"
            />
          </div>
          <p
            className="text-base text-white/50 mt-3 font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            — Aristotle
          </p>

          {/* Sub-headline */}
          <p
            className="text-lg md:text-xl mt-10 text-white/80 leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Track your progress, build streaks, and stay motivated with real-time insights — one day at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <Button
              variant="default"
              className="w-48 h-13 text-lg font-bold bg-indigo-500 hover:bg-indigo-400 text-white border-0 rounded-xl animate-pulse-glow hover:translate-y-[-3px] transition-transform duration-300"
            >
              <Link href="/auth/signin" className="text-lg" style={{ fontFamily: "var(--font-sans)" }}>
                Start Tracking
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-48 h-13 text-lg font-bold rounded-xl border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/15 hover:border-white/50 hover:translate-y-[-3px] transition-all duration-300"
            >
              <Link href="#works" className="text-lg" style={{ fontFamily: "var(--font-sans)" }}>
                How It Works
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section - 6 Cards */}
      <section
        id="features"
        className="relative py-24 overflow-hidden bg-[#0f172a]"
      >
        {/* Top gradient fade from hero */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#f7f7f7] to-transparent pointer-events-none z-10"></div>

        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={["#334155"]}
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

        <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-16 pt-8">
          <div
            className="text-3xl flex font-semibold items-center justify-center text-center mb-3 text-white"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Everything you need to build lasting habits
          </div>

          <div
            className="text-sm flex font-semibold items-center justify-center text-center mb-12 text-slate-400"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Keep the consistency while enjoying the journey
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Goals Card */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-indigo-400/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:translate-y-[-8px] max-h-80 transition-all duration-500">
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
                  className="text-2xl font-bold text-center mt-3 text-indigo-300"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Multi-Cadence Habits
                </CardTitle>
              </CardHeader>
              <CardContent className="py-0">
                <p
                  className="text-center text-slate-300 leading-loose text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Track both daily and weekly habits with flexible scheduling to
                  match your routine.
                </p>
              </CardContent>
            </Card>

            {/* Streaks Card */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-indigo-400/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:translate-y-[-8px] max-h-80 transition-all duration-500">
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
                  className="text-2xl font-bold text-center mt-3 text-indigo-300"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Streak Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="py-0 mb-5">
                <p
                  className="text-center text-slate-300 leading-loose text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Real-time current and best streak calculations to keep you
                  motivated and consistent.
                </p>
              </CardContent>
            </Card>

            {/* Dashboard Card */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-indigo-400/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:translate-y-[-8px] max-h-80 transition-all duration-500">
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
                  className="text-2xl font-bold text-center mt-3 text-indigo-300"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Interactive Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent className="py-0">
                <p
                  className="text-center text-slate-300 leading-loose text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Visualize your progress with interactive charts and insights
                  to stay motivated and informed.
                </p>
              </CardContent>
            </Card>

            {/* Heatmap Card */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-indigo-400/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:translate-y-[-8px] max-h-80 transition-all duration-500">
              <CardHeader className="py-2">
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
                  className="text-2xl font-bold text-center mt-3 text-indigo-300"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Habit Heatmap
                </CardTitle>
              </CardHeader>
              <CardContent className="py-0 mb-5">
                <p
                  className="text-center text-slate-300 leading-loose text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  GitHub-style activity visualization showing your consistency
                  patterns at a glance.
                </p>
              </CardContent>
            </Card>

            {/* Theme Card */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-indigo-400/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:translate-y-[-8px] max-h-80 transition-all duration-500">
              <CardHeader className="py-2">
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
                  className="text-2xl font-bold text-center mt-3 text-indigo-300"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Dark / Light Theme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className="text-center text-slate-300 leading-loose text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Easy on the eyes — toggle between themes with your preference
                  saved automatically.
                </p>
              </CardContent>
            </Card>

            {/* Motivation Card */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-indigo-400/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:translate-y-[-8px] max-h-80 transition-all duration-500">
              <CardHeader className="py-2">
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
                  className="text-2xl font-bold text-center mt-3 text-indigo-300"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Motivational Quotes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className="text-center text-slate-300 leading-loose text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Dynamic quotes and confetti when you hit milestones to keep
                  the energy high.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="works" className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/cta-bg.png"
          alt="Forest pixel art background"
          fill
          className="object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0f172a]/85"></div>
        {/* Top gradient from features */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0f172a] to-transparent pointer-events-none z-10"></div>

        <div className="relative z-10 text-center px-8">
          <h2
            className="text-4xl font-bold mb-5 text-white"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            How it works
          </h2>
          <h3
            className="m-5 mb-14 text-slate-400"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Three simple steps to transform your daily routine.
          </h3>

          <div className="flex flex-row gap-8 items-stretch justify-center px-8 md:px-20">
            {/* Step 1 */}
            <Card className="border-white/10 bg-white/5 backdrop-blur-md shadow-none max-w-[340px] flex-1 hover:bg-white/10 hover:border-indigo-400/30 transition-all duration-500">
              <CardHeader className="py-2">
                <div className="flex mb-4 justify-center">
                  <div className="relative mt-10 w-20 h-20 items-center justify-center flex rounded-xl border border-white/20 bg-white/5">
                    <span className="absolute -top-2 -right-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white text-xs font-bold">
                      1
                    </span>
                    <Image
                      src="/images/pencil.svg"
                      alt="Set habits"
                      width={36}
                      height={36}
                      className="pixelated invert"
                    />
                  </div>
                </div>
                <CardTitle
                  className="text-xl font-bold text-center mt-3 text-indigo-300"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Set your Habits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className="text-center text-slate-300 leading-loose text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Define daily or weekly habits with custom categories and goals.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-white/10 bg-white/5 backdrop-blur-md shadow-none max-w-[340px] flex-1 hover:bg-white/10 hover:border-indigo-400/30 transition-all duration-500">
              <CardHeader className="py-2">
                <div className="flex mb-4 justify-center">
                  <div className="relative mt-10 w-20 h-20 items-center justify-center flex rounded-xl border border-white/20 bg-white/5">
                    <span
                      className="absolute -top-2 -right-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white text-xs font-bold"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      2
                    </span>
                    <Image
                      src="/images/progress.svg"
                      alt="Track progress"
                      width={36}
                      height={36}
                      className="pixelated invert"
                    />
                  </div>
                </div>
                <CardTitle
                  className="text-xl font-bold text-center mt-3 text-indigo-300"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Track your Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className="text-center text-slate-300 leading-loose text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  One-click completions with instant visual feedback and streaks.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-white/10 bg-white/5 backdrop-blur-md shadow-none max-w-[340px] flex-1 hover:bg-white/10 hover:border-indigo-400/30 transition-all duration-500">
              <CardHeader className="py-2">
                <div className="flex mb-4 justify-center">
                  <div className="relative mt-10 w-20 h-20 items-center justify-center flex rounded-xl border border-white/20 bg-white/5">
                    <span
                      className="absolute -top-2 -right-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white text-xs font-bold"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      3
                    </span>
                    <Image
                      src="/images/stocks.svg"
                      alt="See transformation"
                      width={36}
                      height={36}
                      className="pixelated invert"
                    />
                  </div>
                </div>
                <CardTitle
                  className="text-xl font-bold text-center mt-3 text-indigo-300"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  See Your Transformation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className="text-center text-slate-300 leading-loose text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Analyze streaks, heatmaps, and stats to celebrate growth.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16">
            <Button
              className="w-56 h-14 text-lg font-bold bg-indigo-500 hover:bg-indigo-400 text-white border-0 rounded-xl animate-pulse-glow hover:translate-y-[-3px] transition-transform duration-300"
            >
              <Link href="/auth/signin" className="text-lg" style={{ fontFamily: "var(--font-sans)" }}>
                Start Your Journey
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
