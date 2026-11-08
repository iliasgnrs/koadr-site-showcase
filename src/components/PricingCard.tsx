import { cta } from '../content/site'
import { CtaLink } from './Button'
import { CheckIcon } from './Icons'

export type PricingPlan = {
  id: string
  name: string
  priceMonthly: string
  priceYearly: string
  period: string
  periodYearly?: string
  highlight: boolean
  badge?: string
  summary: string
  features: string[]
  ctaKey: 'start' | 'selfHost'
}

type PricingCardProps = {
  plan: PricingPlan
  annual: boolean
}

export function PricingCard({ plan, annual }: PricingCardProps) {
  const target = cta[plan.ctaKey]

  return (
    <div
      className={[
        'relative flex h-full flex-col rounded-card border bg-surface p-6 transition-shadow sm:p-7',
        plan.highlight ? 'border-brand/60 glow-brand' : 'border-line hover:border-brand/30',
      ].join(' ')}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold tracking-wide text-ink uppercase">
          {plan.badge}
        </span>
      )}

      <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
      <p className="mt-1 min-h-[2.5rem] text-sm leading-snug text-muted">{plan.summary}</p>

      <p className="mt-5 flex items-baseline gap-1.5">
        <span className="font-display text-4xl font-bold tracking-tight">
          {annual ? plan.priceYearly : plan.priceMonthly}
        </span>
        <span className="text-sm text-muted">
          {annual ? (plan.periodYearly ?? plan.period) : plan.period}
        </span>
      </p>

      <ul className="mt-6 flex-1 space-y-2.5 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" />
            <span className="text-fg/85">{f}</span>
          </li>
        ))}
      </ul>

      <CtaLink
        href={target.href}
        variant={plan.highlight ? 'primary' : 'outline'}
        size="lg"
        withGithub={plan.ctaKey === 'selfHost'}
        className="mt-7 w-full"
      >
        {target.label}
      </CtaLink>
    </div>
  )
}
