import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavigationItem as NavItem } from '@/config/navigation.config'
import { Dropdown } from '@/components/ui/Dropdown'

interface NavigationItemProps {
  item: NavItem
  isMobile?: boolean
  onMobileMenuClose?: () => void
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  isMobile = false,
  onMobileMenuClose
}) => {
  const router = useRouter()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const isActive = (href: string) => router.pathname === href

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false)
    if (!isMobile) {
      buttonRef.current?.focus()
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        if (item.children) {
          event.preventDefault()
          handleToggleDropdown()
        }
        break
      case 'Escape':
        handleCloseDropdown()
        break
      case 'ArrowDown':
        if (item.children && !isDropdownOpen) {
          event.preventDefault()
          setIsDropdownOpen(true)
        }
        break
    }
  }

  if (!item.children) {
    // Simple navigation link
    const linkClasses = isMobile
      ? `block px-4 py-2 text-base font-medium transition-colors focus:outline-none focus:bg-gray-50 focus:text-primary-600 ${
          isActive(item.href)
            ? 'text-primary-600 bg-primary-50'
            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
        }`
      : `px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
          isActive(item.href)
            ? 'text-primary-600 bg-primary-50'
            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
        }`

    return (
      <Link
        href={item.href}
        className={linkClasses}
        onClick={onMobileMenuClose}
      >
        {item.label}
      </Link>
    )
  }

  // Navigation item with dropdown
  if (isMobile) {
    return (
      <div>
        <button
          onClick={handleToggleDropdown}
          className="w-full flex items-center justify-between px-4 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:text-primary-600"
          aria-expanded={isDropdownOpen}
          aria-controls={`mobile-dropdown-${item.label.replace(/\s+/g, '-').toLowerCase()}`}
          onKeyDown={handleKeyDown}
        >
          {item.label}
          <svg
            className={`w-5 h-5 transition-transform ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <Dropdown
          items={item.children}
          isOpen={isDropdownOpen}
          onClose={handleCloseDropdown}
          onItemClick={onMobileMenuClose}
          id={`mobile-dropdown-${item.label.replace(/\s+/g, '-').toLowerCase()}`}
          isMobile={true}
        />
      </div>
    )
  }

  return (
    <div className="relative" data-dropdown>
      <button
        ref={buttonRef}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
          isActive(item.href) || isDropdownOpen
            ? 'text-primary-600 bg-primary-50'
            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
        }`}
        onClick={handleToggleDropdown}
        onKeyDown={handleKeyDown}
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
        aria-controls={`dropdown-${item.label.replace(/\s+/g, '-').toLowerCase()}`}
      >
        {item.label}
        <svg 
          className={`inline-block ml-1 w-4 h-4 transition-transform ${
            isDropdownOpen ? 'rotate-180' : ''
          }`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <Dropdown
        items={item.children}
        isOpen={isDropdownOpen}
        onClose={handleCloseDropdown}
        id={`dropdown-${item.label.replace(/\s+/g, '-').toLowerCase()}`}
      />
    </div>
  )
}