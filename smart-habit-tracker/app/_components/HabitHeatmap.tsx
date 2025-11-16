import { format, subDays, startOfWeek, addDays } from 'date-fns';

interface HabitHeatmapProps {
  logs: string[]; // Array of date strings in 'YYYY-MM-DD' format
  habitTitle: string;
}

export function HabitHeatmap({ logs, habitTitle }: HabitHeatmapProps) {
  // Generate last 12 weeks (84 days)
  const today = new Date();
  const days = Array.from({ length: 84 }, (_, i) => {
    const date = subDays(today, 83 - i);
    return format(date, 'yyyy-MM-dd');
  });

  // Group days by week
  const weeks: string[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  const getIntensity = (date: string) => {
    return logs.includes(date);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
        {habitTitle} - Last 12 Weeks
      </h3>
      
      <div className="flex gap-1 overflow-x-auto">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {week.map((day, dayIndex) => {
              const isCompleted = getIntensity(day);
              const isToday = day === format(today, 'yyyy-MM-dd');
              
              return (
                <div
                  key={day}
                  className={`w-3 h-3 rounded-sm transition-colors ${
                    isCompleted
                      ? 'bg-green-500 dark:bg-green-600'
                      : 'bg-gray-200 dark:bg-gray-700'
                  } ${isToday ? 'ring-2 ring-blue-500' : ''}`}
                  title={`${day}${isCompleted ? ' ✓' : ''}`}
                />
              );
            })}
          </div>
        ))}
      </div>
      
      <div className="flex items-center gap-3 mt-4 text-xs text-gray-600 dark:text-gray-400">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-sm" />
          <div className="w-3 h-3 bg-green-500 dark:bg-green-600 rounded-sm" />
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
