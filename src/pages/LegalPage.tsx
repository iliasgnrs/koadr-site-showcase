import { Page } from '../components/Page'
import { PageMeta } from '../components/PageMeta'
import { CONTACT_EMAIL, legal } from '../content/site'

type LegalSection = { title: string; body: string }

type LegalProps = {
  heading: string
  updated: string
  intro: string
  sections: LegalSection[]
  title: string
  description: string
  path: string
}

export function LegalPage({ heading, updated, intro, sections, title, description, path }: LegalProps) {
  return (
    <Page>
      <PageMeta title={title} description={description} path={path} />
      <article className="container-page max-w-3xl pt-16 pb-24 sm:pt-24">
        <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{heading}</h1>
        <p className="mt-2 font-mono text-xs text-muted">{updated}</p>
        <p className="mt-6 text-lg leading-relaxed text-fg/85">{intro}</p>

        <div className="mt-10 space-y-8">
          {sections.map((s, i) => (
            <section key={s.title}>
              <h2 className="font-display text-lg font-semibold">
                {i + 1}. {s.title}
              </h2>
              <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-line pt-6 text-sm text-muted">
          Operator: {legal.operator}, {legal.jurisdiction}. Contact:{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-text hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      </article>
    </Page>
  )
}
