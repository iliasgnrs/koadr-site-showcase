import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  sub?: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
  children?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = 'center',
  as: Heading = 'h2',
  children,
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="font-mono text-xs tracking-wider text-accent-text uppercase">{eyebrow}</p>
      )}
      <Heading className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</Heading>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{sub}</p>}
      {children}
    </div>
  )
}
