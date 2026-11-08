import { useEffect, useSyncExternalStore } from 'react'
import { legal } from '../content/site'

const CONSENT_KEY = 'koadr-analytics-consent'
const subscribe = (onChange: () => void) => {
  window.addEventListener(CONSENT_KEY, onChange)
  return () => window.removeEventListener(CONSENT_KEY, onChange)
}

/** Injects the analytics script once, unless the visitor opted out. */
export function Analytics() {
  const enabled = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(CONSENT_KEY) !== 'denied',
    () => true,
  )

  useEffect(() => {
    if (!enabled || document.querySelector('script[data-analytics]')) return
    const script = document.createElement('script')
    script.src = `https://app.buddystat.com/api/script.js?siteId=${legal.analytics.siteId}`
    script.defer = true
    script.dataset.analytics = legal.analytics.name
    document.head.appendChild(script)
  }, [enabled])

  return null
}
