import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: ReactNode
  className?: string
}

function Button({ variant = 'primary', children, className = '', ...rest }: ButtonProps) {
  if (variant === 'secondary') {
    return (
      <button
        className={`inline-flex items-center gap-2 bg-transparent text-transparent bg-accent-gradient bg-clip-text font-medium hover:underline transition-all duration-200 ${className}`}
        {...rest}
      >
        {children}
        <span className="text-transparent bg-accent-gradient bg-clip-text">→</span>
      </button>
    )
  }

  return (
    <button
      className={`inline-flex items-center justify-center bg-accent-gradient text-white rounded-pill px-6 py-3 font-medium hover:shadow-glow transition-all duration-200 ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
