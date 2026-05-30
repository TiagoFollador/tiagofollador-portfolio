import type { Locale } from './content'

export interface Project {
  id: string
  name: string
  businessHeadline: string
  whatItDoes: string
  contributions: string[]
  impact: string
  caseAngle: string
  stack: string[]
  label?: string
  repo?: string
  metrics?: string[]
  caseStudy?: {
    problem: string
    approach: string
    result: string
  }
}

export const projects: Record<Locale, Project[]> = {
  en: [
    {
      id: 'flowly',
      name: 'Flowly',
      businessHeadline:
        'Customer support and business messaging platform — tickets, WhatsApp, email, all in one place.',
      whatItDoes:
        'A communication hub for internal and external business operations. Teams use it to manage support tickets, exchange messages over WhatsApp and email, and keep a full audit trail of every interaction.',
      contributions: [
        'Took ownership post-launch and became core maintainer during the v1 to v2 migration.',
        'Drove three API-layer performance improvements: reference-based message pagination to cut load on long threads, batch ID resolution before database access to eliminate N+1 patterns, and database-level full-text search — keeping response times low under daily production load.',
        'Integrated WhatsApp (Baileys) and email (IMAP + Google/Azure) with webhook ingestion and async processing.',
        'Maintained Dockerized development and production environments.',
      ],
      impact:
        'Long conversations load without lag, support flows stay responsive under daily use, and every interaction stays searchable and auditable for the teams that depend on it.',
      caseAngle:
        'From stacked message loading to reference-based pagination: reducing frontend load and improving long conversation navigation.',
      stack: ['NestJS', 'TypeScript', 'React Router', 'TypeORM', 'MySQL', 'PostgreSQL', 'WebSockets', 'Docker', 'Baileys'],
      caseStudy: {
        problem:
          'Long conversations loaded page by page from the start, so opening a busy ticket meant stacking dozens of requests — the UI stuttered and jumping to an old message was slow.',
        approach:
          'Replaced offset-based pagination with reference-based loading: fetch a window around a given message ID and page outward in both directions, and batch ID resolution before hitting the database to cut N+1 queries.',
        result:
          'Long threads open and scroll smoothly, jumping to any point in history is instant, and the API does far less repeated work under daily support load.',
      },
    },
    {
      id: 'wms',
      name: 'WMS',
      businessHeadline:
        'Warehouse management system for logistics operations — receiving, storage, dispatch.',
      whatItDoes:
        'A warehouse management system that supports logistics operations end to end — receiving cargo, tracking storage, and dispatching orders.',
      contributions: [
        'Worked in a microservice-oriented architecture using GraphQL federation and Apollo Router.',
        'Contributed to history/event service refactoring using Pub/Sub.',
        'Improved consistency in event consumption and ensured the correct service handled history-related messages.',
        'Implemented polymorphic federated relationships across multiple entities.',
        'Worked mainly on product registration and related warehouse flows.',
      ],
      impact:
        'Warehouse events stay consistent across services, and product and history flows keep working correctly as the operation scales.',
      caseAngle:
        'GraphQL federation in warehouse systems: handling polymorphic relationships across multiple services.',
      stack: ['TypeScript', 'GraphQL', 'Apollo Router', 'Prisma', 'PostgreSQL', 'React Router', 'Pub/Sub', 'Microservices'],
    },
    {
      id: 'whatsapp-api',
      name: 'WhatsApp API',
      label: 'Personal Project / Open Source Experiment',
      businessHeadline:
        'Self-built WhatsApp integration library — clean adapter pattern, async processing.',
      whatItDoes:
        'A small library that wraps WhatsApp messaging behind a clean interface, handling sending, receiving, and webhook-style processing.',
      contributions: [
        'Provider adapter pattern that normalizes messages behind a single interface.',
        'Webhook ingestion with asynchronous message processing and retries.',
      ],
      impact:
        'Keeps messaging-provider details isolated, so the rest of an app can send and receive without knowing the underlying API.',
      caseAngle: 'Abstracting messaging provider complexity behind a clean adapter layer.',
      stack: ['NestJS', 'TypeScript', 'Baileys'],
    },
  ],
  pt: [
    {
      id: 'flowly',
      name: 'Flowly',
      businessHeadline:
        'Plataforma de atendimento ao cliente e mensagens corporativas — tickets, WhatsApp e e-mail, tudo em um só lugar.',
      whatItDoes:
        'Um hub de comunicação para operações internas e externas. Times o utilizam para gerenciar tickets de suporte, trocar mensagens via WhatsApp e e-mail e manter um histórico auditável de cada interação.',
      contributions: [
        'Assumi o projeto após o lançamento e me tornei mantenedor principal durante a migração da v1 para a v2.',
        'Entreguei três melhorias de performance na camada de API: paginação de mensagens por referência para reduzir a carga em históricos longos, agrupamento de IDs antes do acesso ao banco para eliminar padrões N+1 e busca textual no nível do banco — mantendo os tempos de resposta baixos sob a carga de produção diária.',
        'Integrei WhatsApp (Baileys) e e-mail (IMAP + Google/Azure) com ingestão de webhooks e processamento assíncrono.',
        'Mantive ambientes de desenvolvimento e produção Dockerizados.',
      ],
      impact:
        'Conversas longas carregam sem travar, os fluxos de suporte continuam responsivos no uso diário e cada interação permanece pesquisável e auditável para os times que dependem dela.',
      caseAngle:
        'De carregamento empilhado a paginação baseada em referência: reduzindo a carga no frontend e melhorando a navegação em históricos longos.',
      stack: ['NestJS', 'TypeScript', 'React Router', 'TypeORM', 'MySQL', 'PostgreSQL', 'WebSockets', 'Docker', 'Baileys'],
      caseStudy: {
        problem:
          'Conversas longas carregavam página a página desde o início, então abrir um ticket movimentado empilhava dezenas de requisições — a UI travava e pular para uma mensagem antiga era lento.',
        approach:
          'Substituí a paginação por offset por carregamento baseado em referência: busco uma janela em torno de um ID de mensagem e pagino nas duas direções, agrupando a resolução de IDs antes de acessar o banco para cortar queries N+1.',
        result:
          'Históricos longos abrem e rolam de forma suave, pular para qualquer ponto é instantâneo e a API faz muito menos trabalho repetido sob a carga diária do suporte.',
      },
    },
    {
      id: 'wms',
      name: 'WMS',
      businessHeadline:
        'Sistema de gerenciamento de armazém para operações logísticas — recebimento, armazenamento, expedição.',
      whatItDoes:
        'Um sistema de gerenciamento de armazém que apoia operações logísticas de ponta a ponta — recebimento de cargas, controle de armazenamento e expedição de pedidos.',
      contributions: [
        'Atuei em uma arquitetura orientada a microsserviços usando federação GraphQL e Apollo Router.',
        'Contribuí para a refatoração do serviço de histórico/eventos usando Pub/Sub.',
        'Melhorei a consistência no consumo de eventos e garanti que o serviço correto tratasse mensagens relacionadas ao histórico.',
        'Implementei relacionamentos federados polimórficos entre múltiplas entidades.',
        'Atuei principalmente no cadastro de produtos e fluxos relacionados ao armazém.',
      ],
      impact:
        'Os eventos do armazém permanecem consistentes entre os serviços, e os fluxos de produtos e histórico continuam funcionando corretamente conforme a operação cresce.',
      caseAngle:
        'Federação GraphQL em sistemas de armazém: tratando relacionamentos polimórficos entre múltiplos serviços.',
      stack: ['TypeScript', 'GraphQL', 'Apollo Router', 'Prisma', 'PostgreSQL', 'React Router', 'Pub/Sub', 'Microservices'],
    },
    {
      id: 'whatsapp-api',
      name: 'WhatsApp API',
      label: 'Projeto Pessoal / Experimento Open Source',
      businessHeadline:
        'Biblioteca própria de integração com WhatsApp — padrão adapter limpo, processamento assíncrono.',
      whatItDoes:
        'Uma pequena biblioteca que encapsula as mensagens do WhatsApp atrás de uma interface limpa, tratando envio, recebimento e processamento no estilo webhook.',
      contributions: [
        'Padrão adapter de provedor que normaliza mensagens atrás de uma única interface.',
        'Ingestão de webhooks com processamento assíncrono de mensagens e retentativas.',
      ],
      impact:
        'Mantém os detalhes do provedor de mensagens isolados, para que o resto da aplicação possa enviar e receber sem conhecer a API subjacente.',
      caseAngle: 'Abstraindo a complexidade do provedor de mensagens por trás de uma camada de adapter limpa.',
      stack: ['NestJS', 'TypeScript', 'Baileys'],
    },
  ],
}
