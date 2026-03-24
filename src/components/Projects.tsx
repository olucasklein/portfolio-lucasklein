'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const featured = [
    {
      number: '01',
      category: 'Front-End + Design System',
      title: t('projects.checkout.title'),
      description: t('projects.checkout.description'),
      image: 'https://raw.githubusercontent.com/olucasklein/checkout/refs/heads/main/public/example.png',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/olucasklein/checkout',
      demo: 'https://checkout-pi.vercel.app',
    },
    {
      number: '02',
      category: 'Whitelabel + Platform',
      title: t('projects.seusite.title'),
      description: t('projects.seusite.description'),
      image: 'https://raw.githubusercontent.com/olucasklein/seu-site/refs/heads/master/public/image-example.png',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/olucasklein/seu-site',
      demo: 'https://seu-site-beta.vercel.app',
    },
    {
      number: '03',
      category: 'Mobile + React Native',
      title: t('projects.techscore.title'),
      description: t('projects.techscore.description'),
      image: 'https://raw.githubusercontent.com/olucasklein/tech-score/refs/heads/master/assets/app-img-3.jpg',
      technologies: ['React Native', 'Expo', 'TypeScript'],
      github: 'https://github.com/olucasklein/tech-score',
      demo: null,
    },
  ];

  const others = [
    {
      title: t('projects.applefun.title'),
      category: 'E-commerce',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/olucasklein/gama-apple-fun',
    },
    {
      title: t('projects.blackfriday.title'),
      category: 'Landing Page',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/olucasklein/gama-blackfriday-relampago',
    },
    {
      title: t('projects.todoangular.title'),
      category: 'Angular App',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      github: 'https://github.com/olucasklein/todolist-angular',
    },
    {
      title: t('projects.todojs.title'),
      category: 'JavaScript App',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/olucasklein/gama-todolist',
    },
  ];

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

  return (
    <section id="projetos" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* ── Section Header ── */}
        <div className="reveal mb-12 md:mb-16">
          <span className="text-xs font-light tracking-[0.3em] uppercase text-muted block mb-4">
            {t('projects.subtitle')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
            {t('projects.title')}{' '}
            <span className="italic">{t('projects.titleHighlight')}</span>
          </h2>
        </div>

        {/* ── Featured Projects (with photos) — 2-col grid ── */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-16 md:mb-20">
          {featured.map((project, index) => (
            <div key={index} className={`reveal ${index === 0 ? 'md:col-span-2' : ''}`}>
              <a
                href={project.demo || project.github || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card block group h-full"
              >
                {/* Image */}
                <div className={`relative overflow-hidden rounded-t-[20px] ${index === 0 ? 'aspect-[21/9]' : 'aspect-[16/10]'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="project-number">{project.number}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="tag text-[10px]">{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif text-xl md:text-2xl font-normal tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:bg-white group-hover:text-[#0c0c0c] transition-all duration-300 mt-1">
                      <svg className="w-3.5 h-3.5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-muted text-sm font-light leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tag text-[11px] py-1 px-2.5">{tech}</span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* ── Divider + Other Projects ── */}
        <div className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-[rgba(255,255,255,0.06)]" />
            <span className="text-[10px] font-light tracking-[0.3em] uppercase text-muted">
              {t('projects.moreProjects')}
            </span>
            <div className="h-px flex-1 bg-[rgba(255,255,255,0.06)]" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {others.map((project, index) => (
              <a
                key={index}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[10px] font-light tracking-[0.2em] uppercase text-muted">
                    {project.category}
                  </span>
                  <svg className="w-3.5 h-3.5 text-muted -rotate-45 group-hover:rotate-0 group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <h4 className="font-serif text-base font-normal tracking-tight mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 2).map((tech, i) => (
                    <span key={i} className="text-[10px] text-muted font-light">
                      {tech}{i < Math.min(project.technologies.length, 2) - 1 && ' ·'}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── GitHub CTA ── */}
        <div className="reveal text-center mt-12 md:mt-16">
          <a
            href="https://github.com/olucasklein"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline group"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {t('projects.viewMoreGithub')}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
