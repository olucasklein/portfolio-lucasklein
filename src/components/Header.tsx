'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: '#inicio', label: t('nav.home') },
    { href: '#sobre', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#experiencia', label: t('nav.experience') },
    { href: '#projetos', label: t('nav.projects') },
    { href: '#contato', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? 'bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-cyan-400 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">LK</span>
            </div>
            <span className="text-xl font-semibold text-white hidden sm:block">
              Lucas Klein
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium link-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: Language Toggle + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="relative flex items-center gap-1 p-1 glass rounded-full text-xs font-semibold transition-all hover:bg-white/5"
              aria-label="Toggle language"
            >
              {/* Background Slider */}
              <div 
                className={`absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full transition-all duration-300 ease-out ${
                  language === 'pt' ? 'left-1' : 'left-[calc(50%+2px)]'
                }`}
              />
              {/* PT Button */}
              <span className={`relative z-10 px-3 py-1.5 rounded-full transition-colors duration-300 ${
                language === 'pt' ? 'text-white' : 'text-gray-400'
              }`}>
                🇧🇷 PT
              </span>
              {/* EN Button */}
              <span className={`relative z-10 px-3 py-1.5 rounded-full transition-colors duration-300 ${
                language === 'en' ? 'text-white' : 'text-gray-400'
              }`}>
                🇺🇸 EN
              </span>
            </button>

            {/* Download CV */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t('nav.downloadCV')}
            </a>

            {/* CTA Button */}
            <a
              href="#contato"
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              {t('nav.contact')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
    </header>

        {/* Mobile Menu - Slide-in Drawer (Outside header to avoid transparency inheritance) */}
        <div 
          className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div 
            className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-[#0a0a0a] border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Fechar menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="px-6">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Divider */}
            <div className="mx-6 my-4 border-t border-white/10" />
            
            {/* Actions */}
            <div className="px-6 space-y-3">
              {/* Language Toggle */}
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-400 text-sm">{t('nav.language')}</span>
                <button
                  onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                  className="relative flex items-center p-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium"
                >
                  <div 
                    className={`absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full transition-all duration-300 ease-out ${
                      language === 'pt' ? 'left-1' : 'left-[calc(50%+2px)]'
                    }`}
                  />
                  <span className={`relative z-10 px-3 py-1.5 rounded-full transition-colors duration-300 ${
                    language === 'pt' ? 'text-white' : 'text-gray-400'
                  }`}>
                    🇧🇷 PT
                  </span>
                  <span className={`relative z-10 px-3 py-1.5 rounded-full transition-colors duration-300 ${
                    language === 'en' ? 'text-white' : 'text-gray-400'
                  }`}>
                    🇺🇸 EN
                  </span>
                </button>
              </div>
              
              {/* Download CV */}
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('nav.downloadCV')}
              </a>
              
              {/* CTA Button */}
              <a
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                {t('nav.contact')}
              </a>
            </div>
          </div>
        </div>
    </>
  );
}
