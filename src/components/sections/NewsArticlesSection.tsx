import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui'
import { NewsArticle } from '@/config/home.config'

interface NewsArticlesSectionProps {
  articles: NewsArticle[]
}

export const NewsArticlesSection: React.FC<NewsArticlesSectionProps> = ({ articles }) => {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="news-section-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
          <header className="flex-1">
            <h2 id="news-section-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
              Latest News & Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl font-sans">
              Stay updated with our latest news, events, and spiritual insights.
            </p>
          </header>
          <Link
            href="/news"
            className="text-primary-600 hover:text-primary-700 font-medium transition-colors font-sans duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md px-2 py-1 whitespace-nowrap"
            aria-label="View all news articles"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-sans gap-6 lg:gap-8">
          {articles.map((article) => (
            <Card
              key={article.id}
              title={article.title}
              description={article.excerpt}
              href={article.href}
              date={article.date}
              className="hover:scale-[1.02] transition-transform duration-200 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 font-sans"
            />
          ))}
        </div>
      </div>
    </section>
  )
}