import { useSyncExternalStore } from 'react'

const CONSENT_KEY = 'koadr-analytics-consent'

const subscribe = (onChange: () => void) => {
  window.addEventListener(CONSENT_KEY, onChange)
  return () => window.removeEventListener(CONSENT_KEY, onChange)
}

const getSnapshot = () => localStorage.getItem(CONSENT_KEY) !== 'denied'
const getServerSnapshot = () => true

export function useAnalyticsConsent() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggle = () => {
    localStorage.setItem(CONSENT_KEY, enabled ? 'denied' : 'granted')
    window.dispatchEvent(new Event(CONSENT_KEY))
    // An already-loaded tracker can't be unloaded, so reload to apply the opt-out.
    if (enabled) window.location.reload()
  }

  return { enabled, toggle }
}
