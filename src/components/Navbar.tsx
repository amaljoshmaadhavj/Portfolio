import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronRight, Mail, FileText, Sun, Moon, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '../context/ThemeContext';
import StaggeredMenu from './ui/StaggeredMenu';

// Reusable text scramble hook
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 40;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const useTextScramble = (targetText: string) => {
  const [text, setText] = useState(targetText);
  const intervalRef = useRef<any>(null);

  const scramble = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = targetText
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          return CHARS[randomCharIndex];
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= targetText.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setText(targetText);
  };

  return { text, scramble, stopScramble };
};

const ConnectButton = ({ isMobile = false }: { isMobile?: boolean }) => {
  const { text, scramble, stopScramble } = useTextScramble("CONNECT");
  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      href="mailto:amal018josephmathi@gmail.com"
      className={cn(
        "group relative overflow-hidden font-bold bg-white text-black rounded-full transition-all duration-200 uppercase tracking-wide flex items-center justify-center gap-1.5 z-10",
        isMobile ? "w-full py-3 text-xs" : "px-5 py-2 text-[11px] whitespace-nowrap"
      )}
    >
      <Mail size={isMobile ? 14 : 12} className="relative z-10" />
      <span className="relative z-10">{text}</span>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-black/0 via-black/10 to-black/0 opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none"
      />
    </motion.a>
  );
};

const ResumeButton = ({ isMobile = false, onClick, open }: { isMobile?: boolean, onClick: () => void, open: boolean }) => {
  const { text, scramble, stopScramble } = useTextScramble("RESUME");
  return (
    <motion.button
      type="button"
      onClick={onClick}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "group relative overflow-hidden bg-primary text-white font-bold rounded-full transition-all duration-200 uppercase tracking-wide flex items-center justify-center gap-1.5 z-10",
        isMobile ? "w-full py-3 text-xs" : "px-5 py-2 text-[11px] whitespace-nowrap"
      )}
      aria-expanded={open}
      aria-haspopup="menu"
    >
      <FileText size={isMobile ? 14 : 12} className="relative z-10" />
      <span className="relative z-10">{text}</span>
      <ChevronRight
        size={isMobile ? 14 : 12}
        className={cn("relative z-10 transition-transform duration-200", open ? "rotate-90" : "")}
      />
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none"
      />
    </motion.button>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isStaggeredMenuOpen, setIsStaggeredMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home section', link: '#home' },
    { label: 'About', ariaLabel: 'Learn about me', link: '#about' },
    { label: 'Skills', ariaLabel: 'View my skills', link: '#skills' },
    { label: 'Projects', ariaLabel: 'View my projects', link: '#projects' },
    { label: 'Experience', ariaLabel: 'View my experience', link: '#experience' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' },
  ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/amaljoshmaadhavj' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/amaljoshmaadhavj/' },
    { label: 'Email', link: 'mailto:amal018josephmathi@gmail.com' }
  ];

  return (
    <>
      {/* Mobile Staggered Overlay Navigation */}
      <StaggeredMenu
        isFixed={true}
        className="block md:hidden"
        isOpen={isStaggeredMenuOpen}
        onClose={() => setIsStaggeredMenuOpen(false)}
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        colors={['#111111', '#5227FF']}
        accentColor="#5227FF"
        onMenuOpen={() => setIsStaggeredMenuOpen(true)}
        onMenuClose={() => setIsStaggeredMenuOpen(false)}
      />

      <nav className={cn(
        "fixed top-10 left-0 right-0 z-50 font-display flex justify-center px-4 transition-all duration-500",
        isStaggeredMenuOpen ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"
      )}>
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={cn(
            'flex items-center gap-1 bg-[#111111] rounded-full px-2 py-2 transition-all duration-500',
            isScrolled ? 'shadow-2xl shadow-black/50' : 'shadow-xl shadow-black/20'
          )}
        >
<span className="text-white text-sm font-bold tracking-tighter uppercase whitespace-nowrap">
              AJM <span className="text-primary">/&gt;</span>
            </span>

            {/* Theme Toggle */}
          <motion.button
            id="theme-toggle"
            aria-label="Toggle dark/light mode"
            onClick={toggleTheme}
            whileTap={{ scale: 0.88, rotate: 15 }}
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200 mr-1 border border-white/10 flex-shrink-0"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={14} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={14} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Separator */}
          <div className="w-px h-5 bg-white/10 mr-1" />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] text-white/60 hover:text-white font-medium px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200 uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2 pl-2 ml-1 border-l border-white/10">
            <ConnectButton />
            <ResumeDropdown />
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200 ml-1 border border-white/10 flex-shrink-0"
            onClick={() => setIsStaggeredMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={14} />
          </button>
        </motion.div>
      </nav>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-[2px] bg-primary origin-left z-50"
        style={{ scaleX }}
      />
    </>
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
    <div className={cn('relative', isMobile ? 'w-full' : '')} ref={ref}>
      <ResumeButton isMobile={isMobile} onClick={() => setOpen((s) => !s)} open={open} />

      {open && (
        <div
          className={cn(
            'absolute right-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-xl z-50 overflow-hidden',
            isMobile
              ? 'relative mt-0 w-full shadow-none border-t-0 rounded-t-none'
              : 'w-44'
          )}
        >
          <a
            href={filePath}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          >
            View
          </a>
          <a
            href={filePath}
            download={downloadName}
            className="block px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          >
            Download
          </a>
        </div>
      )}
    </div>
  );
};
