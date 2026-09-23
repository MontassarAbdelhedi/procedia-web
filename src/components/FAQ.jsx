import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { Container, Section, SectionHeader } from './Layout'
import { NodeCard } from './NodeCard'
import { cn } from '../lib/utils'

const tabs = ['General', 'Features', 'Usage Policy', 'Pricing', 'Community']

const faqsByTab = {
  General: [
    {
      q: 'What is Procedia?',
      a: 'Procedia is a node-based workflow extension for Adobe After Effects that transforms complex motion graphics projects into visual, procedural systems.',
    },
    {
      q: 'Why was Procedia created?',
      a: 'After Effects is incredibly powerful, but large projects can become difficult to manage with hundreds of layers, precomps, and expressions. Procedia introduces a more visual and organized way to build and control complex workflows.',
    },
    {
      q: 'Does Procedia replace Adobe After Effects?',
      a: 'No. Procedia enhances After Effects by adding a node-based environment while keeping the tools, effects, layers, and ecosystem you already know.',
    },
    {
      q: 'Who is Procedia made for?',
      a: 'Procedia is designed for motion designers, compositors, studios, and creators who want a faster, more organized way to build complex animations and reusable workflows.',
    },
    {
      q: 'Is Procedia difficult to learn?',
      a: 'If you understand After Effects concepts like layers, effects, and compositions, you already have the foundation. Procedia introduces a new visual way to connect and control those elements.',
    },
  ],
  Features: [
    {
      q: 'What makes Procedia different from traditional After Effects workflows?',
      a: 'Procedia replaces complex layer stacks with visual node graphs, making relationships between elements easier to understand, modify, and reuse.',
    },
    {
      q: 'Can I create procedural animations with Procedia?',
      a: 'Yes. Procedia allows you to build systems using procedural nodes, instances, fields, data, expressions, and reusable graphs.',
    },
    {
      q: 'Can I save and reuse my workflows?',
      a: 'Yes. You can save node graphs as presets and reuse complete creative systems across different projects.',
    },
    {
      q: 'What are branches in Procedia?',
      a: 'Branches allow you to explore different creative directions from the same workflow. Create variations, experiment freely, and keep your original system intact.',
    },
    {
      q: 'Can Procedia handle large and complex projects?',
      a: 'Procedia is designed specifically for managing complexity. Visual graphs, organization tools, and reusable systems help you work on projects that would normally become difficult to maintain.',
    },
  ],
  'Usage Policy': [
    {
      q: 'Can I use Procedia for commercial projects?',
      a: 'Yes. You can use Procedia to create commercial work, including client projects, advertisements, films, and studio productions.',
    },
    {
      q: 'Can I install Procedia on multiple computers?',
      a: 'Your license determines the number of allowed installations. Check your license agreement for details.',
    },
    {
      q: 'Can I share my Procedia license with others?',
      a: 'No. Licenses are intended for individual users unless you purchase a team license.',
    },
    {
      q: 'Can I share workflows created with Procedia?',
      a: 'Yes. You can share your own workflows, presets, and graphs according to the terms of your license.',
    },
    {
      q: 'Can I use Procedia in a studio environment?',
      a: 'Yes. Team licenses are available for studios and organizations that need multiple users and shared workflows.',
    },
  ],
  Pricing: [
    {
      q: 'Is there a free version of Procedia?',
      a: 'Yes. Procedia offers a Starter version that allows users to explore the core workflow and experience node-based motion design.',
    },
    {
      q: 'What is included in the Pro version?',
      a: 'The Pro version unlocks advanced features designed for professional workflows, including expanded nodes, procedural tools, workflow management, and advanced capabilities.',
    },
    {
      q: 'What is the difference between Starter, Pro, and Team?',
      a: 'Starter is designed for learning and personal exploration. Pro is built for professional creators. Team adds features for collaboration and studio workflows.',
    },
    {
      q: 'Is Procedia a one-time purchase or subscription?',
      a: 'Procedia uses a one-time purchase model with access to updates during the included support period.',
    },
    {
      q: 'Do I get updates after purchasing Procedia?',
      a: 'Yes. Customers receive updates, improvements, and new features according to their license plan.',
    },
  ],
  Community: [
    {
      q: 'Is there a Procedia community?',
      a: 'Yes. Procedia users can connect, share workflows, exchange ideas, and learn new techniques together.',
    },
    {
      q: 'Where can I learn Procedia?',
      a: 'You can learn through official tutorials, documentation, example projects, and community resources.',
    },
    {
      q: 'Can I share my workflows with other users?',
      a: 'Yes. The Procedia ecosystem is designed around sharing reusable creative systems and learning from other creators.',
    },
    {
      q: 'Will Procedia include a marketplace for presets and workflows?',
      a: 'The long-term vision is to create a library where creators can discover, share, and exchange procedural workflows.',
    },
    {
      q: 'How can I suggest features or report issues?',
      a: 'Users can submit feedback, request features, and report issues through the official support channels and community spaces.',
    },
  ],
}

export function FAQ() {
  const [activeTab, setActiveTab] = useState('General')
  const [openIndex, setOpenIndex] = useState(0)

  const currentFaqs = faqsByTab[activeTab] || []

  return (
    <Section id="community">
      <Container>
        <SectionHeader title="Frequently Asked Question" />

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setOpenIndex(0) }}
                className={cn(
                  'rounded-md px-3 py-1.5 text-xs transition-all border',
                  activeTab === tab
                    ? 'border-[#534AB7]/30 bg-[#534AB7]/10 text-[#d4d2cc]'
                    : 'border-[#2a2a28] bg-[#161614] text-[#5F5E5A] hover:text-[#888780]'
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_280px]">
            <div className="space-y-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2"
                >
                  {currentFaqs.map((faq, i) => (
                    <div
                      key={faq.q}
                      className="rounded-lg border border-[#2a2a28] bg-[#1a1a18] overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                        className="flex w-full items-center justify-between p-3 text-left text-xs font-medium text-[#d4d2cc]"
                      >
                        {faq.q}
                        <ChevronDown
                          className={cn(
                            'h-3.5 w-3.5 shrink-0 text-[#5F5E5A] transition-transform',
                            openIndex === i && 'rotate-180'
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {openIndex === i && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="px-3 pb-3 text-xs leading-5 text-[#888780]">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="hidden lg:block">
              <NodeCard title="Support" category="core" className="sticky top-32">
                <MessageCircle className="h-6 w-6 text-[#534AB7]" />
                <p className="mt-2 text-xs font-medium text-[#d4d2cc]">
                  Still have questions?
                </p>
                <p className="mt-1 text-[10px] leading-4 text-[#888780]">
                  Reach out to our team and we will get back to you as soon as possible.
                </p>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-1 text-[10px] font-medium text-[#534AB7] hover:text-[#7B72D0]"
                >
                  Chat with us &rarr;
                </a>
              </NodeCard>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
