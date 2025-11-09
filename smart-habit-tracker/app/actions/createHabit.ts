"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { PrismaClient } from "../../src/generated/client";

const prisma = new PrismaClient();

// Zod schema for validating habit creation input
const createHabitSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title too long"),
  cadence: z.enum(["daily", "weekly"], {
    message: "Cadence must be 'daily' or 'weekly'",
  }),
  targetPerWeek: z.coerce
    .number()
    .int()
    .min(1, "Target must be at least 1")
    .max(7, "Target cannot exceed 7"),
});

export type FormState = {
  error?: string;
  success?: boolean;
};

/**
 * Server action to create a new habit.
 * Validates input with Zod and creates habit for demo user.
 */
export async function createHabit(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    // Extract form data
    const rawData = {
      title: formData.get("title"),
      cadence: formData.get("cadence"),
      targetPerWeek: formData.get("targetPerWeek"),
    };

    // Validate with Zod
    const validated = createHabitSchema.parse(rawData);

    // Get or create demo user (in real app, use auth session)
    let user = await prisma.user.findUnique({
      where: { email: "demo@example.com" },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: "demo@example.com",
          name: "Demo User",
        },
      });
    }

    // Create the habit
    await prisma.habit.create({
      data: {
        userId: user.id,
        title: validated.title,
        cadence: validated.cadence,
        targetPerWeek: validated.targetPerWeek,
      },
    });

    // Refresh the page to show new habit
    revalidatePath("/");

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Return first validation error
      return { error: error.issues[0].message };
    }

    console.error("Failed to create habit:", error);
    return { error: "Failed to create habit. Please try again." };
  }
}
