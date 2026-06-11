export default function Footer() {
  return (
    <footer className="w-full py-xl bg-surface-container-lowest border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg px-lg max-w-7xl mx-auto">
        <div className="col-span-1 lg:col-span-1">
          <div className="font-headline-sm text-headline-sm font-bold text-on-surface mb-md">Procedia</div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Redefining the boundaries of motion design with procedural logic and node-based efficiency.
          </p>
        </div>
        <div className="space-y-sm">
          <h4 className="font-label-caps text-label-caps text-primary mb-md">PRODUCT</h4>
          <a className="block font-body-sm text-body-sm text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Features</a>
          <a className="block font-body-sm text-body-sm text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Roadmap</a>
          <a className="block font-body-sm text-body-sm text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Enterprise</a>
        </div>
        <div className="space-y-sm">
          <h4 className="font-label-caps text-label-caps text-primary mb-md">COMMUNITY</h4>
          <a className="block font-body-sm text-body-sm text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Twitter</a>
          <a className="block font-body-sm text-body-sm text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Discord</a>
          <a className="block font-body-sm text-body-sm text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Forum</a>
        </div>
        <div className="space-y-sm">
          <h4 className="font-label-caps text-label-caps text-primary mb-md">LEGAL</h4>
          <a className="block font-body-sm text-body-sm text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Terms</a>
          <a className="block font-body-sm text-body-sm text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Privacy</a>
          <a className="block font-body-sm text-body-sm text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Cookies</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-lg mt-xl pt-lg border-t border-white/5">
        <p className="font-body-sm text-body-sm text-on-surface-variant opacity-80">
          &copy; 2024 Procedia. Built for the next generation of motion designers.
        </p>
      </div>
    </footer>
  );
}
