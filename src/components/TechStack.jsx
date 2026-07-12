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

        {/* TODO: Animated content goes here */}
        <div className="mx-auto mt-16 h-[400px] max-w-5xl rounded-xl border border-dashed border-[#2a2a28] bg-[#1a1a18]/30" />
      </Container>
    </Section>
  )
}
