import { useState } from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Card from '../ui/Card'
import CountUp from '../ui/CountUp'
import ContactModal from '../ContactModal'

const NUMBERS = [
  { prefix: '-', target: 60, suffix: '%', label: 'к стоимости разработки' },
  { prefix: 'x', target: 5, suffix: '', label: 'быстрее запуска' },
  { prefix: '$10–', target: 15, suffix: 'k', label: 'экономия на команде' },
]

const CLASSIC_POINTS = ['Команда 3–5 человек', '$3000/мес на подрядчиков', '3–6 месяцев до запуска', 'Оплата за часы']

const AURA_POINTS = ['AI делает основной объём работы', 'MVP за 2–4 недели', 'Компактная команда', 'Оплата за результат']

function Benefit() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="benefit" className="py-24 px-6 max-w-7xl mx-auto bg-card-light">
      <div className="text-center">
        <Badge>Честная математика</Badge>

        <h2 className="text-3xl md:text-5xl font-bold mt-6">
          Почему AI-разработка — это{' '}
          <span className="bg-accent-gradient bg-clip-text text-transparent">выгодно</span>
        </h2>
        <p className="text-text-secondary text-xl mt-6 max-w-2xl mx-auto">
          Сравним ваши инвестиции при классической разработке и при разработке с помощью AI-методов.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 my-12 text-center">
        {NUMBERS.map((number) => (
          <div key={number.label}>
            <CountUp
              prefix={number.prefix}
              target={number.target}
              suffix={number.suffix}
              className="text-3xl md:text-4xl font-bold bg-accent-gradient bg-clip-text text-transparent"
            />
            <p className="text-text-secondary mt-2 text-sm md:text-base">{number.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <Card className="opacity-60" hoverEffect={false}>
          <h3 className="text-xl font-bold">Классическая разработка</h3>
          <ul className="flex flex-col gap-3 mt-6">
            {CLASSIC_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3 text-text-secondary">
                <span className="text-text-muted">✕</span>
                {point}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="border-[#7C3AED]/60 shadow-glow">
          <h3 className="text-xl font-bold">Aura AI</h3>
          <ul className="flex flex-col gap-3 mt-6">
            {AURA_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3 text-text-secondary">
                <span className="text-accent-lime">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="text-center mt-12">
        <p className="text-text-secondary text-xl max-w-2xl mx-auto">
          Тот же результат — быстрее, дешевле и без лишних затрат на команду.
        </p>
        <div className="mt-8">
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Получить бесплатный расчёт
          </Button>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default Benefit
