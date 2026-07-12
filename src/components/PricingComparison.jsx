import { Check, X } from 'lucide-react'
import { Container, Section, SectionHeader } from './Layout'
import { cn } from '../lib/utils'

const comparisonCategories = [
  {
    name: 'Core Editor',
    features: [
      { name: 'Node-based graph editor', starter: true, pro: true, team: true },
      { name: 'Drag-and-drop interface', starter: true, pro: true, team: true },
      { name: 'Real-time preview', starter: true, pro: true, team: true },
      { name: 'Undo / redo history', starter: '30 steps', pro: 'Unlimited', team: 'Unlimited' },
      { name: 'Custom node creation', starter: false, pro: true, team: true },
    ],
  },
  {
    name: 'Node Library',
    features: [
      { name: 'Essential nodes', starter: true, pro: true, team: true },
      { name: 'Advanced transform nodes', starter: false, pro: true, team: true },
      { name: 'Procedural instancing', starter: false, pro: true, team: true },
      { name: 'Fields & forces system', starter: false, pro: true, team: true },
      { name: 'Data-driven nodes', starter: false, pro: true, team: true },
      { name: 'Custom scripting nodes', starter: false, pro: false, team: true },
    ],
  },
  {
    name: 'Workflow',
    features: [
      { name: 'Saved workflow presets', starter: '3 presets', pro: 'Unlimited', team: 'Unlimited' },
      { name: 'Branching & merging', starter: false, pro: true, team: true },
      { name: 'Template library', starter: false, pro: true, team: true },
      { name: 'Shared team libraries', starter: false, pro: false, team: true },
      { name: 'Version control', starter: false, pro: false, team: true },
    ],
  },
  {
    name: 'Collaboration',
    features: [
      { name: 'Community access', starter: true, pro: true, team: true },
      { name: 'Export / import workflows', starter: true, pro: true, team: true },
      { name: 'Team workspaces', starter: false, pro: false, team: true },
      { name: 'Role-based permissions', starter: false, pro: false, team: true },
      { name: 'Centralized billing', starter: false, pro: false, team: true },
    ],
  },
  {
    name: 'Support',
    features: [
      { name: 'Starter tutorials', starter: true, pro: true, team: true },
      { name: 'Priority updates', starter: false, pro: true, team: true },
      { name: 'Dedicated account manager', starter: false, pro: false, team: true },
      { name: 'Custom onboarding', starter: false, pro: false, team: true },
      { name: 'SLA guarantee', starter: false, pro: false, team: true },
    ],
  },
]

function CellValue({ value }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-[#4cbb6c]" />
  if (value === false) return <X className="mx-auto h-4 w-4 text-[#5F5E5A]" />
  return <span className="text-[11px] text-[#B4B2A9]">{value}</span>
}

export function PricingComparison() {
  return (
    <Section id="pricing">
      <Container>
        <SectionHeader
          title="Compare Plans in Detail"
          description="A full breakdown of what's included in each plan so you can choose the right fit."
        />

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="node-card overflow-hidden rounded-lg border border-[#2a2a28] bg-[#1a1a18] shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="border-b border-[#2a2a28] bg-[#161614]">
                    <th className="w-[40%] px-4 py-4 text-left text-xs font-medium text-[#888780]">Feature</th>
                    <th className="w-[20%] px-4 py-4 text-center text-xs font-medium text-[#888780]">Starter</th>
                    <th className="w-[20%] px-4 py-4 text-center text-xs font-medium text-[#7B72D0]">Pro</th>
                    <th className="w-[20%] px-4 py-4 text-center text-xs font-medium text-[#888780]">Team</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonCategories.map((category) => (
                    <>
                      <tr key={`cat-${category.name}`}>
                        <td colSpan={4} className="px-4 pb-2 pt-6 text-[10px] font-semibold uppercase tracking-wider text-[#5F5E5A]">
                          {category.name}
                        </td>
                      </tr>
                      {category.features.map((feature, fi) => (
                        <tr
                          key={feature.name}
                          className={cn(
                            'border-b border-[#1a1a18]',
                            fi === category.features.length - 1 && 'border-b-[#2a2a28]'
                          )}
                        >
                          <td className="px-4 py-3 text-[12px] text-[#B4B2A9]">{feature.name}</td>
                          <td className="px-4 py-3 text-center"><CellValue value={feature.starter} /></td>
                          <td className="px-4 py-3 text-center"><CellValue value={feature.pro} /></td>
                          <td className="px-4 py-3 text-center"><CellValue value={feature.team} /></td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-[#2a2a28] bg-[#161614]">
                    <td className="px-4 py-5" />
                    <td className="px-4 py-5 text-center">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-md border border-[#2a2a28] bg-[#1a1a18] px-4 py-2 text-xs font-semibold text-[#d4d2cc] transition-all hover:border-[#3a3a38]"
                      >
                        Start Free Trial
                      </a>
                    </td>
                    <td className="px-4 py-5 text-center">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-md bg-[#534AB7] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-[#6358C7] hover:shadow-[0_0_15px_rgba(83,74,183,0.3)]"
                      >
                        Upgrade to Pro
                      </a>
                    </td>
                    <td className="px-4 py-5 text-center">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-md border border-[#2a2a28] bg-[#1a1a18] px-4 py-2 text-xs font-semibold text-[#d4d2cc] transition-all hover:border-[#3a3a38]"
                      >
                        Contact Sales
                      </a>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
