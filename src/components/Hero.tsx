'use client';

import { useEffect, useState, Suspense, lazy } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);

    // Check screen size to render only ONE Spline scene at a time
    // Important: iOS Safari breaks/fails if multiple WebGL contexts load simultaneously
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check initial size
    window.addEventListener('resize', checkMobile);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Determine final opacity based on mobile or desktop
  const splineOpacityClass = isMobile ? 'opacity-[0.4]' : 'opacity-100';

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* 3D Scene Placeholders & Spline Canvas */}
      {isMobile !== null && (
        <>
          {/* Blurred Placeholder Images (Static background) */}
          <div 
            className={`absolute top-0 left-0 z-[-1] w-full h-[120%] pointer-events-none ${
              isMobile ? 'opacity-[0.4]' : 'opacity-100'
            }`}
          >
            <img 
              src={isMobile ? '/lazy2.png' : '/lazy.png'} 
              alt="" 
              className="w-full h-full object-cover blur-sm scale-90"
              aria-hidden="true"
            />
          </div>

          {/* Spline 3D Background */}
          <div 
            className={`spline-container z-0 w-full h-[120%] ${
              isMobile ? 'opacity-[0.4]' : 'opacity-100'
            }`}
          >
            <Suspense fallback={null}>
              {isMobile ? (
                <Spline 
                  scene="https://prod.spline.design/8VioTqljzycarKCr/scene.splinecode" 
                  onLoad={() => setIsSplineLoaded(true)}
                />
              ) : (
                <Spline 
                  scene="https://prod.spline.design/7RKcpSScLxhwqscW/scene.splinecode" 
                  onLoad={() => setIsSplineLoaded(true)}
                />
              )}
            </Suspense>
          </div>
        </>
      )}

      {/* Subtle shadow behind text only — keeps Spline fully visible */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-[2]">
        <div className="max-w-2xl">

          {/* Main heading */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-sm md:text-base font-light text-white md:text-[#888888] mb-3 tracking-wide">
              {t('hero.greeting')}
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.95] mb-6 tracking-tight">
              Lucas
              <br />
              <span className="italic">Klein</span>
            </h1>
          </div>

          {/* Role */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-lg md:text-xl text-white md:text-[#888888] font-light mb-8 max-w-md leading-relaxed">
              {t('hero.role')}
              <span className="block text-sm mt-2 opacity-60">
                {t('hero.experience')} · React · Next.js · Angular · TypeScript
              </span>
            </p>
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a href="#projetos" className="btn-primary group">
              {t('hero.viewProjects')}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contato" className="btn-outline">
              {t('hero.contactMe')}
            </a>
          </div>

          {/* Social */}
          <div
            className={`flex items-center gap-4 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a href="https://github.com/olucasklein" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/olucasklein/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:olucasklein@hotmail.com" className="social-icon" aria-label="Email">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="https://wa.me/5522999165664" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-3">
        <span className="text-white text-[10px] tracking-[0.3em] uppercase font-light">{t('hero.scroll')}</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
