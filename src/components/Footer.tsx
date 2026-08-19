import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-card-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <span className="font-bold text-lg">
              Aura <span className="bg-accent-gradient bg-clip-text text-transparent">AI</span>
            </span>
            <p className="text-text-muted text-sm mt-2">
              AI-разработка для малого и среднего бизнеса
            </p>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors duration-200">
              Telegram
            </a>
            <a
              href="mailto:hello@aura.ai"
              className="text-text-secondary hover:text-text-primary transition-colors duration-200"
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
