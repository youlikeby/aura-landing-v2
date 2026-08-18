import { useEffect, useState } from 'react'
import { useInView } from '../../hooks/useInView'

interface CountUpProps {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

function CountUp({ target, prefix = '', suffix = '', duration = 1500, className = '' }: CountUpProps) {
  const { ref, isInView } = useInView<HTMLSpanElement>()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start: number | null = null
    let frameId: number

    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setValue(Math.round(progress * target))
      if (progress < 1) {
        frameId = requestAnimationFrame(step)
      }
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [isInView, target, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}

export default CountUp
