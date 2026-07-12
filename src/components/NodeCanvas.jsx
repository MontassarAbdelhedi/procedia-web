import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 60
const CONNECTION_DISTANCE = 150
const MOUSE_RADIUS = 200

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return { r, g, b }
}

const COLORS = [
  '#4cbb6c', // green (layer ports)
  '#534AB7', // purple (core)
  '#E07B39', // orange (parent)
  '#D4AC0D', // gold (data)
  '#185FA5', // blue (layers)
  '#1ABC9C', // teal (shapes)
]

export function NodeCanvas({ className }) {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef([])
  const animFrameRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    function resize() {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    // Initialize particles
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.5,
        color,
        rgb: hexToRgb(color),
      }
    })

    function drawGrid() {
      const spacing = 40
      ctx.fillStyle = 'rgba(34, 34, 32, 0.5)'
      for (let x = 0; x < window.innerWidth; x += spacing) {
        for (let y = 0; y < window.innerHeight; y += spacing) {
          ctx.beginPath()
          ctx.arc(x, y, 0.8, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // Background
      ctx.fillStyle = '#111110'
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      drawGrid()

      const particles = particlesRef.current
      const mouse = mouseRef.current

      // Update positions
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        // Mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.02
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }

        // Damping
        p.vx *= 0.999
        p.vy *= 0.999

        // Wrap
        if (p.x < -10) p.x = window.innerWidth + 10
        if (p.x > window.innerWidth + 10) p.x = -10
        if (p.y < -10) p.y = window.innerHeight + 10
        if (p.y > window.innerHeight + 10) p.y = -10
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.3
            ctx.strokeStyle = `rgba(83, 74, 183, ${opacity})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        // Glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4)
        gradient.addColorStop(0, `rgba(${p.rgb.r}, ${p.rgb.g}, ${p.rgb.b}, 0.15)`)
        gradient.addColorStop(1, `rgba(${p.rgb.r}, ${p.rgb.g}, ${p.rgb.b}, 0)`)
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2)
        ctx.fill()

        // Core
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Mouse glow
      if (mouse.x > 0 && mouse.y > 0) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, MOUSE_RADIUS)
        grad.addColorStop(0, 'rgba(83, 74, 183, 0.06)')
        grad.addColorStop(1, 'rgba(83, 74, 183, 0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, MOUSE_RADIUS, 0, Math.PI * 2)
        ctx.fill()
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    function handleMouse(e) {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    function handleMouseLeave() {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    window.addEventListener('mousemove', handleMouse)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
