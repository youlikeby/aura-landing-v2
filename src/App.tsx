import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
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
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-text-primary font-sans antialiased">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
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
                </>
              }
            />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
