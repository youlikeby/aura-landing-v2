import { useEffect, useRef, useState, type FormEvent } from 'react'
import Modal from './ui/Modal'
import Button from './ui/Button'

const CONTACT_METHODS = ['Telegram', 'WhatsApp', 'Телефон']
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [contactMethod, setContactMethod] = useState(CONTACT_METHODS[0])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false)
      setIsError(false)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isSuccess) return

    const timeout = setTimeout(() => {
      onClose()
    }, 2000)

    return () => clearTimeout(timeout)
  }, [isSuccess, onClose])

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
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-gradient-to-br from-[#15151C] to-[#1B1B25] border border-[#7C3AED]/30 shadow-glow rounded-card p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white mb-2">Получите бесплатный расчёт AI</h2>
        <p className="text-text-secondary mb-8">
          Оставьте заявку — и уже завтра пришлём расчёт: варианты решения, сроки, бюджет и ожидаемый эффект.
        </p>

        <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
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

          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className={`w-full ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
          >
            {isSubmitting ? 'Отправка...' : 'Получить бесплатный расчёт'}
          </Button>

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

          <p className="text-text-muted text-xs mt-4 text-center">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      </div>
    </Modal>
  )
}

export default ContactModal
