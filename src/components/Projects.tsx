'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
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
      technologies: ['React Native', 'Expo', 'TypeScript', 'AsyncStorage'],
      github: 'https://github.com/olucasklein/tech-score',
      demo: null,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
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
        {/* Section Header */}
        <div className="reveal mb-16 md:mb-24">
          <span className="text-xs font-light tracking-[0.3em] uppercase text-muted block mb-4">
            {t('projects.subtitle')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
            {t('projects.title')}{' '}
            <span className="italic">{t('projects.titleHighlight')}</span>
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="reveal">
              <a
                href={project.demo || project.github || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card block group"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-[20px]">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image w-full h-full object-cover"
                    />
                  )}

                  {/* Overlay with number */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="project-number">{project.number}</span>
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className="tag">{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl font-normal mb-2 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-muted text-sm md:text-base font-light leading-relaxed max-w-lg">
                        {project.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:bg-white group-hover:text-[#0c0c0c] transition-all duration-300">
                      <svg className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* More on GitHub */}
        <div className="reveal text-center mt-16 md:mt-24">
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
