import { ContactForm } from '../components/shared/contact-form'

export function ContactsPage() {
  return (
    <>
      {/* Hero Section: Fonts Theme */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black py-28 overflow-hidden">
        {/* Floating gradient shapes */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-16 left-1/4 w-2 h-48 bg-gradient-to-b from-pink-400 to-transparent rotate-6 opacity-40 animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-40 h-2 bg-gradient-to-r from-yellow-400 to-transparent -rotate-45 opacity-25" />
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-64 bg-gradient-to-t from-indigo-400 to-transparent rotate-45 opacity-50" />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 border-4 border-pink-500 rotate-12 opacity-15 animate-spin-slow" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Title */}
          <h1 className="text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-400 to-indigo-400 drop-shadow-lg mb-6">
            Free Fonts Library
          </h1>

          <p className="text-gray-300 text-xl max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Discover the best collection of beautiful, <span className="font-semibold text-yellow-400">open-source</span> and <span className="font-semibold text-pink-400">free-to-use</span> fonts that will elevate your design projects and give your typography a fresh voice.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href="/blog"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold shadow-xl hover:scale-110 hover:brightness-110 transition-transform duration-300"
            >
              Explore Fonts
            </a>
            <a
              href="/blog"
              className="px-8 py-3 rounded-full border-2 border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-black transition-colors duration-300"
            >
              Get Updates
            </a>
          </div>
        </div>
      </section>

      {/* Fonts Preview + Info Section */}
      <section className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Font Preview */}
          <div className="rounded-3xl shadow-lg overflow-hidden bg-white border border-gray-200 hover:shadow-yellow-400 transition-shadow duration-500 cursor-default select-none p-10 flex flex-col justify-center items-center">
            <p
              style={{ fontFamily: "'Poppins', sans-serif" }}
              className="text-6xl font-bold text-pink-500 mb-4 drop-shadow-md select-text"
            >
              Poppins
            </p>
            <p
              style={{ fontFamily: "'Roboto', sans-serif" }}
              className="text-3xl text-yellow-600 font-semibold mb-3 select-text"
            >
              The clean and geometric sans-serif
            </p>
            <p className="text-gray-600 text-center max-w-sm select-text">
              Ideal for headlines and body text, Poppins balances modern style with excellent readability. Available free on Google Fonts.
            </p>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
              Why Choose Free Fonts?
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-8 max-w-lg">
              Free fonts allow designers, developers, and creators to access high-quality typography without licensing barriers or costs. This fosters creativity, democratizes design, and encourages innovation in digital and print media.
            </p>
            <ul className="space-y-5 text-gray-600 text-lg max-w-md">
              {[
                '🎨 Huge variety of styles and weights',
                '📂 Easy integration via CSS or downloads',
                '🌍 Open source means community-driven improvements',
                '🆓 Perfect for personal & commercial projects',
              ].map((point, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <span className="text-2xl">{point.slice(0, 2)}</span>
                  <span>{point.slice(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24 lg:py-32 overflow-hidden">
        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-24 left-1/4 w-2 h-64 bg-gradient-to-b from-pink-400 to-transparent rotate-12 opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-52 h-52 border-4 border-yellow-400 rotate-12 opacity-10 animate-spin-slow"></div>
          <div className="absolute bottom-20 left-1/3 w-32 h-2 bg-gradient-to-r from-indigo-400 to-transparent -rotate-45 opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <div className="relative rounded-3xl shadow-2xl overflow-hidden cursor-default select-none">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1500&auto=format"
              alt="Fonts Collection"
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/40 to-yellow-500/40 pointer-events-none rounded-3xl" />
            {/* Glow circles */}
            <div className="absolute -top-5 -right-5 w-14 h-14 bg-yellow-400 opacity-60 rounded-full animate-pulse mix-blend-screen"></div>
            <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-pink-500 opacity-70 rounded-full animate-bounce mix-blend-screen"></div>
          </div>

          {/* Right: Contact form */}
          <div className="bg-gray-50 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Questions about fonts, licensing, or custom typography projects? Reach out and our font experts will assist you.
            </p>
            <p>
              +1 (202) 555-0143
            </p>
            <ContactForm />
            {/* Accent dots */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-lg rotate-45 animate-pulse"></div>
            <div className="absolute -bottom-3 -left-3 w-7 h-7 bg-pink-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="relative bg-gradient-to-r from-pink-600 to-yellow-400 py-20 text-black text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-4xl font-extrabold mb-6 tracking-wide">
            Join the{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
              Free Fonts Community
            </span>
          </h3>
          <p className="text-lg mb-10 max-w-xl mx-auto">
            Get curated font collections, tips, and news straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              required
              className="px-5 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button
              type="submit"
              className="bg-black text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
