export default function FeaturesBento() {
  return (
    <section className="py-xl px-lg max-w-7xl mx-auto">
      <div className="mb-xl text-center">
        <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-xs uppercase">Core Engine</span>
        <h2 className="font-display-lg text-display-lg md:text-headline-md text-on-surface">Designed for Professionals.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        <div className="glass p-lg rounded-xl md:col-span-2 group hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-md mb-lg">
            <div className="bg-primary/10 p-sm rounded-lg text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span>
            </div>
            <h3 className="font-headline-md text-headline-md font-bold">Node-based Workflow</h3>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
            Chain complex logical operations together. Visualize your motion data flow and modify parameters globally without touching keyframes.
          </p>
          <div className="h-32 bg-surface-container rounded border border-white/5 overflow-hidden">
            <img className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" alt="A macro cinematic close-up of digital purple and cyan particles forming a complex network of nodes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6VChrQQf51au3mi5jwq_4b7BSr3_GBxqqgWzCRPwSxMG5CE_v5N74MgtkFJFbcZ5hIcH9N0aCfLyqSY-r6qkWe8inBjo9qFY6XlCBkxV5h_ari-xt6kBaTdaYowHm53Q4QmdALLBUxCfDVV-SRaiE0eydKuVcpQK8ANQqW8JBzsrsqmClucsP_OOqKLHcA21LRUCJSt7BP8AueLNi-dyqoKM-8zcW5wjhUjO82i3gEOzws9NLF-BzInPWomzQ6fRiW3TIaUoVcKk" />
          </div>
        </div>
        <div className="glass p-lg rounded-xl group hover:border-secondary-container/30 transition-colors">
          <div className="flex items-center gap-md mb-lg">
            <div className="bg-secondary-container/10 p-sm rounded-lg text-secondary-container">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold">Real-time Proceduralism</h3>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Instant feedback on every node change. Procedia computes logic in parallel for zero-lag interaction.
          </p>
        </div>
        <div className="glass p-lg rounded-xl group hover:border-tertiary/30 transition-colors">
          <div className="flex items-center gap-md mb-lg">
            <div className="bg-tertiary/10 p-sm rounded-lg text-tertiary">
              <span className="material-symbols-outlined">code</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold">Custom Logic Nodes</h3>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Write your own expressions or use our library of math and physics nodes to build unique behaviors.
          </p>
        </div>
        <div className="glass p-lg rounded-xl md:col-span-2 group hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-md mb-sm">
            <div className="bg-primary/10 p-sm rounded-lg text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 200" }}>refresh</span>
            </div>
            <h3 className="font-headline-md text-headline-md font-bold">Infinite Iterations</h3>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            One setup, a thousand variations. Generate procedural noise, organic patterns, and automated UI elements with ease.
          </p>
        </div>
        <div className="glass p-lg rounded-xl md:col-span-3 group hover:border-primary/30 transition-colors">
          <div className="flex flex-col md:flex-row gap-lg">
            <div className="flex-1">
              <div className="flex items-center gap-md mb-sm">
                <div className="bg-primary/10 p-sm rounded-lg text-primary">
                  <span className="material-symbols-outlined">commit</span>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold">Version Control</h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Track every change across your node graph. Branch, merge, and roll back iterations of your procedural setups with full history — never lose a creative direction again.
              </p>
            </div>
            <div className="w-full md:w-64 h-32 bg-surface-container rounded border border-white/5 overflow-hidden shrink-0">
              <img className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" alt="Version control branching visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6VChrQQf51au3mi5jwq_4b7BSr3_GBxqqgWzCRPwSxMG5CE_v5N74MgtkFJFbcZ5hIcH9N0aCfLyqSY-r6qkWe8inBjo9qFY6XlCBkxV5h_ari-xt6kBaTdaYowHm53Q4QmdALLBUxCfDVV-SRaiE0eydKuVcpQK8ANQqW8JBzsrsqmClucsP_OOqKLHcA21LRUCJSt7BP8AueLNi-dyqoKM-8zcW5wjhUjO82i3gEOzws9NLF-BzInPWomzQ6fRiW3TIaUoVcKk" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
