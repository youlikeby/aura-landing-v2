import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
}

function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default FadeIn
