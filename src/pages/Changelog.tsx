import { CTASection } from '../components/CTASection'
import { CtaLink } from '../components/Button'
import { Page } from '../components/Page'
import { PageMeta } from '../components/PageMeta'
import { JsonLd } from '../components/JsonLd'
import { breadcrumbSchema, webPageSchema } from '../lib/schema'
import { ArrowIcon } from '../components/Icons'
import { changelog, GITHUB_RELEASES_URL } from '../content/site'

export function Changelog() {
  return (
    <Page>
      <PageMeta
        title="Changelog"
        description="Recent highlights from Koadr: providers, workflows, deployments, integrations and stability work."
        path="/changelog"
      />
      <JsonLd id="breadcrumb" json={breadcrumbSchema('Changelog', '/changelog')} />
      <JsonLd
        id="webpage"
        json={webPageSchema({
          name: 'Koadr changelog',
          description: 'Recent product highlights: providers, workflows, deployments and integrations.',
          path: '/changelog',
          type: 'CollectionPage',
        })}
      />

      <section className="container-page pt-16 pb-10 sm:pt-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-wider text-accent-text uppercase">Changelog</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            {changelog.hero.heading}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted">{changelog.hero.sub}</p>
        </div>
      </section>

      <section aria-label="Recent highlights" className="container-page pb-12">
        <ol className="relative ml-1 border-l border-line pl-6 sm:pl-8">
          {changelog.entries.map((entry) => (
            <li key={entry.title} className="relative pb-9 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[1.9rem] h-2.5 w-2.5 rounded-full border-2 border-bg bg-brand sm:-left-[2.4rem]"
              />
              <h2 className="font-display text-lg font-semibold">{entry.title}</h2>
              <p className="mt-1.5 leading-relaxed text-muted">{entry.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 rounded-card border border-line bg-surface p-5 text-sm leading-relaxed text-muted">
          {changelog.closing}
        </p>

        <CtaLink
          href={GITHUB_RELEASES_URL}
          variant="outline"
          className="mt-6"
          withGithub={false}
        >
          {changelog.releasesLabel}
          <ArrowIcon className="h-4 w-4" />
        </CtaLink>
      </section>

      <CTASection />
    </Page>
  )
}
