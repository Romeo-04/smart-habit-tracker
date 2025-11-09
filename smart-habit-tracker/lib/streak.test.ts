// lib/streak.test.ts
import { describe, it, expect } from 'vitest';
import { computeDailyStreak, computeWeeklyStreak, computeLongestStreak } from './streak';

describe('computeDailyStreak', () => {
  it('returns 0 for empty logs', () => {
    expect(computeDailyStreak([], '2025-11-09')).toBe(0);
  });

  it('returns 1 when only today is logged', () => {
    const logs = ['2025-11-09'];
    expect(computeDailyStreak(logs, '2025-11-09')).toBe(1);
  });

  it('counts consecutive days correctly', () => {
    const logs = ['2025-11-07', '2025-11-08', '2025-11-09'];
    expect(computeDailyStreak(logs, '2025-11-09')).toBe(3);
  });

  it('stops at first gap', () => {
    const logs = ['2025-11-05', '2025-11-07', '2025-11-08', '2025-11-09'];
    // Gap on Nov 6, so streak is only 3 (7,8,9)
    expect(computeDailyStreak(logs, '2025-11-09')).toBe(3);
  });

  it('returns 0 if today and yesterday are both missing', () => {
    const logs = ['2025-11-05', '2025-11-06'];
    expect(computeDailyStreak(logs, '2025-11-09')).toBe(0);
  });

  it('allows yesterday as grace period if today is not logged', () => {
    const logs = ['2025-11-06', '2025-11-07', '2025-11-08'];
    // Today is Nov 9, last log is Nov 8 (yesterday), so streak continues
    expect(computeDailyStreak(logs, '2025-11-09')).toBe(3);
  });

  it('handles unsorted logs', () => {
    const logs = ['2025-11-09', '2025-11-07', '2025-11-08'];
    expect(computeDailyStreak(logs, '2025-11-09')).toBe(3);
  });
});

describe('computeWeeklyStreak', () => {
  it('returns 0 for empty logs', () => {
    expect(computeWeeklyStreak([], 3, '2025-11-09')).toBe(0);
  });

  it('returns 1 when current week meets target', () => {
    // Nov 4-10, 2025 (Mon-Sun), today is Saturday Nov 9
    const logs = ['2025-11-04', '2025-11-06', '2025-11-08', '2025-11-09'];
    expect(computeWeeklyStreak(logs, 4, '2025-11-09')).toBe(1);
  });

  it('counts multiple weeks with met targets', () => {
    // Week 1 (Oct 28 - Nov 3): 4 logs
    // Week 2 (Nov 4 - Nov 10): 4 logs
    const logs = [
      '2025-10-28', '2025-10-30', '2025-11-01', '2025-11-02', // Week 1
      '2025-11-04', '2025-11-06', '2025-11-08', '2025-11-09', // Week 2
    ];
    expect(computeWeeklyStreak(logs, 4, '2025-11-09')).toBe(2);
  });

  it('stops when a past week does not meet target', () => {
    const logs = [
      '2025-10-28', '2025-10-30', // Week 1: only 2 (target 4)
      '2025-11-04', '2025-11-06', '2025-11-08', '2025-11-09', // Week 2: 4
    ];
    // Streak should be 1 (current week only)
    expect(computeWeeklyStreak(logs, 4, '2025-11-09')).toBe(1);
  });

  it('allows incomplete current week', () => {
    // Today is Monday Nov 4, only 2 logs so far this week
    const logs = ['2025-11-04', '2025-11-05'];
    // Should not break streak yet (current week in progress)
    expect(computeWeeklyStreak(logs, 4, '2025-11-05')).toBe(0);
  });
});

describe('computeLongestStreak', () => {
  it('returns 0 for empty logs', () => {
    expect(computeLongestStreak([])).toBe(0);
  });

  it('returns 1 for a single log', () => {
    expect(computeLongestStreak(['2025-11-09'])).toBe(1);
  });

  it('finds longest consecutive sequence', () => {
    const logs = [
      '2025-11-01', '2025-11-02', // 2-day streak
      '2025-11-05', '2025-11-06', '2025-11-07', '2025-11-08', // 4-day streak
      '2025-11-12', // 1-day
    ];
    expect(computeLongestStreak(logs)).toBe(4);
  });

  it('handles all consecutive days', () => {
    const logs = ['2025-11-05', '2025-11-06', '2025-11-07', '2025-11-08', '2025-11-09'];
    expect(computeLongestStreak(logs)).toBe(5);
  });
});
