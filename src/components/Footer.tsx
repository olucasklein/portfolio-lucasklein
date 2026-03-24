'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[rgba(255,255,255,0.05)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a href="#inicio" className="font-serif text-lg text-white hover:opacity-60 transition-opacity">
              Lucas Klein
            </a>
            <span className="text-muted text-xs font-light">
              © {currentYear}. {t('footer.rights')}
            </span>
          </div>

          {/* Right — Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/olucasklein"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors text-xs font-light tracking-wide"
            >
              GitHub
            </a>
            <span className="text-muted/30">·</span>
            <a
              href="https://www.linkedin.com/in/olucasklein/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors text-xs font-light tracking-wide"
            >
              LinkedIn
            </a>
            <span className="text-muted/30">·</span>
            <a
              href="https://wa.me/5522999165664"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors text-xs font-light tracking-wide"
            >
              WhatsApp
            </a>
            <span className="text-muted/30">·</span>
            <a
              href="mailto:olucasklein@hotmail.com"
              className="text-muted hover:text-white transition-colors text-xs font-light tracking-wide"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
