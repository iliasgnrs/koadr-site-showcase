import type { ReactNode } from 'react'

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </span>
  )
}
