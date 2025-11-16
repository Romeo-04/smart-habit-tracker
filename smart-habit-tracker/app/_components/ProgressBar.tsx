interface ProgressBarProps {
  completed: number;
  total: number;
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  const getColor = () => {
    if (percentage === 100) return 'bg-green-500';
    if (percentage >= 70) return 'bg-blue-500';
    if (percentage >= 40) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  const getMessage = () => {
    if (percentage === 100) return '🎉 All habits completed!';
    if (percentage >= 70) return '💪 Great progress!';
    if (percentage >= 40) return '👍 Keep going!';
    if (percentage > 0) return '🌱 Good start!';
    return '📝 Start your day!';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Today's Progress</h3>
        <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">{percentage}%</span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2 overflow-hidden">
        <div
          className={`h-full ${getColor()} transition-all duration-500 ease-out rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">
          {completed} of {total} habits
        </span>
        <span className="text-gray-700 dark:text-gray-300 font-medium">{getMessage()}</span>
      </div>
    </div>
  );
}
