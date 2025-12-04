export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-4 py-6">
        {/* Row: stacks on small screens, horizontal on md+ */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Column 1: copyright / small text */}
          <p className="text-sm">©2025 Wachayathorn Singsena. All rights reserved.</p>

          {/* Column 2: simple nav / links */}
          <nav aria-label="Footer navigation" className="flex items-center gap-3">
            <a
              href="#"
              className="text-sm hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
