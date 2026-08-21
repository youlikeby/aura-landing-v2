const DOTS = [
  { top: '16%', left: '10%', size: 'w-1.5 h-1.5 md:w-3 md:h-3', delay: '0s' },
  { top: '28%', left: '86%', size: 'w-1 h-1 md:w-2 md:h-2', delay: '0.4s' },
  { top: '46%', left: '4%', size: 'w-1 h-1 md:w-2 md:h-2', delay: '1.6s' },
  { top: '70%', left: '9%', size: 'w-2 h-2 md:w-4 md:h-4', delay: '0.9s' },
  { top: '78%', left: '90%', size: 'w-1.5 h-1.5 md:w-3 md:h-3', delay: '1.2s' },
  { top: '12%', left: '68%', size: 'w-1 h-1 md:w-2 md:h-2', delay: '2.1s' },
  { top: '88%', left: '32%', size: 'w-1 h-1 md:w-2 md:h-2', delay: '0.6s' },
]

function Statement() {
  return (
    <section className="py-32 px-6 text-center relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <div className="w-[600px] h-[600px] md:w-[1100px] md:h-[1100px] rounded-full bg-accent-gradient blur-3xl animate-aurora" />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-[62%] left-[64%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <div className="w-[380px] h-[380px] md:w-[700px] md:h-[700px] rounded-full bg-[#3B82F6] blur-3xl animate-aurora-slow" />
      </div>

      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-50 md:opacity-100">
        {DOTS.map((dot) => (
          <span
            key={`${dot.top}-${dot.left}`}
            className={`absolute rounded-full bg-accent-gradient shadow-[0_0_12px_rgba(124,58,237,0.9)] animate-dot-pulse ${dot.size}`}
            style={{ top: dot.top, left: dot.left, animationDelay: dot.delay }}
          />
        ))}
      </div>

      <div className="relative">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-accent-lime">Время действовать</p>

        <h2 className="text-4xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[1.05] mt-6">
          <span className="block">Ваши конкуренты</span>
          <span className="block bg-accent-gradient bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(124,58,237,0.5)]">
            уже внедряют AI.
          </span>
        </h2>

        <p className="text-xl text-text-secondary max-w-2xl mx-auto mt-6">
          Не упустите возможность стать первыми, пока другие только присматриваются к технологиям.
        </p>
      </div>
    </section>
  )
}

export default Statement
