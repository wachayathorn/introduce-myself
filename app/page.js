import Link from 'next/link';
import { personalInfo } from '@/data/personal';

export default function HomePage() {
  const quickLinks = [
    { title: 'Overview', href: '/overview', icon: '👤', description: 'Learn more about me' },
    { title: 'Experience', href: '/experience', icon: '💼', description: '5+ years journey' },
    { title: 'Education', href: '/education', icon: '🎓', description: 'Academic background' },
    { title: 'Skills', href: '/skills', icon: '⚡', description: 'Technical expertise' },
    { title: 'Contact', href: '/contact', icon: '📧', description: 'Get in touch' },
  ];

  const highlights = [
    { number: '5+', label: 'Years Experience' },
    { number: '3', label: 'Companies' },
    { number: '10+', label: 'Technologies' },
    { number: '∞', label: 'Lines of Code' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          {/* Greeting Badge */}
          <div className="mb-8 inline-block animate-fade-in">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-full text-red-400 text-sm font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Welcome to my portfolio
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight animate-slide-up">
            <span className="block text-white mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              {personalInfo.name.split(' ')[0]}
            </span>
          </h1>

          {/* Subtitle with underline effect */}
          <div className="mb-10 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-100 inline-block relative">
              {personalInfo.title}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-14 leading-relaxed animate-slide-up">
            {personalInfo.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-slide-up">
            <Link 
              href="/overview" 
              className="group relative px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link 
              href="/contact" 
              className="group px-8 py-4 bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-2">
                Get In Touch
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl font-bold text-red-500 mb-2">
                  {item.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore More
            </h2>
            <p className="text-lg text-gray-600">
              Discover my journey, skills, and experience
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-red-500 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{link.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {link.description}
                </p>
                <span className="text-red-500 text-sm font-medium">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          {/* Badge */}
          <div className="inline-block mb-8">
            <span className="px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold tracking-wide">
              Let's Connect
            </span>
          </div>
          
          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block">Let's Work</span>
            <span className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="group relative px-10 py-5 bg-red-500 hover:bg-red-600 text-white text-lg font-bold rounded-2xl shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </span>
            </Link>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-5 bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white text-lg font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                View LinkedIn
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            {/* Name and Title */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{personalInfo.name}</h3>
              <p className="text-sm text-gray-500">{personalInfo.title}</p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-6">
              <a href={`mailto:${personalInfo.email}`} className="text-gray-500 hover:text-red-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors">
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
    </div>
  );
}