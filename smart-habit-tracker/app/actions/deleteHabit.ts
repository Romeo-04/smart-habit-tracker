"use server";

import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteHabit(habitId: string) {
  try {
    // Delete all habit logs first (cascade)
    await prisma.habitLog.deleteMany({
      where: { habitId },
    });

    // Then delete the habit
    await prisma.habit.delete({
      where: { id: habitId },
    });

    revalidatePath("/");
  } catch (error) {
    console.error("Failed to delete habit:", error);
  }
}
