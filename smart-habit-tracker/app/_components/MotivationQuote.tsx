'use client';

import { useEffect, useState } from 'react';

const quotes = [
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Excellence is not a destination; it is a continuous journey that never ends.", author: "Brian Tracy" },
  { text: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Ryun" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
  { text: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma" },
  { text: "Your future is created by what you do today, not tomorrow.", author: "Robert Kiyosaki" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
];

export function MotivationQuote() {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    // Get a consistent quote for the day based on date
    const today = new Date().toDateString();
    const hash = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const quoteIndex = hash % quotes.length;
    setQuote(quotes[quoteIndex]);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-700 dark:to-pink-700 rounded-xl p-6 text-white shadow-lg mb-6">
      <div className="flex items-start gap-3">
        <span className="text-3xl">💭</span>
        <div className="flex-1">
          <p className="text-lg font-medium italic mb-2">"{quote.text}"</p>
          <p className="text-sm opacity-90">— {quote.author}</p>
        </div>
      </div>
    </div>
  );
}
