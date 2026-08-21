import { useRef, useState, type FormEvent } from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'

const CONTACT_METHODS = ['Телефон', 'Telegram', 'WhatsApp']
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

function FinalCTA() {
  const [contactMethod, setContactMethod] = useState(CONTACT_METHODS[0])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY

    if (!accessKey || accessKey === 'your_key_here') {
      alert('Форма не подключена: укажите WEB3FORMS_ACCESS_KEY в .env')
      return
    }

    setIsSubmitting(true)
    setIsSuccess(false)
    setIsError(false)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.get('name'),
          contact: formData.get('contact'),
          contact_method: contactMethod,
          message: formData.get('message'),
          from_website: 'Aura AI Landing',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
        formRef.current?.reset()
        setContactMethod(CONTACT_METHODS[0])
      } else {
        setIsError(true)
      }
    } catch {
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

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

        <form ref={formRef} className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors"
          />
          <input
            type="tel"
            name="contact"
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
            name="message"
            placeholder="Кратко о задаче (опционально)"
            rows={3}
            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"
          />

          <div className="mt-2 flex justify-center md:justify-start">
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className={`w-full md:w-auto ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
            >
              {isSubmitting ? 'Отправка...' : 'Получить бесплатный расчёт'}
            </Button>
          </div>

          {isSuccess && (
            <p className="text-center text-sm rounded-lg px-4 py-3 bg-accent-lime/10 border border-accent-lime/30 text-accent-lime">
              Заявка отправлена! Мы свяжемся с вами в течение дня.
            </p>
          )}

          {isError && (
            <p className="text-center text-sm rounded-lg px-4 py-3 bg-red-500/10 border border-red-500/30 text-red-400">
              Произошла ошибка. Попробуйте ещё раз или напишите нам в Telegram.
            </p>
          )}
        </form>

        <p className="text-text-muted text-xs mt-4 text-center">
          Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
        </p>
      </Card>
    </section>
  )
}

export default FinalCTA
