export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full font-mono bg-rose-50">
      <div className="mx-auto max-w-7xl p-4">
        <div className="grid grid-cols-3 items-center">
          <div>
            <a href="/" className="text-2xl font-bold hover:text-red-600 transition duration-150">
              {'{N}'}
            </a>
          </div>
          <div></div>
          <nav className="hidden md:grid grid-cols-4 gap-2 text-sm font-light">
            <a
              href="/experience"
              className="hover:text-red-600 transition duration-150 text-center"
            >
              Experience
            </a>
            <a
              href="/education"
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
