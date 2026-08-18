import Card from '../ui/Card'
import Button from '../ui/Button'
import FadeIn from '../ui/FadeIn'

const INDUSTRY_CARDS = [
  {
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    title: 'Сфера услуг',
    caption: 'Салоны, клиники, мастерские',
    body: 'Бот записывает клиентов, напоминает о визите и отвечает на вопросы без администратора.',
    tags: ['Запись', 'Напоминания', 'Отзывы'],
  },
  {
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    title: 'Рестораны и кафе',
    caption: 'Кафе, доставка, бронирование столиков',
    body: 'AI принимает заказы, бронирует столики и подсказывает меню в мессенджере 24/7.',
    tags: ['Заказы', 'Бронирование', 'Меню'],
  },
  {
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80',
    title: 'Автосервисы',
    caption: 'СТО, автомойки, шиномонтаж',
    body: 'Клиент записывается на сервис через бота, а AI напоминает о плановом ТО и акциях.',
    tags: ['Запись', 'Напоминания', 'Акции'],
  },
]

const WIDE_CARDS = [
  {
    title: 'Соцсети и блоги',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <rect x="6" y="6" width="28" height="28" rx="6" stroke="#7C3AED" strokeWidth="2" />
        <circle cx="15" cy="16" r="3" stroke="#3B82F6" strokeWidth="2" />
        <path d="M9 29l7-8 5 5 6-9 6 6" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    points: ['Генерация контент-плана', 'Автопостинг в соцсети', 'Ответы на комментарии и вопросы'],
    tags: ['Контент', 'Автопостинг', 'Комментарии'],
  },
  {
    title: 'Производство',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <path d="M6 30V16l8 6v-6l8 6v-6l8 6v8H6z" stroke="#7C3AED" strokeWidth="2" strokeLinejoin="round" />
        <path d="M6 30h28" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    points: ['Учёт остатков и материалов', 'Автоматические отчёты по цехам', 'Уведомления о простое оборудования'],
    tags: ['Учёт', 'Отчёты', 'Мониторинг'],
  },
]

function Industries() {
  return (
    <section id="industries" className="py-24 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Решения для{' '}
          <span className="bg-accent-gradient bg-clip-text text-transparent">вашей отрасли</span>
        </h2>
      </FadeIn>
      <FadeIn delay={100}>
        <p className="text-text-secondary text-xl mt-6 max-w-2xl mx-auto text-center">
          Модифицируем AI-подход под специфику любого бизнеса
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {INDUSTRY_CARDS.map((card, index) => (
          <FadeIn key={card.title} delay={index * 100}>
            <div className="relative overflow-hidden rounded-card group h-96">
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-text-muted text-sm">{card.caption}</p>
                <p className="text-text-secondary text-sm mt-2">{card.body}</p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-pill bg-card border border-white/10 text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {WIDE_CARDS.map((card, index) => (
          <FadeIn key={card.title} delay={index * 100}>
            <Card>
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold">{card.title}</h3>
              <ul className="flex flex-col gap-2 mt-3">
                {card.points.map((point) => (
                  <li key={point} className="text-text-secondary text-sm">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex gap-2 mt-4 flex-wrap">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-pill bg-background border border-white/10 text-xs text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="secondary">Не нашли свою отрасль? Это не проблема — мы делаем любые решения</Button>
      </div>
    </section>
  )
}

export default Industries
