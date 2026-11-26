import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Checked once: some machines (disabled GPU, blocklisted drivers) can't create a WebGL context.
export const hasWebGL = (() => {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
    return !!gl;
  } catch {
    return false;
  }
})();

/* ---------- Experience durations (LinkedIn style) ---------- */
const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

// "October 2025" -> months since year 0; "Present" -> current month
function toMonthIndex(text) {
  const value = text.trim().toLowerCase();
  if (value === "present") {
    const now = new Date();
    return now.getFullYear() * 12 + now.getMonth();
  }
  const [month, year] = value.split(/\s+/);
  const m = MONTHS.findIndex((name) => name.startsWith(month.slice(0, 3)));
  return Number(year) * 12 + m;
}

// Months in a range like "November 2024 - June 2025", counting both the
// start and end month (as LinkedIn does: Nov 2024 – Jun 2025 = 8 mos).
export function monthsInRange(range) {
  const [start, end] = range.split(/\s+[-–]\s+/);
  return Math.max(1, toMonthIndex(end) - toMonthIndex(start) + 1);
}

// 14 -> "1 yr 2 mos", 8 -> "8 mos", 24 -> "2 yrs"
export function formatDuration(totalMonths) {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];
  if (years) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  return parts.join(" ");
}
