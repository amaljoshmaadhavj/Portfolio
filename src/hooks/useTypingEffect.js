import { useEffect, useState } from 'react'

export const useTypingEffect = (phrases, speed = 90, delay = 1600) => {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length]
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          const next = current.slice(0, text.length + 1)
          setText(next)
          if (next === current) {
            setTimeout(() => setIsDeleting(true), delay)
          }
        } else {
          const next = current.slice(0, text.length - 1)
          setText(next)
          if (!next) {
            setIsDeleting(false)
            setPhraseIndex((prev) => prev + 1)
          }
        }
      },
      isDeleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timer)
  }, [text, isDeleting, phraseIndex, phrases, speed, delay])

  return text
}
