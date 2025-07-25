import { useState, useEffect } from 'react'

interface UseTypingAnimationProps {
  text: string
  speed?: number
  delay?: number
}

export const useTypingAnimation = ({ 
  text, 
  speed = 100, 
  delay = 0 
}: UseTypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const startTyping = () => {
      setIsTyping(true)
      let currentIndex = 0

      const typeNextCharacter = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
          timeoutId = setTimeout(typeNextCharacter, speed)
        } else {
          setIsTyping(false)
          setIsComplete(true)
        }
      }

      typeNextCharacter()
    }

    timeoutId = setTimeout(startTyping, delay)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [text, speed, delay])

  return { displayedText, isTyping, isComplete }
}