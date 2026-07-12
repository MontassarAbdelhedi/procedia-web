import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wand2, Paintbrush, Accessibility, MousePointerClick, Blocks } from 'lucide-react'
import { Container, Section, SectionHeader } from './Layout'
import { NodeCard } from './NodeCard'
import { cn } from '../lib/utils'

const categories = [
  { id: 'styling', label: 'Styling', icon: Paintbrush, count: 10, color: '#1ABC9C' },
  { id: 'accessibility', label: 'Accessibility', icon: Accessibility, count: 8, color: '#534AB7' },
  { id: 'interactions', label: 'Interactions', icon: MousePointerClick, count: 6, color: '#E07B39' },
  { id: 'components', label: 'Components', icon: Blocks, count: 20, color: '#4cbb6c' },
]

const prompts = {
  styling: ['Create dark mode variant', 'Make mobile responsive', 'Add glass morphism effect'],
  accessibility: ['Add aria labels to images', 'Check color contrast', 'Add focus indicators'],
  interactions: ['Add hover animation', 'Set up transitions', 'Create scroll reveal'],
  components: ['Build a pricing table', 'Create a testimonial card', 'Design a navbar'],
}

export function PromptingSection() {
  const [activeCategory, setActiveCategory] = useState('styling')
  const [inputValue, setInputValue] = useState('')

  return (
    <Section>
      <Container>
        <SectionHeader
          badge="AI Prompting"
          title="More powerfull with"
          titleGradient="Prompting"
          description="Type something to improve your work"
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <NodeCard title="Prompt Engine" category="core" className="w-full">
            {/* Input */}
            <div className="relative mb-4">
              <Wand2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#534AB7]" />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something to improve your work"
                className="w-full rounded-md border border-[#2a2a28] bg-[#161614] py-2.5 pl-3 pr-10 text-sm text-[#d4d2cc] placeholder-[#5F5E5A] outline-none transition-colors focus:border-[#534AB7]"
              />
            </div>

            {/* Categories */}
            <div className="mb-3 text-[10px] font-medium uppercase tracking-wider text-[#5F5E5A]">
              Category
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs transition-all border',
                    activeCategory === cat.id
                      ? 'border-[#534AB7]/30 bg-[#534AB7]/10 text-[#d4d2cc]'
                      : 'border-[#2a2a28] bg-[#161614] text-[#888780] hover:border-[#3a3a38]'
                  )}
                >
                  <div className="h-2 w-2 rounded-full" style={{ background: cat.color }} />
                  {cat.label}
                  <span className="text-[10px] text-[#5F5E5A]">({cat.count})</span>
                </button>
              ))}
            </div>

            {/* Prompt suggestions */}
            <div className="flex flex-wrap gap-2 border-t border-[#2a2a28] pt-3">
              <AnimatePresence mode="wait">
                {prompts[activeCategory].map((prompt) => (
                  <motion.button
                    key={prompt}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="rounded-md border border-[#2a2a28] bg-[#161614] px-2.5 py-1 text-xs text-[#888780] transition-all hover:border-[#3a3a38] hover:text-[#d4d2cc]"
                  >
                    {prompt}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>

            <p className="mt-4 text-center text-xs text-[#5F5E5A]">
              Need your button centered? Want a dark mode variant? Just type it.
            </p>
          </NodeCard>
        </div>
      </Container>
    </Section>
  )
}
