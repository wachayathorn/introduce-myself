export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl p-4">
        <div className="grid grid-cols-1 items-center">
          <nav className="hidden md:grid grid-cols-5 gap-6 text-sm font-medium">
            <a
              href="#overview"
              className="hover:text-red-600 transition duration-150 text-center"
            >
              Overview
            </a>
            <a
              href="#experience"
              className="hover:text-red-600 transition duration-150 text-center"
            >
              Experience
            </a>
            <a
              href="#education"
              className="hover:text-red-600 transition duration-150 text-center"
            >
              Education
            </a>
            <a
              href="#skills"
              className="hover:text-red-600 transition duration-150 text-center"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-red-600 transition duration-150 text-center"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
