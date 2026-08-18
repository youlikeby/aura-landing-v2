import Card from '../ui/Card'
import CountUp from '../ui/CountUp'

const STATS = [
  { target: 40, suffix: '+', label: 'запущено сервисов' },
  { target: 30, suffix: '+', label: 'постоянных клиентов' },
  { target: 12, suffix: '', label: 'проектов в работе сейчас' },
]

function Stats() {
  return (
    <section className="py-20 px-6">
      <Card className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center" hoverEffect={false}>
        <div>
          <div className="flex flex-col gap-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <CountUp
                  target={stat.target}
                  suffix={stat.suffix}
                  className="text-5xl font-bold bg-accent-gradient bg-clip-text text-transparent"
                />
                <p className="text-text-secondary mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-sm mt-8">
            Работаем с малым и средним бизнесом по всей России
          </p>
        </div>

        <div className="relative">
          <span className="absolute -top-3 right-4 z-10 px-3 py-1 rounded-pill bg-accent-gradient text-white text-sm font-medium shadow-glow">
            <CountUp target={47} prefix="+" suffix="%" />
          </span>
          <div className="bg-background border border-white/10 rounded-card p-6 shadow-glow">
            <svg viewBox="0 0 300 140" className="w-full h-auto" preserveAspectRatio="none">
              <defs>
                <linearGradient id="statsLineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                <linearGradient id="statsFillGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,120 L40,105 L80,95 L120,70 L160,75 L200,45 L240,35 L300,10 L300,140 L0,140 Z"
                fill="url(#statsFillGradient)"
              />
              <path
                d="M0,120 L40,105 L80,95 L120,70 L160,75 L200,45 L240,35 L300,10"
                fill="none"
                stroke="url(#statsLineGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default Stats
