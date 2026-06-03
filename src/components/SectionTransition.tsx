import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  delay?: number;
}

// Higher-end professional ease
const professionalEase = [0.4, 0, 0.2, 1] as const;

export const SectionTransition = ({ children, className, innerClassName, delay = 0 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        className={innerClassName}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: 0.8, 
          delay: delay,
          ease: professionalEase
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const StaggerWrapper = ({ children, delay = 0.08, className }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: delay,
            delayChildren: 0.05,
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ 
        duration: 0.6,
        ease: professionalEase
      }}
    >
      {children}
    </motion.div>
  );
};
