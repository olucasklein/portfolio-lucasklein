'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '4+', label: t('about.stats.experience') },
    { value: '20+', label: t('about.stats.projects') },
    { value: '10+', label: t('about.stats.technologies') },
  ];

  return (
    <section id="sobre" ref={sectionRef} className="py-24 md:py-32 relative">
      {/* Divider */}
      <div className="divider mb-24 md:mb-32" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Image + Stats */}
          <div className="reveal">
            <div className="relative">
              {/* Profile */}
              <div className="relative w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/perfil.jpg"
                  alt="Lucas Klein"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 400px"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/40 to-transparent" />
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="font-serif text-3xl md:text-4xl font-normal mb-1">
                      {stat.value}
                    </div>
                    <div className="text-muted text-xs font-light tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="reveal">
            <span className="text-xs font-light tracking-[0.3em] uppercase text-muted block mb-4">
              {t('about.subtitle')}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight mb-8">
              {t('about.transforming')}{' '}
              <span className="italic">{t('about.experiences')}</span>
            </h2>

            <div className="space-y-5 text-muted text-base font-light leading-[1.8] mb-10">
              <p>{t('about.description1')}</p>
              <p>{t('about.description2')}</p>
            </div>

            {/* Education */}
            <div className="border-t border-b border-[rgba(255,255,255,0.08)] py-5 mb-8">
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <div>
                  <div className="text-white text-sm font-medium">{t('about.education')}</div>
                  <div className="text-muted text-xs font-light">{t('about.degree')}</div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2">
              {[
                t('about.highlights.clean'),
                t('about.highlights.performance'),
                t('about.highlights.responsive'),
                t('about.highlights.pixel'),
              ].map((item, index) => (
                <span key={index} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
