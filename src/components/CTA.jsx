import { ArrowRight } from 'lucide-react'
import { Container } from './Layout'

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(83,74,183,0.1)_0%,transparent_70%)]" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#d4d2cc] sm:text-5xl">
            Early Access. Exclusive Benefits.{' '}
            <span className="bg-gradient-to-r from-[#534AB7] to-[#4cbb6c] bg-clip-text text-transparent">
              New Possibilities.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#888780]">
            Join the Procedia early access list and receive launch announcements, beta invitations,
            workflow examples, and special founder rewards.
          </p>
          <div className="mx-auto mt-10 max-w-md">
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-[#2a2a28] bg-[#1a1a18] px-4 py-2.5 text-sm text-[#d4d2cc] placeholder-[#5F5E5A] outline-none transition-colors focus:border-[#534AB7]"
              />
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#534AB7] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#6358C7] hover:shadow-[0_0_20px_rgba(83,74,183,0.4)]"
              >
                Get Early Access
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
