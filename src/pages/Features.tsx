import { CTASection } from '../components/CTASection'
import { FeatureVisualMock } from '../components/FeatureVisual'
import { CheckIcon } from '../components/Icons'
import { Page } from '../components/Page'
import { PageMeta } from '../components/PageMeta'
import { JsonLd } from '../components/JsonLd'
import { breadcrumbSchema, webPageSchema } from '../lib/schema'
import { SectionHeading } from '../components/SectionHeading'
import { features } from '../content/site'

export function Features() {
  return (
    <Page>
      <PageMeta
        title="Features"
        description="In-browser full-stack development, an interactive workbench, smart starters, deployments, MCP tooling and more."
        path="/features"
      />
      <JsonLd id="breadcrumb" json={breadcrumbSchema('Features', '/features')} />
      <JsonLd
        id="webpage"
        json={webPageSchema({
          name: 'Koadr features',
          description: 'In-browser full-stack development, interactive workbench, smart starters, deployments and MCP tooling.',
          path: '/features',
          type: 'CollectionPage',
        })}
      />

      <section className="container-page pt-16 pb-10 text-center sm:pt-24">
        <SectionHeading
          as="h1"
          eyebrow="Features"
          title={features.intro.heading}
          sub={features.intro.sub}
        />
      </section>

      <div className="container-page pb-8">
        <ul className="space-y-10 sm:space-y-16">
          {features.blocks.map((block, i) => {
            const flip = i % 2 === 1
            return (
              <li
                key={block.id}
                id={block.id}
                className="grid items-center gap-8 scroll-mt-24 md:grid-cols-2 md:gap-12"
              >
                <div className={flip ? 'md:order-2' : ''}>
                  <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    {block.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">{block.body}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {block.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" />
                        <span className="text-fg/85">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={flip ? 'md:order-1' : ''}>
                  <FeatureVisualMock kind={block.visual} />
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <CTASection body="Everything above, running in a single browser tab." />
    </Page>
  )
}
