// lib/streak.ts
import { parseISO, differenceInDays, startOfWeek, endOfWeek, subDays, format } from 'date-fns';

/**
 * Computes the current streak for a DAILY habit.
 * 
 * @param dayLogs - Array of 'YYYY-MM-DD' strings (sorted DESC recommended)
 * @param today - Current local date as 'YYYY-MM-DD'
 * @returns Current streak count (0 if broken)
 * 
 * Algorithm:
 * 1. Start from today, go backwards
 * 2. For each day, check if log exists
 * 3. Stop when we find a gap
 * 4. Return count of consecutive days
 */
export function computeDailyStreak(dayLogs: string[], today: string): number {
  if (dayLogs.length === 0) return 0;

  const logSet = new Set(dayLogs); // Use Set for O(1) lookups
  const todayDate = parseISO(today);
  
  let streak = 0;

  // Check if today is logged (streak can start from today OR yesterday)
  const hasTodayLog = logSet.has(today);
  
  // Determine where to start counting
  let startDate: Date;
  if (hasTodayLog) {
    startDate = todayDate;
  } else {
    // Check yesterday (grace period)
    const yesterday = new Date(todayDate);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().slice(0, 10);
    
    if (!logSet.has(yesterdayStr)) {
      return 0; // Streak broken
    }
    
    startDate = yesterday;
  }

  // Count backwards from start date
  // Keep going back until we find a gap (max 365 days to prevent infinite loop)
  for (let i = 0; i < 365; i++) {
    // Use subDays from date-fns to avoid timezone issues
    const checkDate = subDays(startDate, i);
    const checkStr = format(checkDate, 'yyyy-MM-dd');
    
    if (logSet.has(checkStr)) {
      streak++;
    } else {
      break; // Gap found, stop counting
    }
  }

  return streak;
}

/**
 * Computes the current streak for a WEEKLY habit.
 * 
 * @param dayLogs - Array of 'YYYY-MM-DD' strings
 * @param targetPerWeek - Required completions per week (e.g., 4)
 * @param today - Current local date as 'YYYY-MM-DD'
 * @returns Current weekly streak count
 * 
 * Algorithm:
 * 1. Group logs by week (Mon-Sun)
 * 2. Count backwards from current week
 * 3. Stop when a week doesn't meet targetPerWeek
 */
export function computeWeeklyStreak(
  dayLogs: string[],
  targetPerWeek: number,
  today: string
): number {
  if (dayLogs.length === 0) return 0;

  const todayDate = parseISO(today);
  const logDates = dayLogs.map(d => parseISO(d));

  // Define week boundaries (Monday start)
  const weekStart = startOfWeek(todayDate, { weekStartsOn: 1 });
  
  let streak = 0;
  let currentWeekStart = weekStart;

  // Count backwards through weeks
  for (let weekOffset = 0; weekOffset < 52; weekOffset++) { // Max 52 weeks
    const weekEnd = endOfWeek(currentWeekStart, { weekStartsOn: 1 });
    
    // Count logs in this week
    const logsInWeek = logDates.filter(logDate => 
      logDate >= currentWeekStart && logDate <= weekEnd
    ).length;

    if (logsInWeek >= targetPerWeek) {
      streak++;
    } else {
      // Current week can be incomplete, but past weeks break the streak
      if (weekOffset > 0) break;
      
      // If current week is incomplete but has some logs, don't break yet
      if (logsInWeek === 0) break;
    }

    // Move to previous week
    currentWeekStart = new Date(currentWeekStart);
    currentWeekStart.setDate(currentWeekStart.getDate() - 7);
  }

  return streak;
}

/**
 * Finds the longest streak from ALL logs.
 * 
 * @param dayLogs - Array of 'YYYY-MM-DD' strings
 * @returns Longest historical streak
 */
export function computeLongestStreak(dayLogs: string[]): number {
  if (dayLogs.length === 0) return 0;

  const sortedLogs = [...dayLogs].sort();
  let longest = 1;
  let current = 1;

  for (let i = 1; i < sortedLogs.length; i++) {
    const prevDate = parseISO(sortedLogs[i - 1]);
    const currDate = parseISO(sortedLogs[i]);
    const dayDiff = differenceInDays(currDate, prevDate);

    if (dayDiff === 1) {
      current++;
      longest = Math.max(longest, current);
    } else if (dayDiff > 1) {
      current = 1; // Reset on gap
    }
    // dayDiff === 0 means duplicate (shouldn't happen due to unique constraint)
  }

  return longest;
}
