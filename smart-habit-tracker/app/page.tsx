import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleFadingArrowUpIcon } from "lucide-react";
import Particles from "@/components/Particles";
import SplitText from "@/components/SplitText";

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
            style={{ fontFamily: "var(--font-sans)", color: "#252429" }}
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



<SplitText
  text="We are what we repeatedly do."
  className="text-4xl font-semibold text-center"
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>
<br/>
<SplitText
  text="Excellence, then, is not an act, but a habit."
  className="text-4xl font-semibold text-center"
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>
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

            <div className="flex items-center justify-center gap-6 mt-6">
              <Button
                variant="default"
                className="w-46 h-12 hover:translate-y-[-3px] transition duration-300"
              >
                <Link href="/auth/signin" className="text-lg">
                  Start Tracking
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-46 h-12 hover:translate-y-[-3px] transition duration-300"
              >
                <Link href="#works" className="text-lg">
                  {" "}
                  How does it work?
                </Link>
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

        <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-16 ">
          <div
            className="text-3xl flex font-semibold items-center justify-center text-center mb-3"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Everything you need to build lasting habits
          </div>

          <div
            className="text-sm flex font-semibold items-center justify-center text-center mb-10"
            style={{ fontFamily: "var(--font-serif)", color: "#6f7e96" }}
          >
            Keep the consistency while enjoying the journey
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
                  className="text-center text-gray-800 leading-loose text-sm"
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
              <CardContent className="py-0 mb-5">
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
              <CardContent className="py-0 ">
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
                  className="text-2xl font-bold text-center mt-3"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "#4a4d7d",
                  }}
                >
                  Habit Heatmap
                </CardTitle>
              </CardHeader>
              <CardContent className="py-0 mb-5">
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
                  Dynamic quotes and confetti when you hit milestones to keep
                  the energy high.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="h-24 bg-gradient-to-b from-[#f7f7f7] to-white"></div>
      {/* CTA Section - Are You Ready */}
      <section id="works" className="bg-white relative py-40">
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 text-center px-8">
          <h2
            className="text-4xl md:text-4xl lg:text-4xl font-bold mb-5"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            How it works
          </h2>
          <h3 className = "m-5 mb-10" style={{ fontFamily: "var(--font-serif)", color: "#6f7e96" }}>
            Three simple steps to transform your daily routine.
          </h3>

          <div className="flex flex-row gap-8 items-center px-20">
            <Card className="border-none shadow-none max-w-100 max-h-80">
              <CardHeader className="py-2">
                <div className="flex mb-4 justify-center">
                  <Card className = "relative mt-10 w-20 h-20 items-center justify-center flex ">
                  <span className="absolute -top-2 -right-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#33355c] text-white text-xs font-bold">
                    1
                  </span>
                  <Image
                    src="/images/pencil.svg"
                    alt="Motivation"
                    width={36}
                    height={36}
                    className="pixelated"
                  />
                  </Card>
                </div>
                <CardTitle
                  className="text-xl font-bold text-center mt-3"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "#4a4d7d",
                  }}
                >
                  Set your Habits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className="text-center text-gray-800 leading-loose text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Define daily or weekly habits with custom categories and goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none max-w-100 max-h-80">
              <CardHeader className="py-2">
                <div className="flex mb-4 justify-center">
                  <Card className = "relative mt-10 w-20 h-20 items-center justify-center flex ">
                    <span className="absolute -top-2 -right-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#33355c] text-white text-xs font-bold"
                    style = {{fontFamily: "var(--font-sans)"}}>
                    2
                  </span>
                  <Image
                    src="/images/progress.svg"
                    alt="Motivation"
                    width={36}
                    height={36}
                    className="pixelated"
                  />
                  </Card>
                </div>
                <CardTitle
                  className="text-xl font-bold text-center mt-3"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "#4a4d7d",
                  }}
                >
                  Track your Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className="text-center text-gray-800 leading-loose text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  One-click completions with instant visual feedback and streaks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none max-w-100 max-h-80">
              <CardHeader className="py-2">
                <div className="flex mb-4 justify-center">
                  <Card className = "relative mt-10 w-20 h-20 items-center justify-center flex ">
                    <span className="absolute -top-2 -right-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#33355c] text-white text-xs font-bold"
                    style = {{fontFamily: "var(--font-sans)"}}>
                    3
                  </span>
                  <Image
                    src="/images/stocks.svg"
                    alt="Motivation"
                    width={36}
                    height={36}
                    className="pixelated"
                  />
                  </Card>
                </div>
                <CardTitle
                  className="text-xl font-bold text-center mt-3"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "#4a4d7d",
                  }}
                >
                 See Your Transformation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className="text-center text-gray-800 leading-loose text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Analyze streaks, heatmaps, and stats to celebrate growth.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
