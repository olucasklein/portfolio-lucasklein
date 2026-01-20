'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-indigo-500/20 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-violet-500/20 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] animate-pulse-glow delay-300" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-pink-500/20 rounded-full blur-[40px] sm:blur-[60px] md:blur-[80px] animate-pulse-glow delay-500" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div 
            className={`max-w-2xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              {t('hero.available')}
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-6 leading-tight">
              {t('hero.greeting')}{' '}
              <span className="gradient-text">Lucas Klein</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-2 md:mb-4">
              {t('hero.role')}
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-5 md:mb-8 leading-relaxed max-w-xl">
              {t('hero.description')} <span className="text-white font-semibold">{t('hero.experience')}</span> {t('hero.descriptionContinue')} <span className="text-violet-400">UX/UI</span> {t('hero.descriptionEnd')}
            </p>

            {/* Mobile Profile Image */}
            <div className="flex lg:hidden justify-center mb-5 md:mb-8">
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full p-1 bg-theme-gradient-br shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/perfil.jpg"
                    alt="Lucas Klein"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mb-5 md:mb-8">
              <a
                href="#projetos"
                className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-theme-gradient text-white font-medium text-sm md:text-base rounded-xl hover:opacity-90 transition-all text-center flex items-center justify-center gap-2 group"
              >
                {t('hero.viewProjects')}
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contato"
                className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 glass text-white font-medium text-sm md:text-base rounded-xl hover:bg-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-violet-500/20 active:scale-95 transition-all text-center border border-white/10 group"
              >
                <span className="inline-block group-hover:scale-102 transition-transform">
                  {t('hero.contactMe')}
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span className="text-gray-500 text-xs">{t('hero.findMe')}</span>
              <div className="flex gap-2">
                <a
                  href="https://github.com/olucasklein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/olucasklein/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="mailto:olucasklein@hotmail.com"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/5522999165664"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div 
            className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 z-20">
                <div className="w-44 h-44 rounded-full p-1 bg-theme-gradient-br shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/perfil.jpg"
                      alt="Lucas Klein"
                      width={176}
                      height={176}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Main Card */}
              <div className="w-80 h-96 glass rounded-3xl p-6 relative overflow-hidden mt-12">
                {/* Code snippet decoration */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                
                <div className="mt-10 font-mono text-sm space-y-2">
                  <p><span className="text-pink-400">const</span> <span className="text-violet-400">developer</span> <span className="text-white">=</span> <span className="text-yellow-400">{`{`}</span></p>
                  <p className="pl-4"><span className="text-indigo-400">name</span>: <span className="text-emerald-400">&quot;Lucas Klein&quot;</span>,</p>
                  <p className="pl-4"><span className="text-indigo-400">role</span>: <span className="text-emerald-400">&quot;Front-End Dev&quot;</span>,</p>
                  <p className="pl-4"><span className="text-indigo-400">location</span>: <span className="text-emerald-400">&quot;Rio de Janeiro&quot;</span>,</p>
                  <p className="pl-4"><span className="text-indigo-400">skills</span>: [</p>
                  <p className="pl-8"><span className="text-emerald-400">&quot;React&quot;</span>,</p>
                  <p className="pl-8"><span className="text-emerald-400">&quot;Next.js&quot;</span>,</p>
                  <p className="pl-8"><span className="text-emerald-400">&quot;Angular&quot;</span>,</p>
                  <p className="pl-8"><span className="text-emerald-400">&quot;TypeScript&quot;</span></p>
                  <p className="pl-4">],</p>
                  <p className="pl-4"><span className="text-indigo-400">experience</span>: <span className="text-orange-400">4</span><span className="text-white">+</span> <span className="text-gray-500">years</span></p>
                  <p><span className="text-yellow-400">{`}`}</span>;</p>
                </div>
                
                {/* Cursor */}
                <div className="inline-block w-2 h-5 bg-white animate-pulse ml-1" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-theme-gradient-br rounded-2xl flex items-center justify-center animate-float shadow-lg">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                </svg>
              </div>

              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '1s' }}>
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 12v12h24v-24h-24v12zm1 0v-11h22v22h-22v-11zm8.934 3.765l-2.458 2.235h9.048l-2.458-2.235c.164-.173.3-.367.41-.581.218-.424.346-.906.346-1.42 0-1.819-1.456-3.292-3.25-3.292s-3.25 1.474-3.25 3.293c0 .514.128.995.346 1.419.11.214.246.408.41.581l-.144-.001zm2.566-5.013c1.794 0 3.25 1.474 3.25 3.293 0 .514-.128.996-.346 1.42-.11.214-.246.408-.41.581l2.458 2.235h-9.048l2.458-2.235c-.164-.173-.3-.367-.41-.581-.218-.424-.346-.906-.346-1.42 0-1.819 1.456-3.293 3.25-3.293z"/>
                </svg>
              </div>

              <div className="absolute top-1/2 -right-10 w-14 h-14 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '2s' }}>
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500 ${
          showScrollIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <span className="text-gray-500 text-xs sm:text-sm">{t('hero.scroll')}</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
