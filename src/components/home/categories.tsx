import { useGetArticles } from '@/hooks/useArticles'

export function CategoriesSection() {
	const { data: articles, isLoading } = useGetArticles()
	const categories = [...new Set(articles?.map(article => article.type))]

	return (
		<section className="relative bg-[#0c0c15] text-white py-28 overflow-hidden">
			{/* Background blur and glow elements */}
			<div className="absolute inset-0 -z-10 pointer-events-none">
				<div className="absolute w-[600px] h-[600px] top-[-20%] left-[-10%] bg-pink-500 opacity-10 blur-[200px]" />
				<div className="absolute w-[400px] h-[400px] bottom-[-10%] right-[5%] bg-indigo-500 opacity-10 blur-[160px]" />
			</div>

			<div className="relative max-w-6xl mx-auto px-6">
				{/* Heading */}
				<div className="text-center mb-20">
					<h2 className="text-5xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-indigo-300 to-sky-400 text-transparent bg-clip-text tracking-tight drop-shadow">
						Browse Font Categories
					</h2>
					<p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto">
						Find fonts by mood, use-case, or aesthetic. Serif or sans-serif, brutalist or minimalist — we've got a typeface for every design story.
					</p>
				</div>

				{/* Grid of categories */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{isLoading ? (
						Array.from({ length: 6 }).map((_, idx) => (
							<div
								key={idx}
								className="h-40 rounded-2xl bg-white/5 animate-pulse backdrop-blur-xl"
							/>
						))
					) : (
						categories.map((category) => (
							<a
								key={category}
								href={`/blog?type=${encodeURIComponent(category || '')}`}
								className={`relative group p-6 rounded-2xl overflow-hidden transition-all duration-300
									bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg hover:from-white/20 hover:to-white/10
									hover:scale-105 border border-white/10 shadow-xl
								`}
							>
								{/* Floating glow rings */}
								<div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl group-hover:opacity-70 transition-opacity duration-500"></div>
								<div className="absolute -bottom-6 -right-6 w-20 h-20 bg-indigo-500/20 rounded-full blur-2xl group-hover:opacity-70 transition-opacity duration-500"></div>

								{/* Category title */}
								<div className="relative z-10">
									<h3 className="text-2xl font-extrabold tracking-wide text-white group-hover:scale-105 transition-transform duration-300">
										{category?.toUpperCase()}
									</h3>
									<p className="mt-2 text-gray-400 text-sm tracking-wider italic">
										Inspirational picks, curated for designers.
									</p>
								</div>
							</a>
						))
					)}
				</div>

				{/* CTA */}
				<div className="mt-20 text-center">
					<a
						href="/blog"
						className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 via-pink-500 to-purple-600 hover:brightness-110 text-white font-bold rounded-full shadow-xl transition-all duration-300"
					>
						Discover More Fonts →
					</a>
				</div>
			</div>
		</section>
	)
}
