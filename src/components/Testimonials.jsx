import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Container, Section } from './Layout'
import { NodeCard } from './NodeCard'

const testimonials = [
  {
    name: 'Felix',
    role: 'Frontend Engineer',
    company: '@Render',
    content:
      "As a React dev, I was impressed. But the code it generates is clean, readable, and actually works. I use it every day now.",
    rating: 5,
    color: '#534AB7',
  },
  {
    name: 'Rahil M.',
    role: 'UI/UX Designer',
    company: '@DevLoop',
    content:
      "It feels like my designs are being coded by someone who actually understands UI. What I imagine is what users see.",
    rating: 5,
    color: '#4cbb6c',
  },
  {
    name: 'Alex',
    role: 'Frontend Dev',
    company: '@LightFrame',
    content:
      "This tool has been a game-changer for our team. What used to take hours now takes under 20 minutes.",
    rating: 5,
    color: '#E07B39',
  },
  {
    name: 'Chris',
    role: 'Design Lead',
    company: '@StartupHQ',
    content:
      "We finally found a tool that bridges the gap between design and development — they actually get what we need.",
    rating: 5,
    color: '#185FA5',
  },
]

export function Testimonials() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Stats sidebar */}
          <div className="max-w-xs lg:sticky lg:top-32">
            <h2 className="text-2xl font-bold tracking-tight text-[#d4d2cc] sm:text-3xl">
              Honest review from{' '}
              <span className="bg-gradient-to-r from-[#534AB7] to-[#4cbb6c] bg-clip-text text-transparent">
                dev &amp; designer
              </span>
            </h2>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-[#d4d2cc]">92%</span>
              <span className="text-xs text-[#888780]">
                Positive feedback
                <br />
                after using Procedia
              </span>
            </div>
            <div className="mt-6 flex gap-2">
              <button className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2a2a28] bg-[#1a1a18] text-[#5F5E5A] transition-colors hover:border-[#3a3a38] hover:text-[#d4d2cc]">
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2a2a28] bg-[#1a1a18] text-[#5F5E5A] transition-colors hover:border-[#3a3a38] hover:text-[#d4d2cc]">
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Testimonial cards */}
          <div className="grid flex-1 gap-4 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <NodeCard title={t.name} category="core" ports={{ left: false, right: false }}>
                  <div className="mb-2 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-3 w-3 fill-[#D4AC0D] text-[#D4AC0D]" />
                    ))}
                  </div>
                  <p className="text-xs leading-5 text-[#B4B2A9]">{t.content}</p>
                  <div className="mt-3 flex items-center gap-2 border-t border-[#2a2a28] pt-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#161614] text-[10px] font-bold text-[#d4d2cc]">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-[#d4d2cc]">{t.name}</p>
                      <p className="text-[10px] text-[#5F5E5A]">
                        {t.role}{' '}
                        <span style={{ color: t.color }}>{t.company}</span>
                      </p>
                    </div>
                  </div>
                </NodeCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
