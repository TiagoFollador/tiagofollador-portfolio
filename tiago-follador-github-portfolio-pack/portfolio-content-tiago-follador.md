# Portfolio content — Tiago Follador

## Recommended positioning

**Primary title:** Full Stack Software Engineer  
**Secondary positioning:** TypeScript · APIs · Integrations · Scalable Web Systems

Do not position the portfolio mainly as "Software Architect" yet. Use architecture as a direction and strength-in-progress, not as the main claim. A better framing is:

> Full Stack Software Engineer focused on TypeScript, API design, integrations, and performance improvements in production web systems.

Portuguese version:

> Engenheiro de Software Full Stack com foco em TypeScript, desenho de APIs, integrações e melhorias de performance em sistemas web em produção.

---

## Domain recommendation

Best options, in order:

1. **tiagofollador.dev** — clean, technical, no hyphen, good for a developer portfolio.
2. **tiagofollador.com** — strong general professional domain if available.
3. **tiago-follador.com** — acceptable, but less clean because of the hyphen.

Avoid using **www.tiago-follador.com** as the brand. The primary domain should be the root domain, for example `tiagofollador.dev` or `tiagofollador.com`; `www` can redirect to it.

---

# Portfolio structure

## 1. Home / Hero

### Headline

**Full Stack Software Engineer focused on TypeScript, APIs, integrations, and scalable web systems.**

### Subheadline

I build and maintain production web applications, working across backend and frontend with emphasis on API design, performance, messaging flows, and business-critical integrations.

### CTAs

- View projects
- Download CV
- GitHub
- LinkedIn

---

## 2. About

I am Tiago Follador, a Full Stack Software Engineer based in Curitiba, Brazil. I work mainly with TypeScript, Node.js, NestJS, React, Next.js, GraphQL, REST APIs, PostgreSQL, and MySQL.

My current professional experience is centered on logistics, messaging, ticketing, warehouse systems, API optimization, and external integrations. I have worked on production systems involving WhatsApp, email processing, WebSockets, Pub/Sub, cron jobs, and microservice-oriented GraphQL architecture.

I am currently expanding my foundation in software architecture, cloud, testing, and AI-assisted development workflows.

---

## 3. Experience

### Full Stack Software Engineer — AIQIA / Nexance

Worked on production web systems in logistics and communication contexts, contributing to backend, frontend, integrations, and system maintenance.

Key contributions:

- Maintained and evolved a ticketing and messaging platform used for internal and external communication.
- Participated in the transition from Flowly v1 to v2.
- Improved ticket and message-related API flows by reducing repeated queries and grouping required data before database access.
- Implemented message search and reference-based pagination for long conversation histories.
- Worked with WhatsApp and email integrations, including webhook processing, IMAP-based email reading, and asynchronous processing.
- Contributed to WMS flows using GraphQL federation, Apollo Router, Pub/Sub, Prisma, and PostgreSQL.

---

## 4. Projects

### Flowly — Messaging and ticketing platform

**Type:** Professional private project  
**Context:** Business communication, tickets, WhatsApp, email, internal/external messaging

Flowly is a platform for managing tickets and business communication through internal messages, WhatsApp, and email. The system helps organizations audit communication, open and close tickets, and centralize support/operation flows.

**My contributions:**

- Maintained the project after launch and became one of the main developers during the transition from v1 to v2.
- Improved API performance by reducing repeated calls and batching required IDs before database access.
- Reworked message pagination to support loading messages from a reference point instead of only loading stacked pages.
- Implemented message search using optimized database queries.
- Worked on email and WhatsApp flows, including IMAP, Google/Azure email processing, webhook handling, and external messaging integration.
- Contributed to Dockerized development and production maintenance workflows.

**Stack:** NestJS · TypeScript · React Router · TypeORM · MySQL · PostgreSQL · WebSockets · Docker · Baileys · External messaging APIs

**Technical case angle:**

> From stacked message loading to reference-based pagination: reducing frontend load and improving long conversation navigation.

---

### WMS — Warehouse management system

**Type:** Professional private project  
**Context:** Warehouse management, receiving, storage, shipping, product registration

WMS is a warehouse management system designed to support logistics operations, including cargo receiving, storage, and dispatching.

**My contributions:**

- Worked in a microservice-oriented architecture using GraphQL federation and Apollo Router.
- Contributed to history/event service refactoring using Pub/Sub.
- Improved consistency in event consumption and ensured that the correct service handled history-related messages.
- Implemented polymorphic federated relationships across multiple entities.
- Worked mainly on product registration and related warehouse flows.

**Stack:** TypeScript · GraphQL · Apollo Router · Prisma · PostgreSQL · React Router · Pub/Sub · Microservices

**Technical case angle:**

> GraphQL federation in warehouse systems: handling polymorphic relationships across multiple services.

---

### WhatsApp API — Messaging integration service

**Type:** Side/technical project concept  
**Context:** WhatsApp integration API

A simple API for WhatsApp integration using NestJS and Baileys, focused on abstracting message sending/receiving flows and webhook-like processing.

**Stack:** NestJS · TypeScript · Baileys

**Recommendation:** Turn this into a public portfolio project. Do not expose production/company code. Build a clean version from scratch with fake data, Docker, Swagger/OpenAPI, README, and tests.

---

## 5. Skills

### Backend

Node.js, NestJS, Laravel, TypeScript, GraphQL, REST APIs, FastAPI, Flask, Prisma, TypeORM

### Frontend

React, Next.js, React Router, Tailwind CSS, shadcn/ui, Framer Motion, dashboards

### Databases

PostgreSQL, MySQL, Redis, MongoDB basics

### Integrations and async processing

Webhooks, WebSockets, email processing, IMAP, WhatsApp APIs, Pub/Sub, cron jobs, queues

### Currently improving

Cloud, CI/CD, testing, architecture documentation, C4 diagrams, ADRs, Flutter, AI engineering workflows

---

## 6. Contact section

Interested in building scalable APIs, integrations, and production-ready web systems?

- GitHub: https://github.com/TiagoFollador
- LinkedIn: https://www.linkedin.com/in/tiago-de-brito-follador-30313126a/
- Email: tiagofollador97@gmail.com
- Location: Curitiba, Paraná, Brazil

---

# Suggested visual direction

- Dark mode
- Minimalist layout
- Subtle terminal/dev aesthetic
- Strong typography
- Project cards with clear business context
- Case-study pages for Flowly and WMS using only public-safe descriptions
- Resume download button
- Bilingual toggle: PT / EN

---

# Portfolio sections to implement

1. Home
2. About
3. Experience
4. Projects
5. Skills
6. Resume
7. Contact

Optional future sections:

1. Case studies
2. Blog/articles
3. Architecture notes
4. Open-source experiments
