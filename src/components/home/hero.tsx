import { useState } from 'react';
import { Container } from '@/components/shared/container';
import { Sparkles} from 'lucide-react';
export function Hero() {
	const [loaded, setLoaded] = useState(false);

	return (
		<section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white overflow-hidden">
			{/* ✨ BACKGROUND GRADIENTS */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute w-60 h-60 bg-pink-500/20 rounded-full blur-3xl top-[10%] left-[15%] animate-ping" />
				<div className="absolute w-72 h-72 bg-blue-400/20 rounded-full blur-2xl top-[30%] right-[10%] animate-pulse" />
				<div className="absolute w-40 h-40 border-2 border-purple-500 rounded-full top-[70%] left-[40%] animate-spin-slow opacity-20" />
			</div>

			{/* ✍️ IMAGE (OPTIONAL) */}
			<div className="absolute inset-0">
				<img
					src="https://amadine.com/assets/img/og_img/rules-of-typography.png"
					alt="Typography"
					className="w-full h-full object-cover opacity-10"
					onLoad={() => setLoaded(true)}
				/>
			</div>

			{/* MAIN CONTENT */}
			<Container className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen px-6 py-24">
				
				{/* LEFT: Title + Description */}
				<div className="w-full md:w-1/2 flex flex-col gap-6 animate-fade-in-left">
					<h1 className="text-[3rem] sm:text-[4.5rem] font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-pink-300">
						Discover <span className="text-yellow-300 drop-shadow">FreeFonts</span>
					</h1>

					<p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
						Thousands of stunning, stylish and legible fonts — absolutely free. Explore modern typefaces, timeless classics, and everything in between for your web & design projects.
					</p>

					{/* Buttons */}
					<div className="flex gap-4 mt-6">
						<a
							href="/blog"
							className="px-6 py-3 text-lg font-bold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition-transform hover:scale-105"
						>
							Explore Fonts
						</a>
						<a
							href="/about"
							className="px-6 py-3 text-lg font-bold text-white bg-pink-600 rounded-lg shadow-md hover:bg-pink-700 transition-transform hover:scale-105"
						>
							About Us
						</a>
					</div>
				</div>

				{/* RIGHT: Stylized Font Icon Card */}
				<div className="w-full md:w-1/2 mt-20 md:mt-0 flex items-center justify-center animate-fade-in-right">
					<div className="relative w-64 h-64 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-3xl shadow-2xl border border-white/20 flex flex-col items-center justify-center text-center p-6 hover:rotate-1 hover:scale-105 transition-all duration-500">
						<p className="text-xl font-bold text-white">Typography</p>
						<p className="text-sm text-gray-300 mt-2">Art meets readability</p>

						{/* Sparkles icon hover glow */}
						<div className="absolute -top-4 -right-4 bg-white/10 p-2 rounded-full shadow-xl">
							<Sparkles className="w-5 h-5 text-yellow-300 animate-bounce" />
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
