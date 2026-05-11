# GitHub and portfolio action plan — Tiago Follador

## Immediate diagnosis

Your current GitHub already has the special profile repository `TiagoFollador/TiagoFollador`, but the README is still the default/simple version. This should be replaced immediately with the generated profile README.

Your pinned repositories should also be reviewed. Current visible pins emphasize older course or test projects, mostly PHP/Laravel. That conflicts with the positioning you want: TypeScript, full stack engineering, APIs, integrations, GraphQL, and production systems.

## Priority 1 — Replace GitHub profile README

Repository:

```bash
TiagoFollador/TiagoFollador
```

Action:

1. Open the repository.
2. Replace the current `README.md` with `github-profile-readme-tiago-follador.md`.
3. Commit with:

```bash
git add README.md
git commit -m "docs: improve GitHub profile README"
git push
```

## Priority 2 — Fix GitHub bio

Recommended GitHub bio:

```text
Full Stack Software Engineer focused on TypeScript, APIs, integrations, and scalable web systems.
```

Alternative PT-BR:

```text
Engenheiro de Software Full Stack focado em TypeScript, APIs, integrações e sistemas web escaláveis.
```

## Priority 3 — Replace pinned repositories

Current problem:

Your visible pinned repositories are not aligned with the professional image you want. They show older learning/course projects. That is useful for history, but weak for positioning.

Recommended pinned repository strategy:

1. `TiagoFollador` — GitHub profile README.
2. `portfolio` — your personal website.
3. `whatsapp-api-nestjs` — public clean version of WhatsApp API using fake/demo flows.
4. `tickets-api-nestjs` — public demo inspired by ticketing/message architecture, without company code.
5. `graphql-wms-demo` — small GraphQL federation demo inspired by WMS architecture.
6. `api-performance-lab` — repository showing before/after query optimization, pagination, and database access patterns.

## Priority 4 — Build public proof projects

Because Flowly and WMS are private company projects, your public GitHub needs demo repositories that prove the same skills without exposing confidential code.

### Project idea 1 — Tickets API

Stack:

- NestJS
- TypeScript
- PostgreSQL
- Prisma or TypeORM
- Docker
- Swagger/OpenAPI
- Jest

Features:

- Users
- Tickets
- Messages
- Mentions
- Cursor/reference-based pagination
- Message search
- WebSocket notification mock

Why it matters:

This publicly proves what you did in Flowly without exposing the company project.

### Project idea 2 — WhatsApp integration API demo

Stack:

- NestJS
- TypeScript
- Baileys or mocked provider adapter
- Webhooks
- Queue simulation
- Docker

Features:

- Provider adapter pattern
- Webhook ingestion
- Message normalization
- Retry handling
- Logs
- Fake provider mode

Why it matters:

This proves integrations, messaging flows, and backend architecture.

### Project idea 3 — GraphQL federation WMS demo

Stack:

- GraphQL
- Apollo Router
- TypeScript
- PostgreSQL
- Prisma
- Docker

Features:

- Products service
- Warehouse service
- History service
- Federated relationship example
- Pub/Sub simulation

Why it matters:

This proves your experience with GraphQL federation and microservice-oriented architecture.

## Priority 5 — README standard for every public project

Every public repository should include:

```md
# Project name

## About

What the project does and what problem it solves.

## Features

- Feature 1
- Feature 2
- Feature 3

## Tech stack

- Backend:
- Frontend:
- Database:
- Infra:

## Architecture

Explain the main modules and the data flow.

## How to run

```bash
cp .env.example .env
docker compose up -d
npm install
npm run dev
```

## Environment variables

| Variable | Description |
|---|---|
| DATABASE_URL | Database connection string |

## Tests

```bash
npm run test
```

## Technical decisions

Explain the main trade-offs.

## Roadmap

- Improvement 1
- Improvement 2
```

## Priority 6 — Portfolio implementation brief

Recommended stack:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- MDX or JSON-based project data

Why:

This stack matches your desired positioning and lets you demonstrate your frontend quality while staying close to your TypeScript focus.

## Priority 7 — Hard truth

Do not present yourself primarily as a software architect yet. You can show architectural thinking, but using "Software Architect" as the main headline may create a mismatch with your current public proof.

Better positioning:

```text
Full Stack Software Engineer focused on TypeScript, APIs, integrations, and scalable web systems.
```

This sounds stronger, more credible, and still leaves room to grow toward architecture.
