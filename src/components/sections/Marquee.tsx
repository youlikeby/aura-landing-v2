const MARQUEE_TEXT =
  'ЧАТ-БОТЫ И АССИСТЕНТЫ • АВТОМАТИЗАЦИЯ ПРОЦЕССОВ • САЙТЫ И ЛЕНДИНГИ • AI-СЕРВИСЫ ПОД КЛЮЧ • СОЦСЕТИ И КОНТЕНТ • ПРОИЗВОДСТВО • ИНТЕГРАЦИИ С CRM И ТЕЛЕФОНИЕЙ • '

function Marquee() {
  return (
    <section className="py-12 border-y border-white/5 overflow-hidden bg-card-light">
      <div className="flex w-max animate-marquee">
        <span className="text-2xl font-bold text-text-muted uppercase tracking-widest whitespace-nowrap">
          {MARQUEE_TEXT}
        </span>
        <span className="text-2xl font-bold text-text-muted uppercase tracking-widest whitespace-nowrap">
          {MARQUEE_TEXT}
        </span>
      </div>
    </section>
  )
}

export default Marquee
