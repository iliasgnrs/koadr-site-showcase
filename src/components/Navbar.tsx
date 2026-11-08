import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { GITHUB_URL, cta, nav } from '../content/site'
import { useTheme } from '../lib/hooks'
import { Button } from './Button'
import { CloseIcon, GitHubIcon, MenuIcon, MoonIcon, SunIcon } from './Icons'
import { Logo } from './Logo'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const { pathname } = useLocation()
  const [lastPath, setLastPath] = useState(pathname)


  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  if (pathname !== lastPath) {
    setLastPath(pathname)
    if (open) setOpen(false)
  }

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'relative rounded-md px-1 py-2 text-sm transition-colors',
      isActive ? 'text-fg' : 'text-muted hover:text-fg',
      isActive
        ? 'after:absolute after:inset-x-1 after:-bottom-px after:h-[2px] after:rounded-full after:bg-brand'
        : '',
    ].join(' ')

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md supports-[backdrop-filter]:bg-bg/70">
      <nav aria-label="Main" className="container-page flex h-16 items-center gap-6">
        <Logo className="h-6 w-auto sm:h-7" priority />

        <ul className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <NavLink to={item.href} className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] text-muted transition-colors hover:bg-surface-2 hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-label="Koadr on GitHub (opens in a new tab)"
          >
            <GitHubIcon />
          </a>
          <button
            type="button"
            onClick={toggle}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] text-muted transition-colors hover:bg-surface-2 hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:scale-95"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'dark'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href={cta.start.href}
            target="_blank"
            rel="noopener"
            className="ml-1 hidden sm:inline-flex h-10 items-center justify-center rounded-[10px] bg-brand px-4 text-sm font-semibold text-ink shadow-[0_6px_20px_-8px_rgba(255,107,0,0.75)] transition-colors hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {cta.start.label}
          </a>
          <Button
            variant="ghost"
            className="h-10 w-10 px-0 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <CloseIcon /> : <MenuIcon />}          </Button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-bg md:hidden"
      >
        <ul className="container-page flex flex-col py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-2 py-3 text-base transition-colors ${
                    isActive ? 'text-accent-text' : 'text-fg hover:bg-surface-2'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-2 pb-4">
            <a
              href={cta.start.href}
              target="_blank"
              rel="noopener"
              className="inline-flex h-11 w-full items-center justify-center rounded-[10px] bg-brand text-sm font-semibold text-ink"
            >
              {cta.start.label}
            </a>
          </li>
          <li>
            <Link
              to="/self-host"
              onClick={() => setOpen(false)}
              className="block px-2 pb-4 text-sm text-muted"
            >
              Self-host guide
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
