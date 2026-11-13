const links = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-[#f8f9fa]/85 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 md:px-10 lg:px-16">
        <a href="#home" className="shrink-0">
          <span className="block text-base font-extrabold tracking-tight text-[#111418] sm:text-lg">
            Wachayathorn Singsena
          </span>
          <span className="hidden text-xs font-semibold tracking-wide text-[#6C727F] sm:block">
            SENIOR SOFTWARE ENGINEER
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full bg-[#F3F4F6] p-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-[#45474a] transition-colors hover:text-[#191c1d]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/wachayathorn"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#45474a] shadow-sm sm:inline-flex"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/wachayathorn"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#45474a] shadow-sm sm:inline-flex"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_16px_-4px_rgba(17,20,24,0.18)]"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
