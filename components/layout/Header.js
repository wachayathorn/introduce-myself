import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            WS
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/overview" className="text-gray-600 hover:text-red-500 font-medium transition-colors">
              Overview
            </Link>
            <Link href="/experience" className="text-gray-600 hover:text-red-500 font-medium transition-colors">
              Experience
            </Link>
            <Link href="/education" className="text-gray-600 hover:text-red-500 font-medium transition-colors">
              Education
            </Link>
            <Link href="/skills" className="text-gray-600 hover:text-red-500 font-medium transition-colors">
              Skills
            </Link>
            <Link href="/contact" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
