import { Link } from 'react-router-dom'

type LogoProps = {
  className?: string
  linked?: boolean
  priority?: boolean
}

export function Logo({ className = 'h-7 w-auto', linked = true, priority = false }: LogoProps) {
  const img = (
    <img
      src="/brand/logo-360.webp"
      srcSet="/brand/logo-360.webp 360w, /brand/logo-720.webp 720w"
      sizes="200px"
      alt="Koadr"
      width={360}
      height={74}
      className={`logo-invert ${className}`}
      decoding="async"
      fetchPriority={priority ? 'high' : undefined}
    />
  )
  if (!linked) return img
  return (
    <Link to="/" aria-label="Koadr home" className="inline-flex items-center rounded-md">
      {img}
    </Link>
  )
}
