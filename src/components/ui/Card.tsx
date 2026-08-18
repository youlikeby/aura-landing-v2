import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
}

function Card({ children, className = '', hoverEffect = true }: CardProps) {
  return (
    <div
      className={`bg-card border border-white/10 rounded-card p-6 ${
        hoverEffect ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-glow' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
