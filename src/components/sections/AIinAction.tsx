import { useEffect, useState, type ReactNode } from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Card from '../ui/Card'
import FadeIn from '../ui/FadeIn'
import ContactModal from '../ContactModal'
import { useInView } from '../../hooks/useInView'

interface ModuleNode {
  label: string
  x: number
  y: number
  icon: ReactNode
  desktopOnly?: boolean
}

const ICON_CLASS = 'w-4 h-4 md:w-[18px] md:h-[18px]'

const MODULES: ModuleNode[] = [
  {
    label: 'Автоматизация',
    x: 50,
    y: 15,
    desktopOnly: true,
    icon: (
      <svg viewBox="0 0 24 24" className={ICON_CLASS} fill="none">
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: 'Аналитика',
    x: 86,
    y: 39,
    icon: (
      <svg viewBox="0 0 24 24" className={ICON_CLASS} fill="none">
        <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Интеграции',
    x: 72,
    y: 78,
    icon: (
      <svg viewBox="0 0 24 24" className={ICON_CLASS} fill="none">
        <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7.6 7.9l3 8M16.4 7.9l-3 8M8.5 6h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'База знаний',
    x: 28,
    y: 78,
    icon: (
      <svg viewBox="0 0 24 24" className={ICON_CLASS} fill="none">
        <path
          d="M6 3h8l4 4v14H6z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M13.5 3v4.5H18M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Чат-бот',
    x: 14,
    y: 39,
    icon: (
      <svg viewBox="0 0 24 24" className={ICON_CLASS} fill="none">
        <path
          d="M4 5h16v11H9l-5 4z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M9 10.5h.01M12 10.5h.01M15 10.5h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
]

const NODE_CYCLE_MS = 800
const ANIMATION_START_DELAY_MS = 500
const METRICS_TICK_MS = 2500

function AIinAction() {
  const { ref, isInView } = useInView<HTMLDivElement>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [activeNode, setActiveNode] = useState(0)
  const [responseMs, setResponseMs] = useState(120)
  const [accuracy, setAccuracy] = useState(98.7)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)')
    const sync = () => setIsDesktop(query.matches)

    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!isInView) return

    const startTimer = window.setTimeout(() => setIsRunning(true), ANIMATION_START_DELAY_MS)
    return () => window.clearTimeout(startTimer)
  }, [isInView])

  useEffect(() => {
    if (!isRunning) return

    const nodeTimer = window.setInterval(() => {
      setActiveNode((current) => {
        let next = (current + 1) % MODULES.length
        while (!isDesktop && MODULES[next].desktopOnly) {
          next = (next + 1) % MODULES.length
        }
        return next
      })
    }, NODE_CYCLE_MS)

    const metricsTimer = window.setInterval(() => {
      setResponseMs(114 + Math.floor(Math.random() * 13))
      setAccuracy(Number((98.5 + Math.random() * 0.4).toFixed(1)))
    }, METRICS_TICK_MS)

    return () => {
      window.clearInterval(nodeTimer)
      window.clearInterval(metricsTimer)
    }
  }, [isRunning, isDesktop])

  const metrics = [
    { label: 'Модулей подключено', value: '5/5', withDot: true },
    { label: 'Время отклика', value: `${responseMs}ms` },
    { label: 'Точность', value: `${accuracy}%` },
    { label: 'Статус', value: 'готов к запуску' },
  ]

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center">
        <Badge>Процесс создания</Badge>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold">
            Собираем <span className="bg-accent-gradient bg-clip-text text-transparent">AI-решение</span> под
            ваш бизнес
          </h2>
          <p className="text-text-secondary text-xl mt-6">
            От анализа задачи до запуска в продакшн. Каждый модуль настраивается под ваши процессы.
          </p>
          <div className="mt-8">
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              Обсудить проект
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div ref={ref}>
            <Card
              className="bg-card-light border-[#7C3AED]/30 shadow-glow !p-0 overflow-hidden"
              hoverEffect={false}
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <span className="flex-1 text-center text-text-muted text-[11px] md:text-xs font-mono truncate">
                  project-aura-build
                </span>
                <span className="flex items-center gap-1.5 text-[10px] md:text-xs text-text-secondary tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-dot-pulse" />
                  LIVE
                </span>
              </div>

              <div className="relative w-full h-[280px] md:h-[340px]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full"
                >
                  <defs>
                    <linearGradient id="flowGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="100">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>

                  {MODULES.map((module, index) => (
                    <g key={module.label} className={module.desktopOnly ? 'hidden md:block' : undefined}>
                      <line
                        x1={module.x}
                        y1={module.y}
                        x2="50"
                        y2="50"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth={1}
                        vectorEffect="non-scaling-stroke"
                      />
                      <line
                        x1={module.x}
                        y1={module.y}
                        x2="50"
                        y2="50"
                        stroke="url(#flowGradient)"
                        strokeWidth={activeNode === index ? 2.5 : 1.5}
                        strokeDasharray="5 15"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                        className={isRunning ? 'animate-data-flow' : undefined}
                        style={{ animationDelay: `${index * 0.2}s`, transition: 'stroke-width 0.5s ease' }}
                      />
                    </g>
                  ))}
                </svg>

                <div
                  aria-hidden="true"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-accent-gradient blur-2xl animate-aurora" />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent-gradient shadow-[0_0_35px_rgba(124,58,237,0.6)] flex items-center justify-center">
                  <span className="text-white font-bold text-xs md:text-sm">AI Core</span>
                </div>

                {MODULES.map((module, index) => (
                  <div
                    key={module.label}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 ${
                      module.desktopOnly ? 'hidden md:flex' : ''
                    }`}
                    style={{ left: `${module.x}%`, top: `${module.y}%` }}
                  >
                    <div
                      className={`flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-xl border bg-card transition-all duration-500 ${
                        activeNode === index
                          ? 'border-[#7C3AED] text-white shadow-[0_0_20px_rgba(124,58,237,0.7)] scale-110'
                          : 'border-white/10 text-text-secondary'
                      }`}
                    >
                      {module.icon}
                    </div>
                    <span
                      className={`text-[9px] md:text-[11px] whitespace-nowrap transition-colors duration-500 ${
                        activeNode === index ? 'text-white' : 'text-text-muted'
                      }`}
                    >
                      {module.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-4 py-4 border-t border-white/5">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-text-muted text-[10px] md:text-[11px] truncate">{metric.label}</p>
                    <p className="flex items-center gap-1.5 text-xs md:text-sm text-white mt-1 tabular-nums">
                      {metric.withDot && <span className="w-1.5 h-1.5 rounded-full bg-accent-lime shrink-0" />}
                      <span className="truncate">{metric.value}</span>
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </FadeIn>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default AIinAction
