import Badge from '../ui/Badge'
import Button from '../ui/Button'

function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent-gradient opacity-20 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto text-center px-6">
        <Badge>AI-разработка для бизнеса</Badge>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-6">
          Любое <span className="bg-accent-gradient bg-clip-text text-transparent">AI-решение</span> для вашего
          бизнеса
        </h1>

        <p className="text-text-secondary text-xl mt-6 max-w-2xl mx-auto">
          Работаем быстрее и дешевле классической разработки: на 60% дешевле и в 5 раз быстрее. От чат-бота и
          сайта — до автоматизации производства и соцсетей.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Button variant="primary">Получить бесплатный расчёт</Button>
          <Button variant="secondary">Смотреть решения</Button>
        </div>

        <p className="text-text-muted text-sm mt-6">
          Бесплатно · Ни к чему не обязывает · Ответим в течение дня
        </p>
      </div>
    </section>
  )
}

export default Hero
