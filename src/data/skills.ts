export interface SkillGroup {
  key: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    key: 'backend',
    items: ['TypeScript', 'Node.js', 'NestJS', 'GraphQL', 'REST APIs', 'FastAPI', 'Flask', 'Prisma', 'TypeORM', 'Laravel'],
  },
  {
    key: 'frontend',
    items: ['React', 'Next.js', 'React Router', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
  },
  {
    key: 'databases',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'],
  },
  {
    key: 'integrations',
    items: ['Webhooks', 'WebSockets', 'IMAP / Email', 'WhatsApp APIs', 'Pub/Sub', 'Cron jobs', 'Docker', 'Git'],
  },
  {
    key: 'improving',
    items: ['Cloud', 'CI/CD', 'Testing', 'C4 Diagrams', 'ADRs', 'Flutter', 'AI workflows'],
  },
]
