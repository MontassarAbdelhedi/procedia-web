import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Image } from 'lucide-react'
import { Container, Section, SectionHeader } from './Layout'

// Set each gif to its public asset URL when the recordings are ready.
const tutorials = [
  { title: 'Drag & Drop', description: "Drag a node from the sidebar onto the canvas to start building.", gif: '/how-to/drag-and-drop.gif?v=2' },
  { title: 'Wire / Unwire', description: "Connect node ports to build your flow, disconnect with double-click.", gif: '/how-to/wire-unwire.gif?v=2' },
  { title: 'Multiwiring', description: "Connect several nodes at once to build your composition.", gif: '/how-to/multiwire.gif?v=2' },
  { title: 'Parenting', description: "Link a child to a parent so it follows the parent's transforms.", gif: '/how-to/parenting.gif?v=2' },
  { title: 'Isolate Compositions', description: "Focus on one composition and the nodes connected to it. Drop a new node for automatic wiring.", gif: '/how-to/isolate-comp.gif?v=2' },
  { title: 'Drop Node Midwire', description: "Drop a node onto an existing wire to insert it into the flow.", gif: null },
]

export function HowTo() {
  const [active, setActive] = useState(0)
  const pointerStart = useRef(null)
  const reduceMotion = useReducedMotion()
  const move = (direction) => setActive((current) => (current + direction + tutorials.length) % tutorials.length)
  const controlClass = 'flex h-11 w-11 items-center justify-center rounded-full border border-[#2a2a28] bg-[#161614] text-[#d4d2cc] transition-colors hover:border-[#06d6a0]/50 hover:text-[#06d6a0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06d6a0]'

  return (
    <Section id="how-to" className="overflow-hidden">
      <Container>
        <SectionHeader
          title="How to"
          titleGradient="Procedia"
          description="Get familiar with the essentials, one gesture at a time."
        />

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Procedia tutorials"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              event.preventDefault()
              move(event.key === 'ArrowLeft' ? -1 : 1)
            }
          }}
          className="mt-12 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06d6a0] sm:mt-16"
        >
          <div
            className="relative grid touch-pan-y select-none items-center py-8 [perspective:1200px] sm:py-12"
            onPointerDown={(event) => {
              if (!event.isPrimary || event.button !== 0) return
              pointerStart.current = { x: event.clientX, y: event.clientY }
              event.currentTarget.setPointerCapture(event.pointerId)
            }}
            onPointerUp={(event) => {
              const start = pointerStart.current
              pointerStart.current = null
              if (!start) return
              const dx = event.clientX - start.x
              const dy = event.clientY - start.y
              if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1)
            }}
            onPointerCancel={() => { pointerStart.current = null }}
          >
            {tutorials.map((tutorial, index) => {
              let offset = (index - active + tutorials.length) % tutorials.length
              if (offset > tutorials.length / 2) offset -= tutorials.length
              const selected = offset === 0
              return (
                <motion.article
                  key={tutorial.title}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${tutorials.length}: ${tutorial.title}`}
                  aria-hidden={!selected}
                  initial={false}
                  animate={{
                    x: `${offset * 86}%`,
                    scale: selected ? 1 : 0.86,
                    rotateY: reduceMotion ? 0 : offset === 0 ? 0 : offset > 0 ? -12 : 12,
                    opacity: selected ? 1 : Math.abs(offset) === 1 ? 0.35 : 0,
                    filter: selected ? 'blur(0px)' : 'blur(2px)',
                  }}
                  transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 210, damping: 28 }}
                  style={{ gridArea: '1 / 1', zIndex: tutorials.length - Math.abs(offset), pointerEvents: selected ? 'auto' : 'none' }}
                  className={`mx-auto w-[84%] max-w-2xl overflow-hidden rounded-xl border bg-[#161614] sm:w-[70%] ${selected ? 'border-[#06d6a0]/40' : 'border-[#2a2a28]'}`}
                >
                  <div className="flex items-center gap-3 border-b border-[#2a2a28] px-4 py-4 sm:px-5">
                    <span className="font-mono text-xs text-[#06d6a0]" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-[#d4d2cc]">{tutorial.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-[#888780]">{tutorial.description}</p>
                    </div>
                    <span aria-hidden="true" className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-[#06d6a0]" />
                  </div>
                  {tutorial.gif ? (
                    <img
                      src={tutorial.gif}
                      alt={`${tutorial.title} demonstration in Procedia`}
                      loading="lazy"
                      draggable={false}
                      className="block aspect-video w-full object-cover"
                    />
                  ) : (
                    <div
                      role="img"
                      aria-label={`${tutorial.title}: GIF coming soon`}
                      className="flex aspect-video flex-col items-center justify-center gap-4 bg-[#111110] bg-[radial-gradient(#2a2a28_1px,transparent_1px)] [background-size:20px_20px]"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#2a2a28] bg-[#161614]">
                        <Image className="h-6 w-6 text-[#06d6a0]/70" aria-hidden="true" />
                      </div>
                      <span className="text-xs text-[#888780]">GIF coming soon</span>
                    </div>
                  )}
                </motion.article>
              )
            })}
          </div>

          <div className="mt-3 flex items-center justify-center gap-5 sm:gap-8">
            <button type="button" aria-label="Previous tutorial" onClick={() => move(-1)} className={controlClass}>
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="flex items-center" aria-label="Choose a tutorial">
              {tutorials.map((tutorial, index) => (
                <button
                  key={tutorial.title}
                  type="button"
                  aria-label={`Show ${tutorial.title}`}
                  aria-current={index === active ? 'true' : undefined}
                  onClick={() => setActive(index)}
                  className="flex h-11 w-7 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-[#06d6a0] sm:w-8"
                >
                  <span className={`h-1.5 rounded-full transition-all motion-reduce:transition-none ${index === active ? 'w-6 bg-[#06d6a0]' : 'w-1.5 bg-[#55554f]'}`} />
                </button>
              ))}
            </div>
            <button type="button" aria-label="Next tutorial" onClick={() => move(1)} className={controlClass}>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <p aria-live="polite" aria-atomic="true" className="sr-only">
            {String(active + 1).padStart(2, '0')} / {String(tutorials.length).padStart(2, '0')} — {tutorials[active].title}
          </p>
        </div>
      </Container>
    </Section>
  )
}
