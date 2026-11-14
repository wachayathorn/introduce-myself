"use client";

import { useEffect } from "react";

export function themeForDate(date: Date) {
  const minutes = date.getHours() * 60 + date.getMinutes();
  const lightStart = 6 * 60;
  const lightEnd = 18 * 60;
  return minutes >= lightStart && minutes <= lightEnd ? "light" : "dark";
}

export default function ThemeClock() {
  useEffect(() => {
    const apply = () => {
      const saved = localStorage.getItem("theme");
      document.documentElement.dataset.theme =
        saved === "light" || saved === "dark" ? saved : themeForDate(new Date());
    };

    apply();
    const timer = window.setInterval(apply, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return null;
}
