import { PrismaClient } from "@prisma/client";
import { toggleLog } from "../actions/toggleLog";
import { todayInManila } from "@/lib/day";
import { computeDailyStreak, computeWeeklyStreak } from "@/lib/streak";
import { CreateHabitForm } from "../_components/CreateHabitForm";
import { DeleteHabitButton } from "../_components/DeleteHabitButton";
import { MotivationQuote } from "../_components/MotivationQuote";
import { ProgressBar } from "../_components/ProgressBar";
import { QuickAddButton } from "../_components/QuickAddButton";
import { ThemeToggle } from "../_components/ThemeToggle";
import { HabitToggleWrapper } from "../_components/HabitToggleWrapper";
import { signOut, auth } from "@/auth";
import Link from "next/link";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard - Smart Habit Tracker",
  description: "Track your daily habits and build lasting streaks with intelligent insights",
};

// Force dynamic rendering - don't cache this page
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const prisma = new PrismaClient();

export default async function Dashboard() {
  const session = await auth();
  
  if (!session?.user?.email) {
    redirect("/auth/signin");
  }

  // Get user from database
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    redirect("/auth/signin");
  }

  // Get only this user's habits
  const habits = await prisma.habit.findMany({
    where: { userId: user.id },
    include: { logs: true },
    orderBy: { createdAt: "asc" },
  });

  const today = todayInManila();

  // Calculate progress
  const completedToday = habits.filter(habit => 
    habit.logs.some(log => log.dayLocal === today)
  ).length;

  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <header className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                Smart Habit Tracker
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Welcome, {session.user.name || session.user.email}
              </p>
            </div>
            <div className="flex gap-2">
              <ThemeToggle />
              <Link 
                href="/insights"
                className="px-4 py-2 bg-blue-800 dark:bg-blue-700 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors font-semibold"
              >
                Insights
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="px-4 py-2 min-w-[8rem] bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold"
                >
                  Sign Out
                </button>
              </form>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Today: {today} • Manila Time
          </p>

          {/* Motivation Quote */}
          <MotivationQuote />

          {/* Progress Bar */}
          <ProgressBar completed={completedToday} total={habits.length} />
        </header>

        <div className="space-y-3">
          {habits.map((habit) => {
            const isDoneToday = habit.logs.some(
              (log) => log.dayLocal === today
            );
            
            // Calculate streak based on cadence
            const dayLogs = habit.logs.map((log) => log.dayLocal);
            const currentStreak = habit.cadence === 'daily'
              ? computeDailyStreak(dayLogs, today)
              : computeWeeklyStreak(dayLogs, habit.targetPerWeek, today);

            return (
              <HabitToggleWrapper 
                key={habit.id}
                habitId={habit.id}
                isDone={isDoneToday}
                habitTitle={habit.title}
                cadence={habit.cadence}
                targetPerWeek={habit.targetPerWeek}
                currentStreak={currentStreak}
              >
                <div className="relative group">
                  <form action={toggleLog.bind(null, habit.id)}>
                    <button
                      type="submit"
                      className={`w-full p-5 rounded-xl border-2 transition-all duration-200 shadow-md hover:shadow-lg ${
                        isDoneToday 
                          ? "bg-green-50 dark:bg-green-900/20 border-green-400 hover:bg-green-100 dark:hover:bg-green-900/30" 
                          : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                      }`}
                    >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">
                          {isDoneToday ? "✅" : "⬜"}
                        </span>
                        <div className="text-left">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {habit.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {habit.cadence === 'daily' 
                              ? 'Daily habit' 
                              : `${habit.targetPerWeek}x per week`
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
                
                {/* Delete button */}
                <DeleteHabitButton habitId={habit.id} habitTitle={habit.title} />
              </div>
              </HabitToggleWrapper>
            );
          })}

          {habits.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border-2 border-dashed border-gray-300">
              <p className="text-gray-500 text-lg mb-2">No habits yet!</p>
              <p className="text-gray-400 text-sm">Create your first habit below</p>
            </div>
          )}
        </div>

        {/* Create Habit Form */}
        <div className="mt-8">
          <CreateHabitForm />
        </div>

        {/* Quick Add Button */}
        <QuickAddButton />
      </div>
    </main>
  );
}
