export default function Footer() {
  return (
    <footer className="sticky inset-x-0 bottom-0  dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-4 py-6">
        {/* Row: stacks on small screens, horizontal on md+ */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Column 1: copyright / small text */}
          <p className="text-sm">©2025 Wachayathorn Singsena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
