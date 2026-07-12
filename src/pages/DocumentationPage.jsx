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
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">The Node Editor</h2>
                      <p className="mt-2 text-sm leading-7 text-[#888780]">
                        The node editor is your main workspace. Drag to pan, scroll to zoom, and right-click to open the node menu. Connect nodes by dragging from an output port to an input port.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Working with Nodes</h2>
                      <p className="mt-2 text-sm leading-7 text-[#888780]">
                        Each node represents an operation in your motion graphics pipeline. Nodes process data sequentially from left to right. You can group nodes, create branches, and merge paths to build complex effects.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Preview & Render</h2>
                      <p className="mt-2 text-sm leading-7 text-[#888780]">
                        Changes in the node graph update in real-time in your After Effects composition. When you're satisfied, click "Apply" to bake the results into your timeline as standard After Effects layers and keyframes.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Keyboard Shortcuts</h2>
                      <div className="mt-3 space-y-2">
                        {[
                          { key: 'Space + Drag', action: 'Pan the graph editor' },
                          { key: 'Scroll', action: 'Zoom in/out' },
                          { key: 'Ctrl + Z', action: 'Undo' },
                          { key: 'Ctrl + Shift + Z', action: 'Redo' },
                          { key: 'Delete', action: 'Remove selected nodes' },
                          { key: 'Ctrl + D', action: 'Duplicate selected nodes' },
                        ].map((shortcut) => (
                          <div key={shortcut.key} className="flex items-center gap-4">
                            <code className="shrink-0 rounded border border-[#2a2a28] bg-[#161614] px-2 py-0.5 text-[11px] text-[#B4B2A9]">
                              {shortcut.key}
                            </code>
                            <span className="text-xs text-[#888780]">{shortcut.action}</span>
                          </div>
                        ))}
                      </div>
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
