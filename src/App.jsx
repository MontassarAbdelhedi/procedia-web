import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Navbar,
  Hero,
  Features,
  TechStack,
  HowTo,
  PricingCards,
  FAQ,
  CTA,
  Footer,
} from './components'
import { NodeCanvas } from './components/NodeCanvas'
import { PricingPage } from './pages/PricingPage'
import { DocumentationPage } from './pages/DocumentationPage'
import { FeaturesPage } from './pages/FeaturesPage'

function HomePage() {
  return (
    <div className="min-h-screen bg-[#111110]">
      <NodeCanvas />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TechStack />
          <HowTo />
          <Features />
          <FAQ />
          <PricingCards />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/docs" element={<DocumentationPage />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Routes>
    </BrowserRouter>
  )
}
