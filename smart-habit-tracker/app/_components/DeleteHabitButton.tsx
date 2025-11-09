"use client";

import { deleteHabit } from "../actions/deleteHabit";

interface DeleteHabitButtonProps {
  habitId: string;
  habitTitle: string;
}

export function DeleteHabitButton({ habitId, habitTitle }: DeleteHabitButtonProps) {
  const handleDelete = async () => {
    if (confirm(`Delete "${habitTitle}"?`)) {
      await deleteHabit(habitId);
    }
  };

  return (
    <form action={handleDelete} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button
        type="submit"
        className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-lg"
        title="Delete habit"
      >
        🗑️
      </button>
    </form>
  );
}
