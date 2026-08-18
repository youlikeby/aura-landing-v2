import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Marquee from './components/sections/Marquee'
import Solutions from './components/sections/Solutions'
import Benefit from './components/sections/Benefit'

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <Solutions />
        <Benefit />
      </main>
      <Footer />
    </div>
  )
}

export default App
