'use client';

import { useState } from 'react';
import { Confetti } from './Confetti';

interface HabitToggleWrapperProps {
  habitId: string;
  isDone: boolean;
  habitTitle: string;
  cadence: string;
  targetPerWeek: number;
  currentStreak: number;
  children: React.ReactNode;
}

export function HabitToggleWrapper({ 
  habitId, 
  isDone,
  children 
}: HabitToggleWrapperProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    // Show confetti if habit is being completed (not uncompleted)
    if (!isDone) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 100);
    }
  };

  return (
    <>
      <Confetti trigger={showConfetti} />
      <div onClick={handleClick}>
        {children}
      </div>
    </>
  );
}
