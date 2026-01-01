import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { NavigationItem } from '@/config/navigation.config'

interface DropdownProps {
  items: NavigationItem[]
  isOpen: boolean
  onClose: () => void
  onItemClick?: () => void
  className?: string
  id?: string
  isMobile?: boolean
}

export const Dropdown: React.FC<DropdownProps> = ({
  items,
  isOpen,
  onClose,
  onItemClick,
  className = '',
  id,
  isMobile = false
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) return

    const dropdown = dropdownRef.current
    if (!dropdown) return

    const links = Array.from(dropdown.querySelectorAll('a')) as HTMLAnchorElement[]
    const currentIndex = links.findIndex(link => link === document.activeElement)

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        const nextIndex = currentIndex < links.length - 1 ? currentIndex + 1 : 0
        links[nextIndex]?.focus()
        break
      case 'ArrowUp':
        event.preventDefault()
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : links.length - 1
        links[prevIndex]?.focus()
        break
      case 'Escape':
        event.preventDefault()
        onClose()
        break
      case 'Tab':
        if (!event.shiftKey && currentIndex === links.length - 1) {
          onClose()
        } else if (event.shiftKey && currentIndex === 0) {
          onClose()
        }
        break
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !isMobile && !target.closest('[data-dropdown]')) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, isMobile, onClose])

  useEffect(() => {
    if (isOpen && !isMobile) {
      const firstLink = dropdownRef.current?.querySelector('a') as HTMLAnchorElement
      firstLink?.focus()
    }
  }, [isOpen, isMobile])

  if (!isOpen) return null

  const baseClasses = isMobile
    ? 'pl-4 bg-gray-50'
    : 'absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50'

  return (
    <div
      ref={dropdownRef}
      id={id}
      className={`${baseClasses} ${className}`}
      role="menu"
      aria-orientation="vertical"
      onKeyDown={handleKeyDown}
    >
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`block px-4 py-2 text-sm transition-colors focus:outline-none focus:bg-blue-50 focus:text-blue-600 text-blue-600 hover:text-blue-700 hover:bg-blue-50 ${
            isMobile ? 'text-blue-600' : ''
          }`}
          role="menuitem"
          onClick={() => {
            onItemClick?.()
            onClose()
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}