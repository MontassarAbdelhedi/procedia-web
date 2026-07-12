import { Check, Star } from 'lucide-react'
import { Container, Section, SectionHeader } from './Layout'
import { NodeCard } from './NodeCard'
import { cn } from '../lib/utils'

const plans = [
  {
    name: 'Starter',
    subtitle: 'For Creators Exploring Procedural Workflows',
    price: 69,
    badge: null,
    category: 'utility',
    highlighted: false,
    perfectFor: [
      'Learning node-based workflows',
      'Personal projects',
      'Exploring Procedia fundamentals',
    ],
    features: [
      'Core node editor',
      'Essential nodes',
      'Basic workflows',
      'Community access',
      'Starter tutorials',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Pro',
    subtitle: 'For Professional Motion Designers',
    price: 179,
    badge: 'MOST POPULAR',
    category: 'core',
    highlighted: true,
    perfectFor: [
      'Creators who want to build faster',
      'Handling complex projects',
    ],
    features: [
      'Everything in Starter, plus:',
      'Advanced node library',
      'Procedural instances',
      'Fields system',
      'Data-driven workflows',
      'Workflow presets',
      'Branching systems',
      'Advanced organization tools',
      'Priority updates',
    ],
    cta: 'Upgrade to Pro',
  },
  {
    name: 'Team',
    subtitle: 'For Studios & Creative Teams',
    price: 299,
    priceSuffix: 'per seat',
    badge: null,
    category: 'layers',
    highlighted: false,
    perfectFor: [
      'Collaboration',
      'Shared production workflows',
    ],
    features: [
      'Everything in Pro, plus:',
      'Team licenses',
      'Shared workflow libraries',
      'Studio presets',
      'Collaboration tools',
      'Centralized management',
      'Priority support',
    ],
    cta: 'Contact Sales',
  },
]

export function PricingCards() {
  return (
    <Section id="pricing">
      <Container>
        <SectionHeader
          badge="Pricing"
          title="Choose the Workflow That Fits Your Creativity"
          description="Whether you're exploring node-based motion graphics or building production-ready workflows, there's a Procedia plan designed to grow with you."
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: '1fr' }}>
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={cn(
                'flex h-full flex-col animate-fade-up',
                plan.highlighted && 'pro-stroke-wrapper'
              )}
              style={{ animationDelay: `${i * 0.15}s`, animationFillMode: 'both' }}
            >
              <NodeCard
                title={plan.name}
                titleBadge={
                  plan.badge ? (
                    <>
                      <Star className="h-2.5 w-2.5 fill-[#7B72D0]" />
                      {plan.badge}
                    </>
                  ) : undefined
                }
                category={plan.category}
                selected={plan.highlighted}
                stretch
                className="w-full flex-1"
              >
                <p className="text-[11px] text-[#888780]">{plan.subtitle}</p>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#d4d2cc]">${plan.price}</span>
                  {plan.priceSuffix && (
                    <span className="text-xs text-[#5F5E5A]">/{plan.priceSuffix}</span>
                  )}
                </div>

                <div className="mt-5 border-t border-[#2a2a28] pt-4">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#5F5E5A]">
                    Perfect for:
                  </p>
                  <ul className="space-y-1.5">
                    {plan.perfectFor.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[11px] text-[#B4B2A9]">
                        <span className="mt-0.5 text-[#534AB7]">&#8226;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 border-t border-[#2a2a28] pt-4">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#5F5E5A]">
                    Includes:
                  </p>
                  <ul className="space-y-1.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-[11px] text-[#B4B2A9]">
                        <Check className="mt-0.5 h-3 w-3 shrink-0 text-[#4cbb6c]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  <a
                    href="#"
                    className={cn(
                      'flex w-full items-center justify-center rounded-md py-2.5 text-xs font-semibold transition-all',
                      plan.highlighted
                        ? 'bg-[#534AB7] text-white hover:bg-[#6358C7] hover:shadow-[0_0_15px_rgba(83,74,183,0.3)]'
                        : 'border border-[#2a2a28] bg-[#161614] text-[#d4d2cc] hover:border-[#3a3a38]'
                    )}
                  >
                    {plan.cta}
                  </a>
                </div>
              </NodeCard>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-lg text-center text-xs text-[#5F5E5A]">
          No complicated setup. No new software to learn. Just a better way to build inside After Effects.
        </p>
      </Container>
    </Section>
  )
}
