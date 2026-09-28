import { ArrowRight } from 'lucide-react'
import { Container } from './Layout'
import { Link } from 'react-router-dom'

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(83,74,183,0.1)_0%,transparent_70%)]" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#d4d2cc] sm:text-5xl">
            Early Access. Exclusive Benefits.{' '}
            <span className="text-[#06d6a0]">
              New Possibilities.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#888780]">
            Get the latest Procedia installer and start exploring a new way to build
            node-based workflows in After Effects.
          </p>
          <div className="mx-auto mt-10 max-w-md">
              <Link
                to="/early-access"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#06d6a0] px-5 py-2.5 text-sm font-semibold text-[#222220] transition-all hover:bg-[#05b98a] hover:shadow-[0_0_20px_rgba(6,214,160,0.4)]"
              >
                Get Early Access
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
