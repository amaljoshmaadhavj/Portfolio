import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Reveal = ({ children, className = '', y = 40 }) => {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const ctx = gsap.context(() => {
      gsap.fromTo(
        node,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 85%',
          },
        },
      )
    }, ref)

    return () => ctx.revert()
  }, [y])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default Reveal
