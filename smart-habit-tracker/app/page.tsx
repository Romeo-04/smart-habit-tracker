import { PrismaClient } from "../src/generated/client";
import { toggleLog } from "./actions/toggleLog";

const prisma = new PrismaClient();

export default async function Home() {
  const habits = await prisma.habit.findMany({
    include: { logs: true },
    orderBy: { createdAt: "asc" },
  });

  return (
    <main className="space-y-4">
      {habits.map(habit => {
        const isDoneToday = habit.logs.some(
          log => log.dayLocal === new Date().toISOString().slice(0, 10)
        );
        return (
          <form key={habit.id} action={toggleLog.bind(null, habit.id)}>
            <button
              type="submit"
              className={`w-full flex justify-between items-center border p-4 rounded-lg ${
                isDoneToday ? "bg-green-200" : "bg-white"
              }`}
            >
              <span>{habit.title}</span>
              <span>{isDoneToday ? "✅" : "⬜"}</span>
            </button>
          </form>
        );
      })}
    </main>
  );
}
