import { useEffect, useState } from 'react'

const PROMPT = 'build a waitlist page with email capture and a confetti animation'

const FILES = ['app/page.tsx', 'app/layout.tsx', 'components/waitlist-form.tsx', 'styles/globals.css']

type Tok = 'kw' | 'fn' | 'p' | 'tag' | 'str'
type Fragment = [string, Tok?]
type Line = [Fragment[], number]

const LINES: Line[] = [
  [[['export default function ', 'kw'], ['Waitlist', 'fn'], ['() {', 'p']], 0],
  [[['  return (', 'p']], 0],
  [[['    <main className="mx-auto max-w-xl py-24">', 'tag']], 1],
  [[['      <h1 className="text-4xl font-bold">Join the waitlist</h1>', 'tag']], 1],
  [[['      <WaitlistForm onSuccess={celebrate} />', 'tag']], 1],
  [[['    </main>', 'tag']], 0],
  [[['  )', 'p']], 0],
  [[['}', 'p']], 0],
]

const tokClass: Record<Tok, string> = {
  kw: 'text-[#ff8a33]',
  fn: 'text-[#e8e6e1]',
  str: 'text-[#8fc98f]',
  tag: 'text-[#9fb8ff]',
  p: 'text-white/55',
}

function CodeLine({ fragments, indent }: { fragments: Fragment[]; indent: number }) {
  return (
    <div
      className="px-4 font-mono text-[11px] leading-[1.75] whitespace-pre sm:text-xs"
      style={{ paddingLeft: `${indent * 14 + 16}px` }}
    >
      {fragments.map(([text, tok], i) => (
        <span key={i} className={tok ? tokClass[tok] : 'text-white/60'}>
          {text}
        </span>
      ))}
    </div>
  )
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function Workbench() {
  const [reduce] = useState(prefersReducedMotion)
  const [typed, setTyped] = useState(() => (prefersReducedMotion() ? PROMPT.length : 0))
  const [visibleLines, setVisibleLines] = useState(() =>
    prefersReducedMotion() ? LINES.length : 0,
  )
  const [phase, setPhase] = useState<'typing' | 'building' | 'done'>(() =>
    prefersReducedMotion() ? 'done' : 'typing',
  )

  useEffect(() => {
    if (reduce) return

    if (phase === 'typing') {
      if (typed < PROMPT.length) {
        const t = window.setTimeout(() => setTyped((n) => n + 1), 32)
        return () => window.clearTimeout(t)
      }
      const t = window.setTimeout(() => setPhase('building'), 550)
      return () => window.clearTimeout(t)
    }

    if (phase === 'building') {
      if (visibleLines < LINES.length) {
        const t = window.setTimeout(() => setVisibleLines((n) => n + 1), 150)
        return () => window.clearTimeout(t)
      }
      const t = window.setTimeout(() => setPhase('done'), 700)
      return () => window.clearTimeout(t)
    }
  }, [reduce, typed, phase, visibleLines])

  return (
    <div className="overflow-hidden rounded-card border border-line bg-[#141312] shadow-[0_40px_100px_-40px_rgba(255,107,0,0.35),0_30px_60px_-40px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand/70" />
        <span className="ml-2 font-mono text-[11px] text-white/60">koadr · workspace</span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/65">
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-emerald-400" />
          webcontainer
        </span>
      </div>

      <div className="grid md:grid-cols-[minmax(0,1fr)_14rem]">
        <div className="min-w-0 border-b border-white/10 md:border-r md:border-b-0">
          <div className="flex gap-1 border-b border-white/10 px-3 py-2 font-mono text-[10px]">
            <span className="rounded bg-white/10 px-2 py-1 text-white/80">prompt</span>
            <span className="px-2 py-1 text-white/55">code</span>
            <span className="px-2 py-1 text-white/55">diff</span>
          </div>

          <div className="min-h-[7.5rem] p-4">
            <p className="text-[10px] font-medium tracking-wider text-brand/90 uppercase">
              you
            </p>
            <p className="mt-1 text-[12px] leading-relaxed text-white/85 sm:text-[13px]">
              {PROMPT.slice(0, typed)}
              {phase === 'typing' && <span className="ml-px inline-block h-4 w-px animate-caret bg-brand align-middle" />}
            </p>
            {phase !== 'typing' && (
              <div className="mt-3 flex items-center gap-2 font-mono text-[10px] text-emerald-400/80">
                <span className="h-1 w-1 animate-blink rounded-full bg-emerald-400" />
                {phase === 'done' ? 'dev server ready · localhost:5173' : 'installing dependencies…'}
              </div>
            )}
          </div>

          <div className="border-t border-white/10 bg-black/20 py-3 font-mono">
            {LINES.slice(0, visibleLines).map((line, i) => (
              <CodeLine key={i} fragments={line[0]} indent={line[1]} />
            ))}
            {visibleLines === 0 && (
              <p className="px-4 text-[11px] text-white/25">&nbsp;</p>
            )}
          </div>

          <div className="border-t border-white/10 bg-black/30 px-4 py-2.5 font-mono text-[10.5px] leading-relaxed text-white/60">
            <p>
              <span className="text-emerald-400/80">$</span> npm run dev
            </p>
            <p className="text-white/55">
              VITE v6 ready in 412 ms · Local: http://localhost:5173
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="border-b border-white/10 px-3 py-2">
            <p className="text-[10px] font-medium tracking-wider text-white/60 uppercase">
              files
            </p>
            <ul className="mt-2 space-y-1 font-mono text-[10.5px]">
              {FILES.map((f, i) => (
                <li
                  key={f}
                  className={`truncate rounded px-1.5 py-0.5 transition-colors ${
                    i === 0 ? 'bg-white/10 text-white/90' : 'text-white/60'
                  }`}
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-1 items-end p-3">
            <div className="w-full overflow-hidden rounded-md border border-white/10 bg-white/[0.02]">
              <div className="flex h-6 items-center gap-1.5 border-b border-white/10 px-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="ml-1 h-1.5 flex-1 rounded-full bg-white/10" />
              </div>
              <div className="space-y-1.5 p-2.5">
                <div className="h-2 w-3/5 rounded bg-brand/60" />
                <div className="h-1.5 w-4/5 rounded bg-white/15" />
                <div className="h-1.5 w-2/3 rounded bg-white/10" />
                <div className="mt-2 h-5 w-20 rounded bg-brand" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
