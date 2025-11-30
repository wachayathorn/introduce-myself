import { personalInfo } from '@/data/personal';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 py-12 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          {/* Name and Title */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-gray-500">
              {personalInfo.title}
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-6">
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-gray-500 hover:text-red-500 transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a 
              href={`https://${personalInfo.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-red-500 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm">
            <span>&copy; 2025</span>
            <span className="text-gray-600">•</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
