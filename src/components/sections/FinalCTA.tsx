import { useState } from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'

const CONTACT_METHODS = ['Телефон', 'Telegram', 'WhatsApp']

function FinalCTA() {
  const [contactMethod, setContactMethod] = useState(CONTACT_METHODS[0])

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <Card
        className="bg-gradient-to-br from-[#15151C] to-[#1B1B25] border-[#7C3AED]/30 shadow-glow p-8 md:p-12"
        hoverEffect={false}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Получите бесплатный расчёт AI для вашего бизнеса
        </h2>
        <p className="text-text-secondary text-lg mt-4 text-center">
          Расскажем, как AI может сэкономить вам время и деньги — оценим задачу и предложим решение.
        </p>

        <form
          className="mt-8 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            alert('Заявка отправлена! (заглушка)')
          }}
        >
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors"
          />
          <input
            type="tel"
            placeholder="Контакт для связи"
            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors"
          />

          <div className="flex gap-3 flex-wrap">
            {CONTACT_METHODS.map((method) => (
              <button
                key={method}
                type="button"
                onClick={() => setContactMethod(method)}
                className={`px-4 py-2 rounded-pill text-sm transition-colors duration-200 ${
                  contactMethod === method
                    ? 'bg-accent-gradient text-white'
                    : 'bg-background border border-white/10 text-text-secondary'
                }`}
              >
                {method}
              </button>
            ))}
          </div>

          <textarea
            placeholder="Кратко о задаче (опционально)"
            rows={3}
            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"
          />

          <div className="mt-2 flex justify-center md:justify-start">
            <Button type="submit" variant="primary" className="w-full md:w-auto">
              Получить бесплатный расчёт
            </Button>
          </div>
        </form>

        <p className="text-text-muted text-xs mt-4 text-center">
          Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
        </p>
      </Card>
    </section>
  )
}

export default FinalCTA
