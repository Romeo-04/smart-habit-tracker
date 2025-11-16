"use client";

import { useActionState, useEffect, useRef } from "react";
import { createHabit, type FormState } from "../actions/createHabit";

interface CreateHabitFormProps {
  onSuccess?: () => void;
}

export function CreateHabitForm({ onSuccess }: CreateHabitFormProps = {}) {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    createHabit,
    {}
  );
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on success
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      onSuccess?.();
    }
  }, [state.success, onSuccess]);

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Create New Habit</h2>
      
      <form ref={formRef} action={formAction} className="space-y-4">
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Habit Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="e.g., Read 30 minutes"
            required
            disabled={isPending}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
          />
        </div>

        {/* Cadence Selection */}
        <div>
          <label htmlFor="cadence" className="block text-sm font-medium text-gray-700 mb-1">
            Cadence
          </label>
          <select
            id="cadence"
            name="cadence"
            required
            disabled={isPending}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        {/* Target Per Week Input */}
        <div>
          <label htmlFor="targetPerWeek" className="block text-sm font-medium text-gray-700 mb-1">
            Target per Week
          </label>
          <input
            type="number"
            id="targetPerWeek"
            name="targetPerWeek"
            min="1"
            max="7"
            defaultValue="7"
            required
            disabled={isPending}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
          />
          <p className="mt-1 text-sm text-gray-500">
            For daily habits, use 7. For weekly, set how many times per week.
          </p>
        </div>

        {/* Error Message */}
        {state.error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {state.error}
          </div>
        )}

        {/* Success Message */}
        {state.success && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
            Habit created successfully!
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isPending ? "Creating..." : "Create Habit"}
        </button>
      </form>
    </div>
  );
}
