import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavigationItem as NavItem } from '@/config/navigation.config'
import { NavigationItem } from './NavigationItem'

interface NavigationProps {
  items: NavItem[]
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [router.pathname])

  // Handle keyboard navigation and focus management
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
        const menuButton = document.querySelector('[aria-controls="mobile-menu"]') as HTMLButtonElement
        menuButton?.focus()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (mobileMenuOpen && !target.closest('nav')) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen])

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className="absolute top-0 left-0 right-0 z-50 bg-transparent"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex mt-4 items-center space-x-2">
            <img
              src="/assets/images/Logo.png"
              alt="Logo"
              className="w-20 h-20 mt-3"
            />
            <span className="text-4xl font-normal text-white font-dancing">
              Grace Tabernacle
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center  text-white font-cinzel">
            {items.map(item => (
              <NavigationItem key={item.label} item={item} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:text-primary-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={
              mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-200"
          >
            {items.map(item => (
              <NavigationItem
                key={item.label}
                item={item}
                isMobile={true}
                onMobileMenuClose={handleMobileMenuClose}
              />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
