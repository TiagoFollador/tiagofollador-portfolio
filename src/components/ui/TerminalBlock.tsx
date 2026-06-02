interface TerminalBlockProps {
  lines: string[]
}

export function TerminalBlock({ lines }: TerminalBlockProps) {
  return (
    <div className="inline-block rounded-lg border border-neutral-700 bg-neutral-900 px-5 py-3 font-mono text-sm text-left">
      <div>
        <span className="text-neutral-500">$ </span>
        <span className="text-brand">whoami</span>
      </div>
      {lines.map((line, i) => (
        <div key={i}>
          <span className="text-brand">{'> '}</span>
          <span className="text-neutral-300">{line}</span>
        </div>
      ))}
    </div>
  )
}
