import { PrismaClient } from "@prisma/client";
import { todayInManila } from "@/lib/day";
import { computeDailyStreak, computeWeeklyStreak, computeLongestStreak } from "@/lib/streak";
import Link from "next/link";
import { subDays, format } from "date-fns";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Stats | Smart Habit Tracker",
  description: "View your habit statistics, streaks, and completion rates",
};

const prisma = new PrismaClient();

export default async function InsightsPage() {
  const habits = await prisma.habit.findMany({
    include: { logs: true },
    orderBy: { createdAt: "asc" },
  });

  const today = todayInManila();

  // Calculate stats for each habit
  const habitStats = habits.map(habit => {
    const dayLogs = habit.logs.map(log => log.dayLocal);
    
    const currentStreak = habit.cadence === 'daily'
      ? computeDailyStreak(dayLogs, today)
      : computeWeeklyStreak(dayLogs, habit.targetPerWeek, today);
    
    const longestStreak = computeLongestStreak(dayLogs);
    
    // Calculate completion rate (last 30 days)
    const thirtyDaysAgo = format(subDays(new Date(today), 30), 'yyyy-MM-dd');
    const recentLogs = dayLogs.filter(log => log >= thirtyDaysAgo && log <= today);
    const completionRate = habit.cadence === 'daily'
      ? Math.round((recentLogs.length / 30) * 100)
      : Math.round((recentLogs.length / (habit.targetPerWeek * 4)) * 100);

    return {
      ...habit,
      currentStreak,
      longestStreak,
      completionRate,
      totalLogs: dayLogs.length,
    };
  });

  // Overall stats
  const totalHabits = habits.length;
  const totalLogs = habits.reduce((sum, h) => sum + h.logs.length, 0);
  const avgCompletionRate = habitStats.length > 0
    ? Math.round(habitStats.reduce((sum, h) => sum + h.completionRate, 0) / habitStats.length)
    : 0;

  return (
    <main className="min-h-screen bg-linear-to-br from-purple-50 to-pink-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-4"
          >
            ← Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Insights & Stats 📊
          </h1>
          <p className="text-gray-600">
            Track your progress and celebrate your wins!
          </p>
        </header>

        {/* Overall Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-gray-500 text-sm mb-1">Total Habits</p>
            <p className="text-4xl font-bold text-indigo-600">{totalHabits}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-gray-500 text-sm mb-1">Total Completions</p>
            <p className="text-4xl font-bold text-green-600">{totalLogs}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-gray-500 text-sm mb-1">Avg Completion Rate</p>
            <p className="text-4xl font-bold text-orange-600">{avgCompletionRate}%</p>
          </div>
        </div>

        {/* Habit Details */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Habit Breakdown</h2>
          
          {habitStats.map(habit => (
            <div 
              key={habit.id} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{habit.title}</h3>
                  <p className="text-sm text-gray-500">
                    {habit.cadence === 'daily' ? 'Daily' : `${habit.targetPerWeek}x per week`}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 bg-orange-100 px-3 py-1 rounded-full mb-2">
                    <span className="text-2xl">🔥</span>
                    <span className="font-bold text-orange-600">{habit.currentStreak}</span>
                  </div>
                  <p className="text-xs text-gray-500">Current Streak</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-2xl font-bold text-purple-600">🏆 {habit.longestStreak}</p>
                  <p className="text-xs text-gray-500">Best Streak</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">✅ {habit.totalLogs}</p>
                  <p className="text-xs text-gray-500">Total Days</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">{habit.completionRate}%</p>
                  <p className="text-xs text-gray-500">Last 30 Days</p>
                </div>
              </div>

              {/* Completion Rate Progress Bar */}
              <div>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Completion Rate</span>
                  <span>{habit.completionRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-linear-to-r from-green-400 to-green-600 transition-all duration-500"
                    style={{ width: `${Math.min(habit.completionRate, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          ))}

          {habitStats.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border-2 border-dashed border-gray-300">
              <p className="text-gray-500 text-lg mb-2">No habits yet!</p>
              <Link 
                href="/" 
                className="text-indigo-600 hover:text-indigo-800 underline"
              >
                Go create your first habit →
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
