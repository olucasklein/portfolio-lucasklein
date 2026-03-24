'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Experience() {
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

  const experiences = [
    {
      company: 'Tuna Pagamentos',
      role: t('experience.tuna.junior.role'),
      period: `2024 — ${t('experience.current2')}`,
      location: t('experience.location.remote'),
      description: t('experience.tuna.junior.description'),
      technologies: ['React', 'Angular', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
      current: true,
    },
    {
      company: 'Tuna Pagamentos',
      role: t('experience.tuna.intern.role'),
      period: 'Ago 2022 — 2024',
      location: t('experience.location.remote'),
      description: t('experience.tuna.intern.description'),
      technologies: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML/CSS'],
      current: false,
    },
    {
      company: t('experience.freelance.role') === 'Desenvolvedor Front-End' ? 'Projetos Freelancer' : 'Freelance Projects',
      role: t('experience.freelance.role'),
      period: `2020 — ${t('experience.current2')}`,
      location: t('experience.location.remote'),
      description: t('experience.freelance.description'),
      technologies: ['React', 'Next.js', 'Angular', 'Node.js'],
      current: true,
    },
    {
      company: 'Irmãos Klein',
      role: t('experience.admin.role'),
      period: 'Out 2021 — Jul 2022',
      location: t('experience.location.rj'),
      description: t('experience.admin.description'),
      technologies: ['CRM', 'WhatsApp Business', 'Excel'],
      current: false,
    },
  ];

  return (
    <section id="experiencia" ref={sectionRef} className="py-24 md:py-32 relative">
      {/* Divider */}
      <div className="divider mb-24 md:mb-32" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="reveal mb-16 md:mb-20">
          <span className="text-xs font-light tracking-[0.3em] uppercase text-muted block mb-4">
            {t('experience.subtitle')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
            {t('experience.title')}{' '}
            <span className="italic">{t('experience.titleHighlight')}</span>
          </h2>
        </div>

        {/* Experience Items */}
        <div className="max-w-3xl">
          {experiences.map((exp, index) => (
            <div key={index} className="reveal experience-item group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-white text-lg font-medium">{exp.role}</h3>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-light">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        {t('experience.current')}
                      </span>
                    )}
                  </div>
                  <p className="text-muted text-sm font-light">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span className="text-muted text-xs font-light tracking-wide whitespace-nowrap mt-1 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-muted text-sm font-light leading-relaxed mb-4 max-w-xl">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div className="reveal mt-12">
          <a
            href="https://www.linkedin.com/in/olucasklein/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline group"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            {t('experience.viewFullLinkedin')}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
