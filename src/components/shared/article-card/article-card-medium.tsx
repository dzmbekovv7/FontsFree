import { getArticleLink } from '@/lib/utils'
import type { IArticle } from '@/types/interfaces'

interface ArticleCardMediumProps {
  article: IArticle
}

const ArticleCardMedium: React.FC<ArticleCardMediumProps> = ({ article }) => {
  return (
    <a
      href={getArticleLink(article)}
      className="block group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#121827] via-[#1f2937] to-[#111827] border border-gray-800 p-5 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.015]"
    >
      {/* Glow behind image */}
      <div className="absolute top-0 left-0 w-full h-full bg-cyan-400 opacity-10 blur-2xl rounded-full pointer-events-none scale-150 group-hover:opacity-20 transition duration-500"></div>

      <div className=" z-10">
        {/* Image */}
        <div className="sm:col-span-1">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-40 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="sm:col-span-2 space-y-2">
          <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[11px] font-semibold px-2 py-1 rounded-full shadow-sm tracking-wider uppercase">
            {article.type}
          </span>

          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>

          <p className="text-white text-sm leading-relaxed line-clamp-2 font-light">
            {article.summary}
          </p>

          <p className="text-xs text-gray-500 mt-1 italic">
            {new Date(article.published_date ?? '').toLocaleDateString()}
          </p>
        </div>
      </div>
    </a>
  )
}

export default ArticleCardMedium
