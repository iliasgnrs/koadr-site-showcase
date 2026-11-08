import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { buttonClass, type ButtonSize, type ButtonVariant } from '../lib/button'
import { GitHubIcon } from './Icons'

const isExternal = (href: string) => /^https?:\/\//.test(href) || href.startsWith('mailto:')

type CtaLinkProps = {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
  withGithub?: boolean
  className?: string
  children: ReactNode
}

export function CtaLink({
  href,
  variant = 'primary',
  size = 'md',
  withGithub = false,
  className = '',
  children,
}: CtaLinkProps) {
  const content = (
    <>
      {withGithub && <GitHubIcon className="h-[1.05em] w-[1.05em]" />}
      {children}
    </>
  )
  const cls = `${buttonClass(variant, size)} ${className}`

  if (isExternal(href)) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener"
        {...(withGithub ? { 'aria-label': `${children} on GitHub` } : {})}
      >
        {content}
      </a>
    )
  }
  return (
    <Link to={href} className={cls}>
      {content}
    </Link>
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; size?: ButtonSize }) {
  return <button className={`${buttonClass(variant, size)} ${className}`} {...props} />
}
