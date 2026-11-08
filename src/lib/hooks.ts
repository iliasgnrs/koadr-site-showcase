import { useEffect, useState } from 'react'

export type Metadata = {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
}

const THEME_KEY = 'koadr-theme'
type Theme = 'light' | 'dark'

function readTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  const meta = document.querySelector('meta[name="theme-color"]:not([media])')
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#111110' : '#FAFAF9')
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => readTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (!localStorage.getItem(THEME_KEY)) setTheme(mq.matches ? 'dark' : 'light')
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem(THEME_KEY, next)
      return next
    })
  }

  return { theme, toggle }
}

function setMeta(selector: string, attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

const OG_IMAGE = 'https://koadr.dev/og-image.png'

export function useDocumentMetadata({ title, description, path, type = 'website' }: Metadata) {
  useEffect(() => {
    const url = `https://koadr.dev${path === '/' ? '/' : path}`
    document.title = title.includes('Koadr') ? title : `${title} | Koadr`

    setMeta('meta[name="description"]', 'name', 'description', description)
    const og: Array<[string, string]> = [
      ['og:title', title],
      ['og:description', description],
      ['og:url', url],
      ['og:type', type],
      ['og:site_name', 'Koadr'],
      ['og:locale', 'en_US'],
      ['og:image', OG_IMAGE],
      ['og:image:width', '1200'],
      ['og:image:height', '630'],
    ]
    for (const [key, val] of og) setMeta(`meta[property="${key}"]`, 'property', key, val)

    const tw: Array<[string, string]> = [
      ['twitter:card', 'summary_large_image'],
      ['twitter:title', title],
      ['twitter:description', description],
      ['twitter:image', OG_IMAGE],
    ]
    for (const [key, val] of tw) setMeta(`meta[name="${key}"]`, 'name', key, val)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, description, path, type])
}
