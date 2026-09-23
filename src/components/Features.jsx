import { motion } from 'framer-motion'
import { Layers, Zap, Maximize2 } from 'lucide-react'
import { Container, Section, SectionHeader } from './Layout'
import { NodeCard, NodeParam } from './NodeCard'

const features = [
  {
    icon: Layers,
    title: 'Visual Programming',
    category: 'core',
    description: 'Design complex effects using connected nodes instead of endless layers.',
    params: [
      { label: 'mode', value: 'node-based', port: true, portColor: '#4cbb6c' },
      { label: 'flow', value: 'visual graph', port: true, portColor: '#4cbb6c', wired: true },
      { label: 'output', value: 'After Effects' },
    ],
  },
  {
    icon: Zap,
    title: 'Faster Iteration',
    category: 'layers',
    description: 'Understand any project instantly and modify workflows without digging through timelines.',
    params: [
      { label: 'speed', value: '10x faster', port: true, portColor: '#185FA5' },
      { label: 'search', value: 'instant' },
      { label: 'modify', value: 'live edit', wired: true },
    ],
  },
  {
    icon: Maximize2,
    title: 'Built for Scale',
    category: 'shapes',
    description: 'Handle large compositions that would normally become impossible to manage.',
    params: [
      { label: 'comps', value: 'unlimited', port: true, portColor: '#1ABC9C' },
      { label: 'layers', value: '10,000+' },
      { label: 'perf', value: 'optimized', wired: true },
    ],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Features() {
  return (
    <Section id="features">
      <Container>
        <SectionHeader
          title="Powerful Tools."
          titleGradient="Cleaner Workflows."
          description="Discover a complete toolkit that transforms Adobe After Effects into a modern, node-based environment for motion designers and compositors."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <NodeCard
                title={feature.title}
                category={feature.category}
                className="w-full"
              >
                <div className="mb-3 flex items-start gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#161614]">
                    <feature.icon className="h-4 w-4 text-[#d4d2cc]" />
                  </div>
                  <p className="text-xs leading-5 text-[#888780]">
                    {feature.description}
                  </p>
                </div>
                <div className="space-y-0.5 border-t border-[#2a2a28] pt-2">
                  {feature.params.map((param) => (
                    <NodeParam key={param.label} {...param} />
                  ))}
                </div>
              </NodeCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
