"use server";

import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";
import { todayInManila } from "@/lib/day";

const prisma = new PrismaClient();

/**
 * Server action to toggle a habit log for today.
 * Creates a log if it doesn't exist, deletes if it does.
 * Automatically refreshes the page after mutation.
 */
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

  // Revalidate the homepage so streaks & checkboxes update
  revalidatePath("/");
}
