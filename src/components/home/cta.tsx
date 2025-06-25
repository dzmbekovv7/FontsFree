export function CallToActionSection() {
	return (
		<section className="relative bg-gradient-to-br from-gray-950 via-indigo-950 to-black text-white py-32 overflow-hidden">
			{/* Soft background glow */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-purple-700 opacity-20 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
			</div>

			{/* Content container */}
			<div className="relative z-10 max-w-4xl mx-auto text-center px-6">
				<h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-500">
					Discover Beautiful Free Fonts
				</h2>

				<p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
					Explore our handpicked collection of modern, elegant, and expressive fonts.
					All fonts are completely free — crafted for designers, developers, and creatives who care about typography.
				</p>

				{/* CTA Button */}
				<div className="mt-10">
					<a
						href="/blog"
						className="inline-block px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-pink-700 hover:to-indigo-700 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
					>
						Browse Free Fonts →
					</a>
				</div>

				{/* Decorative underline */}
				<div className="mt-16 flex justify-center space-x-4">
					<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
					<div className="w-2 h-2 bg-pink-400 rounded-full" />
					<div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
				</div>
			</div>
		</section>
	)
}
