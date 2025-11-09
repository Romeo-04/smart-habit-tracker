// lib/day.ts
import { formatInTimeZone } from "date-fns-tz";

// Returns date from Asia/Manila timezone only

export function todayInManila(): string {
  return formatInTimeZone(new Date(), "Asia/Manila", "yyyy-MM-dd");
}
