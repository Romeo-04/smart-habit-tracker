import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrackHab",
  description: "Track your daily and weekly habits with intelligent streak tracking. Stay motivated with real-time insights.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Smart Habit Tracker</h1>
          <Link
            href="/auth/signin"
            className="px-6 py-2 text-purple-600 hover:text-purple-700 font-medium"
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Text */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Build Better Habits,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              One Day at a Time
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Track your daily and weekly habits with intelligent streak tracking. 
            Stay motivated with real-time insights and never break the chain.
          </p>

          {/* CTA Button */}
          <Link
            href="/auth/signin"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Get Started for Free
          </Link>
        </div>

        {/* Features */}
        <div className="mt-32 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Daily & Weekly Goals</h3>
            <p className="text-gray-600">
              Set daily habits or flexible weekly targets. Choose what works best for you.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Streak Tracking</h3>
            <p className="text-gray-600">
              Watch your streaks grow! See your current streak, longest streak, and total completions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Insights & Stats</h3>
            <p className="text-gray-600">
              Get detailed analytics on your progress with beautiful visualizations and completion rates.
            </p>
          </div>
        </div>

        {/* Social Proof / Benefits */}
        <div className="mt-32 max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Why Smart Habit Tracker?
          </h3>
          <div className="space-y-6 text-left">
            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Simple & Intuitive</h4>
                <p className="text-gray-600">Clean interface that helps you focus on what matters - building habits.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Always Accessible</h4>
                <p className="text-gray-600">Sign in with Google and access your habits from any device, anywhere.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Privacy First</h4>
                <p className="text-gray-600">Your data is private and secure. Only you can see your habits and progress.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-32 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-600 mb-8">
            Join and start building better habits today.
          </p>
          <Link
            href="/auth/signin"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Get Started for Free
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 mt-20 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p>© 2025 TrackHab. Built by Jhezra Tolentino</p>
        </div>
      </footer>
    </div>
  );
}
