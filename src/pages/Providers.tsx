import { CTASection } from '../components/CTASection'
import { FAQ } from '../components/FAQ'
import { JsonLd } from '../components/JsonLd'
import { breadcrumbSchema, faqSchema, webPageSchema } from '../lib/schema'
import { Page } from '../components/Page'
import { PageMeta } from '../components/PageMeta'
import { SectionHeading } from '../components/SectionHeading'
import { providers } from '../content/site'

export function Providers() {
  return (
    <Page>
      <PageMeta
        title="Providers"
        description="Koadr is model-agnostic and BYOK. 22+ cloud and local providers, with your keys staying in your control."
        path="/providers"
      />
      <JsonLd id="breadcrumb" json={breadcrumbSchema('Providers', '/providers')} />
      <JsonLd
        id="webpage"
        json={webPageSchema({
          name: 'Koadr model providers',
          description: '22+ cloud and local AI providers. Bring your own keys; OpenRouter, Anthropic, OpenAI and Google are enabled by default.',
          path: '/providers',
        })}
      />
      <JsonLd id="faq" json={faqSchema(providers.faq, 'https://koadr.dev/providers')} />

      <section className="container-page pt-16 pb-12 text-center sm:pt-24">
        <h1 className="font-display text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl">
          {providers.hero.heading}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {providers.hero.sub}
        </p>
        <p className="mt-4 font-mono text-xs text-muted">{providers.defaultNote}</p>
      </section>

      <section aria-label="Supported providers" className="container-page pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6">
            {providers.groups.map((group) => (
              <div key={group.title} className="rounded-card border border-line bg-surface p-6">
                <div className="flex items-baseline justify-between">
                  <h2 className="font-display text-sm font-semibold">{group.title}</h2>
                  <span className="font-mono text-xs text-muted">{group.items.length}</span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((name) => (
                    <li
                      key={name}
                      className="rounded-full border border-line bg-bg px-3 py-1.5 font-mono text-xs text-fg/80 transition-colors hover:border-brand/50 hover:text-brand"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-card border border-line bg-surface p-5">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <h2 className="font-display text-sm font-semibold">Settings · providers</h2>
              <span className="font-mono text-[10px] text-muted">BYOK</span>
            </div>
            <ul className="mt-3 space-y-1">
              {providers.settingsToggles.map(({ name, on }) => (
                <li
                  key={name}
                  className="flex items-center justify-between rounded-md px-2 py-1.5 text-xs hover:bg-surface-2"
                >
                  <span className={on ? 'text-fg' : 'text-muted'}>{name}</span>
                  <span
                    aria-hidden="true"
                    className={`h-4 w-7 rounded-full p-0.5 transition-colors ${on ? 'bg-brand' : 'bg-line'}`}
                  >
                    <span
                      className={`block h-3 w-3 rounded-full bg-white ${on ? 'translate-x-3' : ''}`}
                    />
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 border-t border-line pt-3 font-mono text-[10px] leading-relaxed text-muted">
              Keys are stored per workspace. Nothing is sent anywhere you did not configure.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="providers-faq" className="container-page pb-16">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <h2 id="providers-faq" className="sr-only">
          Frequently asked questions
        </h2>
        <div className="mx-auto mt-8 max-w-3xl">
          <FAQ items={providers.faq} />
        </div>
      </section>

      <CTASection body="Connect a provider in under a minute." />
    </Page>
  )
}
