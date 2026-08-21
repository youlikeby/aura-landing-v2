import { useState } from 'react'
import Button from '../ui/Button'
import FadeIn from '../ui/FadeIn'
import ContactModal from '../ContactModal'

const STEPS = [
  {
    number: '01',
    title: 'Анализ',
    body: 'Разбираемся в задаче бизнеса и находим процессы, которые выгодно автоматизировать.',
  },
  {
    number: '02',
    title: 'Прототип',
    body: 'Собираем рабочий прототип AI-решения, чтобы вы увидели результат до полной разработки.',
  },
  {
    number: '03',
    title: 'Внедрение',
    body: 'Встраиваем решение в ваши текущие процессы и инструменты без остановки работы.',
  },
  {
    number: '04',
    title: 'Запуск',
    body: 'Запускаем в прод, следим за работой и дорабатываем по обратной связи.',
  },
]

function Process() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="process" className="py-16 md:py-24 px-6 max-w-7xl mx-auto bg-card-light">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          От идеи{' '}
          <span className="bg-accent-gradient bg-clip-text text-transparent">к результату</span>
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-4 gap-8 mt-12">
        {STEPS.map((step, index) => (
          <FadeIn key={step.number} delay={index * 100}>
            <p className="text-5xl font-bold text-text-muted/30 mb-4">{step.number}</p>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-text-secondary mt-2">{step.body}</p>
          </FadeIn>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
          Начать с бесплатного расчёта
        </Button>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default Process
