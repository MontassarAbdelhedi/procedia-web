import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { Container } from './Layout'
import logo from '../assets/procedia-light-logo.svg'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Documentation', href: '/docs' },
]

export function Navbar({ className }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50', className)}>
      <div className="glass-strong border-b border-[#2a2a28]">
        <Container>
          <nav className="flex h-14 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Procedia" className="h-7 w-auto" />
            </Link>

            <div className="hidden md:flex md:items-center md:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-xs text-[#888780] transition-colors hover:text-[#d4d2cc]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex md:items-center md:gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 rounded-md bg-[#06d6a0] px-3.5 py-1.5 text-xs font-medium text-[#222220] transition-all hover:bg-[#05b98a] hover:shadow-[0_0_15px_rgba(6,214,160,0.3)]"
              >
                Get Early Access
              </Link>
            </div>

            <button
              className="inline-flex items-center justify-center rounded-md p-1.5 text-[#888780] hover:text-[#d4d2cc] md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </Container>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-strong border-b border-[#2a2a28] md:hidden"
          >
            <Container className="py-3">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-xs text-[#888780] transition-colors hover:text-[#d4d2cc]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <hr className="border-[#2a2a28]" />
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#06d6a0] px-3.5 py-1.5 text-xs font-medium text-[#222220]"
                >
                  Get Early Access
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
