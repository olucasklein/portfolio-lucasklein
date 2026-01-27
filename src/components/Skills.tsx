'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const skills = [
    {
      category: t('skills.frontend'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      items: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'Angular', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
      ],
      learning: false,
    },
    {
      category: t('skills.styling'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      items: [
        { name: 'Tailwind CSS', level: 95 },
        { name: 'CSS3 / SASS', level: 90 },
        { name: 'Styled Components', level: 85 },
        { name: 'Material UI', level: 80 },
        { name: 'Figma', level: 75 },
      ],
      learning: false,
    },
    {
      category: t('skills.backend'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      items: [
        { name: 'Node.js', level: 75 },
        { name: 'Git / GitHub', level: 100 },
        { name: 'REST APIs', level: 65 },
        { name: 'Java', level: 35 },
        { name: 'Python', level: 35 },
      ],
      learning: true,
    },
  ];

  const technologies = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Angular', icon: '🅰️' },
    { name: 'Tailwind', icon: '💨' },
    { name: 'Node.js', icon: '💚' },
    { name: 'Git', icon: '📦' },
  ];

  return (
    <section id="skills" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-violet-400 font-medium text-sm uppercase tracking-wider">
            {t('skills.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            {t('skills.title')} <span className="gradient-text">{t('skills.titleHighlight')}</span> {t('skills.titleEnd')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('skills.description')}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-theme-gradient-br rounded-xl flex items-center justify-center text-white">
                  {skillGroup.icon}
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
                  {skillGroup.learning && (
                    <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs rounded-full">
                      {t('skills.learning')}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-theme-gradient rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="relative overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
          
          <div className="flex gap-6 animate-[marquee_30s_linear_infinite]">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 glass px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-white font-medium whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">{t('skills.softSkills')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
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
              <span
                key={index}
                className="px-4 py-2 glass rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
