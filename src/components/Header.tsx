'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: '#inicio', label: t('nav.home') },
    { href: '#projetos', label: t('nav.projects') },
    { href: '#sobre', label: t('nav.about') },
    { href: '#contato', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.body.style.overflow = '';
      };
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0c0c0c]/90 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 md:px-12 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              className="hover:opacity-80 transition-opacity flex items-center"
              aria-label="Lucas Klein"
            >
              <img src="/favicon.svg" alt="Lucas Klein Logo" className="h-9 w-auto" />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm font-light tracking-wide"
                >
                  {link.label}
                </a>
              ))}

              {/* Language Toggle */}
              <div className="lang-toggle">
                <button
                  onClick={() => setLanguage('pt')}
                  className={`lang-btn ${language === 'pt' ? 'active' : ''}`}
                >
                  PT
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        ref={menuRef}
      >
        <div className="absolute inset-0 bg-[#0c0c0c]/95 backdrop-blur-lg" onClick={() => setIsMenuOpen(false)} />

        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
        >
          {/* Close */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-6 p-2 text-white"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-3xl text-white hover:opacity-60 transition-opacity"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {link.label}
            </a>
          ))}

          {/* Language */}
          <div className="lang-toggle mt-4">
            <button
              onClick={() => setLanguage('pt')}
              className={`lang-btn ${language === 'pt' ? 'active' : ''}`}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
