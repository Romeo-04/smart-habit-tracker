"use server";

import { PrismaClient } from "../../src/generated/client";
import { todayInManila } from "@/lib/day";

const prisma = new PrismaClient();

export async function toggleLog(habitId: string) {
  const dayLocal = todayInManila();

  // Check if a log already exists for today
  const existing = await prisma.habitLog.findUnique({
    where: { habitId_dayLocal: { habitId, dayLocal } },
  });

  if (existing) {
    // unmark (delete)
    await prisma.habitLog.delete({
      where: { id: existing.id },
    });
  } else {
    // create new log entry
    await prisma.habitLog.create({
      data: { habitId, dayLocal },
    });
  }
}
