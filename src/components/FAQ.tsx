import { useState } from 'react'
import { ChevronIcon } from './Icons'

export type FaqItem = { q: string; a: string }

export function FAQ({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <ul className="divide-y divide-line overflow-hidden rounded-card border border-line bg-surface">
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <li key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-surface-2 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand"
              >
                <span className="font-display text-[0.95rem] font-medium">{item.q}</span>
                <ChevronIcon
                  className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              hidden={!open}
              className="px-5 pb-5 text-sm leading-relaxed text-muted"
            >
              {item.a}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
