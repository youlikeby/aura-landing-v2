import Card from '../ui/Card'

const REASONS = [
  {
    title: 'Отвечаем за сроки',
    body: 'Фиксируем даты в договоре и держим темп — без переносов "ещё на пару недель".',
  },
  {
    title: 'AI в разработке — это не маркетинг',
    body: 'Используем AI там, где он реально ускоряет и удешевляет разработку, а не для красивого слова в презентации.',
  },
  {
    title: 'Начинаем с задачи, а не с технологий',
    body: 'Сначала разбираемся, что должно измениться в бизнесе, и только потом выбираем инструменты.',
  },
  {
    title: 'Не исчезаем после запуска',
    body: 'Сопровождаем решение после релиза: дорабатываем, чиним и помогаем с ростом нагрузки.',
  },
]

function WhyUs() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center">
        Почему с нами <span className="bg-accent-gradient bg-clip-text text-transparent">спокойно</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {REASONS.map((reason) => (
          <Card key={reason.title}>
            <h3 className="text-xl font-bold">{reason.title}</h3>
            <p className="text-text-secondary mt-2">{reason.body}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default WhyUs
