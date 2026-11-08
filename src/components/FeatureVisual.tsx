import type { ReactElement } from 'react'
import type { FeatureVisual } from '../content/site'

import { CheckIcon } from './Icons'

const panel =
  'relative overflow-hidden rounded-card border border-line bg-surface p-4 shadow-[0_20px_60px_-50px_rgba(26,26,26,0.8)]'

function Chrome({ title }: { title: string }) {
  return (
    <div className="mb-3 flex items-center gap-1.5 border-b border-line pb-2.5">
      <span className="h-2 w-2 rounded-full bg-line" />
      <span className="h-2 w-2 rounded-full bg-line" />
      <span className="h-2 w-2 rounded-full bg-brand/60" />
      <span className="ml-1.5 truncate font-mono text-[10px] text-muted">{title}</span>
    </div>
  )
}

function PreviewVisual() {
  return (
    <div className={panel}>
      <Chrome title="preview · localhost:5173" />
      <div className="grid grid-cols-[5.5rem_1fr] gap-3">
        <ul className="space-y-1 font-mono text-[9.5px]">
          {['app', 'components', 'lib', 'package.json'].map((f, i) => (
            <li
              key={f}
              className={`truncate rounded px-1.5 py-1 ${i === 0 ? 'bg-brand/10 text-accent-text' : 'text-muted'}`}
            >
              {f}
            </li>
          ))}
        </ul>
        <div className="space-y-1.5 font-mono text-[9.5px] leading-relaxed">
          <p className="text-muted">
            <span className="text-accent-text">{'<main'}</span> className={'{'}…{'}'}
            <span className="text-accent-text">{'>'}</span>
          </p>
          <p className="pl-3 text-fg/80">Hero, pricing, footer</p>
          <p className="text-muted">
            <span className="text-accent-text">{'</main>'}</span>
          </p>
          <div className="mt-2 rounded border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-1 font-mono text-[9.5px] text-emerald-800 dark:text-emerald-400">
            + 0 errors
          </div>
        </div>
      </div>
    </div>
  )
}

function StartersVisual() {
  const starters = ['Next.js', 'Vite + React', 'Astro', 'Expo', 'SvelteKit']
  return (
    <div className={panel}>
      <Chrome title="choose a starter" />
      <ul className="space-y-1.5">
        {starters.map((s, i) => (
          <li
            key={s}
            className={`flex items-center justify-between rounded-md border px-2.5 py-1.5 font-mono text-[10px] ${
              i === 1 ? 'border-brand/50 bg-brand/5 text-fg' : 'border-line text-muted'
            }`}
          >
            {s}
            {i === 1 && <CheckIcon className="h-3 w-3 text-brand" />}
          </li>
        ))}
      </ul>
    </div>
  )
}

function PromptLibraryVisual() {
  return (
    <div className={panel}>
      <Chrome title="settings › workspace › features" />
      <div className="grid grid-cols-2 gap-2">
        {[
          { name: 'Simple Sal', note: 'concise guidance' },
          { name: 'Tiny Tim', note: 'smaller models' },
        ].map((p, i) => (
          <div
            key={p.name}
            className={`rounded-md border p-2.5 ${i === 0 ? 'border-brand/50 bg-brand/5' : 'border-line'}`}
          >
            <p className="font-display text-[11px] font-semibold">{p.name}</p>
            <p className="mt-0.5 font-mono text-[9px] text-muted">{p.note}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 space-y-1.5">
        <div className="h-1.5 w-4/5 rounded bg-line" />
        <div className="h-1.5 w-3/5 rounded bg-line" />
      </div>
    </div>
  )
}

function WorkflowsVisual() {
  return (
    <div className={panel}>
      <Chrome title="git › main" />
      <ul className="space-y-1.5 font-mono text-[10px]">
        {[
          ['clone', 'iliasgnrs/koadr'],
          ['push', 'origin/main'],
          ['snapshot', 'restore · #12'],
          ['lock', 'app/page.tsx'],
        ].map(([a, b]) => (
          <li key={a} className="flex items-center gap-2 rounded-md bg-surface-2 px-2 py-1.5">
            <span className="w-14 shrink-0 text-accent-text">{a}</span>
            <span className="truncate text-muted">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function DeployVisual() {
  return (
    <div className={panel}>
      <Chrome title="deploy" />
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <p className="text-[11px] text-fg/80">Production build passed</p>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {['Netlify', 'Vercel', 'GitHub'].map((p, i) => (
          <div
            key={p}
            className={`rounded-md border px-1.5 py-2 text-center font-mono text-[9.5px] ${
              i === 0 ? 'border-brand/50 bg-brand/5 text-accent-text' : 'border-line text-muted'
            }`}
          >
            {p}
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-md bg-surface-2 px-2 py-1.5 font-mono text-[9.5px] text-muted">
        https://koadr-demo.netlify.app
      </div>
    </div>
  )
}

function DataVisual() {
  const bars = [38, 62, 48, 80, 56, 92, 70]
  return (
    <div className={panel}>
      <Chrome title="supabase › analytics" />
      <div className="flex h-20 items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-brand/70"
            style={{ height: `${h}%`, opacity: 0.55 + i * 0.06 }}
          />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between font-mono text-[9px] text-muted">
        <span>rows 1,284</span>
        <span>6 charts</span>
      </div>
    </div>
  )
}

function McpVisual() {
  return (
    <div className={panel}>
      <Chrome title="settings › integrations › connectors" />
      <ul className="space-y-1.5">
        {[
          ['GitHub', true],
          ['GitLab', true],
          ['Netlify', false],
          ['MCP: postgres', true],
        ].map(([name, on]) => (
          <li
            key={String(name)}
            className="flex items-center justify-between rounded-md border border-line px-2.5 py-1.5 text-[10px]"
          >
            <span className="text-fg/80">{name}</span>
            <span
              className={`h-3.5 w-6 rounded-full p-0.5 ${on ? 'bg-brand' : 'bg-line'}`}
              aria-hidden="true"
            >
              <span
                className={`block h-2.5 w-2.5 rounded-full bg-white transition-transform ${on ? 'translate-x-2.5' : ''}`}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PlatformsVisual() {
  return (
    <div className={panel}>
      <Chrome title="koadr" />
      <div className="space-y-2">
        <div className="flex items-center gap-2 rounded-md border border-brand/40 bg-brand/5 px-2.5 py-2">
          <span className="h-6 w-6 rounded bg-brand/20" />
          <span className="font-mono text-[10px] text-fg/80">desktop · electron</span>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-line px-2.5 py-2">
          <span className="h-6 w-6 rounded bg-surface-2" />
          <span className="font-mono text-[10px] text-muted">mobile · expo</span>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-line px-2.5 py-2">
          <span className="h-6 w-6 rounded bg-surface-2" />
          <span className="font-mono text-[10px] text-muted">web · browser</span>
        </div>
      </div>
    </div>
  )
}

function VoiceVisual() {
  const bars = [10, 22, 34, 18, 46, 30, 52, 26, 38, 14, 28, 20]
  return (
    <div className={panel}>
      <Chrome title="voice prompt" />
      <div className="flex h-16 items-center justify-center gap-1">
        {bars.map((h, i) => (
          <span
            key={i}
            className="w-1 animate-blink rounded-full bg-brand"
            style={{ height: `${h + 8}px`, animationDelay: `${i * 90}ms` }}
          />
        ))}
      </div>
      <p className="mt-2 text-center font-mono text-[9.5px] text-muted">listening…</p>
    </div>
  )
}

const map = {
  workbench: PreviewVisual,
  starters: StartersVisual,
  'prompt-library': PromptLibraryVisual,
  'workflows': WorkflowsVisual,
  'deploy': DeployVisual,
  'data': DataVisual,
  'mcp': McpVisual,
  'platforms': PlatformsVisual,
  'voice': VoiceVisual,
} satisfies Record<FeatureVisual, () => ReactElement>

export function FeatureVisualMock({ kind }: { kind: FeatureVisual }) {
  const Visual = map[kind]
  return <Visual />
}
