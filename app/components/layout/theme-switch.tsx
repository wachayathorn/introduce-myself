"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  const choose = (next: Theme) => {
    sessionStorage.setItem("theme", next);
    document.documentElement.dataset.theme = next;
    setTheme(next);
  };

  const next = theme === "light" ? "dark" : "light";

  return (
    <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
      <span>Theme</span>
      <button
        type="button"
        onClick={() => choose(next)}
        aria-pressed={theme === "dark"}
        title={next === "dark" ? "Switch to dark theme" : "Switch to light theme"}
        className="group font-medium text-[var(--ink)] transition duration-300 hover:-translate-y-0.5 hover:text-[var(--accent)]"
      >
        <span className="group-hover:hidden">{theme === "light" ? "Light" : "Dark"}</span>
        <span className="hidden group-hover:inline">{next === "light" ? "Light" : "Dark"}</span>
      </button>
    </div>
  );
}
