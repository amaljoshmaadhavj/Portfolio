import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    let current = 0;
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 8) + 5;
      current = Math.min(current + increment, 100);
      setCount(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          document.body.style.overflow = 'auto';
        }, 400);
      }
    }, 40);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: '-100vh',
            transition: {
              duration: 1.0,
              ease: [0.76, 0, 0.24, 1]
            }
          }}
          className="fixed inset-0 bg-background z-[99999] flex flex-col justify-between p-8 md:p-16 text-foreground select-none"
        >
          {/* Header metadata */}
          <div className="flex justify-between items-center text-xs font-mono uppercase tracking-[0.3em] text-foreground/40">
            <div>Amaljosh Maadhav J</div>
            <div>Portfolio</div>
          </div>

          {/* Centered Loading Progress & Percentage */}
          <div className="flex flex-col items-center justify-center gap-6 my-auto w-full max-w-md mx-auto">
            {/* Digital Percentage Display */}
            <div className="font-mono text-7xl md:text-9xl font-bold tracking-tighter text-foreground tabular-nums">
              {count.toString().padStart(3, '0')}%
            </div>

            {/* Seamless loading bar */}
            <div className="h-[2px] w-full bg-foreground/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-foreground origin-left"
                style={{ scaleX: count / 100 }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Status indicators */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/30">Status</span>
              <span className="text-xs font-mono text-foreground/60 text-center">
                {count < 30 ? 'Initializing...' : count < 75 ? 'Preparing...' : count < 100 ? 'Almost Ready...' : 'Ready'}
              </span>
            </div>
          </div>

          {/* Bottom spacer for layout balance */}
          <div className="h-6 md:h-12" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
