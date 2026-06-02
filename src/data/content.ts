export type Locale = 'en' | 'pt'

export interface SiteContent {
  hero: {
    subline: string
    body: string
    terminalLines: string[]
    terminalLinesBusiness: string[]
    ctaProjects: string
    ctaDownloadCV: string
    ctaSeeBuilt: string
    locationBadge: string
    availabilityBadge: string
  }
  about: {
    title: string
    human: string
    technical: string
    outcomes: string
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
    whatItDoesLabel: string
    contributionsLabel: string
    impactLabel: string
    caseAngleLabel: string
    sideLabel: string
    metricsLabel: string
    codeLabel: string
    visitLabel: string
    caseStudyLabels: { problem: string; approach: string; result: string }
  }
  skills: {
    title: string
    capabilitiesTitle: string
    groups: {
      backend: string
      frontend: string
      databases: string
      integrations: string
      improving: string
    }
    capabilities: { label: string; description: string }[]
  }
  contact: {
    title: string
    headline: string
    availability: string
    downloadCV: string
    form: {
      name: string
      email: string
      message: string
      send: string
      hint: string
    }
  }
  testimonials: {
    title: string
    items: { quote: string; author: string; role: string }[]
  }
  nav: {
    about: string
    experience: string
    projects: string
    skills: string
    contact: string
    forDevs: string
    forLeaders: string
  }
}

export const content: Record<Locale, SiteContent> = {
  en: {
    hero: {
      subline: 'Full Stack Engineer — I build the systems that keep businesses running.',
      body: 'From messaging platforms to warehouse logistics, I design and ship production-grade APIs, integrations, and web applications that handle real scale and real complexity.',
      terminalLines: [
        'Full Stack Engineer · TypeScript · NestJS · GraphQL',
        '2y production experience · Curitiba, Brazil',
        'Currently: messaging platforms, WMS, API architecture',
      ],
      terminalLinesBusiness: [
        'Full Stack Engineer · Curitiba, Brazil',
        'I build the systems businesses rely on',
        'Messaging platforms · logistics · integrations',
      ],
      ctaProjects: 'View projects',
      ctaDownloadCV: 'Download CV',
      ctaSeeBuilt: 'See what I built',
      locationBadge: 'Curitiba, Brazil',
      availabilityBadge: 'Available for freelance',
    },
    about: {
      title: 'About',
      human:
        'I am the kind of engineer who does not just ship features — I care about what happens after deploy. Most of my work lives in the space between systems: APIs that need to be fast, integrations that cannot fail, and products used by real people under real load.',
      technical:
        'My current stack centers on TypeScript + NestJS for backend services, React/Next.js for frontend, and PostgreSQL as primary database. I have worked with GraphQL federation (Apollo Router), Pub/Sub event flows, WebSocket real-time layers, and IMAP-based email processing in production.',
      outcomes:
        'In practice, that means systems that stay fast as data grows, integrations that keep working when third-party services don\'t, and features that hold up once real users depend on them every day.',
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
      whatItDoesLabel: 'What it does',
      contributionsLabel: 'What I built',
      impactLabel: 'Impact',
      caseAngleLabel: 'Technical highlight',
      sideLabel: 'Personal Project / Open Source Experiment',
      metricsLabel: 'By the numbers',
      codeLabel: 'Code',
      visitLabel: 'Visit site',
      caseStudyLabels: { problem: 'Problem', approach: 'Approach', result: 'Result' },
    },
    skills: {
      title: 'Skills',
      capabilitiesTitle: 'What I can build for you',
      groups: {
        backend: 'Backend',
        frontend: 'Frontend',
        databases: 'Databases',
        integrations: 'Integrations & Async',
        improving: 'Expanding into',
      },
      capabilities: [
        {
          label: 'Backend & APIs',
          description: 'Reliable services and APIs that stay fast as data and traffic grow.',
        },
        {
          label: 'System integrations',
          description: 'Connecting third-party systems — messaging, email, external services — so they keep working when others fail.',
        },
        {
          label: 'Web applications',
          description: 'Production web apps that real teams use every day, from interface to database.',
        },
        {
          label: 'Performance & scale',
          description: 'Finding and removing bottlenecks so systems hold up under real load.',
        },
        {
          label: 'Real-time & async',
          description: 'Live updates, event flows, and background processing that handle work behind the scenes.',
        },
      ],
    },
    contact: {
      title: 'Contact',
      headline:
        'If you are building something that needs to work reliably — APIs, integrations, a web app — let\'s talk. I reply within 24 hours.',
      availability: 'Available for freelance and contract projects alongside my full-time role.',
      downloadCV: 'Download CV',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send message',
        hint: 'This opens your email client with the message ready to send.',
      },
    },
    testimonials: {
      title: 'What people say',
      items: [],
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      forDevs: 'Technical',
      forLeaders: 'Business',
    },
  },
  pt: {
    hero: {
      subline: 'Engenheiro Full Stack — construo os sistemas que mantêm negócios funcionando.',
      body: 'De plataformas de mensagens a logística de armazéns, projeto e entrego APIs, integrações e aplicações web prontas para produção que lidam com escala e complexidade reais.',
      terminalLines: [
        'Engenheiro Full Stack · TypeScript · NestJS · GraphQL',
        '2 anos de experiência em produção · Curitiba, Brasil',
        'Atualmente: plataformas de mensagens, WMS, arquitetura de APIs',
      ],
      terminalLinesBusiness: [
        'Engenheiro Full Stack · Curitiba, Brasil',
        'Construo os sistemas em que o negócio confia',
        'Plataformas de mensagens · logística · integrações',
      ],
      ctaProjects: 'Ver projetos',
      ctaDownloadCV: 'Baixar CV',
      ctaSeeBuilt: 'Veja o que construí',
      locationBadge: 'Curitiba, Brasil',
      availabilityBadge: 'Disponível para freelance',
    },
    about: {
      title: 'Sobre',
      human:
        'Sou o tipo de engenheiro que não apenas entrega features — me importo com o que acontece depois do deploy. A maior parte do meu trabalho vive no espaço entre os sistemas: APIs que precisam ser rápidas, integrações que não podem falhar e produtos usados por pessoas reais sob carga real.',
      technical:
        'Minha stack atual gira em torno de TypeScript + NestJS no backend, React/Next.js no frontend e PostgreSQL como banco principal. Trabalhei com federação GraphQL (Apollo Router), fluxos de eventos Pub/Sub, camadas de tempo real com WebSocket e processamento de e-mail via IMAP em produção.',
      outcomes:
        'Na prática, isso significa sistemas que continuam rápidos conforme os dados crescem, integrações que seguem funcionando quando serviços de terceiros falham e features que se sustentam quando usuários reais dependem delas todo dia.',
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
      whatItDoesLabel: 'O que faz',
      contributionsLabel: 'O que construí',
      impactLabel: 'Impacto',
      caseAngleLabel: 'Destaque técnico',
      sideLabel: 'Projeto Pessoal / Experimento Open Source',
      metricsLabel: 'Em números',
      codeLabel: 'Código',
      visitLabel: 'Visitar site',
      caseStudyLabels: { problem: 'Problema', approach: 'Abordagem', result: 'Resultado' },
    },
    skills: {
      title: 'Habilidades',
      capabilitiesTitle: 'O que posso construir para você',
      groups: {
        backend: 'Backend',
        frontend: 'Frontend',
        databases: 'Bancos de dados',
        integrations: 'Integrações & Async',
        improving: 'Expandindo para',
      },
      capabilities: [
        {
          label: 'Backend & APIs',
          description: 'Serviços e APIs confiáveis que continuam rápidos conforme dados e tráfego crescem.',
        },
        {
          label: 'Integrações de sistemas',
          description: 'Conectar sistemas de terceiros — mensagens, e-mail, serviços externos — para que sigam funcionando quando outros falham.',
        },
        {
          label: 'Aplicações web',
          description: 'Aplicações web em produção que times reais usam todo dia, da interface ao banco.',
        },
        {
          label: 'Performance & escala',
          description: 'Encontrar e remover gargalos para que sistemas se sustentem sob carga real.',
        },
        {
          label: 'Tempo real & async',
          description: 'Atualizações ao vivo, fluxos de eventos e processamento em segundo plano que cuidam do trabalho nos bastidores.',
        },
      ],
    },
    contact: {
      title: 'Contato',
      headline:
        'Se você está construindo algo que precisa funcionar de forma confiável — APIs, integrações, uma aplicação web — vamos conversar. Respondo em até 24 horas.',
      availability: 'Disponível para projetos freelance e contratos, em paralelo ao meu trabalho full-time.',
      downloadCV: 'Baixar CV',
      form: {
        name: 'Nome',
        email: 'E-mail',
        message: 'Mensagem',
        send: 'Enviar mensagem',
        hint: 'Isto abre seu cliente de e-mail com a mensagem pronta para enviar.',
      },
    },
    testimonials: {
      title: 'O que dizem',
      items: [],
    },
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      skills: 'Habilidades',
      contact: 'Contato',
      forDevs: 'Visão técnica',
      forLeaders: 'Visão de negócio',
    },
  },
}
