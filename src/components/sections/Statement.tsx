function Statement() {
  return (
    <section className="py-16 md:py-24 px-6 text-center relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent-gradient opacity-20 blur-3xl pointer-events-none"
      />

      <div className="relative">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tight">
          Ваши конкуренты{' '}
          <span className="bg-accent-gradient bg-clip-text text-transparent">уже внедряют AI.</span>
        </h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto mt-6">
          Не упустите возможность стать первыми, пока другие только присматриваются к технологиям.
        </p>
      </div>
    </section>
  )
}

export default Statement
