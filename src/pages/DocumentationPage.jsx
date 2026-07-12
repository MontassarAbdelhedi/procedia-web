import { useState } from 'react'
import { Check, X } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Container } from '../components/Layout'
import { NodeCanvas } from '../components/NodeCanvas'
import { cn } from '../lib/utils'

const tabs = [
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'user-guide', label: 'User Guide' },
  { id: 'nodes', label: 'Procedia Nodes' },
  { id: 'changelog', label: 'Change Log' },
]

const changelog = [
  {
    version: '0.9.2',
    date: 'July 10, 2026',
    changes: [
      { type: 'added', text: 'New Fields & Forces node category' },
      { type: 'added', text: 'Workflow export/import functionality' },
      { type: 'fixed', text: 'Graph editor snapping issue on large compositions' },
      { type: 'improved', text: 'Real-time preview performance by 40%' },
    ],
  },
  {
    version: '0.9.1',
    date: 'June 28, 2026',
    changes: [
      { type: 'added', text: 'Custom node creation for Pro users' },
      { type: 'added', text: 'Undo/redo history expansion to unlimited steps' },
      { type: 'fixed', text: 'Memory leak when deleting connected nodes' },
    ],
  },
  {
    version: '0.9.0',
    date: 'June 15, 2026',
    changes: [
      { type: 'added', text: 'Initial early access release' },
      { type: 'added', text: 'Core node editor with drag-and-drop interface' },
      { type: 'added', text: 'Essential node library (Transform, Color, Mask)' },
      { type: 'added', text: 'Real-time preview in After Effects viewport' },
    ],
  },
]

const changeTypeColors = {
  added: 'text-[#4cbb6c]',
  fixed: 'text-[#E07B39]',
  improved: 'text-[#185FA5]',
  removed: 'text-[#e05555]',
}

export function DocumentationPage() {
  const [activeTab, setActiveTab] = useState('getting-started')

  return (
    <div className="min-h-screen bg-[#111110]">
      <NodeCanvas />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-14">
          <Container className="py-16">
            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-[#d4d2cc] sm:text-4xl">
                Documentation
              </h1>
              <p className="mt-4 text-sm leading-7 text-[#888780]">
                Everything you need to get started with Procedia and master node-based motion graphics.
              </p>
            </div>

            {/* Tabs */}
            <div className="mx-auto mt-10 max-w-5xl">
              <div className="flex gap-1 rounded-lg border border-[#2a2a28] bg-[#161614] p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'flex-1 rounded-md px-4 py-2 text-xs font-medium transition-all',
                      activeTab === tab.id
                        ? 'bg-[#534AB7] text-white shadow-[0_0_10px_rgba(83,74,183,0.3)]'
                        : 'text-[#888780] hover:text-[#d4d2cc]'
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="mt-8 rounded-lg border border-[#2a2a28] bg-[#1a1a18] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
                {activeTab === 'getting-started' && (
                  <div className="space-y-10">
                    {/* Intro */}
                    <div className="space-y-4">
                      <p className="text-sm leading-7 text-[#B4B2A9]">
                        Welcome to Procedia, a visual node-based workflow extension for Adobe After Effects.
                      </p>
                      <p className="text-sm leading-7 text-[#888780]">
                        Procedia transforms the way you build motion graphics by replacing complex layer hierarchies with intuitive node graphs. Instead of managing hundreds of layers, precompositions, and expressions, you create connected systems that are easier to understand, modify, and reuse.
                      </p>
                      <p className="text-sm leading-7 text-[#888780]">
                        Whether you're creating product animations, UI motion, broadcast graphics, VFX, or reusable templates, Procedia helps you stay organized from concept to final render.
                      </p>
                      <p className="text-sm font-semibold text-[#d4d2cc]">Let's build your first graph.</p>
                    </div>

                    {/* What is Procedia */}
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">What is Procedia?</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Procedia is a procedural workflow environment built on top of Adobe After Effects.
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Rather than replacing After Effects, Procedia enhances it with a visual graph editor where every operation is represented as a node.
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">Each node performs a specific task:</p>
                      <ul className="mt-2 space-y-1.5 text-sm text-[#B4B2A9]">
                        {['Import a layer', 'Apply an effect', 'Transform an object', 'Read external data', 'Generate procedural instances', 'Control animations', 'Merge multiple branches', 'Output the final result'].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 text-[#534AB7]">&#8226;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Instead of reading a timeline from top to bottom, you follow the flow of data from left to right.
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        The result is a workflow that scales naturally as projects become more complex.
                      </p>
                    </div>

                    {/* Why Node-Based */}
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Why Node-Based Workflows?</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Traditional layer-based projects work well for small animations. As projects grow, however, they often become difficult to maintain.
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">Typical challenges include:</p>
                      <ul className="mt-2 space-y-1.5 text-sm text-[#B4B2A9]">
                        {['Hundreds of layers', 'Deep precomposition hierarchies', 'Parenting chains', 'Complex expressions', 'Duplicate setups', 'Difficult debugging', 'Low reusability'].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 text-[#E07B39]">&#8226;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Procedia solves these challenges by organizing your project as a visual network.
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">Benefits include:</p>
                      <ul className="mt-2 space-y-1.5 text-sm text-[#B4B2A9]">
                        {['Clear visual relationships', 'Reusable workflows', 'Easier collaboration', 'Faster troubleshooting', 'Better scalability', 'Cleaner organization', 'Non-destructive experimentation'].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 text-[#4cbb6c]">&#8226;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-sm font-semibold text-[#d4d2cc]">Instead of managing layers, you design systems.</p>
                    </div>

                    {/* Installation */}
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Installation</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">Installing Procedia only takes a few minutes.</p>
                      <div className="mt-4 space-y-4">
                        {[
                          { step: '1', text: 'Download the latest installer from the official website.' },
                          { step: '2', text: 'Close Adobe After Effects if it is currently running.' },
                          { step: '3', text: 'Run the installer.' },
                          { step: '4', text: 'Launch After Effects.' },
                          { step: '5', text: 'Open Procedia from: Window \u2192 Extensions \u2192 Procedia' },
                        ].map((s) => (
                          <div key={s.step} className="flex items-start gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#534AB7]/15 text-[11px] font-semibold text-[#7B72D0]">
                              {s.step}
                            </span>
                            <p className="text-sm leading-7 text-[#B4B2A9]">{s.text}</p>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[#888780]">The Procedia workspace will now appear.</p>
                    </div>

                    {/* Activating License */}
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Activating Your License</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">After launching Procedia for the first time:</p>
                      <ul className="mt-2 space-y-1.5 text-sm text-[#B4B2A9]">
                        {['Open the License window.', 'Sign in to your account.', 'Enter your license key.', 'Click Activate.'].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 text-[#534AB7]">&#8226;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Your license will automatically unlock the available features for your plan.
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#888780]">
                        Starter users can begin immediately without activation if a free tier is available.
                      </p>
                    </div>

                    {/* First Launch */}
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">First Launch</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        The first time Procedia opens, you'll see:
                      </p>
                      <ul className="mt-2 space-y-1.5 text-sm text-[#B4B2A9]">
                        {['Graph Editor', 'Node Library', 'Inspector', 'Toolbar', 'Graph Minimap', 'Welcome Screen'].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 text-[#534AB7]">&#8226;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Take a few minutes to explore each panel before creating your first graph.
                      </p>
                    </div>

                    {/* Interface */}
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Understanding the Interface</h2>

                      <div className="mt-4 space-y-5">
                        <div className="rounded-md border border-[#2a2a28] bg-[#161614] p-4">
                          <h3 className="text-sm font-semibold text-[#d4d2cc]">Graph Editor</h3>
                          <p className="mt-1 text-xs leading-6 text-[#888780]">
                            The central workspace where you create node graphs. Think of it as your visual canvas.
                          </p>
                        </div>
                        <div className="rounded-md border border-[#2a2a28] bg-[#161614] p-4">
                          <h3 className="text-sm font-semibold text-[#d4d2cc]">Node Library</h3>
                          <p className="mt-1 text-xs leading-6 text-[#888780]">
                            Contains every available node organized into categories.
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {['Layers', 'Effects', 'Data', 'Fields', 'Instances', 'Utilities', 'Logic'].map((cat) => (
                              <span key={cat} className="rounded border border-[#2a2a28] bg-[#1a1a18] px-2 py-0.5 text-[10px] text-[#B4B2A9]">
                                {cat}
                              </span>
                            ))}
                          </div>
                          <p className="mt-2 text-xs leading-6 text-[#888780]">Drag any node into the graph.</p>
                        </div>
                        <div className="rounded-md border border-[#2a2a28] bg-[#161614] p-4">
                          <h3 className="text-sm font-semibold text-[#d4d2cc]">Inspector</h3>
                          <p className="mt-1 text-xs leading-6 text-[#888780]">
                            Displays editable properties for the selected node. Whenever you select a node, its settings appear here.
                          </p>
                        </div>
                        <div className="rounded-md border border-[#2a2a28] bg-[#161614] p-4">
                          <h3 className="text-sm font-semibold text-[#d4d2cc]">Toolbar</h3>
                          <p className="mt-1 text-xs leading-6 text-[#888780]">Provides quick access to:</p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {['Create Graph', 'Search Nodes', 'Save', 'Undo', 'Redo', 'Auto Layout', 'Settings', 'Minimap'].map((item) => (
                              <span key={item} className="rounded border border-[#2a2a28] bg-[#1a1a18] px-2 py-0.5 text-[10px] text-[#B4B2A9]">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Creating First Graph */}
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Creating Your First Graph</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">Let's build a simple workflow.</p>
                      <div className="mt-4 space-y-4">
                        {[
                          { step: '1', text: 'Drop a Comp node. You can work exclusively inside a specific comp by selecting it from the comp list.' },
                          { step: '2', text: 'Drop a Layer node. Choose any After Effects layer.' },
                          { step: '3', text: 'Add a Transform node. Connect: Layer \u2192 Transform.' },
                          { step: '4', text: 'Adjust Position, Scale, Rotation.' },
                          { step: '5', text: 'Add a Fill node. Connect: Layer \u2192 Transform \u2192 Fill. Change the color.' },
                          { step: '6', text: 'Connect to a Composition Input port. If you are inside a comp, no need to connect terminal wire to the comp node.' },
                        ].map((s) => (
                          <div key={s.step} className="flex items-start gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#534AB7]/15 text-[11px] font-semibold text-[#7B72D0]">
                              {s.step}
                            </span>
                            <p className="text-sm leading-7 text-[#B4B2A9]">{s.text}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 rounded-md border border-[#4cbb6c]/30 bg-[#4cbb6c]/5 p-4">
                        <p className="text-sm font-semibold text-[#4cbb6c]">Congratulations.</p>
                        <p className="mt-1 text-xs text-[#888780]">You've created your first Procedia workflow.</p>
                      </div>
                    </div>

                    {/* Saving */}
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Saving Your Graph</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Graphs can be saved independently from your After Effects project.
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#888780]">Saving preserves:</p>
                      <ul className="mt-2 space-y-1.5 text-sm text-[#B4B2A9]">
                        {['Layout', 'Connections', 'Parameters', 'Groups', 'Comments', 'Branches'].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 text-[#534AB7]">&#8226;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-md border border-[#4cbb6c]/30 bg-[#4cbb6c]/5 p-4">
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-[#4cbb6c]">Good naming</p>
                          <ul className="mt-2 space-y-1 text-xs text-[#B4B2A9]">
                            {['Logo Reveal', 'Product Animation', 'HUD Generator', 'Carousel System'].map((name) => (
                              <li key={name} className="flex items-start gap-2">
                                <Check className="mt-0.5 h-3 w-3 shrink-0 text-[#4cbb6c]" />
                                {name}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-md border border-[#e05555]/30 bg-[#e05555]/5 p-4">
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-[#e05555]">Avoid</p>
                          <ul className="mt-2 space-y-1 text-xs text-[#B4B2A9]">
                            {['Graph1', 'Test', 'Untitled'].map((name) => (
                              <li key={name} className="flex items-start gap-2">
                                <X className="mt-0.5 h-3 w-3 shrink-0 text-[#e05555]" />
                                {name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Navigation */}
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Basic Navigation</h2>
                      <div className="mt-4 overflow-hidden rounded-md border border-[#2a2a28]">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b border-[#2a2a28] bg-[#161614]">
                              <th className="px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]">Action</th>
                              <th className="px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]">Shortcut</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { action: 'Pan', shortcut: 'Middle Mouse' },
                              { action: 'Zoom', shortcut: 'Mouse Wheel' },
                              { action: 'Select Multiple', shortcut: 'Shift' },
                              { action: 'Frame Selection', shortcut: 'F' },
                              { action: 'Search Nodes', shortcut: 'Space' },
                              { action: 'Delete', shortcut: 'Delete' },
                              { action: 'Duplicate', shortcut: 'Ctrl/Cmd + D' },
                              { action: 'Undo', shortcut: 'Ctrl/Cmd + Z' },
                              { action: 'Redo', shortcut: 'Ctrl/Cmd + Shift + Z' },
                            ].map((row) => (
                              <tr key={row.action} className="border-b border-[#1a1a18]">
                                <td className="px-4 py-2 text-xs text-[#B4B2A9]">{row.action}</td>
                                <td className="px-4 py-2">
                                  <code className="rounded border border-[#2a2a28] bg-[#161614] px-1.5 py-0.5 text-[11px] text-[#B4B2A9]">
                                    {row.shortcut}
                                  </code>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Understanding Nodes */}
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Understanding Nodes</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Every graph is built from nodes. A node has:
                      </p>
                      <ul className="mt-2 space-y-1.5 text-sm text-[#B4B2A9]">
                        {['Inputs', 'Outputs', 'Properties', 'Connections'].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 text-[#534AB7]">&#8226;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Think of each node as a small building block. Complex workflows emerge by combining many simple blocks together.
                      </p>
                    </div>

                    {/* Branching */}
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Your First Branch</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        One of Procedia's most powerful features is Branching.
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Imagine you've created a finished product animation and want to explore two different creative directions without rebuilding your graph.
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Instead of duplicating your composition, create a branch.
                      </p>
                      <div className="my-6 flex flex-col items-center gap-0">
                        <div className="rounded-md border border-[#2a2a28] bg-[#1a1a18] px-4 py-2 text-xs font-medium text-[#d4d2cc]">
                          Master Graph
                        </div>
                        <div className="h-6 w-px bg-[#534AB7]" />
                        <div className="flex items-start gap-12">
                          <div className="flex flex-col items-center">
                            <div className="h-px w-8 bg-[#534AB7]" />
                            <div className="flex items-center gap-2">
                              <div className="h-px w-8 bg-[#534AB7]" />
                              <div className="rounded-md border border-[#534AB7]/30 bg-[#534AB7]/10 px-4 py-2 text-xs font-medium text-[#7B72D0]">
                                Version A
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="h-px w-8 bg-[#534AB7]" />
                            <div className="flex items-center gap-2">
                              <div className="h-px w-8 bg-[#534AB7]" />
                              <div className="rounded-md border border-[#534AB7]/30 bg-[#534AB7]/10 px-4 py-2 text-xs font-medium text-[#7B72D0]">
                                Version B
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Each branch inherits the original workflow while remaining independent, allowing you to experiment safely without affecting the master graph.
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">Branching is ideal for:</p>
                      <ul className="mt-2 space-y-1.5 text-sm text-[#B4B2A9]">
                        {['Client revisions', 'Style exploration', 'A/B comparisons', 'Alternate color grades', 'Different animation timings'].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 text-[#534AB7]">&#8226;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Where to Go Next */}
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Where to Go Next</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Now that you've built your first graph, continue with:
                      </p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {[
                          { title: 'Interface Overview', desc: 'Learn every panel and workspace.' },
                          { title: 'Node Reference', desc: 'Explore every available node and its purpose.' },
                          { title: 'Workflow Guides', desc: 'Build real-world projects step by step.' },
                          { title: 'Best Practices', desc: 'Discover techniques for creating clean, scalable graphs.' },
                          { title: 'Examples Library', desc: 'Download complete Procedia projects and learn from production-ready workflows.' },
                        ].map((item) => (
                          <div key={item.title} className="rounded-md border border-[#2a2a28] bg-[#161614] p-3">
                            <h3 className="text-xs font-semibold text-[#d4d2cc]">{item.title}</h3>
                            <p className="mt-1 text-[11px] text-[#888780]">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[#888780]">
                        By the end of the Getting Started guide, you'll have the foundation needed to confidently build, organize, and expand procedural motion graphics inside Adobe After Effects.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'user-guide' && (
                  <div className='space-y-10'>
                    <div>
                      <p className='text-sm leading-7 text-[#B4B2A9]'>
                        Procedia is a <strong>visual node-based compositing panel</strong> for Adobe After Effects. It lets you build compositing workflows as a node graph — each node represents an AE layer, effect, or data input, and wires define how data flows between them.
                      </p>
                    </div>

                    {/* Interface Overview */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Interface Overview</h2>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        Procedia's panel is divided into five zones:
                      </p>
                      <ul className='mt-2 space-y-1.5 text-sm text-[#B4B2A9]'>
                        {[
                          'Node Palette (left) — searchable list of all node types you can drag onto the canvas.',
                          'Canvas (center) — the main workspace where you build and edit your node graph.',
                          'Inspector Panel (right) — edit properties of the selected node.',
                          'Top Bar — action buttons (save, undo, duplicate, delete, layout, settings, etc.).',
                          'Bottom Zone — comp list dropdown, floating tips, notifications, minimap.',
                        ].map((item) => (
                          <li key={item} className='flex items-start gap-2'>
                            <span className='mt-1 text-[#534AB7]'>&bull;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Canvas Navigation */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Canvas Navigation</h2>
                      <div className='mt-4 overflow-hidden rounded-md border border-[#2a2a28]'>
                        <table className='w-full border-collapse'>
                          <thead>
                            <tr className='border-b border-[#2a2a28] bg-[#161614]'>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Action</th>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>How</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { action: 'Pan', how: 'Click and drag on empty canvas space' },
                              { action: 'Zoom', how: 'Scroll with mouse wheel' },
                              { action: 'Zoom to fit', how: 'Click Fit View in the top bar, or the fit button on the minimap' },
                              { action: 'Minimap', how: 'Shows a birds-eye view in the bottom-right corner. Click on it to jump to that area' },
                            ].map((row) => (
                              <tr key={row.action} className='border-b border-[#1a1a18]'>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.action}</td>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.how}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        The canvas has a dot-grid background. Sidebars can be collapsed via thin handles that appear at the left and right edges of the canvas on hover.
                      </p>
                    </div>

                    {/* Nodes */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Nodes</h2>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        Nodes are the building blocks of your graph. Each node represents an element in After Effects: a layer, an effect, a composition, a footage item, or a data input.
                      </p>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Node Anatomy</h3>
                      <ul className='mt-2 space-y-1.5 text-sm text-[#B4B2A9]'>
                        {[
                          'State dot — green (exists in AE), gray (not yet created), red (error / deleted in AE).',
                          'Collapse button (chevron) — hides the node body to save space.',
                          'Input ports (left side) — where wires enter the node.',
                          'Output ports (right side) — where wires exit the node.',
                          'Header — shows the node title (double-click to rename).',
                        ].map((item) => (
                          <li key={item} className='flex items-start gap-2'>
                            <span className='mt-1 text-[#534AB7]'>&bull;</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Creating Nodes</h3>
                      <ul className='mt-2 space-y-1.5 text-sm text-[#B4B2A9]'>
                        {[
                          'Drag from the Node Palette: find a node in the left sidebar and drag it onto the canvas.',
                          'Wire-to-empty-space: drag a wire connection onto empty canvas — the Node Picker opens, letting you search and place a compatible node.',
                          'Import AE Project: use the Import button in the top bar to generate nodes from an existing AE project.',
                          'Duplicate: select a node and press Ctrl+D or click the Duplicate button in the top bar.',
                        ].map((item) => (
                          <li key={item} className='flex items-start gap-2'>
                            <span className='mt-1 text-[#534AB7]'>&bull;</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Selecting Nodes</h3>
                      <div className='mt-4 overflow-hidden rounded-md border border-[#2a2a28]'>
                        <table className='w-full border-collapse'>
                          <thead>
                            <tr className='border-b border-[#2a2a28] bg-[#161614]'>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Action</th>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>How</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { action: 'Single selection', how: 'Click a node' },
                              { action: 'Add / toggle selection', how: 'Ctrl+Click or Shift+Click' },
                              { action: 'Rubber-band select', how: 'Click and drag on empty canvas to draw a selection rectangle' },
                              { action: 'Select all', how: 'Ctrl+A' },
                            ].map((row) => (
                              <tr key={row.action} className='border-b border-[#1a1a18]'>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.action}</td>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.how}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        Selected nodes show a purple border highlight.
                      </p>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Moving Nodes</h3>
                      <ul className='mt-2 space-y-1.5 text-sm text-[#B4B2A9]'>
                        {[
                          'Drag a node by its header to reposition it.',
                          'If multiple nodes are selected, dragging moves them all together.',
                          'With Snap to Grid enabled in Settings, positions snap to a 24px grid.',
                        ].map((item) => (
                          <li key={item} className='flex items-start gap-2'>
                            <span className='mt-1 text-[#534AB7]'>&bull;</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Renaming Nodes</h3>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        Double-click the title in the node header. An inline input field appears. Press Enter to confirm, Escape to cancel.
                      </p>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Deleting Nodes</h3>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        Select node(s) and press Delete or Backspace, or click the Delete button in the top bar. Wires connected to the deleted nodes are removed automatically.
                      </p>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Collapsing / Expanding</h3>
                      <ul className='mt-2 space-y-1.5 text-sm text-[#B4B2A9]'>
                        {[
                          'Click the chevron in the node header to collapse or expand it individually.',
                          'Use Collapse All / Expand All in the top bar to toggle all nodes at once.',
                        ].map((item) => (
                          <li key={item} className='flex items-start gap-2'>
                            <span className='mt-1 text-[#534AB7]'>&bull;</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Node States</h3>
                      <div className='mt-4 overflow-hidden rounded-md border border-[#2a2a28]'>
                        <table className='w-full border-collapse'>
                          <thead>
                            <tr className='border-b border-[#2a2a28] bg-[#161614]'>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>State</th>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Appearance</th>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Meaning</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { state: 'Alive', appearance: 'Solid border, green dot', meaning: 'Layer/effect exists in AE' },
                              { state: 'Ghost', appearance: 'Dashed border, gray dot, lower opacity', meaning: 'Defined in the graph but not yet created in AE' },
                              { state: 'Error', appearance: 'Red border, red dot', meaning: 'Layer/effect was deleted outside Procedia' },
                              { state: 'Disabled', appearance: 'Dashed border, 50% opacity, desaturated', meaning: 'Toggled off (via right-click or inspector)' },
                            ].map((row) => (
                              <tr key={row.state} className='border-b border-[#1a1a18]'>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.state}</td>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.appearance}</td>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.meaning}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Node Color Toolbar</h3>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        Hover over a node to reveal a floating toolbar above it with color swatches. Click a color to change the node accent color for visual organization.
                      </p>
                    </div>

                    {/* Wires & Connections */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Wires & Connections</h2>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        Wires carry data between nodes. There are three types:
                      </p>
                      <ul className='mt-2 space-y-1.5 text-sm text-[#B4B2A9]'>
                        {[
                          'Layer wires — pass layer data (main compositing flow).',
                          'Data wires — pass control values (e.g., a Slider node feeding a parameter).',
                          'Parent/child wires — establish parent-child layer relationships.',
                        ].map((item) => (
                          <li key={item} className='flex items-start gap-2'>
                            <span className='mt-1 text-[#534AB7]'>&bull;</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Creating a Wire</h3>
                      <ol className='mt-2 space-y-1.5 text-sm text-[#B4B2A9] list-decimal pl-5'>
                        {[
                          'Click and drag from a node output port (right side, green dot).',
                          'A preview bezier curve follows your cursor.',
                          'Drop on another node input port (left side, green or gray dot) to complete the connection.',
                        ].map((item) => (
                          <li key={item} className='text-sm text-[#B4B2A9]'>{item}</li>
                        ))}
                      </ol>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        <strong>Reverse wiring</strong>: Drag from an input port instead — the Node Picker opens and shows only nodes whose output is compatible.
                      </p>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Wire Insertion</h3>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        Drag a node from the palette and drop it onto an existing wire — the node is inserted between the source and target, automatically splitting the wire.
                      </p>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Selecting & Deleting Wires</h3>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        Click a wire to select it (highlighted). Press Delete, Backspace, or double-click to remove it.
                      </p>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Wire Styles</h3>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        Choose your preferred wire visual style in Settings → Wires:
                      </p>
                      <div className='mt-4 overflow-hidden rounded-md border border-[#2a2a28]'>
                        <table className='w-full border-collapse'>
                          <thead>
                            <tr className='border-b border-[#2a2a28] bg-[#161614]'>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Style</th>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { style: 'Bezier', description: 'Smooth curved lines (default)' },
                              { style: 'Direct', description: 'Straight lines' },
                              { style: 'Stepped', description: 'Right-angle stepped lines' },
                              { style: 'Animated Dash', description: 'Dashed line with a flowing animation effect' },
                            ].map((row) => (
                              <tr key={row.style} className='border-b border-[#1a1a18]'>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.style}</td>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Validation</h3>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        Procedia prevents invalid connections:
                      </p>
                      <ul className='mt-2 space-y-1.5 text-sm text-[#B4B2A9]'>
                        {[
                          'Cycle detection — no layer wire loops are allowed.',
                          'Port type matching — only compatible ports can connect.',
                          'Matte rules — Track Matte nodes require Foreground and Matte inputs from layers in the same composition.',
                          'Parenting rules — Parenting require Parent and Child to be hosted in the same composition.',
                        ].map((item) => (
                          <li key={item} className='flex items-start gap-2'>
                            <span className='mt-1 text-[#534AB7]'>&bull;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Node Palette */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Node Palette (Left Sidebar)</h2>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        The left sidebar lists all available node types organized by category:
                      </p>
                      <ul className='mt-2 space-y-1.5 text-sm text-[#B4B2A9]'>
                        {[
                          'Core — Comp, Footage',
                          'Data — Number, Angle, Slider, Checkbox, Point Control, Color Control, Layer Index, Text, Timecode',
                          'Layers — Text, Camera, Light, Null, Adjustment Layer, Solid, Shape (Rectangle, Ellipse, Star, Gear, Flower, Squircle, Wave) and Path',
                          'Effects — all After Effects effects (Blur & Sharpen, Color Correction, Distort, Generate, etc.)',
                          'Utilities — Merge, Multimerge',
                        ].map((item) => (
                          <li key={item} className='flex items-start gap-2'>
                            <span className='mt-1 text-[#534AB7]'>&bull;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        Use the <strong>search bar</strong> at the top of the palette to filter nodes by name.
                      </p>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        <strong>To add a node</strong>: drag any item from the palette onto the canvas.
                      </p>
                    </div>

                    {/* Inspector Panel */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Inspector Panel (Right Sidebar)</h2>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        When a single node is selected, the Inspector (right sidebar) shows its editable properties.
                      </p>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Properties Section</h3>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        Lists all parameters for the node. Parameter types include:
                      </p>
                      <div className='mt-4 overflow-hidden rounded-md border border-[#2a2a28]'>
                        <table className='w-full border-collapse'>
                          <thead>
                            <tr className='border-b border-[#2a2a28] bg-[#161614]'>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Type</th>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Interaction</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { type: 'Number', interaction: 'Text input — supports math expressions (e.g., 600/2 evaluates to 300)' },
                              { type: 'Boolean', interaction: 'Checkbox toggle' },
                              { type: 'Color', interaction: 'Opens a color picker popover with swatches and a hex field' },
                              { type: 'Enum', interaction: 'Dropdown select' },
                              { type: 'Vector2 / Vector3', interaction: 'Comma-separated text input' },
                              { type: 'String', interaction: 'Text input' },
                            ].map((row) => (
                              <tr key={row.type} className='border-b border-[#1a1a18]'>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.type}</td>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.interaction}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        Parameters that are connected to an upstream data wire appear in <strong>amber</strong> color. Parameters disabled by conditional logic are grayed out.
                      </p>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Keyframe Controls</h3>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        Animatable parameters show a keyframe control with:
                      </p>
                      <ul className='mt-2 space-y-1.5 text-sm text-[#B4B2A9]'>
                        {[
                          '\u25C0 — jump to previous keyframe',
                          '\u25C6 — add / remove a keyframe at the current playhead position',
                          '\u25B6 — jump to next keyframe',
                        ].map((item) => (
                          <li key={item} className='flex items-start gap-2'>
                            <span className='mt-1 text-[#534AB7]'>&bull;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        Changing a keyframed parameter value when the playhead is not on a keyframe automatically adds one.
                      </p>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Layer Stack (Comp Nodes)</h3>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        When a comp node is selected, the inspector shows an ordered list of its layers. Each row displays the index, layer name, type abbreviation, and state dot.
                      </p>
                      <ul className='mt-2 space-y-1.5 text-sm text-[#B4B2A9]'>
                        {[
                          'Move Up / Move Down buttons reorder layers in AE.',
                          'Rows are draggable — drag a layer to reorder it within the stack.',
                        ].map((item) => (
                          <li key={item} className='flex items-start gap-2'>
                            <span className='mt-1 text-[#534AB7]'>&bull;</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Layer Order (Affected Nodes)</h3>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        Nodes that represent layers in a comp show Move Up / Move Down buttons to reorder them.
                      </p>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Footage Import (Footage Nodes)</h3>
                      <ul className='mt-2 space-y-1.5 text-sm text-[#B4B2A9]'>
                        {[
                          'Shows the imported file name.',
                          'Click Browse & Import to select or replace footage from your filesystem.',
                        ].map((item) => (
                          <li key={item} className='flex items-start gap-2'>
                            <span className='mt-1 text-[#534AB7]'>&bull;</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Recovering Error Nodes</h3>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        A node in error state (deleted outside Procedia) shows a Recreate action in the inspector (or via notification).
                      </p>
                    </div>

                    {/* Composition List */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Composition List</h2>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        The comp list dropdown is at the bottom-left edge of the canvas.
                      </p>
                      <ul className='mt-2 space-y-1.5 text-sm text-[#B4B2A9]'>
                        {[
                          'All project (default) — shows every node in the graph.',
                          'Selecting a specific composition filters the canvas to show only upstream nodes (those relevant to that comp). New nodes added while a comp is active are auto-connected to it.',
                        ].map((item) => (
                          <li key={item} className='flex items-start gap-2'>
                            <span className='mt-1 text-[#534AB7]'>&bull;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Graph Search */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Graph Search</h2>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        The search icon is at the top-left corner of the canvas.
                      </p>
                      <ol className='mt-2 space-y-1.5 text-sm text-[#B4B2A9] list-decimal pl-5'>
                        {[
                          'Click the magnifying glass to open the search field.',
                          'Start typing — nodes whose labels match are highlighted with a golden border.',
                          'A counter shows how many matches were found (e.g., 3 found).',
                          'Click the Focus button (or press Enter) to pan and zoom to the first matching node and select it.',
                          'Press Escape or close the search to clear highlights.',
                        ].map((item) => (
                          <li key={item} className='text-sm text-[#B4B2A9]'>{item}</li>
                        ))}
                      </ol>
                    </div>

                    {/* Top Bar */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Top Bar</h2>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        The top bar runs along the top of the panel and provides quick access to actions:
                      </p>
                      <div className='mt-4 overflow-hidden rounded-md border border-[#2a2a28]'>
                        <table className='w-full border-collapse'>
                          <thead>
                            <tr className='border-b border-[#2a2a28] bg-[#161614]'>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Action</th>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { action: 'Save', description: 'Save the graph to AE / export file' },
                              { action: 'Open', description: 'Load a saved graph file' },
                              { action: 'Undo / Redo', description: 'Step backward / forward through graph changes' },
                              { action: 'Auto Layout', description: 'Arrange all nodes using an automatic layout algorithm' },
                              { action: 'Fit View', description: 'Zoom and pan to show all nodes' },
                              { action: 'Collapse All / Expand All', description: 'Toggle collapse state of all nodes' },
                              { action: 'Import AE Project', description: 'Import an entire AE project as a node graph' },
                              { action: 'Duplicate', description: 'Duplicate the selected node(s) — dimmed when nothing selected' },
                              { action: 'Delete', description: 'Delete the selected node(s) — dimmed when nothing selected' },
                              { action: 'Reset', description: 'Reset the graph' },
                              { action: 'Reload', description: 'Reload the panel' },
                              { action: 'Settings', description: 'Open the settings modal' },
                              { action: 'Bug Report', description: 'Open the bug reporting form' },
                            ].map((row) => (
                              <tr key={row.action} className='border-b border-[#1a1a18]'>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.action}</td>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Auto Layout */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Auto Layout</h2>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        Click Auto Layout in the top bar to automatically arrange all nodes. The layout uses a layered (Sugiyama-style) algorithm.
                      </p>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        Configure in Settings → Auto Layout:
                      </p>
                      <ul className='mt-2 space-y-1.5 text-sm text-[#B4B2A9]'>
                        {[
                          'Direction — Left-to-Right or Top-to-Bottom',
                          'Horizontal Spacing — 40 to 300 px',
                          'Vertical Spacing — 20 to 200 px',
                          'Snap to Grid — snap node positions to a 24px grid',
                        ].map((item) => (
                          <li key={item} className='flex items-start gap-2'>
                            <span className='mt-1 text-[#534AB7]'>&bull;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        Locked nodes are skipped during auto layout.
                      </p>
                    </div>

                    {/* Settings */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Settings</h2>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        Click the gear icon in the top bar to open Settings. The modal has three tabs:
                      </p>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>General</h3>
                      <div className='mt-4 overflow-hidden rounded-md border border-[#2a2a28]'>
                        <table className='w-full border-collapse'>
                          <thead>
                            <tr className='border-b border-[#2a2a28] bg-[#161614]'>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Setting</th>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { setting: 'Minimap', description: 'Show / hide the minimap' },
                              { setting: 'Port Labels', description: 'Show port labels on node hover' },
                              { setting: 'Anonymous Reporting', description: 'Enable / disable error reporting' },
                              { setting: 'Auto Shy', description: 'Automatically shy unselected layers in the AE timeline when a node is selected' },
                              { setting: 'Replay Tutorial', description: 'Restart the walkthrough tutorial' },
                            ].map((row) => (
                              <tr key={row.setting} className='border-b border-[#1a1a18]'>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.setting}</td>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Wires</h3>
                      <div className='mt-4 overflow-hidden rounded-md border border-[#2a2a28]'>
                        <table className='w-full border-collapse'>
                          <thead>
                            <tr className='border-b border-[#2a2a28] bg-[#161614]'>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Setting</th>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { setting: 'Wire Style', description: 'Bezier (default), Direct, or Stepped' },
                              { setting: 'Animated Dash', description: 'Enable flowing dashed wire animation' },
                            ].map((row) => (
                              <tr key={row.setting} className='border-b border-[#1a1a18]'>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.setting}</td>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Auto Layout</h3>
                      <div className='mt-4 overflow-hidden rounded-md border border-[#2a2a28]'>
                        <table className='w-full border-collapse'>
                          <thead>
                            <tr className='border-b border-[#2a2a28] bg-[#161614]'>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Setting</th>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { setting: 'Snap to Grid', description: 'Snap node positions to 24px grid while dragging' },
                              { setting: 'Direction', description: 'Left-to-Right or Top-to-Bottom' },
                              { setting: 'Horizontal Spacing', description: '40-300 px between nodes' },
                              { setting: 'Vertical Spacing', description: '20-200 px between nodes' },
                            ].map((row) => (
                              <tr key={row.setting} className='border-b border-[#1a1a18]'>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.setting}</td>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Keyframes */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Keyframes</h2>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        Procedia synchronizes keyframe data between the node graph and After Effects.
                      </p>
                      <ul className='mt-2 space-y-1.5 text-sm text-[#B4B2A9]'>
                        {[
                          'Viewing: The keyframe icon next to an animatable parameter shows whether it has keyframes (filled = keyframes exist, empty = none).',
                          'Adding: Click the diamond icon at the current playhead position, or change a keyframed parameter value at a non-keyframe time to auto-add one.',
                          'Navigating: Use \u25C0 and \u25B6 to jump between keyframes.',
                          'Removing: Click the diamond icon when the playhead is on an existing keyframe.',
                        ].map((item) => (
                          <li key={item} className='flex items-start gap-2'>
                            <span className='mt-1 text-[#534AB7]'>&bull;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        On startup, Procedia reads all keyframe data from AE and populates the keyframe state automatically.
                      </p>
                    </div>

                    {/* Saving & Loading */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Saving & Loading</h2>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Save</h3>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        Click the Save button in the top bar. The graph data is written to the AE project. If AE is unavailable, the file downloads as .procedia.json.
                      </p>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        Procedia also auto-saves continuously — any graph change triggers a debounced write to AE (every 300ms). On panel close, unsaved changes are written automatically.
                      </p>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Open</h3>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        Click the Open button in the top bar to load a previously saved graph file from disk.
                      </p>

                      <h3 className='mt-5 text-sm font-semibold text-[#d4d2cc]'>Import AE Project</h3>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        The Import AE Project button reads the entire After Effects project — all compositions, layers, effects, and footage items — and builds a complete node graph from it. This is one-way: it does not modify your AE project.
                      </p>
                    </div>

                    {/* Walkthrough Tutorial */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Walkthrough Tutorial</h2>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        On first launch, Procedia shows an interactive step-by-step walkthrough that covers:
                      </p>
                      <ol className='mt-2 space-y-1.5 text-sm text-[#B4B2A9] list-decimal pl-5'>
                        {[
                          'Welcome',
                          'Node Palette (left sidebar)',
                          'The Canvas (zoom, pan, minimap)',
                          'Comp List',
                          'Connecting Nodes (wires)',
                          'Inspector Panel (right sidebar)',
                          'Reporting a Bug',
                          'You\'re Ready!',
                        ].map((item) => (
                          <li key={item} className='text-sm text-[#B4B2A9]'>{item}</li>
                        ))}
                      </ol>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        Each step highlights the relevant UI element and shows an explanation card. Use Next to advance or Dismiss to close.
                      </p>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        To replay the tutorial, go to Settings → General → Replay Tutorial.
                      </p>
                    </div>

                    {/* Status Bar */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Status Bar</h2>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        The status bar is in the top-right corner. It displays:
                      </p>
                      <ul className='mt-2 space-y-1.5 text-sm text-[#B4B2A9]'>
                        {[
                          'Selection count — e.g., 3 selected (if any)',
                          'Total nodes — node count in the graph',
                          'Alive count — nodes that exist in AE',
                          'Ghost count — nodes not yet created in AE',
                          'Wire count — total connections',
                          'Zoom level — current canvas zoom percentage',
                        ].map((item) => (
                          <li key={item} className='flex items-start gap-2'>
                            <span className='mt-1 text-[#534AB7]'>&bull;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tips Bar */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Tips Bar</h2>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        A floating tip bar at the bottom of the canvas cycles through helpful hints every 20 seconds. Tips include:
                      </p>
                      <ul className='mt-2 space-y-1.5 text-sm text-[#B4B2A9]'>
                        {[
                          'Drag nodes from the left panel onto the canvas',
                          'Connect nodes by dragging from an output port to an input port',
                          'Right-click a node for quick actions (duplicate, delete, etc.)',
                          'Press Ctrl+D to duplicate the selected node(s)',
                          'Scroll to zoom, drag the background to pan around the canvas',
                          'Double-click a node title to rename it',
                          'Track Matte rules: Foreground and Matte inputs must be wired to layers in the same composition',
                        ].map((item) => (
                          <li key={item} className='flex items-start gap-2'>
                            <span className='mt-1 text-[#534AB7]'>&bull;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        Click the tip text to advance to the next tip immediately.
                      </p>
                    </div>

                    {/* Bug Reporting */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Bug Reporting</h2>
                      <p className='mt-3 text-sm leading-7 text-[#888780]'>
                        Click the bug icon in the top bar to open the bug report form. Fill in:
                      </p>
                      <ul className='mt-2 space-y-1.5 text-sm text-[#B4B2A9]'>
                        {[
                          'Category — Bug, Performance, or Suggestion',
                          'Severity — Low, Medium, High, or Critical',
                          'Title — brief summary',
                          'Description — detailed explanation',
                        ].map((item) => (
                          <li key={item} className='flex items-start gap-2'>
                            <span className='mt-1 text-[#534AB7]'>&bull;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className='mt-2 text-sm leading-7 text-[#888780]'>
                        A screenshot of the canvas is captured automatically. Submitting sends the report to the development team.
                      </p>
                    </div>

                    {/* Keyboard Shortcuts */}
                    <div>
                      <h2 className='text-lg font-semibold text-[#d4d2cc]'>Keyboard Shortcuts</h2>
                      <div className='mt-4 overflow-hidden rounded-md border border-[#2a2a28]'>
                        <table className='w-full border-collapse'>
                          <thead>
                            <tr className='border-b border-[#2a2a28] bg-[#161614]'>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Shortcut</th>
                              <th className='px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]'>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { shortcut: 'Ctrl+Z', action: 'Undo' },
                              { shortcut: 'Ctrl+Shift+Z', action: 'Redo' },
                              { shortcut: 'Ctrl+D', action: 'Duplicate selected node(s)' },
                              { shortcut: 'Delete / Backspace', action: 'Delete selected node(s) or wire' },
                              { shortcut: 'Ctrl+A', action: 'Select all nodes' },
                              { shortcut: 'Enter', action: 'Confirm rename / Focus first search result' },
                              { shortcut: 'Escape', action: 'Cancel rename / Close graph search' },
                              { shortcut: 'Scroll', action: 'Zoom in / out on canvas' },
                              { shortcut: 'Click + drag (empty canvas)', action: 'Pan / rubber-band select' },
                            ].map((row) => (
                              <tr key={row.shortcut} className='border-b border-[#1a1a18]'>
                                <td className='px-4 py-2'>
                                  <code className='rounded border border-[#2a2a28] bg-[#161614] px-1.5 py-0.5 text-[11px] text-[#B4B2A9]'>
                                    {row.shortcut}
                                  </code>
                                </td>
                                <td className='px-4 py-2 text-xs text-[#B4B2A9]'>{row.action}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className='border-t border-[#2a2a28] pt-4'>
                      <p className='text-xs text-[#5F5E5A]'>
                        Procedia v0.0.4 — Uppercut Studio
                      </p>
                    </div>
                  </div>
                )}


                {activeTab === 'nodes' && (
                  <div className="space-y-8">
                    {[
                      {
                        name: 'Transform',
                        color: '#534AB7',
                        description: 'Position, scale, rotate, and anchor point manipulation with procedural controls.',
                        nodes: ['Position', 'Scale', 'Rotation', 'Anchor Point', 'Transform Combo'],
                      },
                      {
                        name: 'Color',
                        color: '#4cbb6c',
                        description: 'Color correction, grading, and dynamic color based on layer properties.',
                        nodes: ['Fill', 'Tint', 'Gradient Ramp', 'Color Link', 'Hue Shift'],
                      },
                      {
                        name: 'Mask',
                        color: '#185FA5',
                        description: 'Procedural mask generation and manipulation without manual drawing.',
                        nodes: ['Rectangle', 'Ellipse', 'Polygon', 'Mask Combine', 'Mask Feather'],
                      },
                      {
                        name: 'Fields',
                        color: '#D4AC0D',
                        description: 'Physics-based forces and field effects for natural motion.',
                        nodes: ['Wind', 'Turbulence', 'Attractor', 'Repulsor', 'Vortex'],
                      },
                      {
                        name: 'Data',
                        color: '#1ABC9C',
                        description: 'Data-driven animation using expressions, CSV, or JSON inputs.',
                        nodes: ['Value Map', 'Array Loop', 'Expression Link', 'Audio React', 'Time Warp'],
                      },
                    ].map((category) => (
                      <div key={category.name}>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-[3px] rounded-full" style={{ background: category.color }} />
                          <h2 className="text-lg font-semibold text-[#d4d2cc]">{category.name}</h2>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-[#888780]">{category.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {category.nodes.map((node) => (
                            <span
                              key={node}
                              className="rounded-md border border-[#2a2a28] bg-[#161614] px-2.5 py-1 text-[11px] text-[#B4B2A9]"
                            >
                              {node}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'changelog' && (
                  <div className="space-y-8">
                    {changelog.map((release) => (
                      <div key={release.version}>
                        <div className="flex items-baseline gap-3">
                          <h2 className="text-lg font-semibold text-[#d4d2cc]">v{release.version}</h2>
                          <span className="text-xs text-[#5F5E5A]">{release.date}</span>
                        </div>
                        <ul className="mt-3 space-y-2">
                          {release.changes.map((change, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#B4B2A9]">
                              <span className={cn('mt-0.5 text-[10px] font-semibold uppercase', changeTypeColors[change.type])}>
                                {change.type}
                              </span>
                              {change.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    </div>
  )
}
