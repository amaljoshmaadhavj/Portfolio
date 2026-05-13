import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export const StatusIndicator = ({ className }: { className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "inline-flex items-center bg-white border border-border rounded-full shadow-sm transition-all cursor-default overflow-hidden h-7",
        isHovered ? "px-4 gap-3 border-emerald-500/30" : "px-[9px] gap-0",
        className
      )}
    >
      <div className="relative flex h-2 w-2 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.span 
            initial={{ width: 0, opacity: 0, x: -10 }}
            animate={{ width: "auto", opacity: 1, x: 0 }}
            exit={{ width: 0, opacity: 0, x: -10 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="text-[10px] uppercase font-black tracking-[0.3em] text-emerald-900 whitespace-nowrap"
          >
            Available for Collaboration
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
