import { Link } from 'react-router-dom'
import { footer } from '../content/site'
import { useAnalyticsConsent } from '../lib/consent'
import { ExternalIcon } from './Icons'
import { Logo } from './Logo'

const year = new Date().getFullYear()

export function Footer() {
  const { enabled, toggle } = useAnalyticsConsent()

  return (
    <footer className="border-t border-line bg-surface/60">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))] md:gap-8">
        <div className="max-w-xs">
          <Logo className="h-6 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-muted">{footer.description}</p>
        </div>

        {footer.columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="font-display text-xs font-semibold tracking-wider text-muted uppercase">
              {col.title}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener"
                      className="group inline-flex items-center gap-1 text-sm text-fg/80 transition-colors hover:text-brand"
                    >
                      {link.label}
                      <ExternalIcon className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-fg/80 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Koadr. All rights reserved.</p>
        <button
          type="button"
          onClick={toggle}
          className="text-left underline-offset-4 transition-colors hover:text-fg hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          {enabled ? 'Opt out of analytics' : 'Analytics are off — turn back on'}
        </button>
        <p className="font-mono">prompt it. build it. ship it.</p>
      </div>
    </footer>
  )
}
