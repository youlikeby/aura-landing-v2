import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-card-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold">
              Aura <span className="bg-accent-gradient bg-clip-text text-transparent">AI</span>
            </div>
          </div>

          <div className="flex items-center">
            <p className="text-text-muted text-sm">AI-разработка для малого и среднего бизнеса</p>
          </div>
          <div className="flex gap-4 md:justify-end items-center">
            <a
              href="#"
              className="text-text-secondary text-xs hover:text-text-primary transition-colors duration-200"
            >
              Telegram
            </a>
            <a
              href="mailto:hello@aura.ai"
              className="text-text-secondary text-xs hover:text-text-primary transition-colors duration-200"
            >
              hello@aura.ai
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted text-sm">
          <p>© 2026 Aura AI. Все права защищены.</p>
          <Link to="/privacy" className="hover:text-text-secondary transition-colors duration-200">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
