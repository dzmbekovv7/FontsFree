import { Container } from '../components/shared/container'

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden">

      {/* Floating abstract shapes */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-16 left-1/4 w-3 h-48 bg-gradient-to-b from-pink-500 to-transparent rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-3 bg-gradient-to-r from-cyan-400 to-transparent rounded-lg opacity-30 -rotate-12"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-52 bg-gradient-to-t from-purple-500 to-transparent rounded-full opacity-20 rotate-45"></div>
        <div className="absolute top-1/2 right-1/5 w-28 h-28 border-4 border-indigo-400 rounded-full opacity-15 animate-spin-slow"></div>
      </div>

      <Container className="relative py-24 px-6 lg:px-20 max-w-7xl">

        {/* Hero Title */}
        <header className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-6xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent select-none">
            Free Fonts. Infinite Creativity.
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto italic font-light leading-relaxed">
            Discover, download, and share a curated collection of the finest free fonts — empowering designers and creators worldwide.
          </p>
        </header>

        {/* Content Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Why Free Fonts */}
          <article className="bg-white shadow-lg rounded-3xl p-10 hover:shadow-indigo-400 transition-shadow duration-500">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-600">Why Free Fonts?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Free fonts break down barriers to creativity by making quality typography accessible to all — whether you’re a hobbyist or a professional designer.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 font-medium">
              <li>Boost creative freedom</li>
              <li>Support open design culture</li>
              <li>Expand accessibility and usability</li>
              <li>Encourage collaboration and sharing</li>
            </ul>
          </article>

          {/* How We Curate */}
          <article className="bg-white shadow-lg rounded-3xl p-10 hover:shadow-purple-400 transition-shadow duration-500">
            <h2 className="text-3xl font-semibold mb-4 text-purple-600">How We Curate</h2>
            <p className="text-gray-700 leading-relaxed">
              Our expert typographers carefully review every font for quality, license compatibility, and aesthetic value — making sure each font serves your design projects flawlessly.
            </p>
          </article>

          {/* Join The Community */}
          <article className="bg-white shadow-lg rounded-3xl p-10 hover:shadow-pink-400 transition-shadow duration-500 flex flex-col justify-between">
            <h2 className="text-3xl font-semibold mb-4 text-pink-600">Join the Community</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Connect with fellow creatives, share your favorite free fonts, and contribute to an ever-growing library of typography excellence.
            </p>
            <a
              href="/contacts"
              className="self-start inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-xl shadow-lg hover:bg-pink-700 transition-colors duration-300"
              aria-label="Join Font Community"
            >
              Join Now
            </a>
          </article>
        </section>

        {/* Featured Fonts Showcase */}
        <section className="mt-32">
          <h2 className="text-4xl font-bold mb-12 text-center text-indigo-700">
            Featured Free Fonts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {[
              { name: 'Montserrat', desc: 'Modern, geometric sans-serif', style: 'font-sans', color: 'text-indigo-600' },
              { name: 'Playfair Display', desc: 'Elegant serif with high contrast', style: 'font-serif', color: 'text-pink-600' },
              { name: 'Pacifico', desc: 'Casual script with a friendly vibe', style: 'font-handwriting', color: 'text-purple-600' },
              { name: 'Fira Code', desc: 'Monospaced font for coding', style: 'font-mono', color: 'text-cyan-600' },
            ].map(({ name, desc, style, color }, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-lg text-center hover:shadow-indigo-400 transition-shadow duration-300 cursor-pointer"
              >
                <p className={`${style} text-2xl font-extrabold mb-4 select-text`} style={{ userSelect: 'text' }}>
                  {name}
                </p>
                <p className={`text-lg font-medium ${color}`}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="mt-32">
          <h2 className="text-4xl font-bold mb-12 text-center text-pink-600">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                name: "Kim Chun Hee",
                role: "Lead Typographer",
                bio: "Ava crafts beautiful font collections and ensures every design is pixel-perfect.",
                photo: "https://www.queensjournal.ca/wp-content/uploads/2023/10/SUPPLIED_winnie-wong_print-scaled.jpg",
              },
              {
                name: "Daniel Kim",
                role: "Community Manager",
                bio: "Daniel connects designers worldwide and fosters a collaborative, inspiring community.",
                photo: "https://www.davidson.edu/sites/default/files/styles/720x559_hero_slide/public/2025-03/1733711012968.jpeg?h=076273ab&itok=wIEYDEYD",
              },
              {
                name: "Sophia Lee",
                role: "UX Designer",
                bio: "Sophia ensures our site is intuitive and visually stunning for every visitor.",
                photo: "https://thumbs.dreamstime.com/b/beautiful-young-woman-maine-usa-close-up-portrait-native-108644385.jpg",
              },
            ].map(({ name, role, bio, photo }, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-lg text-center hover:shadow-pink-400 transition-shadow duration-300 cursor-pointer"
              >
                <img
                  src={photo}
                  alt={name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-6 ring-4 ring-pink-300"
                />
                <h3 className="text-2xl font-semibold mb-2 text-pink-600">{name}</h3>
                <p className="text-indigo-700 font-medium mb-3">{role}</p>
                <p className="text-gray-700 text-sm">{bio}</p>
              </div>
            ))}
          </div>
        </section>

      </Container>

      {/* Custom Animations */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-spin-slow {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
