import { Check, X } from 'lucide-react'
import { Container, Section, SectionHeader } from './Layout'
import { cn } from '../lib/utils'

const comparisonCategories = [
  {
    name: 'Core Editor',
    features: [
      { name: 'Node-based Graph Editor',              starter: true, pro: true, team: true },
      { name: 'Drag-and-drop Interface',              starter: true, pro: true, team: true },
      { name: 'Unlimited Graphs',                     starter: true, pro: true, team: true },
      { name: 'Auto Layout',                          starter: false, pro: true, team: true },
      { name: 'Collapse / Expand',                    starter: true, pro: true, team: true },
      { name: 'Import AEP',                           starter: false, pro: true, team: true },
      { name: 'Save Graph',                           starter: true, pro: true, team: true },
      { name: 'Import Graph',                         starter: true, pro: true, team: true },
    ],
  },
  {
    name: 'Node Library',
    features: [
      { name: 'Essential Nodes',                      starter: true, pro: true, team: true },
      { name: 'Native AE Effects',                    starter: true, pro: true, team: true },
      { name: 'Merge & Multimerge',                   starter: true, pro: true, team: true },
      { name: 'Advanced Transform Nodes',             starter: false, pro: true, team: true },
      { name: 'Procedural Instancing',                starter: false, pro: true, team: true },
      { name: 'Fields & Forces System',               starter: false, pro: true, team: true },
      { name: 'Expression Nodes',                     starter: false, pro: true, team: true },
      { name: '2D/3D Grid Layout',                    starter: true, pro: true, team: true },
      { name: 'Auto Spacing',                        starter: false, pro: true, team: true },
    ],
  },
  {
    name: 'Data-driven nodes',
    features: [
      { name: 'Number',                               starter: true, pro: true, team: true },
      { name: 'Angle',                                starter: true, pro: true, team: true },
      { name: 'Color',                                starter: true, pro: true, team: true },
      { name: 'JSON',                                 starter: false, pro: true, team: true },
      { name: 'CSV',                                  starter: false, pro: true, team: true },
      { name: 'Boolean',                              starter: false, pro: true, team: true },
    ],
  },
  {
    name: 'Workflow',
    features: [
      { name: 'Parenting',                            starter: true, pro: true, team: true },
      { name: 'Saved Workflow Presets',               starter: false, pro: true, team: true },
      { name: 'Branching & Merging',                  starter: false, pro: true, team: true },
      { name: 'Template Library',                     starter: false, pro: true, team: true },
      { name: 'Shared Team Presets',                  starter: false, pro: true, team: true },
      { name: 'Version Control',                      starter: false, pro: true, team: true },
    ],
  },
  {
    name: 'Node Toolkit',
    features: [
      { name: 'Duplicate Node',                       starter: true, pro: true, team: true },
      { name: 'Deep Duplicate Comp Node',             starter: false, pro: true, team: true },
      { name: 'Clone Node',                           starter: false, pro: true, team: true },
      { name: 'Custom Color',                         starter: true, pro: true, team: true },
      { name: 'Disable Node',                         starter: false, pro: true, team: true },
      { name: 'Swap Nodes',                           starter: false, pro: true, team: true },
    ],
  },
  {
    name: 'Support',
    features: [
      { name: 'Starter tutorials',                    starter: true, pro: true, team: true },
      { name: 'Priority updates',                     starter: false, pro: true, team: true },
      { name: 'Dedicated account manager',            starter: false, pro: true, team: true },
      { name: 'Custom onboarding',                    starter: false, pro: true, team: true },
      { name: 'SLA guarantee',                        starter: false, pro: true, team: true },
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
                        className="inline-flex items-center justify-center rounded-md bg-[#06d6a0] px-4 py-2 text-xs font-semibold text-[#222220] transition-all hover:bg-[#05b98a] hover:shadow-[0_0_15px_rgba(6,214,160,0.3)]"
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
