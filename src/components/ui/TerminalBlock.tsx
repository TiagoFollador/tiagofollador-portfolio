interface TerminalBlockProps {
  title: string
}

export function TerminalBlock({ title }: TerminalBlockProps) {
  return (
    <div className="inline-block rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 font-mono text-sm text-left">
      <span className="text-slate-500">$ </span>
      <span className="text-cyan-400">whoami</span>
      <br />
      <span className="text-slate-400"># </span>
      <span className="text-slate-200">Tiago Follador</span>
      <span className="text-slate-500"> — {title}</span>
    </div>
  )
}
