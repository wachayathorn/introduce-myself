export default function Navbar() {
  return (
    <header className="pointer-events-none fixed top-4 right-0 left-0 z-50 flex justify-center px-4">
      <a
        href="#home"
        className="hover-pop pointer-events-auto flex max-w-full items-center gap-3 rounded-full border border-black/5 bg-white/90 px-5 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl"
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#e11d2e]" />
        <span className="truncate text-sm font-extrabold tracking-tight text-[#111418] sm:text-base">
          Wachayathorn Singsena
        </span>
        <span className="hidden h-4 w-px bg-[#E5E7EB] sm:block" />
        <span className="hidden text-[11px] font-semibold tracking-wide text-[#6C727F] sm:block">
          SENIOR SOFTWARE ENGINEER
        </span>
      </a>
    </header>
  );
}
