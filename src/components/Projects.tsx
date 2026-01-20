'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Projects() {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: 'TechScore',
      description: t('projects.techscore.description'),
      image: 'https://raw.githubusercontent.com/olucasklein/tech-score/refs/heads/master/assets/app-img-3.jpg',
      technologies: ['React Native', 'Expo', 'TypeScript', 'AsyncStorage'],
      github: 'https://github.com/olucasklein/tech-score',
      demo: null,
      featured: true,
    },
    {
      title: 'Seu Site - Whitelabel',
      description: t('projects.seusite.description'),
      image: 'https://raw.githubusercontent.com/olucasklein/seu-site/refs/heads/master/public/image-example.png',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/olucasklein/seu-site',
      demo: 'https://seu-site-beta.vercel.app',
      featured: true,
    },
    {
      title: 'E-commerce Apple Fun',
      description: language === 'pt' 
        ? 'Sistema de E-commerce desenvolvido durante o Hiring Coders, com gestão de clientes, endereços e produtos estruturados.'
        : 'E-commerce system developed during Hiring Coders, with customer management, addresses, and structured products.',
      image: '/projects/apple-fun.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      github: 'https://github.com/olucasklein/gama-apple-fun',
      demo: null,
      featured: false,
    },
    {
      title: 'Black Friday Landing Page',
      description: language === 'pt'
        ? 'Landing page responsiva estilo Black Friday desenvolvida durante o Hiring Coders com captura de dados no LocalStorage.'
        : 'Responsive Black Friday-style landing page developed during Hiring Coders with data capture in LocalStorage.',
      image: '/projects/blackfriday.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/olucasklein/gama-blackfriday-relampago',
      demo: null,
      featured: false,
    },
    {
      title: 'To-Do List Angular',
      description: language === 'pt'
        ? 'Aplicação de lista de tarefas desenvolvida em Angular com recursos de adicionar, editar e remover tarefas.'
        : 'Task list application developed in Angular with features to add, edit, and remove tasks.',
      image: '/projects/todolist.jpg',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      github: 'https://github.com/olucasklein/todolist-angular',
      demo: null,
      featured: false,
    },
    {
      title: 'To-Do List JavaScript',
      description: language === 'pt'
        ? 'To-Do List básica em JavaScript puro desenvolvida durante o Hiring Coders da VTEX com Gama Academy.'
        : 'Basic To-Do List in pure JavaScript developed during VTEX Hiring Coders with Gama Academy.',
      image: '/projects/todolist-js.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/olucasklein/gama-todolist',
      demo: null,
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projetos" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">
            {t('projects.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            {t('projects.title')} <span className="gradient-text">{t('projects.titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-lg">
            {t('projects.description')}
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden card-hover"
            >
              {/* Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
                {!project.image && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-30">
                      {index === 0 ? '🎾' : '🌐'}
                    </div>
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-theme-gradient text-white text-xs font-medium rounded-full">
                    {language === 'pt' ? 'Destaque' : 'Featured'}
                  </span>
                </div>

                {/* Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-xl font-semibold text-white mb-8 text-center">
          Outros Projetos
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-xl p-6 card-hover"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-theme-gradient-br transition-all">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>

              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-white">{project.title}</h4>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs text-gray-500"
                  >
                    {tech}{techIndex < 2 && project.technologies.length > 1 && ' •'}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/olucasklein"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-theme-gradient text-white font-medium rounded-xl hover:opacity-90 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Ver Mais no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
