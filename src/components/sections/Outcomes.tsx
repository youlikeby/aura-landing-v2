import Card from '../ui/Card'
import FadeIn from '../ui/FadeIn'

const OUTCOMES = [
  {
    title: 'Больше заявок и продаж',
    body: 'AI отвечает мгновенно и доводит клиента до заявки, а не теряет его на этапе ожидания ответа.',
  },
  {
    title: 'Меньше расходов',
    body: 'Один AI-ассистент закрывает задачи, на которые раньше уходил бюджет на команду поддержки.',
  },
  {
    title: 'Экономия времени',
    body: 'Рутинные процессы уходят на автоматизацию — команда занимается только тем, что требует человека.',
  },
  {
    title: 'Рост без хаоса',
    body: 'Масштабируетесь без пропорционального роста штата и затрат на управление.',
  },
]

function Outcomes() {
  return (
    <section id="outcomes" className="py-24 px-6 max-w-7xl mx-auto">
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
