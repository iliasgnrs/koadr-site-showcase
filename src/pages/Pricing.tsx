import { useState } from 'react'
import { CTASection } from '../components/CTASection'
import { FAQ } from '../components/FAQ'
import { JsonLd } from '../components/JsonLd'
import { breadcrumbSchema, faqSchema, webPageSchema } from '../lib/schema'
import { Page } from '../components/Page'
import { PageMeta } from '../components/PageMeta'
import { PricingCard } from '../components/PricingCard'
import { SectionHeading } from '../components/SectionHeading'
import { pricing } from '../content/site'

export function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <Page>
      <PageMeta
        title="Pricing"
        description="Start free, upgrade to Pro for unlimited projects and custom domains, or self-host for free. Koadr is BYOK."
        path="/pricing"
      />
      <JsonLd id="breadcrumb" json={breadcrumbSchema('Pricing', '/pricing')} />
      <JsonLd
        id="webpage"
        json={webPageSchema({
          name: 'Koadr pricing',
          description: 'Free, Pro and self-hosted plans. Koadr is BYOK: you pay your AI provider directly for model usage.',
          path: '/pricing',
        })}
      />
      <JsonLd id="faq" json={faqSchema(pricing.faq, 'https://koadr.dev/pricing')} />

      <section className="container-page pt-16 pb-12 text-center sm:pt-24">
        <SectionHeading
          as="h1"
          eyebrow="Pricing"
          title={pricing.hero.heading}
          sub={pricing.hero.sub}
        />

        <div className="mt-8 inline-flex items-center gap-3">
          <div
            role="group"
            aria-label="Billing period"
            className="inline-flex rounded-full border border-line bg-surface p-1"
          >
            {(['monthly', 'annual'] as const).map((mode) => {
              const active = annual === (mode === 'annual')
              return (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setAnnual(mode === 'annual')}
                  aria-pressed={active}
                  className={`rounded-full px-4 py-1.5 text-sm capitalize transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                    active ? 'bg-brand text-ink font-semibold' : 'text-muted hover:text-fg'
                  }`}
                >
                  {mode}
                </button>
              )
            })}
          </div>
          <span className="rounded-full bg-brand/10 px-2.5 py-1 font-mono text-[11px] text-accent-text">
            {pricing.hero.annualNote}
          </span>
        </div>
      </section>

      <section aria-label="Plans" className="container-page pb-16">
        <div className="mx-auto grid max-w-5xl items-stretch gap-5 md:grid-cols-3">
          {pricing.plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} annual={annual} />
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted">{pricing.byokNote}</p>
      </section>

      <section aria-labelledby="compare-heading" className="container-page pb-16">
        <h2 id="compare-heading" className="text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {pricing.comparison.heading}
        </h2>
        <div className="mt-8 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[36rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-line bg-surface-2">
                <th scope="col" className="px-4 py-3 text-left font-medium text-muted">
                  <span className="sr-only">Feature</span>
                </th>
                {pricing.comparison.columns.map((c) => (
                  <th key={c} scope="col" className="px-4 py-3 text-left font-display font-semibold">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricing.comparison.rows.map((row, i) => (
                <tr key={row.label} className={i % 2 ? 'bg-surface/60' : 'bg-surface'}>
                  <th scope="row" className="px-4 py-3 text-left font-normal text-muted">
                    {row.label}
                  </th>
                  {row.values.map((v, j) => (
                    <td key={j} className="px-4 py-3 text-fg/85">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="pricing-faq" className="container-page pb-16">
        <SectionHeading eyebrow="FAQ" title="Billing questions" />
        <h2 id="pricing-faq" className="sr-only">
          Frequently asked questions
        </h2>
        <div className="mx-auto mt-8 max-w-3xl">
          <FAQ items={pricing.faq} />
        </div>
      </section>

      <CTASection body="Free to start. Self-host whenever you want." />
    </Page>
  )
}
