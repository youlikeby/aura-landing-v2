import { useState } from 'react'
import Button from './ui/Button'
import ContactModal from './ContactModal'

const NAV_LINKS = [
  { label: 'Решения', href: '#solutions' },
  { label: 'Выгода', href: '#benefit' },
  { label: 'Отрасли', href: '#industries' },
  { label: 'Выгоды', href: '#outcomes' },
  { label: 'Как работаем', href: '#process' },
]

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        <span className="font-bold text-lg">
          Aura <span className="bg-accent-gradient bg-clip-text text-transparent">AI</span>
        </span>

        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-text-secondary hover:text-text-primary transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </nav>

        <Button variant="primary" className="h-10 px-5 text-sm" onClick={() => setIsModalOpen(true)}>
          Получить расчёт
        </Button>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  )
}

export default Header
