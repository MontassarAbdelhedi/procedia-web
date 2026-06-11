export default function Navbar({ page, onNavigate }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(216,185,255,0.1)]">
      <div className="flex justify-between items-center h-16 px-lg max-w-7xl mx-auto">
        <button onClick={function () { onNavigate('home'); }} className="font-headline-sm text-headline-sm font-bold text-primary tracking-tight hover:opacity-80 transition-opacity">Procedia</button>
        <div className="hidden md:flex items-center space-x-lg">
          <button onClick={function () { onNavigate('home'); }} className={'font-body-md text-body-md transition-colors duration-300 pb-1 ' + (page === 'home' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant font-medium hover:text-primary')}>Nodes</button>
          <button onClick={function () { onNavigate('home'); }} className="text-on-surface-variant font-medium font-body-md text-body-md hover:text-primary transition-colors duration-300">Workflows</button>
          <button onClick={function () { onNavigate('home'); }} className="text-on-surface-variant font-medium font-body-md text-body-md hover:text-primary transition-colors duration-300">Pricing</button>
          <button onClick={function () { onNavigate('docs'); }} className={'font-body-md text-body-md transition-colors duration-300 pb-1 ' + (page === 'docs' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant font-medium hover:text-primary')}>Docs</button>
        </div>
        <button className="bg-primary text-on-primary px-lg py-sm font-label-caps text-label-caps rounded-lg active:scale-95 transition-transform font-bold">
          PREORDER
        </button>
      </div>
    </nav>
  );
}
