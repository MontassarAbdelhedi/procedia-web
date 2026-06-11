export default function Pricing() {
  return (
    <section className="py-xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-lg">
        <div className="text-center mb-xl">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-md">Choose your workflow.</h2>
          <p className="text-on-surface-variant font-body-md text-body-md">Get early access pricing before the official release.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg max-w-4xl mx-auto">
          <div className="glass p-xl rounded-xl flex flex-col hover:border-white/20 transition-colors">
            <span className="font-label-caps text-label-caps text-outline mb-sm">PERSONAL</span>
            <div className="flex items-baseline gap-xs mb-lg">
              <span className="font-display-lg text-headline-md">$79</span>
              <span className="font-body-sm text-body-sm text-outline">/lifetime</span>
            </div>
            <ul className="space-y-md mb-xl flex-1">
              <li className="flex items-center gap-sm text-body-md text-on-surface-variant">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Standard Node Library
              </li>
              <li className="flex items-center gap-sm text-body-md text-on-surface-variant">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Community Support
              </li>
              <li className="flex items-center gap-sm text-body-md text-on-surface-variant">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Personal Projects Only
              </li>
            </ul>
            <button className="w-full py-md border border-outline-variant rounded-lg font-label-caps text-label-caps hover:bg-white/5 transition-colors">
              GET BASIC
            </button>
          </div>
          <div className="glass p-xl rounded-xl border-primary/40 glow-primary relative flex flex-col">
            <div className="absolute -top-3 right-8 bg-primary text-on-primary font-label-caps text-[10px] px-sm py-xs rounded">MOST POPULAR</div>
            <span className="font-label-caps text-label-caps text-primary mb-sm">STUDIO PRO</span>
            <div className="flex items-baseline gap-xs mb-lg">
              <span className="font-display-lg text-headline-md">$149</span>
              <span className="font-body-sm text-body-sm text-outline">/lifetime</span>
            </div>
            <ul className="space-y-md mb-xl flex-1">
              <li className="flex items-center gap-sm text-body-md text-on-surface">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Advanced Physics Nodes
              </li>
              <li className="flex items-center gap-sm text-body-md text-on-surface">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Priority Commercial License
              </li>
              <li className="flex items-center gap-sm text-body-md text-on-surface">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Beta Feature Access
              </li>
              <li className="flex items-center gap-sm text-body-md text-on-surface">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Dedicated Support Channel
              </li>
            </ul>
            <button className="w-full py-md bg-primary text-on-primary rounded-lg font-label-caps text-label-caps font-bold active:scale-95 transition-transform">
              PREORDER PRO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
