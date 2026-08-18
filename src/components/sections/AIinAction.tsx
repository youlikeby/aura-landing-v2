import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Card from '../ui/Card'

function AIinAction() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center">
        <Badge>AI в действии</Badge>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Смотрите, как это работает.{' '}
            <span className="bg-accent-gradient bg-clip-text text-transparent">Прямо сейчас</span>
          </h2>
          <p className="text-text-secondary text-xl mt-6">
            Реальный диалог AI-ассистента с клиентом салона красоты — без администратора и в любое время суток.
          </p>
        </div>

        <Card className="max-w-md mx-auto bg-card-light" hoverEffect={false}>
          <div className="flex flex-col gap-4 p-4">
            <div className="bg-white/10 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] self-end">
              Здравствуйте! Есть окно на стрижку завтра?
            </div>
            <div className="bg-card border border-[#7C3AED]/30 text-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] self-start">
              Здравствуйте! Да, есть свободные окна на 14:30 и 18:00. Записать вас?
            </div>
            <div className="bg-white/10 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] self-end">
              18:00
            </div>
            <div className="bg-card border border-[#7C3AED]/30 text-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] self-start">
              Готово! Вы записаны на завтра, 18:00. Напомню за час до визита. Хорошего дня!
            </div>
          </div>
          <p className="text-text-muted text-xs mt-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
            03:47 · Бот принял запись, пока салон спал
          </p>
        </Card>
      </div>

      <div className="text-center mt-12">
        <Button variant="primary">Хочу так же</Button>
      </div>
    </section>
  )
}

export default AIinAction
