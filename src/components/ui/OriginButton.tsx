import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface OriginButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  bgColor?: string;
  hoverBgColor?: string;
}

export const OriginButton = React.forwardRef<HTMLAnchorElement, OriginButtonProps>(
  ({ children, className, href, bgColor = 'bg-primary', hoverBgColor = 'bg-black', ...props }, ref) => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCoords({ x, y });
      setIsHovered(true);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCoords({ x, y });
      setIsHovered(false);
    };

    return (
      <a
        ref={ref}
        href={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative overflow-hidden inline-flex items-center justify-center rounded-full text-white font-bold transition-all duration-300 active:scale-[0.98] group z-10",
          bgColor,
          className
        )}
        {...props}
      >
        {/* Cursor-aware hover overlay */}
        <motion.span
          className={cn("absolute rounded-full pointer-events-none -z-10", hoverBgColor)}
          style={{
            width: '320%',
            height: '320%',
            left: coords.x,
            top: coords.y,
            x: '-50%',
            y: '-50%',
          }}
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 18,
            mass: 0.5,
          }}
        />
        {/* Content wrapper to ensure text is visible on top of background */}
        <span className="relative z-10 flex items-center justify-center gap-2 pointer-events-none">
          {children}
        </span>
      </a>
    );
  }
);

OriginButton.displayName = 'OriginButton';
