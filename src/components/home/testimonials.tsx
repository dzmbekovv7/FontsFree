export function TestimonialsSection() {
	return (
		<section className="relative bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 py-28 text-white overflow-hidden">
			{/* Background gradient glows */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute w-[500px] h-[500px] top-[-20%] left-[-10%] bg-pink-500 opacity-10 blur-[160px]" />
				<div className="absolute w-[400px] h-[400px] bottom-[-10%] right-[-10%] bg-indigo-500 opacity-10 blur-[140px]" />
			</div>

			<div className="max-w-6xl mx-auto px-6">
				{/* Title */}
				<div className="text-center mb-20">
					<h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-pink-400 to-purple-500 drop-shadow tracking-tight">
						What Designers Are Saying
					</h2>
					<p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto font-light">
						Hear from creatives and makers who use our font library in their branding, UI work, and editorial design.
					</p>
				</div>

				{/* Testimonials Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{[
						{
							name: 'Ella James',
							role: 'UI Designer',
							quote:
								'“FreeFonts is like a secret weapon for modern interface work. Stylish, fast to browse, and always fresh.”',
						},
						{
							name: 'Marcus Vale',
							role: 'Creative Director',
							quote:
								'“We redesigned our agency’s brand using two fonts from here. It’s now bold, edgy, and memorable.”',
						},
						{
							name: 'Samira K.',
							role: 'Freelance Brand Designer',
							quote:
								'“The font curation feels handpicked. Finally a place that gets modern type.”',
						},
					].map((testimonial, idx) => (
						<div
							key={idx}
							className="relative bg-white/5 rounded-2xl p-8 backdrop-blur-lg shadow-xl border border-white/10 hover:shadow-2xl transition-all testimonial-card"
						>
							{/* Floating quote mark */}
							<div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
								“
							</div>

							<p className="text-gray-200 text-lg font-light leading-relaxed">
								{testimonial.quote}
							</p>

							{/* Name + Role */}
							<div className="mt-6">
								<p className="text-white font-semibold">{testimonial.name}</p>
								<p className="text-sm text-gray-400">{testimonial.role}</p>
							</div>
						</div>
					))}
				</div>

				{/* Decorative line */}
				<div className="mt-24 flex justify-center">
					<div className="w-32 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full" />
				</div>
			</div>
		</section>
	)
}
