import { CtaLink } from '../components/Button'
import { CodeBlock } from '../components/CodeBlock'
import { Page } from '../components/Page'
import { PageMeta } from '../components/PageMeta'
import { JsonLd } from '../components/JsonLd'
import { breadcrumbSchema, webPageSchema } from '../lib/schema'
import { ArrowIcon, CheckIcon, GitHubIcon } from '../components/Icons'
import { GITHUB_ISSUES_URL, cta, selfHost } from '../content/site'

export function SelfHost() {
  return (
    <Page>
      <PageMeta
        title="Self-host"
        description="Run Koadr on your own infrastructure. Free, open source, full control of your data and API keys."
        path="/self-host"
      />
      <JsonLd id="breadcrumb" json={breadcrumbSchema('Self-host', '/self-host')} />
      <JsonLd
        id="webpage"
        json={webPageSchema({
          name: 'Self-host Koadr',
          description: 'Run Koadr on your own infrastructure. Free, open source and MIT licensed.',
          path: '/self-host',
        })}
      />

      <section className="container-page pt-16 pb-12 sm:pt-24">
        <div className="max-w-3xl">
          <h1 className="text-balance-tight font-display text-3xl leading-tight font-extrabold sm:text-5xl">
            {selfHost.hero.heading}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{selfHost.hero.sub}</p>
          <CtaLink href={cta.selfHost.href} size="lg" withGithub className="mt-8">
            View on GitHub
          </CtaLink>
        </div>
      </section>

      <section className="container-page grid gap-10 pb-16 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
        <div>
          <h2 className="font-display text-xl font-semibold">Requirements</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {selfHost.requirements.map((r) => (
              <li key={r} className="flex gap-2.5">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" />
                <span className="text-fg/85">{r}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-card border border-line bg-surface p-5">
            <h3 className="font-display text-sm font-semibold">Need help?</h3>
            <p className="mt-1.5 text-sm text-muted">{selfHost.helpNote}</p>
            <a
              href={GITHUB_ISSUES_URL}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-text hover:underline"
            >
              Open an issue
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold">Quick start</h2>
          <ol className="mt-4 space-y-6">
            {selfHost.steps.map((step, i) => (
              <li key={step.title}>
                <h3 className="flex items-center gap-2 font-display text-sm font-medium">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 font-mono text-[11px] text-accent-text">
                    {i + 1}
                  </span>
                  {step.title}
                </h3>
                <div className="mt-3">
                  <CodeBlock code={step.code} />
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-5 rounded-[10px] border border-brand/25 bg-brand/5 px-4 py-3 text-sm text-fg/85">
            {selfHost.verifyNote}
          </p>

          <div className="mt-6 rounded-card border border-line bg-surface p-5">
            <h3 className="flex items-center gap-2 font-display text-sm font-semibold">
              <GitHubIcon className="h-4 w-4" />
              Docker
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{selfHost.dockerNote}</p>
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="flex flex-col items-start justify-between gap-5 rounded-card border border-line bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h2 className="font-display text-lg font-semibold">{selfHost.callout.heading}</h2>
            <p className="mt-1 text-sm text-muted">{selfHost.callout.body}</p>
          </div>
          <CtaLink href={cta.start.href} size="lg" className="shrink-0">
            {cta.start.label}
            <ArrowIcon className="h-4 w-4" />
          </CtaLink>
        </div>
      </section>
    </Page>
  )
}
