'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      company: 'Tuna Pagamentos',
      role: t('experience.tuna.junior.role'),
      period: `2024 - ${t('experience.current')}`,
      location: 'Remoto',
      description: t('experience.tuna.junior.description'),
      technologies: ['React', 'Angular', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
      current: true,
    },
    {
      company: 'Tuna Pagamentos',
      role: t('experience.tuna.intern.role'),
      period: 'Ago 2022 - 2024',
      location: 'Remoto',
      description: t('experience.tuna.intern.description'),
      technologies: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML/CSS'],
      current: false,
    },
    {
      company: 'Projetos Freelancer',
      role: t('experience.freelance.role'),
      period: `2020 - ${t('experience.current')}`,
      location: 'Remoto',
      description: t('experience.freelance.description'),
      technologies: ['React', 'Next.js', 'Angular', 'Node.js'],
      current: true,
    },
    {
      company: 'Irmãos Klein Confecção Moda Íntima',
      role: t('experience.admin.role'),
      period: 'Out 2021 - Jul 2022',
      location: 'Rio de Janeiro, Brasil',
      description: t('experience.admin.description'),
      technologies: ['CRM', 'WhatsApp Business', 'Excel', 'Gestão'],
      current: false,
    },
  ];

  return (
    <section id="experiencia" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-pink-400 font-medium text-sm uppercase tracking-wider">
            {t('experience.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            {t('experience.title')} <span className="gradient-text">{t('experience.titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-lg">
            {t('experience.description')}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-pink-500" />

            {/* Timeline Items */}
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 border-4 border-[#0a0a0a]">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping" />
                  )}
                </div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass rounded-2xl p-6 card-hover">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                            {t('experience.current')}
                          </span>
                        )}
                        <span className="text-gray-500 text-sm">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-indigo-400 font-medium">{exp.company}</p>
                      <span className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
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

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Interessado em saber mais sobre minha experiência?
          </p>
          <a
            href="https://www.linkedin.com/in/olucasklein/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass text-white font-medium rounded-xl hover:bg-white/10 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            Ver LinkedIn Completo
          </a>
        </div>
      </div>
    </section>
  );
}
