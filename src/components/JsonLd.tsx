import { useEffect } from 'react'

/** Injects route-specific JSON-LD and removes it on unmount. */
export function JsonLd({ id, json }: { id: string; json: string }) {
  useEffect(() => {
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = `ld-${id}`
    el.text = json
    document.head.appendChild(el)
    return () => el.remove()
  }, [id, json])
  return null
}
