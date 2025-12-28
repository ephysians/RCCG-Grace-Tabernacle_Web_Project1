// import React from 'react'
// import Link from 'next/link'
// import { HeroConfig } from '@/config/home.config'

// interface HeroSectionProps {
//   config: HeroConfig
// }

// export const HeroSection: React.FC<HeroSectionProps> = ({ config }) => {
//   return (
//     <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 lg:py-24" aria-labelledby="hero-title">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//           {config.headline}
//         </h1>
//         <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
//           {config.subtext}
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <Link
//             href={config.primaryCTA.href}
//             className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 transition-all duration-200 min-w-[200px]"
//             aria-label={`${config.primaryCTA.text} - Navigate to ${config.primaryCTA.href}`}
//           >
//             {config.primaryCTA.text}
//           </Link>
//           <Link
//             href={config.secondaryCTA.href}
//             className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 transition-all duration-200 min-w-[200px]"
//             aria-label={`${config.secondaryCTA.text} - Navigate to ${config.secondaryCTA.href}`}
//           >
//             {config.secondaryCTA.text}
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeroConfig } from '@/config/home.config'

interface HeroSectionProps {
  config: HeroConfig
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config }) => {
  return (
    <section
      className="relative min-h-screen text-white overflow-hidden flex items-center"
      aria-labelledby="hero-title"
    >
      {/* Background Image */}
      <Image
        src="/assets/images/bg2a.png"
        alt="heros-bg"
        fill
        priority
        className="object-cover object-center"
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          id="hero-title"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-cinzel"
        >
          {config.headline}
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed font-cinzel">
          {config.subtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={config.primaryCTA.href}
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-all duration-200 min-w-[200px]"
          >
            {config.primaryCTA.text}
          </Link>

          <Link
            href={config.secondaryCTA.href}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-all duration-200 min-w-[200px]"
          >
            {config.secondaryCTA.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
