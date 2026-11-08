import type { ReactNode } from 'react'

type FeatureCardProps = {
  title: string
  children: ReactNode
  icon?: ReactNode
}

export function FeatureCard({ title, children, icon }: FeatureCardProps) {
  return (
    <div className="group relative rounded-card border border-line bg-surface p-6 transition-all duration-200 hover:border-brand/40 hover:shadow-[0_16px_40px_-28px_rgba(255,107,0,0.55)]">
      {icon && (
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-brand/10 text-accent-text transition-colors group-hover:bg-brand/15">
          {icon}
        </div>
      )}
      <h3 className="font-display text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  )
}
