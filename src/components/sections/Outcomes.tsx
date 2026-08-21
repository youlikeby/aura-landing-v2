import Card from '../ui/Card'
import FadeIn from '../ui/FadeIn'

const OUTCOMES = [
  {
    title: 'Больше заявок и продаж',
    body: 'AI отвечает мгновенно и доводит клиента до заявки, а не теряет его на этапе ожидания ответа.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <path d="M6 28l8-8 6 6 12-14" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 8h6v6" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Меньше расходов',
    body: 'Один AI-ассистент закрывает задачи, на которые раньше уходил бюджет на команду поддержки.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <circle cx="15" cy="20" r="9" stroke="#7C3AED" strokeWidth="2" />
        <path
          d="M15 15.5v9M12.5 17.7c0-1.3 1.1-2.2 2.5-2.2s2.5.9 2.5 2c0 2.6-5 1.8-5 4.5 0 1.1 1.1 2 2.5 2s2.5-.9 2.5-2"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M28 12v10M25 19l3 3 3-3" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Экономия времени',
    body: 'Рутинные процессы уходят на автоматизацию — команда занимается только тем, что требует человека.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <circle cx="20" cy="20" r="14" stroke="#7C3AED" strokeWidth="2" />
        <path d="M20 12v8l6 4" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Рост без хаоса',
    body: 'Масштабируетесь без пропорционального роста штата и затрат на управление.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <path
          d="M6 32h6v-6h6v-6h6v-6h6v-6"
          stroke="#7C3AED"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M6 32h28" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
]

function Outcomes() {
  return (
    <section id="outcomes" className="pt-10 md:pt-16 pb-24 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Что это даст{' '}
          <span className="bg-accent-gradient bg-clip-text text-transparent">вашему бизнесу</span>
        </h2>
      </FadeIn>
      <FadeIn delay={100}>
        <p className="text-text-secondary text-xl mt-6 max-w-2xl mx-auto text-center">
          Конкретные результаты от внедрения AI-инструментов в ваши процессы
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {OUTCOMES.map((outcome, index) => (
          <FadeIn key={outcome.title} delay={index * 100} className="h-full">
            <Card className="h-full">
              <div className="mb-4">{outcome.icon}</div>
              <h3 className="text-xl font-bold">{outcome.title}</h3>
              <p className="text-text-secondary mt-2">{outcome.body}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default Outcomes
