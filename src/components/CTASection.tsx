import { cta, tagline } from '../content/site'
import { CtaLink } from './Button'

export function CTASection({ heading, body }: { heading?: string; body?: string }) {
  return (
    <section aria-labelledby="cta-heading" className="container-page py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-card bg-brand px-6 py-14 text-center shadow-[0_24px_70px_-30px_rgba(255,107,0,0.8)] sm:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.28),transparent_60%)]"
        />
        <h2
          id="cta-heading"
          className="relative font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          {heading ??
            tagline.map((word, i) =>
              word === 'it.' ? (
                <span key={i} className="text-ink/70">
                  {word}{' '}
                </span>
              ) : (
                <span key={i}>{word} </span>
              ),
            )}
        </h2>
        {body && <p className="relative mx-auto mt-4 max-w-xl font-medium text-ink/75">{body}</p>}
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaLink
            href={cta.start.href}
            size="lg"
            className="w-full !border-ink !bg-ink !text-white shadow-none hover:!bg-[#2e2e2b] active:!bg-[#2e2e2b] sm:w-auto"
          >
            {cta.start.label}
          </CtaLink>
          <CtaLink
            href={cta.selfHost.href}
            variant="outline"
            size="lg"
            withGithub
            className="w-full !border-ink/40 bg-transparent text-ink hover:!border-ink hover:text-ink active:!border-ink sm:w-auto"
          >
            {cta.selfHost.label}
          </CtaLink>
        </div>
      </div>
    </section>
  )
}
