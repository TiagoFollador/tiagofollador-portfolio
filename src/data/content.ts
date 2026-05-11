export type Locale = 'en' | 'pt'

export interface SiteContent {
  hero: {
    headline: string
    subheadline: string
    ctaProjects: string
    ctaDownloadCV: string
    locationBadge: string
  }
  about: {
    title: string
    paragraphs: string[]
  }
  experience: {
    title: string
    role: string
    company: string
    period: string
    description: string
    contributions: string[]
  }
  projects: {
    title: string
    privateBadge: string
    sideBadge: string
    contributionsLabel: string
    caseAngleLabel: string
  }
  skills: {
    title: string
    groups: {
      backend: string
      frontend: string
      databases: string
      integrations: string
      improving: string
    }
  }
  resume: {
    title: string
    description: string
    button: string
    note: string
  }
  contact: {
    title: string
    headline: string
  }
  nav: {
    about: string
    experience: string
    projects: string
    skills: string
    resume: string
    contact: string
  }
}

export const content: Record<Locale, SiteContent> = {
  en: {
    hero: {
      headline: 'Full Stack Software Engineer focused on TypeScript, APIs, integrations, and scalable web systems.',
      subheadline:
        'I build and maintain production web applications, working across backend and frontend with emphasis on API design, performance, messaging flows, and business-critical integrations.',
      ctaProjects: 'View projects',
      ctaDownloadCV: 'Download CV',
      locationBadge: 'Curitiba, Brazil',
    },
    about: {
      title: 'About',
      paragraphs: [
        'I am Tiago Follador, a Full Stack Software Engineer based in Curitiba, Brazil. I work mainly with TypeScript, Node.js, NestJS, React, Next.js, GraphQL, REST APIs, PostgreSQL, and MySQL.',
        'My current professional experience is centered on logistics, messaging, ticketing, warehouse systems, API optimization, and external integrations. I have worked on production systems involving WhatsApp, email processing, WebSockets, Pub/Sub, cron jobs, and microservice-oriented GraphQL architecture.',
        'I am actively deepening my expertise in software architecture, cloud, testing, and AI-assisted development workflows.',
      ],
    },
    experience: {
      title: 'Experience',
      role: 'Full Stack Software Engineer',
      company: 'AIQIA / Nexance',
      period: '2024 – Present',
      description:
        'Worked on production web systems in logistics and communication contexts, contributing to backend, frontend, integrations, and system maintenance and evolution.',
      contributions: [
        'Maintained and evolved a ticketing and messaging platform used for internal and external communication.',
        'Participated in the transition from Flowly v1 to v2.',
        'Improved ticket and message-related API flows by reducing repeated queries and grouping required data before database access.',
        'Implemented message search and reference-based pagination for long conversation histories.',
        'Worked with WhatsApp and email integrations, including webhook processing, IMAP-based email reading, and asynchronous processing.',
        'Contributed to WMS flows using GraphQL federation, Apollo Router, Pub/Sub, Prisma, and PostgreSQL.',
      ],
    },
    projects: {
      title: 'Projects',
      privateBadge: 'Professional · Private',
      sideBadge: 'Side project concept',
      contributionsLabel: 'Contributions',
      caseAngleLabel: 'Technical highlight',
    },
    skills: {
      title: 'Skills',
      groups: {
        backend: 'Backend',
        frontend: 'Frontend',
        databases: 'Databases',
        integrations: 'Integrations & Async',
        improving: 'Currently improving',
      },
    },
    resume: {
      title: 'Resume',
      description: 'Download my CV to see my full professional history, education, and technical background.',
      button: 'Download CV',
      note: '',
    },
    contact: {
      title: 'Contact',
      headline: 'Need someone to build reliable APIs, integrations, and production-grade web systems? Let\'s talk.',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      resume: 'Resume',
      contact: 'Contact',
    },
  },
  pt: {
    hero: {
      headline: 'Engenheiro de Software Full Stack com foco em TypeScript, APIs, integrações e sistemas web escaláveis.',
      subheadline:
        'Construo e mantenho aplicações web em produção, atuando em backend e frontend com ênfase em design de APIs, performance, fluxos de mensagens e integrações críticas para o negócio.',
      ctaProjects: 'Ver projetos',
      ctaDownloadCV: 'Baixar CV',
      locationBadge: 'Curitiba, Brasil',
    },
    about: {
      title: 'Sobre',
      paragraphs: [
        'Sou Tiago Follador, Engenheiro de Software Full Stack baseado em Curitiba, Brasil. Trabalho principalmente com TypeScript, Node.js, NestJS, React, Next.js, GraphQL, APIs REST, PostgreSQL e MySQL.',
        'Minha experiência profissional atual é centrada em sistemas de logística, mensagens, tickets, WMS, otimização de APIs e integrações externas. Já atuei em sistemas em produção envolvendo WhatsApp, processamento de e-mails, WebSockets, Pub/Sub, cron jobs e arquitetura GraphQL orientada a microsserviços.',
        'Atualmente invisto continuamente em arquitetura de software, cloud, testes e fluxos de desenvolvimento assistidos por IA.',
      ],
    },
    experience: {
      title: 'Experiência',
      role: 'Engenheiro de Software Full Stack',
      company: 'AIQIA / Nexance',
      period: '2024 – Presente',
      description:
        'Atuei em sistemas web em produção no contexto de logística e comunicação, contribuindo com backend, frontend, integrações e manutenção e evolução de sistemas.',
      contributions: [
        'Mantive e evoluí uma plataforma de tickets e mensagens usada para comunicação interna e externa.',
        'Participei da transição do Flowly v1 para v2.',
        'Melhorei fluxos de API relacionados a tickets e mensagens, reduzindo queries repetidas e agrupando dados antes do acesso ao banco.',
        'Implementei busca de mensagens e paginação baseada em referência para históricos longos de conversas.',
        'Trabalhei com integrações de WhatsApp e e-mail, incluindo processamento de webhooks, leitura de e-mail via IMAP e processamento assíncrono.',
        'Contribuí para fluxos do WMS usando GraphQL federation, Apollo Router, Pub/Sub, Prisma e PostgreSQL.',
      ],
    },
    projects: {
      title: 'Projetos',
      privateBadge: 'Profissional · Privado',
      sideBadge: 'Projeto paralelo conceitual',
      contributionsLabel: 'Contribuições',
      caseAngleLabel: 'Destaque técnico',
    },
    skills: {
      title: 'Habilidades',
      groups: {
        backend: 'Backend',
        frontend: 'Frontend',
        databases: 'Bancos de dados',
        integrations: 'Integrações & Async',
        improving: 'Em evolução',
      },
    },
    resume: {
      title: 'Currículo',
      description: 'Baixe meu CV para ver meu histórico profissional completo, formação e background técnico.',
      button: 'Baixar CV',
      note: '',
    },
    contact: {
      title: 'Contato',
      headline: 'Precisa de alguém para construir APIs robustas, integrações e sistemas web prontos para produção? Vamos conversar.',
    },
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      skills: 'Habilidades',
      resume: 'Currículo',
      contact: 'Contato',
    },
  },
}
