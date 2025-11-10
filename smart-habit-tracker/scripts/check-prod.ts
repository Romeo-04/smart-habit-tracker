// Quick script to check production data
import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.count();
  const habits = await prisma.habit.count();
  const logs = await prisma.habitLog.count();

  console.log("📊 Production Database Stats:");
  console.log(`   Users: ${users}`);
  console.log(`   Habits: ${habits}`);
  console.log(`   Logs: ${logs}`);

  if (habits > 0) {
    const habitsWithLogs = await prisma.habit.findMany({
      include: { logs: true },
    });
    console.log("\n📋 Habits:");
    habitsWithLogs.forEach(h => {
      console.log(`   - ${h.title}: ${h.logs.length} logs`);
    });
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
