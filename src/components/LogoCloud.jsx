import { Container, Section } from './Layout'

const logos = [
  { name: 'Webflow', icon: 'W' },
  { name: 'Codot', icon: 'C' },
  { name: 'OpenAI', icon: 'O' },
  { name: 'HueDot', icon: 'H' },
  { name: 'Deepset', icon: 'D' },
  { name: 'Framer', icon: 'F' },
]

export function LogoCloud() {
  return (
    <Section className="py-16 sm:py-20">
      <Container>
        <p className="text-center text-xs text-[#5F5E5A]">
          Engineers from top 100 startup use Procedia to build faster
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-[#5F5E5A] transition-colors hover:text-[#888780]"
            >
              <span className="text-base font-bold">{logo.icon}</span>
              <span className="text-xs font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
