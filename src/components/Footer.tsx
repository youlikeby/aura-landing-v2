import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Решения', href: '#solutions' },
  { label: 'Выгода', href: '#benefit' },
  { label: 'Отрасли', href: '#industries' },
  { label: 'Выгоды', href: '#outcomes' },
  { label: 'Как работаем', href: '#process' },
]

const CONTACT_LINKS = [
  { label: 'Telegram', href: '#' },
  { label: 'WhatsApp', href: '#' },
  { label: 'hello@aura.ai', href: 'mailto:hello@aura.ai' },
]

function Footer() {
  return (
    <footer className="bg-card-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="font-bold text-lg">
              Aura <span className="bg-accent-gradient bg-clip-text text-transparent">AI</span>
            </span>
            <p className="text-text-muted text-sm mt-2">
              AI-разработка для малого и среднего бизнеса
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Навигация</h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-text-secondary hover:text-text-primary transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Контакты</h3>
            <ul className="flex flex-col gap-2">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-text-secondary hover:text-text-primary transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 flex justify-between text-text-muted text-sm">
          <span>© 2026 Aura AI. Все права защищены.</span>
          <Link to="/privacy" className="hover:text-text-secondary transition-colors duration-200">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
