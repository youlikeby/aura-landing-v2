import Button from './ui/Button'

const NAV_LINKS = [
  { label: 'Решения', href: '#solutions' },
  { label: 'Выгода', href: '#benefit' },
  { label: 'Отрасли', href: '#industries' },
  { label: 'Выгоды', href: '#benefits' },
  { label: 'Как работаем', href: '#process' },
]

function Header() {
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

        <Button variant="primary" className="h-10 px-5 text-sm">
          Получить расчёт
        </Button>
      </div>
    </header>
  )
}

export default Header
