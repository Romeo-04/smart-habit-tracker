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
        className="pt-1 pb-1 pl-2 pr-2 bg-gray-900/30 text-white rounded-lg hover:bg-red-500 transition-colors shadow-lg"
        title="Delete habit"
      >
        X
      </button>
    </form>
  );
}
