import { useLocation } from 'react-router';
import { useEffect, useMemo, useState } from 'react';
import { Container } from './container';
import { Sparkles } from 'lucide-react';

function FreeFontsLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-white/20 backdrop-blur-md rounded-full shadow-md animate-pulse">
        <Sparkles className="w-6 h-6 text-yellow-400" />
      </div>
      <h1 className="text-3xl font-bold text-white tracking-widest">
        <span className="text-purple-300">Free</span>
        <span className="text-white">Fonts</span>
      </h1>
    </div>
  );
}

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  const isDarkBg = useMemo(() => location.pathname === '/contacts' || location.pathname === '/blog', [location.pathname]);
  const bgClass = isDarkBg
    ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-black'
    : 'bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400';

  return (
    <>
    <header className={`relative z-30 ${bgClass} shadow-md`}>
      <Container>
        <div className="flex items-center justify-between py-6 px-4 lg:px-8">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 z-10">
            <FreeFontsLogo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-white font-semibold text-xl tracking-wide z-10">
            <a href="/" className="hover:text-yellow-300 transition">Home</a>
            <a href="/about" className="hover:text-yellow-300 transition">About</a>
            <a href="/blog" className="hover:text-yellow-300 transition">Blog</a>
            <a href="/contacts" className="hover:text-yellow-300 transition">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-white z-10"
            aria-label="Open mobile menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-90 backdrop-blur-md flex flex-col items-center justify-center gap-10 text-white text-2xl font-bold">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
            aria-label="Close mobile menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a onClick={() => setMobileMenuOpen(false)} href="/">Home</a>
          <a onClick={() => setMobileMenuOpen(false)} href="/about">About</a>
          <a onClick={() => setMobileMenuOpen(false)} href="/blog">Blog</a>
          <a onClick={() => setMobileMenuOpen(false)} href="/contacts">Contact</a>
        </div>
      )}
    </header>
<button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="fixed bottom-6 right-6 z-[99999999999] bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-bounce"
  aria-label="Scroll to top"
>
  ↑
</button>

</>
  );
}
