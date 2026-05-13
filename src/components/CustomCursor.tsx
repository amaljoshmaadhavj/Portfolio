import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBounds, setHoveredBounds] = useState({ width: 0, height: 0, x: 0, y: 0, borderRadius: '50%' });

  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const outerSpringConfig = { damping: 20, stiffness: 150, mass: 0.6 };
  const outerXSpring = useSpring(cursorX, outerSpringConfig);
  const outerYSpring = useSpring(cursorY, outerSpringConfig);

  useEffect(() => {
    // Hide cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }
    
    setIsVisible(true);
    document.body.style.cursor = 'none';

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) {
        setIsVisible(true);
        document.body.style.cursor = 'none';
      }
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.group') ||
        target.closest('[role="button"]');
        
      if (interactiveEl && !target.closest('.no-cursor-effect') && !target.closest('nav')) {
        const el = (interactiveEl === true ? target : interactiveEl) as HTMLElement;
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        
        setIsHovering(true);
        setHoveredBounds({
          width: rect.width,
          height: rect.height,
          x: rect.left,
          y: rect.top,
          borderRadius: style.borderRadius || '8px'
        });
      } else {
        setIsHovering(false);
      }
    };

    const updateRandomColor = () => {
      const colors = [
        '#6366f1', '#ec4899', '#8b5cf6', '#10b981', '#f59e0b', 
        '#3b82f6', '#06b6d4', '#84cc16', '#ef4444', '#f97316'
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.documentElement.style.setProperty('--word-hover-color', randomColor);
    };

    const wrapWords = () => {
      const selectors = 'p, h1, h2, h3, h4, h5, h6, .section-title, li, span:not(.lucide):not(.word-span), .text-muted-foreground';
      const elements = document.querySelectorAll(selectors);
      
      elements.forEach(el => {
        if (el.getAttribute('data-wrapped') || el.closest('#home')) return;
        
        // Skip if element has complex children (like icons or other components)
        // unless it's just a simple text container
        if (el.children.length > 0 && !el.classList.contains('section-title')) {
           // We might want to skip these to avoid breaking layout/icons
           return;
        }
        
        const text = el.textContent || '';
        if (text.trim().length === 0) return;

        const words = text.split(/(\s+)/);
        el.innerHTML = '';
        words.forEach(word => {
          if (word.trim().length > 0) {
            const span = document.createElement('span');
            span.className = 'word-span';
            span.textContent = word;
            el.appendChild(span);
          } else {
            el.appendChild(document.createTextNode(word));
          }
        });
        el.setAttribute('data-wrapped', 'true');
      });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHoverStart);
    
    // Pick one color and keep it for 3 seconds
    updateRandomColor();
    const colorInterval = setInterval(updateRandomColor, 3000);
    
    // Initial wrap and also handle dynamic content
    wrapWords();
    const observer = new MutationObserver(wrapWords);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHoverStart);
      clearInterval(colorInterval);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      className="pointer-events-none fixed inset-0 z-[9999]"
    >
      {/* Main Adaptive Framing Container */}
      <motion.div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          translateX: isHovering ? hoveredBounds.x : outerXSpring,
          translateY: isHovering ? hoveredBounds.y : outerYSpring,
        }}
        animate={{
          width: isHovering ? hoveredBounds.width : 30,
          height: isHovering ? hoveredBounds.height : 30,
          x: isHovering ? 0 : -15,
          y: isHovering ? 0 : -15,
          borderRadius: isHovering ? hoveredBounds.borderRadius : '50%',
          backgroundColor: "transparent",
          border: isHovering ? "0px solid transparent" : "1px solid rgba(51, 65, 85, 0.1)",
          opacity: isHovering ? 1 : 0.4
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
          mass: 0.5
        }}
      >
        {/* Animated corner ticks - only visible on hover */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="absolute inset-[-2px]"
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary" style={{ borderTopLeftRadius: hoveredBounds.borderRadius }} />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary" style={{ borderTopRightRadius: hoveredBounds.borderRadius }} />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary" style={{ borderBottomLeftRadius: hoveredBounds.borderRadius }} />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary" style={{ borderBottomRightRadius: hoveredBounds.borderRadius }} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Center Precision Dot */}
      <motion.div
        className="absolute top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: -3,
          y: -3
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
      />

      {/* Inner small ring that only shows when not hovering */}
      {!isHovering && (
        <motion.div
          className="absolute top-0 left-0 border border-primary/20 rounded-full"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
            width: 12,
            height: 12,
            x: -6,
            y: -6
          }}
        />
      )}
    </motion.div>
  );
};
