import { Container } from './Layout'
import logo from '../assets/procedia-light-logo.svg'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Documentation'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export function Footer() {
  return (
    <footer className="border-t border-[#2a2a28] bg-[#111110]">
      <Container>
        <div className="py-12 sm:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-2">
                <img src={logo} alt="Procedia" className="h-7 w-auto" />
              </a>
              <p className="mt-3 max-w-xs text-xs leading-5 text-[#888780]">
                Deliver Interfaces Faster and Seamless with AI
              </p>
              <p className="mt-3 text-[10px] text-[#5F5E5A]">
                Copyright 2025. All right reserved
              </p>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-semibold text-[#d4d2cc]">{category}</h4>
                <ul className="mt-3 space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-xs text-[#888780] transition-colors hover:text-[#d4d2cc]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
