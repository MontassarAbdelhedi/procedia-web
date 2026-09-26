import { Container, Section, SectionHeader } from './Layout'

export function TechStack() {
  return (
    <Section id="solution">
      <Container>
        <SectionHeader
          title="Think Procedural, Think"
          titleGradient="Procedia"
          description="Procedia turns motion design into a visual system of connected ideas, giving you the freedom to experiment, iterate, and create without technical limitations."
        />

        <img
          src="/hero.png"
          alt="Procedia node editor with connected motion-design nodes"
          className="mx-auto mt-16 block h-auto w-full max-w-5xl rounded-xl border border-[#2a2a28]"
        />
      </Container>
    </Section>
  )
}
