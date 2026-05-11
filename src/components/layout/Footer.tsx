import { ExternalLink } from '@/components/ui/ExternalLink'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/BrandIcons'
import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p className="font-mono">{profile.name} · {new Date().getFullYear()}</p>
        <div className="flex items-center gap-4">
          <ExternalLink
            href={profile.github}
            aria-label="GitHub"
            className="text-slate-500 hover:text-slate-300"
          >
            <GitHubIcon size={18} />
          </ExternalLink>
          <ExternalLink
            href={profile.linkedin}
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-slate-300"
          >
            <LinkedInIcon size={18} />
          </ExternalLink>
        </div>
      </div>
    </footer>
  )
}
