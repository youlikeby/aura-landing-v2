import Card from '../ui/Card'
import Button from '../ui/Button'
import FadeIn from '../ui/FadeIn'

const SOLUTIONS = [
  {
    title: 'Автоматизация процессов',
    body: 'Избавляем от рутины: обработка заявок, документов, отчётов и внутренних задач без участия человека.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <circle cx="20" cy="20" r="6" stroke="#7C3AED" strokeWidth="2" />
        <path
          d="M20 4v6M20 30v6M4 20h6M30 20h6M9.5 9.5l4.2 4.2M26.3 26.3l4.2 4.2M9.5 30.5l4.2-4.2M26.3 13.7l4.2-4.2"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Боты и ассистенты',
    body: 'AI-ассистенты для клиентов и сотрудников: отвечают на вопросы, консультируют, оформляют заказы 24/7.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <rect x="8" y="12" width="24" height="18" rx="4" stroke="#7C3AED" strokeWidth="2" />
        <circle cx="15" cy="21" r="2" fill="#3B82F6" />
        <circle cx="25" cy="21" r="2" fill="#3B82F6" />
        <path d="M20 12V6M16 6h8" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Сайты и лендинги',
    body: 'Быстро запускаем сайты и лендинги с продуманной структурой, которые продают и конвертируют.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <rect x="6" y="8" width="28" height="24" rx="3" stroke="#7C3AED" strokeWidth="2" />
        <path d="M6 15h28" stroke="#7C3AED" strokeWidth="2" />
        <circle cx="11" cy="11.5" r="1.2" fill="#3B82F6" />
        <circle cx="15" cy="11.5" r="1.2" fill="#3B82F6" />
      </svg>
    ),
  },
  {
    title: 'AI-сервисы под ключ',
    body: 'Разрабатываем полноценные AI-сервисы: от идеи и прототипа до внедрения и поддержки в проде.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <path d="M20 5l12 7v16l-12 7-12-7V12l12-7z" stroke="#7C3AED" strokeWidth="2" strokeLinejoin="round" />
        <path d="M20 5v30M8 12l12 7 12-7" stroke="#3B82F6" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function Solutions() {
  return (
    <section id="solutions" className="py-24 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Сделаем любое решение{' '}
          <span className="bg-accent-gradient bg-clip-text text-transparent">под вашу задачу</span>
        </h2>
      </FadeIn>
      <FadeIn delay={100}>
        <p className="text-text-secondary text-xl mt-6 max-w-2xl mx-auto text-center">
          Отрасли не важны — если можно автоматизировать любое предприятие любой сферы
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {SOLUTIONS.map((solution, index) => (
          <FadeIn key={solution.title} delay={index * 100}>
            <Card>
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold">{solution.title}</h3>
              <p className="text-text-secondary mt-2">{solution.body}</p>
            </Card>
          </FadeIn>
        ))}

        <FadeIn delay={400} className="md:col-span-2">
          <Card
            className="border-dashed border-2 border-white/20 bg-transparent hover:border-accent-lime/50"
            hoverEffect={false}
          >
            <h3 className="text-xl font-bold">Ваша задача</h3>
            <p className="text-text-secondary mt-2 max-w-xl">
              Не нашли своё? Расскажите, с какой задачей нужна помощь — подберём подходящее AI-решение под ваш
              бизнес.
            </p>
            <div className="mt-6">
              <Button variant="secondary">Описать свою задачу</Button>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}

export default Solutions
