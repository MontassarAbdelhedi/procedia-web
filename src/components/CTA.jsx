export default function CTA() {
  return (
    <section className="py-xl px-lg">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-surface-container-high to-surface-container-low p-xl border border-white/5 text-center">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img className="w-full h-full object-cover" alt="Abstract vibrant geometric flow patterns in deep violet and cyan." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB1J8x5Sj6AJow-eKS5GTxFnGjYY02luQy_MHgE1AIFKqXkIntrWc0CkIUS9deM4e9StEo-U7YIA6MEs9g7bkrGMyqrWHLHiFpzggGDVrSWiUjcjuoB0Lom93y-D-yz-hZh8LvUUFV9l2vn7m_Fdtz6EPbePPGicSc-jlP45e96eIXbWDn9o5rnFV1XvcqU4BK9clHw4CKc0q1xA9blrcADpi8hBTlbIcPKwefbFYGEvvZ5tECeMUY1-xXVB6WqZzZhG1YxWYmuy0" />
          </div>
          <div className="relative z-10">
            <h2 className="font-display-lg text-display-lg mb-md">Ready to evolve?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-2xl mx-auto">
              Procedia is currently in limited beta. Preorder now to lock in early-bird pricing and be the first to receive the Studio release.
            </p>
            <button className="bg-primary text-on-primary px-xl py-lg font-headline-sm text-headline-sm rounded-full shadow-[0_0_30px_rgba(216,185,255,0.4)] hover:scale-105 transition-transform duration-300">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
