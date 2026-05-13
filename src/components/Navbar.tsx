import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-display bg-white border-b border-border/10",
        isScrolled ? "py-4 shadow-sm" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tighter uppercase group flex items-center gap-2">
          <span className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center text-[10px] text-primary-foreground font-black group-hover:rotate-90 transition-transform duration-500">A</span>
          AJM <span className="text-primary">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground hover:text-primary transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a 
            href="mailto:amal018josephmathi@gmail.com"
            className="text-xs uppercase tracking-[0.2em] font-bold px-8 h-10 flex items-center border border-border rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Connect
          </a>

          {/* Resume dropdown: View / Download */}
          <ResumeDropdown />
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-4 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary border-b border-border/50 last:border-0"
                >
                  {link.name}
                  <ChevronRight size={16} />
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-4">
                <a 
                  href="mailto:amal018josephmathi@gmail.com"
                  className="w-full text-center text-xs uppercase tracking-[0.2em] font-bold px-6 py-4 border border-border hover:bg-foreground hover:text-background transition-all"
                >
                  Connect
                </a>
                <ResumeDropdown isMobile />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary origin-left"
        style={{ scaleX }}
      />
    </nav>
  );
};

const ResumeDropdown = ({ isMobile = false }: { isMobile?: boolean }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const filePath = '/resume/Amaljosh%20Maadhav%20J%20Resume.pdf';
  const downloadName = 'Amaljosh_Maadhav_J_Resume.pdf';

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className={cn("relative", isMobile ? "w-full" : "")} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className={cn(
          "bg-primary text-background text-xs uppercase tracking-[0.2em] font-bold px-8 h-10 rounded-full shadow-md hover:opacity-95 transition-all duration-200 flex items-center justify-center gap-2",
          isMobile ? "w-full h-14" : ""
        )}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        RESUME
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      {open && (
        <div className={cn(
          "absolute right-0 mt-2 bg-background border border-border rounded-2xl shadow-lg z-50 overflow-hidden",
          isMobile ? "relative mt-0 w-full shadow-none border-t-0 rounded-t-none" : "w-44"
        )}>
          <a
            href={filePath}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 text-sm text-muted-foreground hover:bg-muted-foreground/5"
          >
            View
          </a>
          <a
            href={filePath}
            download={downloadName}
            className="block px-4 py-3 text-sm text-muted-foreground hover:bg-muted-foreground/5"
          >
            Download
          </a>
        </div>
      )}
    </div>
  );
};
