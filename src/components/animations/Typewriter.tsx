import { useState, useEffect } from 'react'

interface TypewriterProps {
  words: string[]
  className?: string
  speed?: number
  deleteSpeed?: number
  pauseDuration?: number
}

export default function Typewriter({
  words,
  className = '',
  speed = 80,
  deleteSpeed = 40,
  pauseDuration = 2000,
}: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[index]

    if (!isDeleting && text === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && text === '') {
      setIsDeleting(false)
      setIndex((index + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1)
      )
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index, words, speed, deleteSpeed, pauseDuration])

  return (
    <span className={className}>
      {text}
      <span className="animate-blink text-coral">|</span>
    </span>
  )
}
