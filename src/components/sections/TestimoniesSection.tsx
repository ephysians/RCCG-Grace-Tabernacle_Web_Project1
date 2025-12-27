import React, { useState } from 'react'
import { TestimonyCard } from '../common/TestimonyCard'
import { testimonies } from '../../config/community.config'
import { Testimony } from '../../types/community'

interface TestimoniesSectionProps {
  className?: string
}

const categories: Array<{ value: Testimony['category'] | 'all'; label: string }> = [
  { value: 'all', label: 'All Testimonies' },
  { value: 'healing', label: 'Healing' },
  { value: 'breakthrough', label: 'Breakthrough' },
  { value: 'salvation', label: 'Salvation' },
  { value: 'provision', label: 'Provision' },
  { value: 'other', label: 'Other' }
]

export const TestimoniesSection: React.FC<TestimoniesSectionProps> = ({
  className = ''
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Testimony['category'] | 'all'>('all')

  const filteredTestimonies = selectedCategory === 'all' 
    ? testimonies 
    : testimonies.filter(testimony => testimony.category === selectedCategory)

  const featuredTestimonies = filteredTestimonies.filter(testimony => testimony.featured)
  const regularTestimonies = filteredTestimonies.filter(testimony => !testimony.featured)

  return (
    <section className={`py-16 bg-white ${className}`} aria-labelledby="testimonies-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 id="testimonies-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Testimonies of Faith
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Hear the amazing stories of God's faithfulness and power in the lives of our church family members. 
            These testimonies inspire and encourage us all in our faith journey.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                  selectedCategory === category.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-pressed={selectedCategory === category.value}
              >
                {category.label}
              </button>
            ))}
          </div>
        </header>

        {/* Featured Testimonies */}
        {featuredTestimonies.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Featured Testimonies
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredTestimonies.map((testimony) => (
                <TestimonyCard 
                  key={testimony.id} 
                  testimony={testimony}
                  className="transform hover:scale-105 transition-transform duration-200"
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular Testimonies */}
        {regularTestimonies.length > 0 && (
          <div>
            {featuredTestimonies.length > 0 && (
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                More Testimonies
              </h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularTestimonies.map((testimony) => (
                <TestimonyCard 
                  key={testimony.id} 
                  testimony={testimony}
                  className="transform hover:scale-105 transition-transform duration-200"
                />
              ))}
            </div>
          </div>
        )}

        {/* No testimonies message */}
        {filteredTestimonies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No testimonies found for the selected category.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <footer className="text-center mt-12">
          <div className="bg-primary-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Share Your Testimony
            </h3>
            <p className="text-gray-600 mb-6">
              Has God done something amazing in your life? We'd love to hear your story and share it to encourage others in their faith journey.
            </p>
            <a 
              href="mailto:testimonies@gracetabernacle.org" 
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <span className="mr-2" aria-hidden="true">📝</span>
              Submit Your Testimony
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}