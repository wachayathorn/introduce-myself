import ThemeSwitch from "./theme-switch";

export default function Footer() {
  return (
    <footer className="bg-[var(--page)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-8">
        <p className="text-sm text-[var(--muted)]">© 2026 Wachayathorn Singsena</p>
        <ThemeSwitch />
      </div>
    </footer>
  );
}
