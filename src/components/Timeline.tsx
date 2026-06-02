import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useInView, animate, useTransform, AnimatePresence } from 'framer-motion';
import { SectionTransition } from './SectionTransition';

interface TimelineItemProps {
  year: string;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  isLeft: boolean;
  progress: any;
  index: number;
  total: number;
}

const YearCounter = ({ targetYear }: { targetYear: number }) => {
  const [count, setCount] = useState(2005);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(2005, targetYear, {
        duration: 3,
        ease: [0.16, 1, 0.3, 1], // Custom ultra-smooth easeOutExpo
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, targetYear]);

  return <span ref={ref}>{count}</span>;
};

const TimelineItem = ({ year, type, title, subtitle, description, isLeft, progress, index, total }: TimelineItemProps) => {
  const targetYear = parseInt(year);
  const activationPoint = (index) / (total); 
  const isActiveTransform = useTransform(progress, (v: number) => v >= activationPoint);
  const [active, setActive] = useState(progress.get() >= activationPoint);

  useEffect(() => {
    // Sync initial state
    setActive(progress.get() >= activationPoint);
    
    return isActiveTransform.on("change", (v) => setActive(v));
  }, [isActiveTransform, progress, activationPoint]);
  
  return (
    <div className={`flex flex-col md:flex-row w-full mb-12 md:mb-24 items-start md:items-center justify-between ${isLeft ? 'md:flex-row-reverse' : ''} relative`}>
      {/* Mobile Dot */}
      <div className="absolute left-[19px] top-0 bottom-[-48px] w-[1px] bg-border md:hidden last:bottom-0">
        <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-primary" />
      </div>
      
      {/* Content Side */}
      <div className="w-full md:w-[45%] pl-12 md:pl-0">
        <SectionTransition delay={0.1} className={`flex flex-col md:items-start md:text-left`}>
          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
            <span className="text-primary font-display font-bold uppercase text-xs tracking-widest opacity-80 bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
              {type}
            </span>
            <span className="md:hidden text-lg font-bold text-foreground/40 hover:text-foreground transition-colors">
              <YearCounter targetYear={targetYear} />
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-display font-bold mb-2 text-foreground tracking-tight">
            {title}
          </h3>
          <h4 className="text-base md:text-lg font-medium text-primary/60 mb-4">
            {subtitle}
          </h4>
          <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed max-w-md">
            {description}
          </p>
        </SectionTransition>
      </div>

      <div className="hidden md:flex w-[10%] justify-center relative">
        <motion.div 
          animate={{ 
            borderColor: active ? "var(--primary)" : "rgb(226, 232, 240)",
            scale: active ? 1.1 : 1
          }}
          className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center z-10 shadow-lg transition-all duration-500 relative"
        >
           {/* Primary Glow Ring */}
           <AnimatePresence>
             {active && (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 0.2, scale: 1.5 }}
                 exit={{ opacity: 0, scale: 0.5 }}
                 className="absolute inset-0 rounded-full bg-primary animate-ping"
               />
             )}
           </AnimatePresence>
           
           {/* Inner Pulse Dot */}
           <motion.div 
             animate={{ 
               backgroundColor: active ? "rgb(51, 65, 85)" : "rgb(226, 232, 240)",
               boxShadow: active ? "0 0 20px rgba(51, 65, 85, 0.6)" : "none"
             }}
             className="w-2.5 h-2.5 rounded-full z-20 transition-colors"
           />
        </motion.div>
      </div>

      {/* Year Side */}
      <div className="hidden md:flex md:w-[45%]">
        <SectionTransition delay={0.2} className={`flex w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
          <span className="text-5xl md:text-7xl lg:text-9xl font-display font-extrabold text-foreground/[0.08] tracking-normal hover:text-foreground/20 transition-all duration-500 select-none">
            <YearCounter targetYear={targetYear} />
          </span>
        </SectionTransition>
      </div>
    </div>
  );
};

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 80%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const journeys = [
    {
      year: "2023",
      type: "Education",
      title: "Saveetha Engineering College",
      subtitle: "Bachelor of Technology in Artificial Intelligence and Data Science (2023 – 2027)",
      description: "Building strong foundations in Artificial Intelligence, Machine Learning, Data Science, and intelligent system development while actively participating in technical projects and innovation programs."
    },
    {
      year: "2024",
      type: "Implant Training",
      title: "Artificial Intelligence Training — KaviTamil Solutions",
      subtitle: "Implant Training",
      description: "Completed implant training focused on Artificial Intelligence concepts, practical machine learning workflows, and real-world AI applications with hands-on exposure to industry practices."
    },
    {
      year: "2024",
      type: "Achievement",
      title: "Flipkart GRID 6.0 Robotics Challenge — Semi Finalist",
      subtitle: "National Level Competition",
      description: "Designed and prototyped an autonomous robot for warehouse automation during this prestigious national-level innovation challenge, focusing on intelligent navigation and automation systems."
    },
    {
      year: "2025",
      type: "Internship",
      title: "Machine Learning Intern — CodSoft (Online)",
      subtitle: "Professional Internship",
      description: "Worked on machine learning projects involving data preprocessing, predictive modeling, and algorithm implementation while gaining practical experience in AI development workflows."
    },
    {
      year: "2025",
      type: "Achievement",
      title: "NASSCOM Automation Using Agentic AI — Finalist",
      subtitle: "National Automation Challenge",
      description: "Developed intelligent AI agents for process automation and advanced workflow optimization, reaching the finals of this industry-recognized national automation challenge."
    },
    {
      year: "2025",
      type: "Hackathon",
      title: "Smart India Hackathon — Participant",
      subtitle: "National Hackathon",
      description: "Developed a Federated AI Framework for Intelligent Recruitment and Document Authentication, focusing on secure AI-driven hiring workflows and verification systems."
    },
    {
      year: "2025",
      type: "Achievement",
      title: "VIT Hackathrone — Finalist",
      subtitle: "Hackathon Finalist",
      description: "Built an enhanced Federated AI Framework for Intelligent Recruitment and Document Authentication with advanced intelligent features, scalability improvements, and optimized automation capabilities."
    }
  ];

  return (
    <div ref={containerRef} className="relative py-12 px-2 md:px-0">
      {/* Vertical Line - Desktop Base */}
      <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-border hidden md:block"></div>
      
      {/* Animated Progress Line - Desktop */}
      <motion.div 
        className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-primary origin-top hidden md:block z-10 shadow-[0_0_15px_rgba(51,65,85,0.3)]"
        style={{ scaleY }}
      />

      {/* Progress Head Dot - Desktop */}
      <motion.div
        className="absolute left-[50%] top-0 w-3 h-3 rounded-full bg-primary hidden md:block z-20"
        style={{ 
          x: "-50%",
          top: "0%",
          y: useSpring(useScroll({ target: containerRef, offset: ["start 80%", "end 80%"] }).scrollYProgress, { stiffness: 100, damping: 30 })
        }}
        animate={{
          top: `${scrollYProgress.get() * 100}%`
        }}
      />
      
      {/* Mobile Animated Line */}
      <motion.div 
        className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-primary origin-top md:hidden z-10"
        style={{ scaleY }}
      />

      <div className="flex flex-col items-start md:items-center">
        {journeys.map((item, index) => (
          <TimelineItem 
            key={index}
            {...item}
            isLeft={index % 2 === 0}
            progress={scrollYProgress}
            index={index}
            total={journeys.length}
          />
        ))}
      </div>
    </div>
  );
};
