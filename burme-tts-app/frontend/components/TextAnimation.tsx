'use client'

import { useEffect, useState } from 'react'

interface TextAnimationProps {
  text: string
  className?: string
}

export default function TextAnimation({ text, className = '' }: TextAnimationProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, text])

  useEffect(() => {
    setDisplayText('')
    setCurrentIndex(0)
  }, [text])

  return (
    <div className={`font-mono ${className}`}>
      {displayText}
      {currentIndex < text.length && (
        <span className="inline-block w-0.5 h-5 bg-gray-400 ml-0.5 animate-pulse" />
      )}
    </div>
  )
}