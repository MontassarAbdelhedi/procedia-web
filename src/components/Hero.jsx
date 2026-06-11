export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1200 800" width="100%" height="100%">
          <defs>
            <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#d8b9ff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00f4fe" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path className="node-wire" d="M100,200 Q400,100 600,400 T1100,300" fill="transparent" stroke="url(#grad1)" strokeWidth="1" />
          <path className="node-wire" d="M50,600 Q300,500 500,700 T1000,500" fill="transparent" stroke="url(#grad1)" strokeWidth="1" />
          <path className="node-wire" d="M200,700 Q500,300 800,200 T1150,600" fill="transparent" stroke="url(#grad1)" strokeWidth="1" />
          <path className="node-wire" d="M150,100 Q400,600 750,150 T1050,700" fill="transparent" stroke="url(#grad1)" strokeWidth="0.8" />
          <path className="node-wire" d="M350,800 Q600,200 900,400 T1050,100" fill="transparent" stroke="url(#grad1)" strokeWidth="0.8" />
          <circle className="animate-pulse" cx="600" cy="400" fill="#d8b9ff" r="4" />
          <circle className="animate-pulse" cx="900" cy="400" fill="#d8b9ff" r="3.5" />
          <circle className="animate-pulse" cx="350" cy="800" fill="#00f4fe" r="3" />
          <circle cx="1100" cy="300" fill="#00f4fe" r="3" />
          <circle cx="100" cy="200" fill="#d8b9ff" r="3" />
          <circle cx="200" cy="700" fill="#d8b9ff" r="2.5" />
          <circle cx="750" cy="150" fill="#00f4fe" r="2.5" />
          <circle cx="1050" cy="700" fill="#d8b9ff" r="2" />
          <circle cx="1150" cy="600" fill="#00f4fe" r="2" />
          <circle cx="800" cy="200" fill="#d8b9ff" r="2" />
          <circle cx="150" cy="100" fill="#00f4fe" r="2" />
        </svg>
      </div>
      <div className="relative z-10 text-center px-lg max-w-4xl">
        <h1 className="font-display-lg text-display-lg md:text-[64px] text-on-background mb-md leading-none">
          Procedural Motion for<br /><span className="text-primary italic">After Effects</span>
        </h1>
        <p className="font-body-md text-body-md md:text-headline-sm text-on-surface-variant mb-xl max-w-2xl mx-auto">
          Break free from linear timelines. Design complex animations using a high-performance node-based workflow directly inside your favorite motion tool.
        </p>
        <div className="flex flex-col sm:flex-row gap-md justify-center items-center">
          <button className="w-full sm:w-auto px-xl py-md bg-primary text-on-primary font-headline-sm text-headline-sm rounded-xl shadow-[0_0_20px_rgba(216,185,255,0.3)] hover:scale-105 transition-transform duration-300">
            Preorder Now
          </button>
          <button className="w-full sm:w-auto px-xl py-md border border-outline-variant text-on-surface font-headline-sm text-headline-sm rounded-xl hover:bg-white/5 transition-colors">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
