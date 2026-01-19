'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.skills': 'Skills',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'nav.downloadCV': 'Download CV',
    'nav.language': 'Idioma',

    // Hero
    'hero.available': 'Disponível',
    'hero.greeting': 'Olá, eu sou',
    'hero.role': 'Desenvolvedor Front-End',
    'hero.description': 'Com mais de',
    'hero.experience': '4 anos de experiência',
    'hero.descriptionContinue': 'criando interfaces limpas, escaláveis e de alta qualidade. Atualmente estudando',
    'hero.descriptionEnd': 'para entregar experiências digitais ainda melhores.',
    'hero.viewProjects': 'Ver Projetos',
    'hero.contactMe': 'Entre em Contato',
    'hero.findMe': 'Me encontre em',
    'hero.scroll': 'Scroll',

    // About
    'about.subtitle': 'Conheça-me',
    'about.title': 'Sobre',
    'about.titleHighlight': 'Mim',
    'about.description1': 'Sou um desenvolvedor Front-End apaixonado por criar interfaces limpas, escaláveis e de alta qualidade. Com mais de 4 anos de experiência, tenho trabalhado com diversas tecnologias do ecossistema JavaScript.',
    'about.description2': 'Atualmente trabalho na Tuna Pagamentos, onde desenvolvo interfaces com React/Angular e TypeScript. Em paralelo, estudo UX/UI Design para criar experiências digitais cada vez melhores.',
    'about.stats.experience': 'Anos de Experiência',
    'about.stats.projects': 'Projetos Concluídos',
    'about.stats.technologies': 'Tecnologias',
    'about.stats.commits': 'Commits',
    'about.education': 'Formação Acadêmica',
    'about.degree': 'Sistemas de Informação na UNESA',
    'about.studying': 'Estudando UX/UI Design',

    // Skills
    'skills.subtitle': 'Habilidades',
    'skills.title': 'Minhas',
    'skills.titleHighlight': 'Skills',
    'skills.titleEnd': 'e Tecnologias',
    'skills.description': 'Tecnologias e ferramentas que utilizo no dia a dia para criar experiências digitais incríveis.',
    'skills.frontend': 'Front-End',
    'skills.styling': 'Estilização',
    'skills.backend': 'Back-End & Tools',
    'skills.learning': 'Aprendendo',

    // Experience
    'experience.subtitle': 'Trajetória',
    'experience.title': 'Minha',
    'experience.titleHighlight': 'Experiência',
    'experience.description': 'Uma jornada de aprendizado contínuo e evolução profissional no mundo do desenvolvimento web.',
    'experience.current': 'Presente',
    'experience.tuna.junior.role': 'Desenvolvedor Front-End Junior',
    'experience.tuna.junior.description': 'Desenvolvimento de interfaces modernas e escaláveis. Trabalho com React, Angular, TypeScript, Tailwind CSS e integração com APIs REST, focando em melhoria contínua e qualidade do código.',
    'experience.tuna.intern.role': 'Estagiário de Desenvolvimento Front-End',
    'experience.tuna.intern.description': 'Início da jornada na Tuna, desenvolvendo componentes React e aprendendo boas práticas de desenvolvimento. Participação em projetos reais e crescimento constante da stack de tecnologias.',
    'experience.admin.role': 'Assistente Administrativo',
    'experience.admin.description': 'Atuação no setor de administração da empresa, utilização de CRM, manutenção de estoque, análise e impressão de relatórios e atendimento ao cliente por telefone, WhatsApp Business, Email e Chat.',
    'experience.freelance.role': 'Desenvolvedor Front-End',
    'experience.freelance.description': 'Desenvolvimento de sites institucionais, landing pages e aplicações web para diversos clientes. Foco em responsividade e experiência do usuário.',

    // Projects
    'projects.subtitle': 'Trabalhos',
    'projects.title': 'Meus',
    'projects.titleHighlight': 'Projetos',
    'projects.description': 'Alguns dos projetos que desenvolvi ao longo da minha jornada como desenvolvedor.',
    'projects.viewCode': 'Ver Código',
    'projects.viewDemo': 'Ver Demo',
    'projects.techscore.description': 'Aplicativo mobile para contagem de pontos em partidas de tênis e beach tennis. Interface intuitiva com suporte a diferentes modos de jogo.',
    'projects.seusite.description': 'Plataforma whitelabel para criação de sites institucionais. Sistema flexível que permite personalização completa para diferentes clientes.',

    // Contact
    'contact.subtitle': 'Fale Comigo',
    'contact.title': 'Entre em',
    'contact.titleHighlight': 'Contato',
    'contact.description': 'Tem um projeto em mente ou quer trocar uma ideia? Entre em contato e vamos conversar!',
    'contact.info': 'Informações de Contato',
    'contact.location': 'Localização',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Assunto',
    'contact.form.message': 'Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.namePlaceholder': 'Seu nome',
    'contact.form.emailPlaceholder': 'seu@email.com',
    'contact.form.subjectPlaceholder': 'Assunto da mensagem',
    'contact.form.messagePlaceholder': 'Sua mensagem...',

    // Footer
    'footer.description': 'Desenvolvedor Front-End apaixonado por criar interfaces limpas, escaláveis e de alta qualidade.',
    'footer.navigation': 'Navegação',
    'footer.social': 'Redes Sociais',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.madeWith': 'Feito com',
    'footer.by': 'por',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.downloadCV': 'Download CV',
    'nav.language': 'Language',

    // Hero
    'hero.available': 'Available',
    'hero.greeting': 'Hello, I am',
    'hero.role': 'Front-End Developer',
    'hero.description': 'With over',
    'hero.experience': '4 years of experience',
    'hero.descriptionContinue': 'creating clean, scalable, and high-quality interfaces. Currently studying',
    'hero.descriptionEnd': 'to deliver even better digital experiences.',
    'hero.viewProjects': 'View Projects',
    'hero.contactMe': 'Contact Me',
    'hero.findMe': 'Find me on',
    'hero.scroll': 'Scroll',

    // About
    'about.subtitle': 'Get to Know Me',
    'about.title': 'About',
    'about.titleHighlight': 'Me',
    'about.description1': 'I am a Front-End developer passionate about creating clean, scalable, and high-quality interfaces. With over 4 years of experience, I have worked with various technologies in the JavaScript ecosystem.',
    'about.description2': 'I currently work at Tuna Pagamentos, where I develop interfaces using React/Angular and TypeScript. In parallel, I study UX/UI Design to create increasingly better digital experiences.',
    'about.stats.experience': 'Years of Experience',
    'about.stats.projects': 'Completed Projects',
    'about.stats.technologies': 'Technologies',
    'about.stats.commits': 'Commits',
    'about.education': 'Academic Education',
    'about.degree': 'Information Systems at UNESA',
    'about.studying': 'Studying UX/UI Design',

    // Skills
    'skills.subtitle': 'Abilities',
    'skills.title': 'My',
    'skills.titleHighlight': 'Skills',
    'skills.titleEnd': '& Technologies',
    'skills.description': 'Technologies and tools I use daily to create amazing digital experiences.',
    'skills.frontend': 'Front-End',
    'skills.styling': 'Styling',
    'skills.backend': 'Back-End & Tools',
    'skills.learning': 'Learning',

    // Experience
    'experience.subtitle': 'Career',
    'experience.title': 'My',
    'experience.titleHighlight': 'Experience',
    'experience.description': 'A journey of continuous learning and professional growth in the web development world.',
    'experience.current': 'Present',
    'experience.tuna.junior.role': 'Junior Front-End Developer',
    'experience.tuna.junior.description': 'Development of modern and scalable interfaces. Working with React, Angular, TypeScript, Tailwind CSS, and REST API integration, focusing on continuous improvement and code quality.',
    'experience.tuna.intern.role': 'Front-End Development Intern',
    'experience.tuna.intern.description': 'Beginning of the journey at Tuna, developing React components and learning best development practices. Participation in real projects and constant growth of the technology stack.',
    'experience.admin.role': 'Administrative Assistant',
    'experience.admin.description': 'Worked in the company\'s administration sector, using CRM, maintaining inventory, analyzing and printing reports, and customer service via phone, WhatsApp Business, Email, and Chat.',
    'experience.freelance.role': 'Front-End Developer',
    'experience.freelance.description': 'Development of institutional websites, landing pages, and web applications for various clients. Focus on responsiveness and user experience.',

    // Projects
    'projects.subtitle': 'Works',
    'projects.title': 'My',
    'projects.titleHighlight': 'Projects',
    'projects.description': 'Some of the projects I developed throughout my journey as a developer.',
    'projects.viewCode': 'View Code',
    'projects.viewDemo': 'View Demo',
    'projects.techscore.description': 'Mobile app for scoring tennis and beach tennis matches. Intuitive interface with support for different game modes.',
    'projects.seusite.description': 'Whitelabel platform for creating institutional websites. Flexible system that allows complete customization for different clients.',

    // Contact
    'contact.subtitle': 'Get in Touch',
    'contact.title': 'Get in',
    'contact.titleHighlight': 'Contact',
    'contact.description': 'Have a project in mind or want to chat? Get in touch and let\'s talk!',
    'contact.info': 'Contact Information',
    'contact.location': 'Location',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.subjectPlaceholder': 'Message subject',
    'contact.form.messagePlaceholder': 'Your message...',

    // Footer
    'footer.description': 'Front-End Developer passionate about creating clean, scalable, and high-quality interfaces.',
    'footer.navigation': 'Navigation',
    'footer.social': 'Social Media',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.by': 'by',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    const savedLang = localStorage.getItem('language') as Language;
    
    if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
      setLanguage(savedLang);
    } else if (browserLang === 'en') {
      setLanguage('en');
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: 'pt', setLanguage: handleSetLanguage, t }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
