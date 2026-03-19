import { motion } from 'framer-motion'

const LoadingScreen = ({ isLoading }) => (
  <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: isLoading ? 1 : 0, pointerEvents: isLoading ? 'auto' : 'none' }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    className="fixed inset-0 z-[70] flex items-center justify-center bg-black"
  >
    <div className="relative flex flex-col items-center gap-6">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
        className="h-20 w-20 rounded-full border border-violetGlow/60 border-t-neonBlue"
      />
      <motion.p
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Number.POSITIVE_INFINITY, repeatType: 'reverse', duration: 1.1 }}
        className="font-display text-sm tracking-[0.35em] text-white/70"
      >
        INITIALIZING PORTFOLIO
      </motion.p>
    </div>
  </motion.div>
)

export default LoadingScreen
