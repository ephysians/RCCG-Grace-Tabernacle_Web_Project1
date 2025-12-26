import React from 'react'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { navigationConfig } from '@/config/navigation.config'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation items={navigationConfig} />
      <main className="flex-1" role="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}