import type { Locale } from './content'

export interface Project {
  id: string
  name: string
  type: 'professional-private' | 'side-concept'
  context: string
  description: string
  contributions: string[]
  stack: string[]
  caseAngle: string
}

export const projects: Record<Locale, Project[]> = {
  en: [
    {
      id: 'flowly',
      name: 'Flowly — Messaging and ticketing platform',
      type: 'professional-private',
      context: 'Business communication, tickets, WhatsApp, email, internal/external messaging',
      description:
        'Flowly is a platform for managing tickets and business communication through internal messages, WhatsApp, and email. The system helps organizations audit communication, open and close tickets, and centralize support and operation flows.',
      contributions: [
        'Maintained the project after launch and became one of the main developers during the transition from v1 to v2.',
        'Improved API performance by reducing repeated calls and batching required IDs before database access.',
        'Reworked message pagination to support loading messages from a reference point instead of only loading stacked pages.',
        'Implemented message search using optimized database queries.',
        'Worked on email and WhatsApp flows, including IMAP, Google/Azure email processing, webhook handling, and external messaging integration.',
        'Contributed to Dockerized development and production maintenance workflows.',
      ],
      stack: ['NestJS', 'TypeScript', 'React Router', 'TypeORM', 'MySQL', 'PostgreSQL', 'WebSockets', 'Docker', 'Baileys'],
      caseAngle:
        'From stacked message loading to reference-based pagination: reducing frontend load and improving long conversation navigation.',
    },
    {
      id: 'wms',
      name: 'WMS — Warehouse management system',
      type: 'professional-private',
      context: 'Warehouse management, receiving, storage, shipping, product registration',
      description:
        'WMS is a warehouse management system designed to support logistics operations, including cargo receiving, storage, and dispatching.',
      contributions: [
        'Worked in a microservice-oriented architecture using GraphQL federation and Apollo Router.',
        'Contributed to history/event service refactoring using Pub/Sub.',
        'Improved consistency in event consumption and ensured that the correct service handled history-related messages.',
        'Implemented polymorphic federated relationships across multiple entities.',
        'Worked mainly on product registration and related warehouse flows.',
      ],
      stack: ['TypeScript', 'GraphQL', 'Apollo Router', 'Prisma', 'PostgreSQL', 'React Router', 'Pub/Sub', 'Microservices'],
      caseAngle:
        'GraphQL federation in warehouse systems: handling polymorphic relationships across multiple services.',
    },
    {
      id: 'whatsapp-api',
      name: 'WhatsApp API — Messaging integration service',
      type: 'side-concept',
      context: 'WhatsApp integration API',
      description:
        'A simple API for WhatsApp integration using NestJS and Baileys, focused on abstracting message sending/receiving flows and webhook-like processing.',
      contributions: [
        'Provider adapter pattern for message normalization.',
        'Webhook ingestion and asynchronous message processing.',
        'Retry handling and structured logging.',
      ],
      stack: ['NestJS', 'TypeScript', 'Baileys'],
      caseAngle: 'Abstracting messaging provider complexity behind a clean adapter layer.',
    },
  ],
  pt: [
    {
      id: 'flowly',
      name: 'Flowly — Plataforma de mensagens e tickets',
      type: 'professional-private',
      context: 'Comunicação empresarial, tickets, WhatsApp, e-mail, mensagens internas e externas',
      description:
        'Flowly é uma plataforma para gestão de tickets e comunicação empresarial via mensagens internas, WhatsApp e e-mail. O sistema ajuda organizações a auditar comunicações, abrir e encerrar tickets, e centralizar fluxos de suporte e operação.',
      contributions: [
        'Mantive o projeto após o lançamento e me tornei um dos principais desenvolvedores durante a transição da v1 para v2.',
        'Melhorei a performance das APIs reduzindo chamadas repetidas e agrupando os IDs necessários antes do acesso ao banco de dados.',
        'Refiz a paginação de mensagens para suportar carregamento a partir de um ponto de referência, em vez de apenas páginas empilhadas.',
        'Implementei busca de mensagens com queries otimizadas no banco de dados.',
        'Trabalhei nos fluxos de e-mail e WhatsApp, incluindo IMAP, processamento de e-mails Google/Azure, tratamento de webhooks e integração de mensagens externas.',
        'Contribuí para fluxos de desenvolvimento Dockerizados e manutenção em produção.',
      ],
      stack: ['NestJS', 'TypeScript', 'React Router', 'TypeORM', 'MySQL', 'PostgreSQL', 'WebSockets', 'Docker', 'Baileys'],
      caseAngle:
        'De carregamento empilhado a paginação baseada em referência: reduzindo a carga no frontend e melhorando a navegação em históricos longos.',
    },
    {
      id: 'wms',
      name: 'WMS — Sistema de gerenciamento de armazém',
      type: 'professional-private',
      context: 'Gerenciamento de armazém, recebimento, armazenamento, expedição, cadastro de produtos',
      description:
        'WMS é um sistema de gerenciamento de armazém projetado para apoiar operações logísticas, incluindo recebimento de cargas, armazenamento e expedição.',
      contributions: [
        'Atuei em uma arquitetura orientada a microsserviços usando federação GraphQL e Apollo Router.',
        'Contribuí para a refatoração do serviço de histórico/eventos usando Pub/Sub.',
        'Melhorei a consistência no consumo de eventos e garanti que o serviço correto tratasse mensagens relacionadas ao histórico.',
        'Implementei relacionamentos federados polimórficos entre múltiplas entidades.',
        'Atuei principalmente no cadastro de produtos e fluxos relacionados ao armazém.',
      ],
      stack: ['TypeScript', 'GraphQL', 'Apollo Router', 'Prisma', 'PostgreSQL', 'React Router', 'Pub/Sub', 'Microservices'],
      caseAngle:
        'Federação GraphQL em sistemas de armazém: tratando relacionamentos polimórficos entre múltiplos serviços.',
    },
    {
      id: 'whatsapp-api',
      name: 'WhatsApp API — Serviço de integração de mensagens',
      type: 'side-concept',
      context: 'API de integração com WhatsApp',
      description:
        'Uma API simples para integração com WhatsApp usando NestJS e Baileys, focada em abstrair os fluxos de envio e recebimento de mensagens e processamento semelhante a webhooks.',
      contributions: [
        'Padrão de adapter de provedor para normalização de mensagens.',
        'Ingestão de webhooks e processamento assíncrono de mensagens.',
        'Tratamento de retentativas e logging estruturado.',
      ],
      stack: ['NestJS', 'TypeScript', 'Baileys'],
      caseAngle: 'Abstraindo a complexidade do provedor de mensagens por trás de uma camada de adapter limpa.',
    },
  ],
}
