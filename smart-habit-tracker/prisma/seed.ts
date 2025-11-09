// prisma/seed.ts
import 'dotenv/config';
import { PrismaClient } from '../src/generated/client';
import { Cadence } from '../src/generated/enums';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'demo@example.com' },
    create: { email: 'demo@example.com', name: 'Demo User' },
    update: {},
  });

  // two habits: one daily, one weekly(4)
  const daily = await prisma.habit.upsert({
    where: { id: 'seed-daily' },
    update: {},
    create: {
      id: 'seed-daily',
      userId: user.id,
      title: 'Drink Water',
      cadence: Cadence.daily,
      targetPerWeek: 7,
    },
  });

  const weekly = await prisma.habit.upsert({
    where: { id: 'seed-weekly' },
    update: {},
    create: {
      id: 'seed-weekly',
      userId: user.id,
      title: 'Run 20 mins',
      cadence: Cadence.weekly,
      targetPerWeek: 4,
    },
  });

  console.log('Seeded:', { user: user.email, daily: daily.title, weekly: weekly.title });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
