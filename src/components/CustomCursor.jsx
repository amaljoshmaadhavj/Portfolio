import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const [pressed, setPressed] = useState(false)
  const pointerX = useMotionValue(-100)
  const pointerY = useMotionValue(-100)
  const x = useSpring(pointerX, { stiffness: 2200, damping: 120, mass: 0.04 })
  const y = useSpring(pointerY, { stiffness: 2200, damping: 120, mass: 0.04 })

  useEffect(() => {
    const update = (event) => {
      pointerX.set(event.clientX - 12)
      pointerY.set(event.clientY - 12)
    }
    const down = () => setPressed(true)
    const up = () => setPressed(false)

    window.addEventListener('mousemove', update)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    return () => {
      window.removeEventListener('mousemove', update)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [pointerX, pointerY])

  return (
    <motion.div
      className="pointer-events-none fixed z-[80] hidden md:block"
      style={{ x, y }}
      animate={{ scale: pressed ? 0.72 : 1 }}
      transition={{ type: 'spring', stiffness: 900, damping: 45, mass: 0.12 }}
    >
      <div className="h-6 w-6 rounded-full border border-neonBlue/70 bg-violetGlow/20 shadow-blueGlow" />
    </motion.div>
  )
}

export default CustomCursor
