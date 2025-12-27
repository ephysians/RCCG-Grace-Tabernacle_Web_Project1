import { useState, useCallback } from 'react'

export interface ChatMessage {
  id: string
  text: string
  sender: 'user' | 'support'
  timestamp: Date
}

export const useChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hello! How can we help you today?',
      sender: 'support',
      timestamp: new Date()
    }
  ])

  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const closeChat = useCallback(() => {
    setIsOpen(false)
  }, [])

  const addMessage = useCallback((text: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }, [])

  return {
    isOpen,
    messages,
    toggleChat,
    closeChat,
    addMessage
  }
}