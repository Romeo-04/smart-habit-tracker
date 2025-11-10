import { PrismaClient } from "@prisma/client";
import { toggleLog } from "./actions/toggleLog";
import { todayInManila } from "@/lib/day";
import { computeDailyStreak, computeWeeklyStreak } from "@/lib/streak";
import { CreateHabitForm } from "./_components/CreateHabitForm";
import { DeleteHabitButton } from "./_components/DeleteHabitButton";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Habit Tracker",
  description: "Track your daily habits and build streaks with intelligent insights",
};

// Force dynamic rendering - don't cache this page
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const prisma = new PrismaClient();

export default async function Home() {
  const habits = await prisma.habit.findMany({
    include: { logs: true },
    orderBy: { createdAt: "asc" },
  });

  const today = todayInManila();

  return (
    <main className="">
      <div className="max-w-xl mx-auto ">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-bold text-gray-800">
              Smart Habit Tracker
            </h1>
            <Link 
              href="/insights"
              className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              Insights
            </Link>
          </div>
          <p className="text-gray-600">
            Today: {today} • Manila Time
          </p>
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
              <div key={habit.id} className="relative group">
                <form action={toggleLog.bind(null, habit.id)}>
                  <button
                    type="submit"
                    className={`w-full p-5 rounded-xl border-2 transition-all duration-200 shadow-md hover:shadow-lg ${
                      isDoneToday 
                        ? "bg-green-50 border-green-400 hover:bg-green-100" 
                        : "bg-white border-gray-200 hover:border-gray-300"
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
                        <div className="flex items-center gap-2 bg-orange-100 px-3 py-1 rounded-full">
                          <span className="text-2xl">🔥</span>
                          <span className="font-bold text-orange-600">
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
      </div>
    </main>
  );
}
