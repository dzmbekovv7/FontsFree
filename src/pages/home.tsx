import {
	Hero,
	CategoriesSection,
	TestimonialsSection,
	CallToActionSection,
	FeaturedArticlesSection,
} from '@/components/home'
 export function HomePage() {
	return (
		<>
			<Hero />
			<FeaturedArticlesSection />
			<CategoriesSection />
			<TestimonialsSection />
			<CallToActionSection />
		</>
	)
}
