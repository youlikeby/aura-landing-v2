import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Marquee from './components/sections/Marquee'
import Solutions from './components/sections/Solutions'
import Benefit from './components/sections/Benefit'
import Industries from './components/sections/Industries'
import AIinAction from './components/sections/AIinAction'
import Outcomes from './components/sections/Outcomes'
import Process from './components/sections/Process'
import WhyUs from './components/sections/WhyUs'
import Statement from './components/sections/Statement'
import FinalCTA from './components/sections/FinalCTA'

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
        <Industries />
        <AIinAction />
        <Outcomes />
        <Process />
        <WhyUs />
        <Statement />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
