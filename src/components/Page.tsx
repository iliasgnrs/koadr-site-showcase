import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDocumentMetadata, type Metadata } from '../lib/hooks'

export function PageMeta({ title, description, path }: Metadata) {
  useDocumentMetadata({ title, description, path })
  return null
}

export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export function Page({ children }: { children: ReactNode }) {
  return <div className="animate-fade-up">{children}</div>
}
