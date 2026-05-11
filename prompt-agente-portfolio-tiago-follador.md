# Prompt para agente — Implementar portfólio online de Tiago Follador

Aja como um **Engenheiro de Software Sênior Frontend/Full Stack**, com forte experiência em **Next.js, TypeScript, Tailwind CSS, acessibilidade, SEO técnico, design system leve e portfólios profissionais para desenvolvedores**.

Sua tarefa é **desenvolver o portfólio online profissional de Tiago Follador**, usando os dados abaixo como fonte principal. O objetivo é entregar um site público, responsivo, rápido, limpo e tecnicamente bem estruturado, pronto para deploy na Vercel e conexão com o domínio `tiagofollador.com`.

Priorize **clareza profissional, credibilidade técnica, performance, acessibilidade, responsividade e facilidade de manutenção**. Evite exageros visuais, animações excessivas, claims inflados e qualquer exposição de informação confidencial de empresas/projetos privados.

---

## 1. Contexto do projeto

Este projeto é um portfólio pessoal/profissional para **Tiago Follador**, com foco em fortalecer sua presença profissional como desenvolvedor/engenheiro de software.

### Objetivo principal

Criar um site de portfólio que comunique rapidamente:

- quem é Tiago Follador;
- qual posicionamento profissional ele quer transmitir;
- quais tecnologias domina ou utiliza;
- quais experiências reais em produção possui;
- quais projetos profissionais demonstram sua capacidade técnica;
- como entrar em contato;
- como acessar GitHub, LinkedIn e currículo.

### Público-alvo

- Recrutadores técnicos;
- Tech leads;
- empresas brasileiras e internacionais;
- possíveis clientes de freelas;
- profissionais avaliando capacidade técnica pelo GitHub/portfólio.

### Posicionamento profissional desejado

Use como headline principal:

> Full Stack Software Engineer focused on TypeScript, APIs, integrations, and scalable web systems.

Versão PT-BR:

> Engenheiro de Software Full Stack com foco em TypeScript, APIs, integrações, performance e sistemas web escaláveis.

Não posicione Tiago como “Software Architect” no topo do site. Arquitetura deve aparecer como área de evolução e força técnica em desenvolvimento, não como título principal.

---

## 2. Stack obrigatória recomendada

Use:

- Next.js com App Router;
- TypeScript;
- Tailwind CSS;
- React;
- componentes reutilizáveis;
- design responsivo mobile-first;
- metadata nativa do Next.js;
- deploy-ready para Vercel.

Pode usar, se fizer sentido:

- shadcn/ui;
- Framer Motion para animações sutis;
- lucide-react para ícones;
- clsx/tailwind-merge para composição de classes.

Evite:

- backend desnecessário;
- banco de dados;
- CMS nesta primeira versão;
- excesso de dependências;
- animações pesadas;
- design poluído;
- textos genéricos de IA.

---

## 3. Comandos esperados

Se o projeto ainda não existir, crie com:

```bash
npx create-next-app@latest tiagofollador-portfolio
```

Escolhas recomendadas:

```txt
TypeScript: Yes
ESLint: Yes
Tailwind CSS: Yes
src/ directory: Yes
App Router: Yes
Turbopack: Yes
Import alias: Yes
```

Depois rode:

```bash
npm run dev
npm run lint
npm run build
```

O projeto deve funcionar localmente em:

```txt
http://localhost:3000
```

---

## 4. Identidade pública

### Dados pessoais públicos

Use somente estes dados públicos:

```txt
Nome profissional: Tiago Follador
Nome completo: Tiago de Brito Follador
Localização pública: Curitiba, Paraná, Brazil
Email público: tiagofollador97@gmail.com
GitHub: https://github.com/TiagoFollador
LinkedIn: https://www.linkedin.com/in/tiago-de-brito-follador-30313126a/
Domínio pretendido: https://tiagofollador.com
```

### Dados que NÃO devem aparecer no site

Não incluir:

- endereço residencial;
- telefone pessoal;
- documentos;
- dados privados de empresa;
- links de repositórios privados;
- informações internas da AIQIA/Nexance;
- detalhes técnicos proprietários que possam violar confidencialidade.

---

## 5. Direção visual

Crie um visual:

- dark mode como padrão;
- minimalista;
- profissional;
- com estética sutil de terminal/dev;
- tipografia forte;
- cards bem organizados;
- boa hierarquia visual;
- animações discretas, se usar Framer Motion;
- responsivo em celular, tablet e desktop.

Inspiração de estilo:

```txt
Dark portfolio + clean SaaS + terminal/dev accent + technical credibility.
```

Evite visual “júnior”, colorido demais ou cheio de badges sem contexto.

---

## 6. Estrutura obrigatória do site

Implemente uma landing page com estas seções, nesta ordem:

1. Hero
2. About
3. Experience
4. Projects
5. Skills
6. Resume
7. Contact

Opcional, se ficar bem estruturado:

- Case study preview;
- Architecture notes placeholder;
- bilingual toggle PT/EN.

A primeira versão pode ser single page. Não crie blog agora.

---

## 7. Conteúdo obrigatório por seção

### 7.1 Hero

Deve conter:

- nome: Tiago Follador;
- headline principal em inglês;
- subtítulo curto;
- CTAs claros;
- links para GitHub, LinkedIn, currículo e contato.

Texto base:

```txt
Full Stack Software Engineer focused on TypeScript, APIs, integrations, and scalable web systems.
```

Subheadline:

```txt
I build and maintain production web applications, working across backend and frontend with emphasis on API design, performance, messaging flows, and business-critical integrations.
```

CTAs:

```txt
View projects
Download CV
GitHub
LinkedIn
```

---

### 7.2 About

Texto base:

```txt
I am Tiago Follador, a Full Stack Software Engineer based in Curitiba, Brazil. I work mainly with TypeScript, Node.js, NestJS, React, Next.js, GraphQL, REST APIs, PostgreSQL, and MySQL.

My current professional experience is centered on logistics, messaging, ticketing, warehouse systems, API optimization, and external integrations. I have worked on production systems involving WhatsApp, email processing, WebSockets, Pub/Sub, cron jobs, and microservice-oriented GraphQL architecture.

I am currently expanding my foundation in software architecture, cloud, testing, and AI-assisted development workflows.
```

Pode incluir versão PT-BR se implementar toggle:

```txt
Sou Tiago Follador, Engenheiro de Software Full Stack baseado em Curitiba, Brasil. Trabalho principalmente com TypeScript, Node.js, NestJS, React, Next.js, GraphQL, APIs REST, PostgreSQL e MySQL.

Minha experiência profissional atual é centrada em sistemas de logística, mensagens, tickets, WMS, otimização de APIs e integrações externas. Já atuei em sistemas em produção envolvendo WhatsApp, processamento de e-mails, WebSockets, Pub/Sub, cron jobs e arquitetura GraphQL orientada a microsserviços.

Atualmente estou fortalecendo minha base em arquitetura de software, cloud, testes e fluxos de desenvolvimento assistidos por IA.
```

---

### 7.3 Experience

Título:

```txt
Full Stack Software Engineer — AIQIA / Nexance
```

Descrição:

```txt
Worked on production web systems in logistics and communication contexts, contributing to backend, frontend, integrations, and system maintenance.
```

Bullets:

```txt
- Maintained and evolved a ticketing and messaging platform used for internal and external communication.
- Participated in the transition from Flowly v1 to v2.
- Improved ticket and message-related API flows by reducing repeated queries and grouping required data before database access.
- Implemented message search and reference-based pagination for long conversation histories.
- Worked with WhatsApp and email integrations, including webhook processing, IMAP-based email reading, and asynchronous processing.
- Contributed to WMS flows using GraphQL federation, Apollo Router, Pub/Sub, Prisma, and PostgreSQL.
```

Se houver seção PT-BR:

```txt
Engenheiro de Software Full Stack — AIQIA / Nexance

Atuei em sistemas web em produção no contexto de logística e comunicação, contribuindo com backend, frontend, integrações e sustentação de sistemas.
```

---

### 7.4 Projects

Os projetos Flowly e WMS são privados/profissionais. Trate como **professional private projects**. Não crie links falsos para repositórios. Não invente deploy.

#### Projeto 1 — Flowly

Nome:

```txt
Flowly — Messaging and ticketing platform
```

Tipo:

```txt
Professional private project
```

Contexto:

```txt
Business communication, tickets, WhatsApp, email, internal/external messaging
```

Descrição:

```txt
Flowly is a platform for managing tickets and business communication through internal messages, WhatsApp, and email. The system helps organizations audit communication, open and close tickets, and centralize support/operation flows.
```

Contribuições:

```txt
- Maintained the project after launch and became one of the main developers during the transition from v1 to v2.
- Improved API performance by reducing repeated calls and batching required IDs before database access.
- Reworked message pagination to support loading messages from a reference point instead of only loading stacked pages.
- Implemented message search using optimized database queries.
- Worked on email and WhatsApp flows, including IMAP, Google/Azure email processing, webhook handling, and external messaging integration.
- Contributed to Dockerized development and production maintenance workflows.
```

Stack:

```txt
NestJS · TypeScript · React Router · TypeORM · MySQL · PostgreSQL · WebSockets · Docker · Baileys · External messaging APIs
```

Case angle:

```txt
From stacked message loading to reference-based pagination: reducing frontend load and improving long conversation navigation.
```

#### Projeto 2 — WMS

Nome:

```txt
WMS — Warehouse management system
```

Tipo:

```txt
Professional private project
```

Contexto:

```txt
Warehouse management, receiving, storage, shipping, product registration
```

Descrição:

```txt
WMS is a warehouse management system designed to support logistics operations, including cargo receiving, storage, and dispatching.
```

Contribuições:

```txt
- Worked in a microservice-oriented architecture using GraphQL federation and Apollo Router.
- Contributed to history/event service refactoring using Pub/Sub.
- Improved consistency in event consumption and ensured that the correct service handled history-related messages.
- Implemented polymorphic federated relationships across multiple entities.
- Worked mainly on product registration and related warehouse flows.
```

Stack:

```txt
TypeScript · GraphQL · Apollo Router · Prisma · PostgreSQL · React Router · Pub/Sub · Microservices
```

Case angle:

```txt
GraphQL federation in warehouse systems: handling polymorphic relationships across multiple services.
```

#### Projeto 3 — WhatsApp API

Nome:

```txt
WhatsApp API — Messaging integration service
```

Tipo:

```txt
Side/technical project concept
```

Descrição:

```txt
A simple API for WhatsApp integration using NestJS and Baileys, focused on abstracting message sending/receiving flows and webhook-like processing.
```

Stack:

```txt
NestJS · TypeScript · Baileys
```

Status:

```txt
Recommended public demo project. Build from scratch with fake data and no company code.
```

---

### 7.5 Skills

Organize em grupos:

```txt
Backend:
TypeScript, Node.js, NestJS, Laravel, GraphQL, REST APIs, FastAPI, Flask, Prisma, TypeORM

Frontend:
React, Next.js, React Router, Tailwind CSS, shadcn/ui, Framer Motion, dashboards

Databases:
PostgreSQL, MySQL, Redis, MongoDB basics

Integrations and async processing:
Webhooks, WebSockets, email processing, IMAP, WhatsApp APIs, Pub/Sub, cron jobs, queues

Currently improving:
Cloud, CI/CD, testing, architecture documentation, C4 diagrams, ADRs, Flutter, AI engineering workflows
```

Observação importante: como Tiago não quer destacar PHP/Laravel demais, Laravel pode aparecer como competência, mas não como foco visual principal.

---

### 7.6 Resume

Criar uma seção de currículo com:

- botão para baixar PDF;
- breve descrição;
- orientação para colocar o arquivo em `public/cv-tiago-follador.pdf`.

Botão:

```txt
Download CV
```

Link esperado:

```txt
/cv-tiago-follador.pdf
```

Não incluir telefone no site, mesmo que esteja no currículo, a menos que o próprio Tiago peça explicitamente.

---

### 7.7 Contact

Texto:

```txt
Interested in building scalable APIs, integrations, and production-ready web systems?
```

Links:

```txt
GitHub: https://github.com/TiagoFollador
LinkedIn: https://www.linkedin.com/in/tiago-de-brito-follador-30313126a/
Email: tiagofollador97@gmail.com
Location: Curitiba, Paraná, Brazil
```

---

## 8. Requisitos de implementação

### Arquitetura de arquivos sugerida

Use estrutura parecida com:

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
      Header.tsx
      Footer.tsx
    sections/
      HeroSection.tsx
      AboutSection.tsx
      ExperienceSection.tsx
      ProjectsSection.tsx
      SkillsSection.tsx
      ResumeSection.tsx
      ContactSection.tsx
    ui/
      Section.tsx
      Badge.tsx
      ProjectCard.tsx
      ExternalLink.tsx
  data/
    profile.ts
    projects.ts
    skills.ts
public/
  cv-tiago-follador.pdf
```

Se optar por uma implementação menor, ainda mantenha separação clara entre dados e UI.

### Requisitos técnicos

- Usar TypeScript sem `any` desnecessário.
- Componentes pequenos e reutilizáveis.
- Dados de conteúdo fora dos componentes principais.
- Layout responsivo mobile-first.
- HTML semântico.
- Boa acessibilidade: labels, contraste, foco visível, `aria-label` onde necessário.
- Links externos com `target="_blank"` e `rel="noopener noreferrer"`.
- Não quebrar build.
- Evitar hidratação desnecessária; usar Server Components quando possível.
- Usar Client Components somente quando precisar de estado, animação ou interação.

---

## 9. SEO e metadata

Implementar metadata no Next.js.

Title:

```txt
Tiago Follador | Full Stack Software Engineer
```

Description:

```txt
Full Stack Software Engineer focused on TypeScript, APIs, integrations, performance, and scalable web systems.
```

Keywords sugeridas:

```txt
Tiago Follador, Full Stack Software Engineer, TypeScript, NestJS, React, Next.js, APIs, GraphQL, PostgreSQL, Curitiba
```

Open Graph:

```txt
title: Tiago Follador | Full Stack Software Engineer
description: Full Stack Software Engineer focused on TypeScript, APIs, integrations, and scalable web systems.
url: https://tiagofollador.com
siteName: Tiago Follador
locale: en_US
alternateLocale: pt_BR
type: website
```

Twitter/X card:

```txt
card: summary_large_image
```

Se não houver imagem OG pronta, crie uma estrutura preparada para futura imagem em `/og-image.png`, mas não quebre o build se a imagem não existir.

---

## 10. Bilinguismo

Preferência do projeto: site bilíngue PT-BR/EN.

Implementação aceitável para primeira versão:

- Opção A: todo site em inglês, com pequenos trechos em PT-BR.
- Opção B: toggle simples EN/PT com estado local.
- Opção C: duas rotas `/en` e `/pt`.

Para primeira versão, prefira **Opção B** se não gerar complexidade excessiva. Se for implementar toggle, mantenha o conteúdo em objeto tipado:

```ts
type Locale = 'en' | 'pt'
```

Se o tempo for curto, entregue primeiro em inglês com PT-BR complementar.

---

## 11. Design detalhado

### Paleta sugerida

Use dark mode com tons neutros:

```txt
Background: quase preto / slate
Cards: slate escuro
Text: branco suave / slate claro
Accent: azul, ciano, violeta ou verde terminal com moderação
Borders: slate/gray com baixa opacidade
```

Não use cores muito saturadas em grandes áreas.

### Elementos visuais úteis

- Header fixo ou simples no topo.
- Hero com badge de localização/stack.
- Cards de projeto com contexto, contribuições e stack.
- Badges de tecnologia.
- Linha do tempo simples para experiência.
- Terminal block sutil com comandos como:

```bash
whoami
# Tiago Follador — Full Stack Software Engineer
```

Use terminal apenas como detalhe, não como gimmick visual excessivo.

---

## 12. Regras de privacidade e confidencialidade

Obrigatório:

- Não incluir endereço residencial.
- Não incluir telefone pessoal no site.
- Não inventar métricas além das fornecidas.
- Não afirmar que projetos privados têm repositório/deploy público.
- Não expor código, detalhes internos, nomes de clientes ou regras de negócio proprietárias.
- Marcar Flowly e WMS como projetos profissionais privados.
- Usar descrições públicas e seguras.
- Não transformar “aprendendo cloud/testes” em “especialista em cloud/testes”.

---

## 13. README do projeto

Crie ou atualize um `README.md` do repositório do portfólio com:

```md
# Tiago Follador Portfolio

Personal portfolio for Tiago Follador, Full Stack Software Engineer focused on TypeScript, APIs, integrations, and scalable web systems.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vercel

## Running locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

This project is designed to be deployed on Vercel and connected to `tiagofollador.com`.
```

Inclua também uma seção sobre onde colocar o currículo:

```md
## Resume

Place the PDF resume at:

public/cv-tiago-follador.pdf
```

---

## 14. Deploy e domínio

Prepare o projeto para deploy na Vercel.

Não precisa configurar DNS automaticamente, mas adicione no README uma seção com os passos:

```txt
1. Push repository to GitHub.
2. Import repository on Vercel.
3. Add custom domain: tiagofollador.com.
4. Add www.tiagofollador.com as redirect or secondary domain.
5. Configure DNS records in Hostinger according to Vercel instructions.
6. Validate HTTPS.
```

Não coloque valores de DNS fixos se a Vercel exibir valores específicos no painel. Se mencionar valores comuns, deixe claro que o painel da Vercel é a fonte final.

---

## 15. Critérios de aceite

A tarefa só estará completa quando:

- O projeto rodar com `npm run dev`.
- O projeto passar em `npm run build`.
- O projeto passar em `npm run lint` ou documentar exatamente o que falta corrigir.
- A página inicial contiver Hero, About, Experience, Projects, Skills, Resume e Contact.
- O site estiver responsivo em mobile e desktop.
- Os links de GitHub, LinkedIn e email funcionarem.
- O botão de currículo apontar para `/cv-tiago-follador.pdf`.
- Flowly e WMS aparecerem como projetos profissionais privados.
- Não houver endereço residencial, telefone pessoal ou dados sensíveis no site.
- O site tiver metadata básica de SEO e Open Graph.
- O README do projeto estiver atualizado.
- O código estiver organizado e fácil de manter.

---

## 16. Ordem de execução obrigatória

Siga esta ordem:

1. Inspecione a estrutura atual do repositório.
2. Identifique se o projeto já é Next.js ou se precisa ser criado do zero.
3. Configure dependências necessárias.
4. Crie a estrutura de dados do perfil, projetos e skills.
5. Implemente layout global, metadata e estilos base.
6. Implemente as seções na ordem definida.
7. Ajuste responsividade.
8. Ajuste acessibilidade básica.
9. Atualize README.
10. Rode lint/build.
11. Corrija erros.
12. Entregue um resumo técnico do que foi feito.

---

## 17. Formato da resposta final do agente

Ao finalizar, responda com:

```md
## Resumo executivo
O que foi implementado.

## Arquivos alterados/criados
Lista dos principais arquivos.

## Decisões técnicas
Principais decisões e justificativas.

## Como rodar
Comandos necessários.

## Como fazer deploy
Passos para Vercel e domínio.

## Pendências ou limitações
O que ainda precisa ser feito, se houver.

## Checklist de aceite
- [ ] npm run dev funciona
- [ ] npm run build funciona
- [ ] npm run lint funciona
- [ ] site responsivo
- [ ] links funcionando
- [ ] currículo configurado
- [ ] SEO básico configurado
- [ ] README atualizado
```

---

## 18. Observação final

O objetivo não é criar um site visualmente chamativo sem substância. O objetivo é criar um portfólio que pareça tecnicamente confiável, limpo, direto e adequado para alguém buscando oportunidades como Full Stack Software Engineer com foco em TypeScript, APIs, integrações e sistemas web escaláveis.
