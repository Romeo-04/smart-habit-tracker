// prisma/seed.ts
import 'dotenv/config';
import { formatInTimeZone } from 'date-fns-tz';
import { addDays } from 'date-fns';
import { PrismaClient, Cadence } from '../src/generated/client';

const prisma = new PrismaClient();
const TZ = 'Asia/Manila';

function ymd(d: Date) {
  return formatInTimeZone(d, TZ, 'yyyy-MM-dd');
}

async function main() {
  // Clean slate (dev-only)
  await prisma.habitLog.deleteMany({});
  await prisma.habit.deleteMany({});
  await prisma.user.deleteMany({});

  const user = await prisma.user.create({
    data: {
      email: 'demo@example.com',
      name: 'Demo User',
    },
  });

  const dailyHabit = await prisma.habit.create({
    data: {
      userId: user.id,
      title: 'Drink Water',
      cadence: Cadence.daily,       // <-- enum, must exist in schema
      targetPerWeek: 7,             // daily semantics
    },
  });

  const weeklyHabit = await prisma.habit.create({
    data: {
      userId: user.id,
      title: 'Run 4x/Week',
      cadence: Cadence.weekly,      // <-- enum, must exist in schema
      targetPerWeek: 4,
    },
  });

  const today = new Date();
  const d0 = ymd(today);
  const d1 = ymd(addDays(today, -1));
  const d2 = ymd(addDays(today, -2));

  // A few logs for display
  await prisma.habitLog.createMany({
    data: [
      { habitId: dailyHabit.id, dayLocal: d0 },
      { habitId: dailyHabit.id, dayLocal: d1 },
      { habitId: dailyHabit.id, dayLocal: d2 },

      { habitId: weeklyHabit.id, dayLocal: d0 },
      { habitId: weeklyHabit.id, dayLocal: d2 },
    ],
  });

  const [habitCount, logCount] = await Promise.all([
    prisma.habit.count({ where: { userId: user.id } }),
    prisma.habitLog.count({ where: { habitId: { in: [dailyHabit.id, weeklyHabit.id] } } }),
  ]);

  console.log(`Seeded user=${user.email} habits=${habitCount} logs=${logCount}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
