import { useRef, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Container } from './Layout'
import { NodeCard, NodeParam } from './NodeCard'

const COLORS = { core: '#534AB7', effects: '#27AE60', data: '#D4AC0D', shapes: '#1ABC9C', layers: '#185FA5' }
const ALL_TITLES = [
  'Composition', 'Gaussian Blur', 'Glow', 'Curves', 'Warp', 'Sharpen', 'Noise',
  'Hue/Sat', 'Levels', 'Turbulent', 'Mesh Warp', 'Polar Coords', 'Color Balance',
  'Null Object', 'Camera', 'Solid', 'Adjustment', 'Light', 'Shadow', 'Mask',
]

function seededRandom(seed) {
  let s = seed
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646 }
}

function generateNodes() {
  const rand = seededRandom(42)
  const catKeys = Object.keys(COLORS)
  const nodes = []
  const layers = [
    { count: 16, blur: 'blur(18px)', opacityRange: [0.06, 0.12], z: 0 },
    { count: 12, blur: 'blur(10px)', opacityRange: [0.1, 0.2], z: 1 },
    { count: 10, blur: 'blur(5px)', opacityRange: [0.15, 0.27], z: 2 },
    { count: 8, blur: 'blur(2px)', opacityRange: [0.2, 0.35], z: 3 },
    { count: 5, blur: 'blur(0.5px)', opacityRange: [0.25, 0.4], z: 4 },
  ]
  for (const layer of layers) {
    for (let i = 0; i < layer.count; i++) {
      const cat = catKeys[Math.floor(rand() * catKeys.length)]
      nodes.push({
        x: `${rand() * 110 - 5}%`, y: `${rand() * 110 - 5}%`,
        w: 130 + rand() * 50,
        title: ALL_TITLES[Math.floor(rand() * ALL_TITLES.length)],
        color: COLORS[cat], blur: layer.blur,
        opacity: layer.opacityRange[0] + rand() * (layer.opacityRange[1] - layer.opacityRange[0]),
        z: layer.z, delay: 0.2 + rand() * 0.8,
      })
    }
  }
  return nodes
}
const bgNodes = generateNodes()

function generateDots() {
  const rand = seededRandom(99)
  const catColors = Object.values(COLORS)
  return Array.from({ length: 50 }, () => ({
    x: `${rand() * 100}%`, y: `${rand() * 100}%`,
    color: catColors[Math.floor(rand() * catColors.length)],
    size: 2 + rand() * 4, blur: `blur(${rand() * 3}px)`,
    opacity: 0.15 + rand() * 0.25,
  }))
}
const bgDots = generateDots()

function FloatingNode({ node }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: node.opacity, y: 0 }}
      transition={{ duration: 0.7, delay: node.delay }}
      className="absolute pointer-events-none"
      style={{ left: node.x, top: node.y, width: node.w, filter: node.blur, zIndex: node.z }}>
      <div className="rounded-lg border border-[#2a2a28]/50 bg-[#1a1a18]/70 shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-1.5 rounded-t-[7px] bg-[#161614]/70 px-2 py-[5px]">
          <div className="h-3 w-[3px] rounded-sm" style={{ background: node.color }} />
          <span className="text-[9px] font-medium text-[#d4d2cc]/60">{node.title}</span>
        </div>
        <div className="px-2 py-1 space-y-[2px]">
          <div className="flex gap-1"><div className="h-1 w-10 rounded bg-white/[0.05]" /><div className="h-1 w-6 rounded bg-white/[0.03]" /></div>
          <div className="flex gap-1"><div className="h-1 w-8 rounded bg-white/[0.04]" /><div className="h-1 w-4 rounded bg-white/[0.02]" /></div>
        </div>
      </div>
    </motion.div>
  )
}

function PortDotBg({ x, y, color, size = 4, blur = 'blur(0px)', opacity = 0.3 }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity, scale: 1 }}
      transition={{ duration: 0.5, delay: Math.random() * 1.5 }}
      className="absolute rounded-full pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, background: color, filter: blur, zIndex: 5 }} />
  )
}

/* ─── Horizontal Node Graph ─── */

const NODE_DEFS = [
  { id: 'text', title: 'Text', cat: 'core', xPct: 0, yPct: 0.35, params: [
    { label: 'source', value: 'hello.aep', port: true, portColor: '#534AB7' },
    { label: 'layers', value: '3 layers' },
  ]},
  { id: 'preset', title: 'Animation Preset', cat: 'effects', xPct: 0.26, yPct: 0, params: [
    { label: 'preset', value: 'Fade In', port: true, portColor: '#27AE60' },
    { label: 'duration', value: '0.5s', wired: true },
  ]},
  { id: 'field', title: 'Field', cat: 'data', xPct: 0.26, yPct: 0.72, params: [
    { label: 'type', value: 'Particle', port: true, portColor: '#D4AC0D' },
    { label: 'count', value: '1000' },
  ]},
  { id: 'grid', title: 'Grid', cat: 'shapes', xPct: 0.52, yPct: 0.18, params: [
    { label: 'input_a', value: 'from Preset', port: true, portColor: '#27AE60', wired: true },
    { label: 'input_b', value: 'from Field', port: true, portColor: '#D4AC0D', wired: true },
    { label: 'cols', value: '4x4' },
  ]},
  { id: 'comp', title: 'Composition', cat: 'layers', xPct: 0.78, yPct: 0.18, params: [
    { label: 'output', value: 'from Grid', port: true, portColor: '#1ABC9C', wired: true },
    { label: 'resolution', value: '1920x1080' },
    { label: 'fps', value: '30' },
  ]},
]

// Ports connect at the header row (top ~16px of card)
const PORT_OFFSET_Y = 16

const WIRES = [
  { from: 'text', to: 'preset', fromSide: 'right', toSide: 'left', color: '#27AE60', delay: 0.6 },
  { from: 'preset', to: 'grid', fromSide: 'right', toSide: 'left', color: '#27AE60', delay: 0.9, toPortY: PORT_OFFSET_Y },
  { from: 'field', to: 'grid', fromSide: 'right', toSide: 'left', color: '#D4AC0D', delay: 1.0, toPortY: PORT_OFFSET_Y + 22 },
  { from: 'grid', to: 'comp', fromSide: 'right', toSide: 'left', color: '#1ABC9C', delay: 1.3 },
]

function getPortPos(el, containerEl, side, portYOffset) {
  if (!el || !containerEl) return { x: 0, y: 0 }
  const r = el.getBoundingClientRect()
  const c = containerEl.getBoundingClientRect()
  const nodeTop = r.top - c.top
  const nodeLeft = r.left - c.left
  const nodeW = r.width
  const nodeH = r.height
  const headerY = nodeTop + PORT_OFFSET_Y

  switch (side) {
    case 'left': return { x: nodeLeft - 6, y: headerY + (portYOffset || 0) }
    case 'right': return { x: nodeLeft + nodeW + 6, y: headerY + (portYOffset || 0) }
    case 'top': return { x: nodeLeft + nodeW / 2, y: nodeTop - 5 }
    case 'bottom': return { x: nodeLeft + nodeW / 2, y: nodeTop + nodeH + 5 }
    default: return { x: nodeLeft + nodeW / 2, y: headerY }
  }
}

function makeCurve(from, to) {
  const dx = Math.abs(to.x - from.x) * 0.5
  const offsets = {
    right: (d) => ({ x: d, y: 0 }), left: (d) => ({ x: -d, y: 0 }),
    bottom: (d) => ({ x: 0, y: d }), top: (d) => ({ x: 0, y: -d }),
  }
  const o1 = offsets[from.side](dx)
  const o2 = offsets[to.side](dx)
  return `M ${from.x} ${from.y} C ${from.x + o1.x} ${from.y + o1.y}, ${to.x + o2.x} ${to.y + o2.y}, ${to.x} ${to.y}`
}

function NodeGraph() {
  const wrapRef = useRef(null)
  const nodeEls = useRef({})
  const [paths, setPaths] = useState([])

  const measure = useCallback(() => {
    if (!wrapRef.current) return
    setPaths(WIRES.map((w) => {
      const fe = nodeEls.current[w.from]
      const te = nodeEls.current[w.to]
      if (!fe || !te) return null
      const f = getPortPos(fe, wrapRef.current, w.fromSide, 0)
      const t = getPortPos(te, wrapRef.current, w.toSide, w.toPortY || 0)
      return { ...w, d: makeCurve({ ...f, side: w.fromSide }, { ...t, side: w.toSide }) }
    }).filter(Boolean))
  }, [])

  useEffect(() => {
    const t = setTimeout(measure, 350)
    window.addEventListener('resize', measure)
    return () => { clearTimeout(t); window.removeEventListener('resize', measure) }
  }, [measure])

  return (
    <div ref={wrapRef} className="relative w-full" style={{ height: 300 }}>
      <svg className="absolute inset-0 h-full w-full pointer-events-none z-[4]" overflow="visible">
        {paths.map((w, i) => (
          <g key={i}>
            <motion.path d={w.d} stroke={w.color} strokeWidth="6" strokeOpacity="0.08" fill="none"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: w.delay }} />
            <motion.path d={w.d} stroke={w.color} strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="4 3" fill="none"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: w.delay }} />
            <motion.path d={w.d} stroke={w.color} strokeWidth="1.5" strokeOpacity="0.8" strokeDasharray="4 3" fill="none"
              initial={{ strokeDashoffset: 14 }} animate={{ strokeDashoffset: -14 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: w.delay }} />
          </g>
        ))}
      </svg>

      {NODE_DEFS.map((n, i) => (
        <motion.div key={n.id} ref={(el) => { nodeEls.current[n.id] = el }}
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.15 }}
          className="absolute w-48" style={{ left: `${n.xPct * 100}%`, top: `${n.yPct * 100}%` }}>
          <NodeCard title={n.title} category={n.cat} stateDot="alive">
            {n.params.map((p) => <NodeParam key={p.label} {...p} />)}
          </NodeCard>
        </motion.div>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(83,74,183,0.15)_0%,transparent_65%)]" />

      <div className="absolute inset-0 overflow-hidden">
        {bgNodes.map((n, i) => <FloatingNode key={`n-${i}`} node={n} />)}
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {bgDots.map((d, i) => <PortDotBg key={`d-${i}`} {...d} />)}
      </div>

      <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 1400 700" fill="none" preserveAspectRatio="xMidYMid slice">
        <motion.path d="M 0 120 C 200 120, 350 280, 700 280 C 1050 280, 1200 120, 1400 120" stroke="#534AB7" strokeWidth="1" strokeOpacity="0.07" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, delay: 0.2 }} />
        <motion.path d="M 0 350 C 180 350, 320 180, 560 180 C 800 180, 940 350, 1200 350" stroke="#4cbb6c" strokeWidth="1" strokeOpacity="0.06" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4.5, delay: 0.4 }} />
        <motion.path d="M 0 550 C 250 550, 400 350, 700 350 C 1000 350, 1150 550, 1400 550" stroke="#E07B39" strokeWidth="0.8" strokeOpacity="0.05" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5, delay: 0.6 }} />
        <motion.path d="M 300 0 C 300 120, 500 250, 700 250 C 900 250, 1100 120, 1100 0" stroke="#185FA5" strokeWidth="0.8" strokeOpacity="0.04" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5, delay: 0.8 }} />
        <motion.path d="M 0 80 C 350 80, 500 420, 800 420 C 1100 420, 1200 80, 1400 80" stroke="#D4AC0D" strokeWidth="0.6" strokeOpacity="0.04" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5.5, delay: 1 }} />
        <motion.path d="M 100 0 C 100 200, 300 400, 600 400 C 900 400, 1100 200, 1300 0" stroke="#534AB7" strokeWidth="0.5" strokeOpacity="0.03" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 6, delay: 1.4 }} />
      </svg>

      <Container className="relative z-10">
        {/* Centered text */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-[#534AB7]/20 bg-[#534AB7]/10 px-3 py-1.5 text-xs text-[#7B72D0]">
              <Sparkles className="h-3.5 w-3.5" />
              Procedural Motion Graphics
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-[#d4d2cc] sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#534AB7] via-[#7B72D0] to-[#4cbb6c] bg-clip-text text-transparent">Node-Based</span>{' '}
            Graph Panel for After Effects
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#888780]">
            Turn Adobe After Effects into a visual, node-based workspace where complex projects
            stay organized, scalable, and easy to understand.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="#" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#534AB7] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#6358C7] hover:shadow-[0_0_20px_rgba(83,74,183,0.4)]">
              Try Procedia <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#2a2a28] bg-[#1a1a18] px-5 py-2.5 text-sm font-semibold text-[#d4d2cc] transition-all hover:border-[#3a3a38] hover:bg-[#222220]">
              Watch Demo
            </a>
          </motion.div>
        </div>

        {/* Node graph below CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-16 max-w-4xl">
          <NodeGraph />
        </motion.div>
      </Container>
    </section>
  )
}
