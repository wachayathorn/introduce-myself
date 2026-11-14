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

  return (
    <div className="flex items-center gap-3 text-[11px] tracking-wide text-[var(--muted)] uppercase">
      {(["light", "dark"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => choose(item)}
          aria-pressed={theme === item}
          className={theme === item ? "text-[var(--ink)]" : "text-[var(--muted)]"}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
