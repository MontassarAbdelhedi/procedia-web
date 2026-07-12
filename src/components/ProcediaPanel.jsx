import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Search, ChevronRight, MousePointer } from 'lucide-react'
import { cn } from '../lib/utils'

const CATEGORIES = [
  {
    name: 'Core',
    color: '#534AB7',
    nodes: ['Composition', 'Null Object', 'Adjustment Layer', 'Camera'],
  },
  {
    name: 'Effects',
    color: '#27AE60',
    nodes: ['Gaussian Blur', 'Glow', 'Sharpen', 'Noise', 'Turbulent Displace'],
  },
  {
    name: 'Color',
    color: '#D4AC0D',
    nodes: ['Curves', 'Levels', 'Hue/Sat', 'Color Balance'],
  },
  {
    name: 'Distort',
    color: '#1ABC9C',
    nodes: ['Warp', 'Liquify', 'Mesh Warp', 'Polar Coordinates'],
  },
]

const INITIAL_NODES = [
  { id: 1, type: 'Composition', x: 60, y: 40, category: 'Core', color: '#534AB7', params: { name: 'Main Comp', resolution: '1920x1080', fps: '30' } },
  { id: 2, type: 'Gaussian Blur', x: 280, y: 30, category: 'Effects', color: '#27AE60', params: { blurriness: '25', quality: '3', repeat: 'On' } },
  { id: 3, type: 'Glow', x: 280, y: 170, category: 'Effects', color: '#27AE60', params: { threshold: '60%', radius: '50', intensity: '1.5' } },
  { id: 4, type: 'Curves', x: 500, y: 90, category: 'Color', color: '#D4AC0D', params: { channel: 'RGB', preset: 'Custom' } },
  { id: 5, type: 'Warp', x: 500, y: 230, category: 'Distort', color: '#1ABC9C', params: { style: 'Arc', bend: '50%' } },
]

const WIRES = [
  { from: 1, to: 2, color: '#534AB7' },
  { from: 1, to: 3, color: '#534AB7' },
  { from: 2, to: 4, color: '#27AE60' },
  { from: 3, to: 5, color: '#27AE60' },
]

function ProcediaNode({ node, isSelected, onSelect, onMouseDown }) {
  return (
    <div
      className={cn(
        'absolute select-none cursor-grab active:cursor-grabbing',
        'rounded-lg border transition-all duration-150',
        isSelected
          ? 'border-[#534AB7] shadow-[0_0_0_1px_#534AB7,0_2px_12px_rgba(0,0,0,0.55)]'
          : 'border-[#2a2a28] hover:border-[#3a3a38]',
        'bg-[#1a1a18] shadow-[0_2px_12px_rgba(0,0,0,0.55)]'
      )}
      style={{ left: node.x, top: node.y, width: 180 }}
      onMouseDown={(e) => { e.stopPropagation(); onSelect(node.id); onMouseDown(e, node.id) }}
      onClick={() => onSelect(node.id)}
    >
      {/* Port - input */}
      <div className="absolute -left-[5px] top-4 z-10">
        <div className="h-[10px] w-[10px] rounded-full border-2 border-[#161614]" style={{ background: node.color }} />
      </div>

      {/* Port - output */}
      <div className="absolute -right-[5px] top-4 z-10">
        <div className="h-[10px] w-[10px] rounded-full border-2 border-[#161614]" style={{ background: node.color }} />
      </div>

      {/* Header */}
      <div className="flex items-center gap-1.5 rounded-t-[7px] bg-[#161614] px-2.5 py-[7px]">
        <div className="h-4 w-[3px] rounded-sm flex-shrink-0" style={{ background: node.color }} />
        <span className="flex-1 truncate text-[11px] font-medium text-[#d4d2cc]">{node.type}</span>
        <div className="h-[5px] w-[5px] rounded-full bg-[#4cbb6c]" />
      </div>

      {/* Params */}
      <div className="px-2.5 py-1.5 space-y-[3px]">
        {Object.entries(node.params).slice(0, 2).map(([key, val]) => (
          <div key={key} className="flex items-center gap-1.5 text-[10px]">
            <span className="text-[#5F5E5A] min-w-[48px]">{key}</span>
            <span className="text-[#888780] truncate">{val}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function WireSvg({ nodes }) {
  return (
    <svg className="absolute inset-0 h-full w-full pointer-events-none z-[4]">
      {WIRES.map((wire, i) => {
        const fromNode = nodes.find((n) => n.id === wire.from)
        const toNode = nodes.find((n) => n.id === wire.to)
        if (!fromNode || !toNode) return null

        const x1 = fromNode.x + 180
        const y1 = fromNode.y + 16
        const x2 = toNode.x
        const y2 = toNode.y + 16
        const cx1 = x1 + (x2 - x1) * 0.4
        const cx2 = x2 - (x2 - x1) * 0.4

        return (
          <motion.path
            key={i}
            d={`M ${x1} ${y1} C ${cx1} ${y1}, ${cx2} ${y2}, ${x2} ${y2}`}
            stroke={wire.color}
            strokeWidth="1.5"
            strokeOpacity="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: i * 0.2 }}
          />
        )
      })}
    </svg>
  )
}

export function ProcediaPanel() {
  const [selectedNode, setSelectedNode] = useState(1)
  const [nodes, setNodes] = useState(INITIAL_NODES)
  const [openCategories, setOpenCategories] = useState({ Core: true, Effects: true, Color: false, Distort: false })
  const [search, setSearch] = useState('')
  const dragRef = useRef({ dragging: false, nodeId: null, offsetX: 0, offsetY: 0 })
  const panelRef = useRef(null)

  const selected = nodes.find((n) => n.id === selectedNode)

  const toggleCategory = (cat) => {
    setOpenCategories((prev) => ({ ...prev, [cat]: !prev[cat] }))
  }

  const handleMouseDown = useCallback((e, nodeId) => {
    const node = nodes.find((n) => n.id === nodeId)
    if (!node) return
    const rect = panelRef.current.getBoundingClientRect()
    dragRef.current = {
      dragging: true,
      nodeId,
      offsetX: e.clientX - rect.left - node.x,
      offsetY: e.clientY - rect.top - node.y,
    }
  }, [nodes])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragRef.current.dragging) return
      const rect = panelRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left - dragRef.current.offsetX
      const y = e.clientY - rect.top - dragRef.current.offsetY
      setNodes((prev) =>
        prev.map((n) => (n.id === dragRef.current.nodeId ? { ...n, x: Math.max(0, x), y: Math.max(0, y) } : n))
      )
    }
    const handleMouseUp = () => { dragRef.current.dragging = false }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  const filteredCategories = CATEGORIES.map((cat) => ({
    ...cat,
    nodes: cat.nodes.filter((n) => n.toLowerCase().includes(search.toLowerCase())),
  })).filter((cat) => cat.nodes.length > 0)

  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-[#2a2a28] bg-[#111110] shadow-2xl shadow-black/50">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-[#1e1e1c] bg-[#161614] px-3 py-2">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#e05555]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#D4AC0D]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#4cbb6c]/80" />
        </div>
        <span className="ml-2 text-[10px] text-[#5F5E5A]">Procedia v2.0 — After Effects</span>
      </div>

      <div className="flex h-[380px]">
        {/* Left sidebar — Node list */}
        <div className="w-[180px] flex-shrink-0 border-r border-[#1e1e1c] bg-[rgba(15,15,13,0.9)] flex flex-col">
          {/* Search */}
          <div className="flex items-center border-b border-[#1e1e1c] px-2.5 py-1.5">
            <Search className="mr-1.5 h-3 w-3 text-[#5F5E5A]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search nodes..."
              className="w-full bg-transparent text-[11px] text-[#d4d2cc] placeholder-[#444441] outline-none caret-[#534AB7]"
            />
          </div>

          {/* Categories */}
          <div className="flex-1 overflow-y-auto py-1">
            {filteredCategories.map((cat) => (
              <div key={cat.name}>
                <button
                  onClick={() => toggleCategory(cat.name)}
                  className="flex w-full items-center gap-1 px-2.5 py-1.5 hover:bg-white/[0.02]"
                >
                  <div className="h-3.5 w-[3px] rounded-sm" style={{ background: cat.color }} />
                  <span className="flex-1 text-left text-[10px] font-semibold uppercase tracking-wider text-[#5F5E5A]">
                    {cat.name}
                  </span>
                  <ChevronRight
                    className={cn(
                      'h-3 w-3 text-[#5F5E5A] transition-transform',
                      openCategories[cat.name] && 'rotate-90'
                    )}
                  />
                </button>
                {openCategories[cat.name] && (
                  <div className="pb-1">
                    {cat.nodes.map((node) => (
                      <div
                        key={node}
                        className="flex cursor-grab items-center gap-2 px-5 py-1 hover:bg-white/[0.03] active:cursor-grabbing"
                      >
                        <div className="h-[5px] w-[5px] rounded-full" style={{ background: cat.color }} />
                        <span className="text-[11px] text-[#888780] hover:text-[#d4d2cc]">{node}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Canvas */}
        <div
          ref={panelRef}
          className="relative flex-1 overflow-hidden bg-[#111110]"
          style={{
            backgroundImage: 'radial-gradient(circle, #222220 0.8px, transparent 0.8px)',
            backgroundSize: '24px 24px',
          }}
          onClick={() => setSelectedNode(null)}
        >
          <WireSvg nodes={nodes} />
          {nodes.map((node) => (
            <ProcediaNode
              key={node.id}
              node={node}
              isSelected={selectedNode === node.id}
              onSelect={setSelectedNode}
              onMouseDown={handleMouseDown}
            />
          ))}

          {/* Minimap */}
          <div className="absolute bottom-2 right-2 h-[60px] w-[90px] rounded-md border border-[#2a2a28] bg-[#111116] p-1 opacity-60">
            {nodes.map((node) => (
              <div
                key={node.id}
                className="absolute h-1 w-1 rounded-full"
                style={{
                  background: node.color,
                  left: `${(node.x / 700) * 100}%`,
                  top: `${(node.y / 380) * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Right sidebar — Inspector */}
        <div className="w-[180px] flex-shrink-0 border-l border-[#1e1e1c] bg-[rgba(15,15,13,0.9)] flex flex-col">
          {selected ? (
            <>
              {/* Inspector header */}
              <div className="flex items-center justify-between border-b border-[#1e1e1c] px-3 py-2">
                <span className="text-[12px] font-medium text-[#d4d2cc] truncate">{selected.type}</span>
                <div className="flex items-center gap-1 rounded-sm border border-[#1e1e1c] bg-white/[0.03] px-1.5 py-0.5">
                  <div className="h-[4px] w-[4px] rounded-full bg-[#4cbb6c]" />
                  <span className="text-[9px] text-[#5F5E5A]">active</span>
                </div>
              </div>

              {/* Params */}
              <div className="flex-1 overflow-y-auto px-3 py-2">
                <div className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-[#444441]">
                  Properties
                </div>
                {Object.entries(selected.params).map(([key, val]) => (
                  <div key={key} className="flex items-center gap-2 py-1.5">
                    <span className="flex-1 text-[11px] text-[#5F5E5A]">{key}</span>
                    <span className="rounded-sm border border-[#1e1e1c] bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-mono text-[#888780]">
                      {val}
                    </span>
                  </div>
                ))}

                <div className="mt-3 mb-2 text-[9px] font-semibold uppercase tracking-wider text-[#444441]">
                  Info
                </div>
                <div className="flex items-center gap-2 py-1.5">
                  <span className="flex-1 text-[11px] text-[#5F5E5A]">category</span>
                  <span className="text-[10px] text-[#888780]">{selected.category}</span>
                </div>
                <div className="flex items-center gap-2 py-1.5">
                  <span className="flex-1 text-[11px] text-[#5F5E5A]">id</span>
                  <span className="text-[10px] font-mono text-[#888780]">#{selected.id}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="border-t border-[#1e1e1c] px-3 py-2">
                <button className="w-full rounded-md border border-[#2a2a28] bg-[#2a2a28] py-1.5 text-[10px] text-[#d4d2cc] transition-colors hover:bg-[#3a3a38]">
                  Create Layer
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center gap-1.5">
              <MousePointer className="h-5 w-5 text-[#333331]" />
              <span className="text-[10px] text-[#333331]">Select a node</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
