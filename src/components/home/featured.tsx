import { useGetArticles } from '@/hooks/useArticles'
import ArticleCardSmall from '../shared/article-card/article-card-small'
import ArticleCardSmallSkeleton from '../shared/article-card/article-card-small-skeleton'

export function FeaturedArticlesSection() {
	const { data: articles, isLoading } = useGetArticles()

	return (
		<section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 text-white py-24 px-6">
			{/* 🌀 Soft animated glowing circles */}
			<div className="absolute inset-0 -z-10 pointer-events-none">
				<div className="absolute w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full blur-[120px] opacity-20 top-[-10%] left-[10%]" />
				<div className="absolute w-72 h-72 bg-gradient-to-br from-pink-500 to-red-400 rounded-full blur-[100px] opacity-25 bottom-[-5%] right-[15%]" />
				<div className="absolute w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5 top-1/2 animate-pulse" />
			</div>

			{/* 🔠 Section Title */}
			<div className="max-w-5xl mx-auto text-center mb-20 px-4">
				<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 via-indigo-300 to-purple-400 text-transparent bg-clip-text">
					Typography Tips & Design Insights
				</h2>
				<p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
					Dive into the world of fonts, design systems, readability science, and aesthetic layout techniques. Our editorial team brings you the best practices in modern digital typography.
				</p>
			</div>

			{/* 📰 Grid of articles */}
			<div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
				{isLoading
					? [...Array(6)].map((_, i) => (
							<div key={i} className="bg-[#1e2233] rounded-xl p-4 shadow-inner border border-white/5">
								<ArticleCardSmallSkeleton />
							</div>
					  ))
					: articles?.slice(0, 6).map((article) => (
							<div
								key={article.id}
								className="bg-[#1e2233] hover:bg-[#272c42] rounded-xl p-5 border border-white/10 shadow-md transition-all duration-300"
							>
								<ArticleCardSmall article={article} />
							</div>
					  ))}
			</div>

			{/* 📎 CTA Button */}
			<div className="mt-20 text-center">
				<a
					href="/blog"
					className="inline-block px-10 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 hover:brightness-110 shadow-xl transition-all duration-300"
				>
					Explore All Articles →
				</a>
			</div>
		</section>
	)
}
