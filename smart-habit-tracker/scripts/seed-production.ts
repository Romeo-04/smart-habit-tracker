// Script to seed production database on Vercel
// Run with: npm run seed:prod

import "dotenv/config";
import { PrismaClient, Cadence } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding production database...");

  // Check if data already exists
  const existingUsers = await prisma.user.count();
  if (existingUsers > 0) {
    console.log("⚠️  Production database already has data. Skipping seed.");
    console.log(`Found ${existingUsers} users.`);
    return;
  }

  // Create demo user
  const user = await prisma.user.create({
    data: {
      email: "demo@example.com",
      name: "Demo User",
    },
  });

  console.log(`✅ Created user: ${user.email}`);

  // Create habits with some logs
  const readingHabit = await prisma.habit.create({
    data: {
      userId: user.id,
      title: "Read 30 minutes",
      cadence: Cadence.daily,
      logs: {
        create: [
          { dayLocal: "2025-11-08" },
          { dayLocal: "2025-11-09" },
          { dayLocal: "2025-11-10" },
        ],
      },
    },
  });

  const exerciseHabit = await prisma.habit.create({
    data: {
      userId: user.id,
      title: "Exercise",
      cadence: Cadence.weekly,
      targetPerWeek: 3,
      logs: {
        create: [
          { dayLocal: "2025-11-06" },
          { dayLocal: "2025-11-08" },
        ],
      },
    },
  });

  console.log(`✅ Created habit: ${readingHabit.title} with ${3} logs`);
  console.log(`✅ Created habit: ${exerciseHabit.title} with ${2} logs`);

  const totalHabits = await prisma.habit.count();
  const totalLogs = await prisma.habitLog.count();

  console.log("\n📊 Production database seeded successfully!");
  console.log(`   Users: 1`);
  console.log(`   Habits: ${totalHabits}`);
  console.log(`   Logs: ${totalLogs}`);
}

main()
  .catch((e) => {
    console.error("❌ Error seeding production:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
