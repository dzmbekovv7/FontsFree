import {
  ArticleComments,
  ArticleContent,
  ArticleFeatured,
  ArticleHeader,
  ArticleLatest,
  ArticleNavigation,
  ArticlePopular,
} from '@/components/article'
import { Container } from '@/components/shared/container'
import { useGetArticleBySlug, useGetArticles } from '@/hooks/useArticles'
import { useParams } from 'react-router'

export function ArticlePage() {
  const { slug } = useParams()

  const { data: article, isLoading: isArticleLoading } = useGetArticleBySlug(slug || '')
  const { data: articles, isLoading: isArticlesLoading } = useGetArticles()

  if (isArticleLoading || isArticlesLoading) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-100 overflow-hidden">
        {/* Soft animated shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-2 h-32 bg-gradient-to-b from-indigo-300 to-transparent transform rotate-12 opacity-30 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-2 bg-gradient-to-r from-teal-300 to-transparent transform -rotate-45 opacity-20"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-t from-pink-300 to-transparent transform rotate-45 opacity-25"></div>
        </div>

        <Container>
          <div className="relative z-10 py-20 flex items-center justify-center min-h-screen">
            <div className="text-center space-y-8">
              {/* Soft loader hexagon */}
              <div className="relative w-32 h-32 mx-auto">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 transform rotate-45 animate-spin"
                  style={{
                    clipPath: "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)",
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
                  }}
                ></div>
                <div className="absolute inset-4 bg-white rounded-md flex items-center justify-center border border-indigo-300 shadow-inner">
                  <div className="text-2xl font-black text-indigo-600 tracking-wide animate-pulse">Loading</div>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-indigo-800 tracking-tight">
                  Loading <span className="text-indigo-400">Article...</span>
                </h2>
                <p className="text-indigo-500 text-lg">Fetching latest content for you</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-200 overflow-hidden">
        {/* Error shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-red-300 transform rotate-45 opacity-20 animate-spin-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-40 bg-gradient-to-t from-red-400 to-transparent opacity-30"></div>
        </div>

        <Container>
          <div className="relative z-10 py-20 flex items-center justify-center min-h-screen">
            <div className="text-center space-y-8">
              <div className="w-24 h-24 mx-auto bg-red-400 rounded-md flex items-center justify-center">
                <div className="text-white text-2xl font-bold">404</div>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-red-600">Article Not Found</h2>
                <p className="text-red-500 text-lg">Oops! Looks like this article doesn't exist.</p>
                <a
                  href="/blog"
                  className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-red-400 to-red-600 text-white font-bold rounded-lg hover:scale-105 transform transition-all duration-300"
                >
                  Return to Blog
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-white overflow-hidden text-gray-900">
      {/* Soft pastel floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-1/6 w-2 h-40 bg-gradient-to-b from-indigo-300 to-transparent transform rotate-12 opacity-30 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/5 w-28 h-2 bg-gradient-to-r from-teal-300 to-transparent transform -rotate-45 opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-52 bg-gradient-to-t from-pink-300 to-transparent transform rotate-45 opacity-35"></div>
        <div className="absolute top-1/2 right-1/6 w-24 h-24 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-purple-200 transform rotate-45 opacity-30"></div>
      </div>

      <Container>
        <div className="relative z-10 py-12 lg:py-20">
          {/* Hero Section */}
          <div className="relative mb-16">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 transform -skew-y-1 origin-top-left"></div>

            <div
              className="relative bg-white shadow-lg border-l-8 border-indigo-400 p-8 lg:p-12 mb-12 hover:scale-[1.02] transition-transform duration-500"
              style={{ clipPath: 'polygon(0 0, 97% 0, 100% 15%, 97% 100%, 0 100%)' }}
            >
              <ArticleHeader article={article} />

              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-300 to-orange-400 transform rotate-45 flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-emerald-300 rounded-full shadow-lg animate-pulse"></div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">
            {/* Article Content */}
            <div className="xl:col-span-8 order-2 xl:order-1 space-y-12">
              <div
                className="relative bg-indigo-50 p-6 lg:p-8 rounded-lg shadow-md hover:scale-[1.01] transition-transform duration-300"
                style={{ clipPath: 'polygon(0 0, 95% 0, 100% 20%, 95% 100%, 0 100%)' }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-md"></div>
                <ArticleNavigation currentArticle={article} articles={articles} />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-400 transform rotate-45 rounded-md"></div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-white to-indigo-50 opacity-70 rounded-lg shadow-xl"></div>
                <div className="relative bg-white p-8 lg:p-12 rounded-lg shadow-lg border-t-4 border-indigo-400">
                  <ArticleContent article={article} />

                  <div className="absolute top-4 right-4 w-4 h-16 bg-gradient-to-b from-indigo-400 to-transparent opacity-30 rounded-md"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-4 bg-gradient-to-r from-teal-400 to-transparent opacity-30 rounded-md"></div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="xl:col-span-4 order-1 xl:order-2 space-y-8 sticky top-8">
              {/* Comments */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-indigo-200 to-purple-200 opacity-50 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div
                  className="relative bg-white p-6 lg:p-8 shadow-lg border-l-4 border-indigo-400 rounded-lg transform group-hover:scale-[1.02] transition-transform duration-300"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 10% 100%, 0 90%)' }}
                >
                  <ArticleComments article={article} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 transform rotate-45 flex items-center justify-center shadow-lg rounded-md">
                    <div className="text-white text-xs font-bold transform -rotate-45">💬</div>
                  </div>
                </div>
              </div>

              {/* Latest Articles */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-teal-200 to-cyan-200 opacity-50 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                <div
                  className="relative bg-white p-6 lg:p-8 shadow-lg border-l-4 border-teal-400 rounded-lg transform group-hover:scale-[1.02] transition-transform duration-300"
                  style={{ clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)' }}
                >
                  <ArticleLatest articles={articles} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 transform rotate-45 flex items-center justify-center shadow-lg rounded-md">
                    <div className="text-white text-xs font-bold transform -rotate-45">🆕</div>
                  </div>
                </div>
              </div>

              {/* Popular Articles */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-amber-200 to-yellow-200 opacity-50 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div
                  className="relative bg-white p-6 lg:p-8 shadow-lg border-l-4 border-amber-400 rounded-lg transform group-hover:scale-[1.02] transition-transform duration-300"
                  style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 0 100%, 0 10%)' }}
                >
                  <ArticlePopular articles={articles} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 transform rotate-45 flex items-center justify-center shadow-lg rounded-md">
                    <div className="text-white text-xs font-bold transform -rotate-45">🔥</div>
                  </div>
                </div>
              </div>

              {/* Featured Articles */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-pink-200 to-rose-200 opacity-50 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                <div
                  className="relative bg-white p-6 lg:p-8 shadow-lg border-l-4 border-pink-400 rounded-lg transform group-hover:scale-[1.02] transition-transform duration-300"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)' }}
                >
                  <ArticleFeatured articles={articles} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 transform rotate-45 flex items-center justify-center shadow-lg rounded-md">
                    <div className="text-white text-xs font-bold transform -rotate-45">⭐</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
