import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui'
import { NewsArticle } from '@/config/home.config'

interface NewsArticlesSectionProps {
  articles: NewsArticle[]
}

export const NewsArticlesSection: React.FC<NewsArticlesSectionProps> = ({ articles }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest News & Articles
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with our latest news, events, and spiritual insights.
            </p>
          </div>
          <Link
            href="/news"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            View All →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card
              key={article.id}
              title={article.title}
              description={article.excerpt}
              href={article.href}
              date={article.date}
              className="hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </div>
    </section>
  )
}