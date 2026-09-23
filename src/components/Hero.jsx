import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from './Layout'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(83,74,183,0.15)_0%,transparent_65%)]" />

      <Container className="relative z-10">
        {/* Centered text */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-[#d4d2cc] sm:text-5xl lg:text-6xl">
            <span className="text-[#06d6a0]">Node-Based</span>{' '}
            Ecosystem for After Effects
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#888780]">
            Turn Adobe After Effects into a visual, node-based workspace where complex projects
            stay organized, scalable, and easy to understand.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="#" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#06d6a0] px-5 py-2.5 text-sm font-semibold text-[#222220] transition-all hover:bg-[#05b98a] hover:shadow-[0_0_20px_rgba(6,214,160,0.4)]">
              Get Early Access <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#2a2a28] bg-[#1a1a18] px-5 py-2.5 text-sm font-semibold text-[#d4d2cc] transition-all hover:border-[#3a3a38] hover:bg-[#222220]">
              Watch Demo
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}