import { useEffect, useState } from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Card from '../ui/Card'
import ContactModal from '../ContactModal'
import { useInView } from '../../hooks/useInView'

const MESSAGES: { role: 'user' | 'bot'; text: string }[] = [
  { role: 'user', text: 'Здравствуйте! Есть окно на стрижку завтра?' },
  { role: 'bot', text: 'Здравствуйте! Да, есть свободные окна на 14:30 и 18:00. Записать вас?' },
  { role: 'user', text: '18:00' },
  { role: 'bot', text: 'Готово! Вы записаны на завтра, 18:00. Напомню за час до визита. Хорошего дня!' },
]

const REVEAL_STEP_MS = 800
const TYPING_DURATION_MS = 500

function AIinAction() {
  const { ref, isInView } = useInView<HTMLDivElement>()
  const [visibleCount, setVisibleCount] = useState(0)
  const [typingIndex, setTypingIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (!isInView) return

    const timers: number[] = []

    MESSAGES.forEach((message, index) => {
      const revealAt = index * REVEAL_STEP_MS

      if (message.role === 'bot') {
        timers.push(
          window.setTimeout(() => setTypingIndex(index), Math.max(revealAt - TYPING_DURATION_MS, 0)),
        )
      }

      timers.push(
        window.setTimeout(() => {
          setVisibleCount((count) => Math.max(count, index + 1))
          setTypingIndex((current) => (current === index ? null : current))
        }, revealAt),
      )
    })

    return () => timers.forEach((id) => window.clearTimeout(id))
  }, [isInView])

  return (
    <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
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

        <div ref={ref}>
          <Card className="max-w-md mx-auto bg-card-light" hoverEffect={false}>
            <div className="flex flex-col gap-4 p-4 min-h-[220px]">
              {MESSAGES.slice(0, visibleCount).map((message, index) =>
                message.role === 'user' ? (
                  <div
                    key={index}
                    className="bg-white/10 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] self-end"
                  >
                    {message.text}
                  </div>
                ) : (
                  <div
                    key={index}
                    className="bg-card border border-[#7C3AED]/30 text-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] self-start"
                  >
                    {message.text}
                  </div>
                ),
              )}

              {typingIndex !== null && (
                <div className="bg-card border border-[#7C3AED]/30 rounded-2xl rounded-tl-sm px-4 py-3 self-start flex gap-1 items-center">
                  <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              )}
            </div>
            <p className="text-text-muted text-xs mt-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
              03:47 · Бот принял запись, пока салон спал
            </p>
          </Card>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          Хочу так же
        </Button>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default AIinAction
