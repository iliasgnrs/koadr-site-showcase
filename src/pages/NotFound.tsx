import { Page } from '../components/Page'
import { PageMeta } from '../components/PageMeta'
import { notFound } from '../content/site'
import { CtaLink } from '../components/Button'
import { ArrowIcon } from '../components/Icons'

export function NotFound() {
  return (
    <Page>
      <PageMeta
        title="404"
        description="This page does not exist."
        path="/404"
      />
      <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-mono text-6xl font-bold text-brand/20 sm:text-8xl">{notFound.heading}</p>
        <h1 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-muted">{notFound.body}</p>
        <CtaLink href="/" className="mt-8">
          {notFound.back}
          <ArrowIcon className="h-4 w-4" />
        </CtaLink>
      </section>
    </Page>
  )
}
