import { useRef, useState } from 'react'
import { Check } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Container } from '../components/Layout'
import { NodeCanvas } from '../components/NodeCanvas'
import { cn } from '../lib/utils'

const tabs = [
  { id: 'graph-engine', label: 'Graph Engine' },
  { id: 'canvas-interface', label: 'Canvas & Interface' },
  { id: 'ae-bridge', label: 'AE Bridge' },
  { id: 'node-library', label: 'Node Library' },
  { id: 'persistence', label: 'Persistence & Tooling' },
]

export function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('graph-engine')
  const tabsRef = useRef(null)
  const scrollToTabs = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#111110]">
      <NodeCanvas />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-14">
          <Container className="py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-[#d4d2cc] sm:text-4xl">
                Features
              </h1>
              <p className="mt-4 text-sm leading-7 text-[#888780]">
                Visual node-based compositing for After Effects — from simple layer creation to complex effect chains.
              </p>
            </div>

              <div className="mx-auto mt-10 max-w-5xl">
              <div ref={tabsRef} className="sticky top-14 z-20 -mx-4 px-4 py-2 bg-[#111110]">
                <div className="flex gap-1 rounded-lg border border-[#2a2a28] bg-[#161614] p-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => { setActiveTab(tab.id); scrollToTabs() }}
                      className={cn(
                        'flex-1 rounded-md px-4 py-2 text-xs font-medium transition-all',
                        activeTab === tab.id
                          ? 'bg-[#06d6a0] text-black shadow-[0_0_10px_rgba(6,214,160,0.3)]'
                          : 'text-[#888780] hover:text-[#d4d2cc]'
                      )}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-[#2a2a28] bg-[#1a1a18] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
                {activeTab === 'graph-engine' && (
                  <div className="space-y-10">
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">State & Graph Management</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Centralized in-memory store with instant access to all nodes, wires, and connections — multi-select, visibility toggle, change tracking, and version preview.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Node Lifecycle</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Drag from palette to create, delete with automatic cleanup, duplicate with perfect placement, clone with master relationships, recreate for error recovery, lock/unlock, reorder effects, enable/disable — all synced with AE.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Smart Wiring</h2>
                      <p className="mt-3 text-sm leading-7 text-[#B4B2A9]">
                        Connect any two ports with automatic type validation (layer, data, parent, matte). Color-coded wires:
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[
                          { label: 'Green — Layer', color: '#4cbb6c' },
                          { label: 'Gray — Data', color: '#888780' },
                          { label: 'Orange — Parent', color: '#E07B39' },
                        ].map((w) => (
                          <span key={w.label} className="rounded border border-[#2a2a28] bg-[#161614] px-2.5 py-1 text-xs text-[#B4B2A9]">
                            <span className="inline-block h-2 w-2 rounded-full mr-1.5" style={{ backgroundColor: w.color }} />
                            {w.label}
                          </span>
                        ))}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Midpoint click inserts nodes inline. Complete validation: node existence, self-connection prevention, port availability, direction compatibility, type matching, capacity, duplicates, cycle detection, parent matching, special rules for blending and matte connections.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">State Propagation</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Nodes activate/deactivate through connection chains. Active nodes auto-create AE layers with correct properties. Disabled chains show visual bypass routes.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Cascade & Ghosting</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Removing a connection ghosts downstream nodes that lose all comp paths. Effectors stripped first (outermost to innermost), then affected nodes parked. Only layer wires trigger cascade; parent and data wires are never traversed. Batched into single bridge call.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Cycle Prevention</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Automatic circular connection detection blocks infinite loops before they occur.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Undo / Redo</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Snapshot history (50 entries deep) with debounced commits. Full AE reconciliation on undo/redo — diffs old and new state, dispatches create/delete, property changes, wire connect/disconnect wrapped in clean AE undo groups.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Performance</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Property updates batched with 300ms debouncing. RAF-batched UI rendering with per-component dirt-tracking.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'canvas-interface' && (
                  <div className="space-y-10">
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Canvas Navigation</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Pan with mouse drag or Space+Drag, zoom 10%–400% with scroll wheel. 3-level detail grid for spatial awareness. 24-pixel snap grid for precise placement.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Node Visuals</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Color-coded category cards with dynamic parameter rows, clear port labels, and visual states (active, ghosted, errored, locked, collapsed). Expand/collapse to focus.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Selection & Context</h2>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-md border border-[#2a2a28] bg-[#161614] p-4">
                          <h3 className="text-xs font-semibold text-[#d4d2cc]">Selection Toolbar</h3>
                          <p className="mt-1 text-xs text-[#888780]">
                            Floating toolbar on selected nodes — clone, duplicate, change color (8-color palette), collapse, enable/disable, switch, delete.
                          </p>
                        </div>
                        <div className="rounded-md border border-[#2a2a28] bg-[#161614] p-4">
                          <h3 className="text-xs font-semibold text-[#d4d2cc]">Context Menu</h3>
                          <p className="mt-1 text-xs text-[#888780]">
                            Right-click for recreate, duplicate, clone, lock, delete.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Wire Styles</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Smooth curves, straight lines, or right-angle turns. Connection previews show split-wire impact before committing. Live dragging with automatic port detection.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Auto Layout</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Sugiyama-style algorithms arrange nodes in logical left-to-right or top-to-bottom flow with adjustable spacing. Data nodes positioned in clean grids.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Interface Panels</h2>
                      <div className="mt-4 space-y-4">
                        {[
                          {
                            title: 'Top Bar',
                            desc: 'Branding, save/open, undo/redo with intelligent states, layout tools, import/export, selection actions, settings, tutorials, bug reporting.',
                          },
                          {
                            title: 'Node Library Sidebar',
                            desc: 'Browse 6 categories (Core, Data, Layers, Shapes, Track Matte, Effects with subcategories). Real-time search, drag preview, category color dots, collapsible sections.',
                          },
                          {
                            title: 'Inspector',
                            desc: 'Edit properties with text inputs, checkboxes, color pickers, math evaluation, layer ordering, comp stack view, keyframe indicators, file browsing for footage, error recovery — adapts to each node type.',
                          },
                          {
                            title: 'Node Picker',
                            desc: 'Search by wire compatibility with category grouping, keyboard navigation, inline connection mode, forward/reverse support.',
                          },
                          {
                            title: 'Composition Navigator',
                            desc: 'Current comp display with instant switching. Drop nodes onto comps for automatic wiring.',
                          },
                          {
                            title: 'Settings Modal',
                            desc: 'Three tabs — General (minimap, port labels, dashes, snapping, reporting), Wires (style/animation), Auto Layout (direction/spacing).',
                          },
                        ].map((panel) => (
                          <div key={panel.title} className="rounded-md border border-[#2a2a28] bg-[#161614] p-4">
                            <h3 className="text-xs font-semibold text-[#d4d2cc]">{panel.title}</h3>
                            <p className="mt-1 text-xs text-[#888780]">{panel.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Status & Notifications</h2>
                      <div className="mt-4 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-md border border-[#2a2a28] bg-[#161614] p-4">
                          <h3 className="text-xs font-semibold text-[#d4d2cc]">Status Bar</h3>
                          <p className="mt-1 text-xs text-[#888780]">Total/alive/ghost node counts, wire count, zoom %, selection count.</p>
                        </div>
                        <div className="rounded-md border border-[#2a2a28] bg-[#161614] p-4">
                          <h3 className="text-xs font-semibold text-[#d4d2cc]">Notifications</h3>
                          <p className="mt-1 text-xs text-[#888780]">Floating alert cards at 4 severity levels with action buttons, auto-dismiss, duplicate prevention.</p>
                        </div>
                        <div className="rounded-md border border-[#2a2a28] bg-[#161614] p-4">
                          <h3 className="text-xs font-semibold text-[#d4d2cc]">Minimap</h3>
                          <p className="mt-1 text-xs text-[#888780]">Scaled-down graph overview with blue viewport rectangle. Click-drag to navigate.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Tutorial & Tips</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        8-step guided tour (Welcome, Node Palette, Canvas, Comp List, Connecting Nodes, Inspector, Report a Bug, Ready). Cycling tips every 20 seconds.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Sidebars</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Edge-zone hover handles for collapsing left/right panels with smooth animation. State persists across sessions.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Keyboard Shortcuts</h2>
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
                              { action: 'Duplicate', shortcut: 'Ctrl/Cmd + D' },
                              { action: 'Delete', shortcut: 'Delete / Backspace' },
                              { action: 'Close / Deselect', shortcut: 'Escape' },
                              { action: 'Picker Navigate', shortcut: 'Arrow Keys + Enter' },
                              { action: 'Pan Canvas', shortcut: 'Space + Drag' },
                              { action: 'Zoom', shortcut: 'Scroll Wheel' },
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
                  </div>
                )}

                {activeTab === 'ae-bridge' && (
                  <div className="space-y-10">
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Unified Bridge</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Single gateway handles all AE communication with automatic retries, large-command chunking, and 10s timeout. Nodes return command objects — they never touch AE.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Dispatcher</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        ~89 actions across 20+ handler files — layer creation (14 types), comp lifecycle, property read/write, effects, keyframes, track mattes, footage, project import/export, graph persistence.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Composition Control</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Create, delete, list, focus comps. Set dimensions, frame rate, duration, background color. Read project info.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Layer Tools</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        18 layer types — text, null, adjustment, shape, solid, camera, light, plus parametric shapes (rectangle, ellipse, star, squircle, gear, wave, flower, polygon). Parenting, order, rename, enable/disable, shy mode, delete, restamp.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Effects System</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Apply 460+ effects via match name, rename, reorder, enable/disable, set complex properties — all synchronized with AE. Value normalization (0–100 mapped to 0–1) handled in dispatcher, never in node definitions.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Keyframes & Media</h2>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-md border border-[#2a2a28] bg-[#161614] p-4">
                          <h3 className="text-xs font-semibold text-[#d4d2cc]">Keyframes</h3>
                          <p className="mt-1 text-xs text-[#888780]">Add/remove single or all keyframes, read times, read values + interpolation. Get/set playhead position. Batch operations across properties.</p>
                        </div>
                        <div className="rounded-md border border-[#2a2a28] bg-[#161614] p-4">
                          <h3 className="text-xs font-semibold text-[#d4d2cc]">Media Management</h3>
                          <p className="mt-1 text-xs text-[#888780]">Import footage, create placeholders, get paths, reload, replace, delete footage items.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Track Mattes</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Set/clear alpha and luma mattes with invert support. Dispatcher handles layer reordering so matte sits directly above target.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Schema Intelligence</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Introspects AE effect properties on first use — creates temp solid, walks property tree, removes temp. Caches to <code className="rounded border border-[#2a2a28] bg-[#161614] px-1 py-0.5 text-[11px]">effectSchemaCache.json</code>, diffs on AE version change, updates automatically.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Project Import</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Scan all comps, layers, effects, footage — convert to Procedia nodes with auto-layout and progress reporting. UUIDs stamped via path-driven layer model (layer.comment = wire UUID).
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Undo Groups & Timeline Sync</h2>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-md border border-[#4cbb6c]/30 bg-[#4cbb6c]/5 p-4">
                          <h3 className="text-xs font-semibold text-[#4cbb6c]">Undo Groups</h3>
                          <p className="mt-1 text-xs text-[#888780]">All AE operations wrapped in beginUndoGroup/endUndoGroup. Batch operations collapse into single undo steps — prevents double-undo problem.</p>
                        </div>
                        <div className="rounded-md border border-[#185FA5]/30 bg-[#185FA5]/5 p-4">
                          <h3 className="text-xs font-semibold text-[#185FA5]">Timeline Sync</h3>
                          <p className="mt-1 text-xs text-[#888780]">Adaptive polling (500ms active / 2000ms idle) detects external changes. Property synchronization polls AE for current values, detects changes via intelligent comparison, updates graph to reflect reality.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'node-library' && (
                  <div className="space-y-10">
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Layer Nodes</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Comp, layers, null, text, adjustment, shapes (rectangle, ellipse, star, squircle, gear, wave, flower), solid, camera, light, footage.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {['Comp', 'Layer', 'Null', 'Text', 'Adjustment', 'Shape', 'Solid', 'Camera', 'Light', 'Footage'].map((n) => (
                          <span key={n} className="rounded border border-[#534AB7]/30 bg-[#534AB7]/10 px-2 py-0.5 text-[10px] text-[#7B72D0]">{n}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Data Nodes</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Number, slider, checkbox, color, 2D point, angle, layer reference, image, text, gradient — for parameter control via data wires. Always alive, no AE footprint.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Utility Nodes</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Merge/Multimerge for compositing, Blending for non-destructive blend modes (18 modes), Matte Alpha/Luma for track mattes with foreground/matte/combined outputs.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Effect Library</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        460+ effects across 22 categories — auto-created from AE schema on demand via <code className="rounded border border-[#2a2a28] bg-[#161614] px-1 py-0.5 text-[11px]">effectNodeFactory.js</code>. Obsolete types visually dimmed.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {['3D Channel', 'Audio', 'Blur & Sharpen', 'Channel', 'Color Correction', 'Distort', 'Expression Controls', 'Generate', 'Keying', 'Matte', 'Noise & Grain', 'Perspective', 'Simulation', 'Stylize', 'Text', 'Time', 'Transition', 'Utility'].map((cat) => (
                          <span key={cat} className="rounded border border-[#2a2a28] bg-[#1a1a18] px-2 py-0.5 text-[10px] text-[#B4B2A9]">{cat}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">5 Node Kinds</h2>
                      <div className="mt-4 overflow-hidden rounded-md border border-[#2a2a28]">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b border-[#2a2a28] bg-[#161614]">
                              <th className="px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]">Kind</th>
                              <th className="px-4 py-2.5 text-left text-[11px] font-medium text-[#888780]">Behavior</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { kind: 'Affected', behavior: 'Creates AE layers' },
                              { kind: 'Effector', behavior: 'Modifies existing layers via dynamic schema' },
                              { kind: 'Data', behavior: 'Pure values, no AE footprint' },
                              { kind: 'Blending', behavior: 'Blend mode control' },
                              { kind: 'Matte', behavior: 'Track mattes' },
                            ].map((row) => (
                              <tr key={row.kind} className="border-b border-[#1a1a18]">
                                <td className="px-4 py-2 text-xs text-[#B4B2A9]">{row.kind}</td>
                                <td className="px-4 py-2 text-xs text-[#888780]">{row.behavior}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Each has distinct lifecycle and port contracts. Port system: output, main input, secondary input, parent ports. Secondary inputs auto-generated for effect parameters with compatibility filtering and capacity controls.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Three Wire Types</h2>
                      <div className="mt-4 grid gap-4 sm:grid-cols-3">
                        {[
                          { title: 'Layer Wires', desc: 'AE layer state propagation', color: '#4cbb6c' },
                          { title: 'Data Wires', desc: 'Parameter value connections', color: '#888780' },
                          { title: 'Parent Wires', desc: 'Layer parenting hierarchy', color: '#E07B39' },
                        ].map((w) => (
                          <div key={w.title} className="rounded-md border border-[#2a2a28] bg-[#161614] p-4">
                            <div className="flex items-center gap-2">
                              <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: w.color }} />
                              <h3 className="text-xs font-semibold text-[#d4d2cc]">{w.title}</h3>
                            </div>
                            <p className="mt-1 text-xs text-[#888780]">{w.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'persistence' && (
                  <div className="space-y-10">
                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Native AE Save</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Graph persisted directly inside the AE project file via text layers in the Reserved Comp. Written on save, quit, and panel unload.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">File-Based Backup</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Save/load <code className="rounded border border-[#2a2a28] bg-[#161614] px-1 py-0.5 text-[11px]">.procedia.json</code> files via native dialogs. Debounced writing prevents performance issues.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Auto-Save</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Graph auto-saved to AE on every change with writing-lock protection and conflict prevention.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Personal Settings</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Minimap visibility, wire style, animated dashes, grid snapping, layout direction/spacing, reporting, port labels — persisted across sessions.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Project Templates</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Pre-built templates with reserved comps, footage nodes, shapes, and track mattes for quick starts.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">External Change Detection</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Polls AE for layer/effect/composition deletions — marks nodes as errored with smart notifications and action buttons (recreate or remove).
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#d4d2cc]">Testing</h2>
                      <p className="mt-3 text-sm leading-7 text-[#888780]">
                        Vitest with jsdom. Tests cover JSX dispatcher, UUID generation, cycle detection, keyframe state management with CSInterface mocking.
                      </p>
                      <div className="mt-4 rounded-md border border-[#4cbb6c]/30 bg-[#4cbb6c]/5 p-4">
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-[#4cbb6c]" />
                          <p className="text-sm font-semibold text-[#4cbb6c]">Production Ready</p>
                        </div>
                        <p className="mt-1 text-xs text-[#888780]">Procedia transforms complex After Effects workflows into intuitive visual interactions. From simple layer creation to complex effect chains, every feature is designed to maximize your creativity while minimizing technical barriers.</p>
                      </div>
                    </div>
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
