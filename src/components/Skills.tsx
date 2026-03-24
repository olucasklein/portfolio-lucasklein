'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Skills() {
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

  const skillGroups = [
    {
      title: t('skills.frontend'),
      items: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript'],
    },
    {
      title: t('skills.styling'),
      items: ['Tailwind CSS', 'CSS3 / SASS', 'Styled Components', 'Material UI', 'Figma'],
    },
    {
      title: t('skills.backend'),
      items: ['Node.js', 'Git / GitHub', 'REST APIs', 'Java', 'Python'],
      learning: true,
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 relative">
      {/* Divider */}
      <div className="divider mb-24 md:mb-32" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="reveal mb-16 md:mb-20">
          <span className="text-xs font-light tracking-[0.3em] uppercase text-muted block mb-4">
            {t('skills.subtitle')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
            {t('skills.title')}{' '}
            <span className="italic">{t('skills.titleHighlight')}</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-16">
          {skillGroups.map((group, index) => (
            <div key={index} className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-white text-lg font-medium">{group.title}</h3>
                {group.learning && (
                  <span className="text-xs font-light text-amber-400/80 tracking-wide">
                    {t('skills.learning')}
                  </span>
                )}
              </div>
              <div className="space-y-3">
                {group.items.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-2 border-b border-[rgba(255,255,255,0.05)] group"
                  >
                    <span className="w-1 h-1 bg-white/30 rounded-full group-hover:bg-white transition-colors" />
                    <span className="text-muted text-sm font-light group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="reveal">
          <h3 className="text-white text-sm font-medium mb-4 tracking-wide">
            {t('skills.softSkills')}
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              t('skills.teamwork'),
              t('skills.communication'),
              t('skills.problemSolving'),
              t('skills.adaptability'),
              t('skills.continuousLearning'),
              t('skills.attention'),
              t('skills.timeManagement'),
              t('skills.creativity'),
            ].map((skill, index) => (
              <span key={index} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
