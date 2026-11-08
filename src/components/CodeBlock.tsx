import { useState } from 'react'
import { CheckIcon, CopyIcon } from './Icons'

type CodeBlockProps = {
  code: string
  filename?: string
  label?: string
}

export function CodeBlock({ code, filename, label }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="overflow-hidden rounded-[10px] border border-line bg-[#171614] text-[#e8e6e1] shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-3 py-2">
        <span className="font-mono text-xs text-white/50">{filename ?? label ?? 'shell'}</span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-white/60 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          aria-label={copied ? 'Copied' : 'Copy code'}
        >
          {copied ? <CheckIcon className="h-3.5 w-3.5" /> : <CopyIcon className="h-3.5 w-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  )
}
