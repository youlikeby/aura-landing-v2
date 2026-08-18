import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-card border border-white/10 text-xs uppercase tracking-wider text-text-secondary ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
      {children}
    </span>
  )
}

export default Badge
