import { useState, useCallback, useRef, useEffect } from 'react'

interface AccordionItem {
  id: string
  title: string
  content: string
  scripture?: string
}

interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  className?: string
}

export const Accordion: React.FC<AccordionProps> = ({ 
  items, 
  allowMultiple = false, 
  className = '' 
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map())

  const toggleItem = useCallback((itemId: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        if (!allowMultiple) {
          newSet.clear()
        }
        newSet.add(itemId)
      }
      return newSet
    })
  }, [allowMultiple])

  const handleKeyDown = useCallback((event: React.KeyboardEvent, itemId: string) => {
    const buttons = Array.from(buttonRefs.current.values())
    const currentIndex = buttons.findIndex(btn => btn.getAttribute('data-item-id') === itemId)
    
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        const nextIndex = (currentIndex + 1) % buttons.length
        buttons[nextIndex]?.focus()
        break
      case 'ArrowUp':
        event.preventDefault()
        const prevIndex = currentIndex === 0 ? buttons.length - 1 : currentIndex - 1
        buttons[prevIndex]?.focus()
        break
      case 'Home':
        event.preventDefault()
        buttons[0]?.focus()
        break
      case 'End':
        event.preventDefault()
        buttons[buttons.length - 1]?.focus()
        break
    }
  }, [])

  const setButtonRef = useCallback((itemId: string) => (ref: HTMLButtonElement | null) => {
    if (ref) {
      buttonRefs.current.set(itemId, ref)
    } else {
      buttonRefs.current.delete(itemId)
    }
  }, [])

  return (
    <div className={`space-y-2 ${className}`} role="region" aria-label="Salvation steps">
      {items.map((item, index) => {
        const isOpen = openItems.has(item.id)
        const panelId = `panel-${item.id}`
        const buttonId = `button-${item.id}`

        return (
          <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <h3>
              <button
                ref={setButtonRef(item.id)}
                id={buttonId}
                data-item-id={item.id}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset transition-colors"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900 pr-4">
                    {index + 1}. {item.title}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 mb-3 leading-relaxed">
                  {item.content}
                </p>
                {item.scripture && (
                  <blockquote className="border-l-4 border-primary-500 pl-4 italic text-primary-700 bg-primary-50 py-2 rounded-r">
                    {item.scripture}
                  </blockquote>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}