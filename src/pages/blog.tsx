import ArticleCardMedium from '@/components/shared/article-card/article-card-medium'
import { Container } from '@/components/shared/container'
import { useGetArticles } from '@/hooks/useArticles'
import { useSearchParams } from 'react-router'

function CardSkeleton() {
  return (
    <div className="rounded-3xl bg-gray-800 animate-pulse h-[440px] shadow-lg border border-gray-700 p-6 flex flex-col gap-4">
      <div className="bg-gray-700 h-40 w-full rounded-xl" />
      <div className="bg-gray-700 h-4 w-24 rounded" />
      <div className="bg-gray-600 h-6 w-3/4 rounded" />
      <div className="bg-gray-600 h-4 w-full rounded" />
      <div className="bg-gray-600 h-4 w-5/6 rounded" />
      <div className="bg-gray-700 h-3 w-1/2 rounded mt-auto" />
    </div>
  )
}

export function BlogPage() {
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type') || ''
  const { data: articles = [], isLoading, isError } = useGetArticles()

  const filteredArticles = type
    ? articles?.filter(article => article.type === type)
    : articles

  return (
    <div className="relative min-h-screen bg-gray-950 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-20 left-1/4 w-2 h-40 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-28 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-40" />
        <div className="absolute bottom-1/4 left-1/6 w-1 h-52 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-35" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow" />
      </div>

      <Container>
        <section className="relative z-10 py-20 lg:py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white rounded-3xl px-6 lg:px-20 shadow-2xl">
          {/* Header */}
          <div className="max-w-6xl mx-auto text-center mb-20">
            <h1 className="text-6xl font-extrabold tracking-tight leading-tight mb-4 select-none">
              <span className="block transition-transform hover:translate-x-2 duration-500">FreeFonts</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 transform hover:-translate-x-2 transition duration-500 -mt-2">
                Blog & Resources
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto italic font-light leading-relaxed">
              Your ultimate destination to explore, learn, and get inspired by the world of free fonts.
              Stay ahead with tutorials, design tips, and curated font collections.
            </p>
          </div>

          {/* Loading Skeletons */}
          {isLoading ? (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                <CardSkeleton key={idx} />
              ))}
            </div>
          ) : filteredArticles && filteredArticles.length > 0 ? (
            <div className="relative grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="group relative rounded-3xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-cyan-500/60 transition-shadow duration-500 transform hover:scale-105 hover:rotate-[1deg]"
                  style={{ minHeight: '440px' }}
                >
                  <div className="relative z-10 flex flex-col h-full p-8 gap-6">
                    <ArticleCardMedium article={article} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                No articles found{type ? ` for "${type}"` : ''}.
              </h3>
              <p className="text-lg text-gray-400 mb-6">Try changing the filter or explore all topics.</p>
              {type && (
                <a
                  href="/blog"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                  View All Articles
                </a>
              )}
            </div>
          )}
        </section>
      </Container>

      {/* Animations */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
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
