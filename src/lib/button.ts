export type ButtonVariant = 'primary' | 'outline' | 'ghost'
export type ButtonSize = 'md' | 'lg'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-brand text-ink hover:bg-brand-soft active:bg-brand-soft shadow-[0_6px_24px_-8px_rgba(255,107,0,0.7)] hover:shadow-[0_10px_30px_-8px_rgba(255,107,0,0.85)]',
  outline:
    'border border-line bg-surface text-fg hover:border-brand/60 hover:text-brand active:border-brand',
  ghost: 'text-fg hover:bg-surface-2',
}

const sizes: Record<ButtonSize, string> = {
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-[0.95rem]',
}

export const buttonClass = (variant: ButtonVariant = 'primary', size: ButtonSize = 'md') =>
  [
    'inline-flex items-center justify-center gap-2 rounded-[10px] font-medium transition-all duration-150',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
    'disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
  ].join(' ')
