import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface SpotlightButtonProps extends React.ComponentPropsWithoutRef<typeof motion.a> {
  children: React.ReactNode;
}

export const SpotlightButton = React.forwardRef<HTMLAnchorElement, SpotlightButtonProps>(
  ({ children, className, href, ...props }, ref) => {
    const btnRef = useRef<HTMLAnchorElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const button = btnRef.current;
      const span = spanRef.current;
      if (!button || !span) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const width = rect.width;
        // Calculate coordinate relative to the button boundary to prevent text-hover jitter
        const offset = e.clientX - rect.left;
        const left = `${(offset / width) * 100}%`;

        span.animate({ left }, { duration: 250, fill: 'forwards' });
      };

      const handleMouseLeave = () => {
        span.animate({ left: '50%' }, { duration: 150, fill: 'forwards' });
      };

      button.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        button.removeEventListener('mousemove', handleMouseMove);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, []);

    return (
      <motion.a
        whileTap={{ scale: 0.985 }}
        ref={(node) => {
          // Handle both forwarded ref and local ref
          (btnRef as any).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as any).current = node;
        }}
        href={href}
        className={cn(
          "relative overflow-hidden rounded-full bg-black dark:bg-white px-10 h-16 text-base font-bold text-white dark:text-black flex items-center justify-center transition-all duration-300 group z-10 border border-white/10 dark:border-black/10 shadow-lg cursor-pointer",
          className
        )}
        {...props}
      >
        <span className="pointer-events-none relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
        <span
          ref={spanRef}
          className="pointer-events-none absolute left-[50%] top-[50%] h-44 w-44 -translate-x-[50%] -translate-y-[50%] rounded-full bg-white/20 dark:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        />
      </motion.a>
    );
  }
);

SpotlightButton.displayName = 'SpotlightButton';
