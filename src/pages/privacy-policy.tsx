import { Container } from '../components/shared/container'

export const PrivacyPolicyPage = () => {
	return (
		<div className="relative bg-white min-h-screen overflow-hidden text-gray-900">
			{/* Decorative floating shapes */}
			<div className="absolute inset-0 pointer-events-none z-0">
				<div className="absolute top-16 left-1/4 w-2 h-48 bg-gradient-to-b from-cyan-400 to-transparent transform rotate-12 opacity-20 animate-pulse" />
				<div className="absolute top-1/2 right-1/4 w-32 h-2 bg-gradient-to-r from-pink-400 to-transparent transform -rotate-45 opacity-30" />
				<div className="absolute bottom-20 left-1/3 w-1 h-64 bg-gradient-to-t from-indigo-400 to-transparent transform rotate-45 opacity-25" />
				<div className="absolute top-1/2 right-1/6 w-20 h-20 border-2 border-cyan-300 transform rotate-45 opacity-10 animate-spin-slow" />
			</div>

			<Container className="relative z-10 py-24 lg:py-32 px-6">
				{/* Header */}
				<div className="text-center mb-20 max-w-4xl mx-auto">
					<h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
						<span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">
							Free Fonts for Everyone
						</span>
					</h1>
					<p className="mt-6 text-xl max-w-2xl mx-auto text-gray-600 font-light leading-relaxed">
						Explore, download, and use a curated collection of 100% free fonts — perfect for web, print, and creative projects.
					</p>
				</div>

				{/* Main Section */}
				<div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-200 p-12 transition-all duration-500">
					<h2 className="text-3xl font-semibold mb-10 border-b pb-4 text-gray-800">
						Why Free Fonts Matter
					</h2>

					<div className="space-y-8 text-gray-700 text-lg leading-relaxed">
						<p>
							Free fonts empower designers, developers, and everyday creators to build beautiful content without licensing fees or commercial restrictions.
						</p>
						<p>
							Our collection includes hand-picked typefaces that are open-source or released under permissive licenses — ready for personal or commercial use.
						</p>
						<p>
							Typography plays a vital role in design. With easy access to quality fonts, you can elevate readability, mood, and visual identity across any platform.
						</p>
						<p>
							We believe in design freedom and accessibility. Fonts shouldn’t be locked behind paywalls — creativity should be open to all.
						</p>
						<p>
							Every font listed here has been vetted for quality, licensing, and originality. Whether you're working on a portfolio, website, resume, or brand — there's something here for you.
						</p>
						<p>
							No subscriptions. No tracking. Just pure, beautiful fonts.
						</p>
						<p className="text-sm text-gray-400 italic mt-8">Last updated: June 2025</p>
					</div>
				</div>
			</Container>

			<style>{`
				@keyframes spin-slow {
					from { transform: rotate(0deg); }
					to { transform: rotate(360deg); }
				}
				.animate-spin-slow {
					animation: spin-slow 20s linear infinite;
				}
			`}</style>
		</div>
	)
}
