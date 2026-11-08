import { CtaLink } from '../components/Button'
import { CTASection } from '../components/CTASection'
import { FeatureCard } from '../components/FeatureCard'
import { SectionHeading } from '../components/SectionHeading'
import { Workbench } from '../components/Workbench'
import { ArrowIcon, CheckIcon } from '../components/Icons'
import { Badge } from '../components/Badge'
import { Page } from '../components/Page'
import { PageMeta } from '../components/PageMeta'
import { cta, home } from '../content/site'

const cardIcons = [
  'M4 5h16v14H4z M4 10h16',
  'M3 5h18v14H3z M3 9h18 M9 9v10',
  'M12 3v18 M5 8l7-5 7 5 M5 16l7 5 7-5',
  'M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2',
  'M6 3v12a3 3 0 0 0 3 3h6 M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  'M12 2 3 7v10l9 5 9-5V7l-9-5Z M3 7l9 5 9-5 M12 12v10',
]

function HeroTagline() {
  const words = ['prompt', 'it.', 'build', 'it.', 'ship', 'it.']
  return (
    <h1 className="text-balance-tight font-display text-[2.6rem] leading-[1.03] font-extrabold sm:text-6xl lg:text-[4.25rem]">
      {words.map((w, i) => (
        <span key={i} className={w === 'it.' ? 'text-brand' : ''}>
          {w}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </h1>
  )
}

export function Home() {
  return (
    <Page>
      <PageMeta
        title="Koadr — prompt it. build it. ship it."
        description={home.hero.sub}
        path="/"
      />

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,107,0,0.16),transparent)]"
        />
        <div className="container-page relative pt-14 pb-12 sm:pt-20 lg:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge>{home.badge}</Badge>
            <div className="mt-6">
              <HeroTagline />
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {home.hero.sub}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaLink href={cta.start.href} size="lg" className="w-full sm:w-auto">
                {cta.start.label}
              </CtaLink>
              <CtaLink
                href={cta.selfHost.href}
                variant="outline"
                size="lg"
                withGithub
                className="w-full sm:w-auto"
              >
                {cta.selfHost.label}
              </CtaLink>
            </div>
            <p className="mt-4 font-mono text-xs text-muted">{home.hero.byok}</p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl lg:mt-16">
            <Workbench />
          </div>
        </div>

        <div className="container-page pb-4">
          <div className="border-y border-line py-6">
            <p className="text-center font-mono text-[11px] tracking-wider text-muted uppercase">
              {home.providers.title}
            </p>
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {home.providers.logos.map((p) => (
                <li
                  key={p}
                  className="font-display text-sm font-medium text-muted transition-colors hover:text-fg"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="how-heading" className="container-page py-16 sm:py-24">
        <SectionHeading eyebrow="How it works" title={home.steps.heading} />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {home.steps.items.map((step, i) => (
            <li key={step.title} className="relative rounded-card border border-line bg-surface p-6">
              <span className="font-mono text-xs text-accent-text">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              {i < home.steps.items.length - 1 && (
                <ArrowIcon className="absolute top-1/2 -right-4 hidden h-4 w-4 text-line md:block" />
              )}
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="features-heading" className="border-y border-line bg-surface/50">
        <div className="container-page py-16 sm:py-24">
          <SectionHeading
            eyebrow="Features"
            title={home.features.heading}
            sub={home.features.sub}
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {home.features.items.map((f, i) => (
              <li key={f.title}>
                <FeatureCard
                  title={f.title}
                  icon={
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path d={cardIcons[i]} />
                    </svg>
                  }
                >
                  {f.body}
                </FeatureCard>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <CtaLink href={home.features.seeAll.href} variant="ghost" className="text-accent-text">
              {home.features.seeAll.label}
              <ArrowIcon className="h-4 w-4" />
            </CtaLink>
          </div>
        </div>
      </section>

      <section aria-labelledby="ways-heading" className="container-page py-16 sm:py-24">
        <SectionHeading eyebrow="Options" title={home.ways.heading} />
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          {home.ways.items.map((w) => (
            <div
              key={w.title}
              className="flex flex-col rounded-card border border-line bg-surface p-7 transition-colors hover:border-brand/40"
            >
              <h3 className="font-display text-xl font-semibold">{w.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{w.body}</p>
              <CtaLink
                href={w.href}
                variant={w.primary ? 'primary' : 'outline'}
                className="mt-6 self-start"
              >
                {w.label}
                <ArrowIcon className="h-4 w-4" />
              </CtaLink>
            </div>
          ))}
        </div>
        <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted">
          {['No local setup', 'Your keys, your models', 'Deploy in one click', 'Open source'].map(
            (t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-accent-text" />
                {t}
              </li>
            ),
          )}
        </ul>
      </section>

      <CTASection body={home.hero.byok} />
    </Page>
  )
}
