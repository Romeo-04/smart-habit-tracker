'use client';

import { useState } from 'react';
import { Confetti } from './Confetti';

interface HabitButtonProps {
  habitId: string;
  isDone: boolean;
  habitTitle: string;
  cadence: string;
  targetPerWeek: number;
  currentStreak: number;
  children?: React.ReactNode;
}

export function HabitButton({ 
  habitId, 
  isDone, 
  habitTitle, 
  cadence, 
  targetPerWeek, 
  currentStreak 
}: HabitButtonProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    
    // Show confetti if habit is being completed (not uncompleted)
    if (!isDone) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 100);
    }
  };

  return (
    <>
      <Confetti trigger={showConfetti} />
      <form action={`/dashboard?habitId=${habitId}`} method="POST" onSubmit={handleSubmit}>
        <button
          type="submit"
          className={`w-full p-5 rounded-xl border-2 transition-all duration-200 shadow-md hover:shadow-lg ${
            isDone 
              ? "bg-green-50 dark:bg-green-900/20 border-green-400 hover:bg-green-100 dark:hover:bg-green-900/30" 
              : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">
                {isDone ? "✅" : "⬜"}
              </span>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {habitTitle}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cadence === 'daily' 
                    ? 'Daily habit' 
                    : `${targetPerWeek}x per week`
                  }
                </p>
              </div>
            </div>
            
            {currentStreak > 0 && (
              <div className="flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">
                <span className="text-2xl">🔥</span>
                <span className="font-bold text-orange-600 dark:text-orange-400">
                  {currentStreak}
                </span>
              </div>
            )}
          </div>
        </button>
      </form>
    </>
  );
}
