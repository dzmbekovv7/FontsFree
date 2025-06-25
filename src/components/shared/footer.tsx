import { Container } from './container'

export function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden py-24">
      {/* Geometric shapes in background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-36 h-36 border-4 border-white opacity-10 rotate-12 rounded-xl"></div>
        <div className="absolute bottom-20 right-16 w-48 h-48 border-8 border-white opacity-5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-3xl -translate-x-1/2 -translate-y-1/2 rotate-[30deg]"></div>
      </div>

      <Container>
        {/* Logo and slogan */}
        <div className="mb-20 text-center max-w-xl mx-auto">
          <h1 className="font-extrabold text-5xl tracking-wide uppercase mb-4 font-mono">
            FreeFonts
          </h1>
          <p className="text-gray-400 text-lg italic leading-relaxed">
            Free. Open. Limitless. Your source for high-quality fonts without restrictions.
          </p>
        </div>

        {/* Navigation links */}
        <nav className="flex justify-center gap-12 mb-20 font-semibold uppercase tracking-widest text-gray-300 text-sm">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/blog" className="hover:text-white transition">Fonts</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/privacy-policy" className="hover:text-white transition">Privacy</a>
        </nav>

        {/* Stats in horizontal bars */}
        <div className="flex max-w-4xl mx-auto justify-between gap-8">
          {[
            { label: 'Fonts Available', value: '1800+', bg: 'bg-white/10' },
            { label: 'Monthly Downloads', value: '500K+', bg: 'bg-white/20' },
            { label: 'Active Contributors', value: '350+', bg: 'bg-white/10' },
            { label: 'Open Licenses', value: '100%', bg: 'bg-white/20' },
          ].map(({ label, value, bg }, i) => (
            <div
              key={i}
              className={`${bg} flex-1 rounded-lg p-6 flex flex-col items-center`}
            >
              <div className="text-4xl font-bold tracking-tighter mb-2">{value}</div>
              <div className="uppercase text-xs tracking-widest text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  )
}
