import { Navbar } from '../components/Navbar'
import { PricingComparison } from '../components/PricingComparison'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { NodeCanvas } from '../components/NodeCanvas'

export function PricingPage() {
  return (
    <div className="min-h-screen bg-[#111110]">
      <NodeCanvas />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-14">
          <PricingComparison />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}
