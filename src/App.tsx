import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { cn } from '@/lib/utils';
import { CustomCursor } from './components/CustomCursor';
import { SectionTransition, StaggerWrapper, StaggerItem } from './components/SectionTransition';
import { StatusIndicator } from './components/StatusIndicator';
import { Timeline } from './components/Timeline';
import { Button } from './components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/Card';
import { Badge } from './components/ui/Badge';
import { Code as Github, Briefcase as Linkedin, Mail, ExternalLink, ArrowRight, Code, Database, Cpu, Brain, Layers, Award, CheckCircle2, ChevronDown } from 'lucide-react';
import heroBackground from './assets/Untitled design-4.jpg';
import heroHoverBackground from './assets/Untitled design-5.jpg';

function App() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  return (
    <div className="relative min-h-screen font-sans selection:bg-primary/10 selection:text-foreground bg-subtle-mesh overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        onMouseEnter={() => setIsHeroHovered(true)}
        onMouseLeave={() => setIsHeroHovered(false)}
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-36 lg:pt-24 scroll-mt-24 overflow-hidden"
      >
        {/* Cinematic Background Image Layer */}
        <div className="absolute inset-0 -z-10 rounded-none !important overflow-hidden">
          {/* Default Image */}
          <motion.img
            initial={false}
            animate={{ opacity: isHeroHovered ? 0 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            src={heroBackground}
            alt="Background Default"
            className="absolute inset-0 w-full h-full object-cover object-[80%_center] md:object-[center_15%] rounded-none"
          />

          {/* Hover Image */}
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: isHeroHovered ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            src={heroHoverBackground}
            alt="Background Hover"
            className="absolute inset-0 w-full h-full object-cover object-[80%_center] md:object-[center_15%] rounded-none"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[0.5px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto w-full">
          <div className="order-2 lg:order-1 lg:col-span-8">
            <StaggerItem className="flex flex-col items-start gap-6">
              <StatusIndicator className="border-primary/10 shadow-lg" />

              <div className="flex flex-col gap-6 w-full">
                <h2 className="text-sm md:text-base font-display font-medium uppercase tracking-[0.3em] text-muted-foreground ml-1">
                  Amaljosh Maadhav J
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-display font-bold leading-[1.05] tracking-tighter text-[#000000]">
                  AI & DATA SCIENCE <br />
                  UNDERGRADUATE<span className="text-primary">.</span>
                </h1>
                <p className="max-w-2xl text-lg md:text-xl text-muted-foreground font-light leading-relaxed mt-4">
                  Building scalable, production-ready AI systems from data to deployment.
                  Focused on end-to-end machine learning pipelines.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-8 mt-4">
                <Button size="lg" className="rounded-full px-10 h-16 text-base font-bold transition-all hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-primary/10 active:scale-[0.98]" asChild>
                  <a href="#projects">
                    VIEW RESEARCH & PROJECTS <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <div className="flex items-center gap-8 border-l border-border pl-8 py-2">
                  <a href="https://github.com/amaljoshmaadhavj" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/amaljoshmaadhavj/" target="_blank" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:amal018josephmathi@gmail.com" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </StaggerItem>
          </div>

        </div>

        {/* Subtle Decorative Elements */}
        <div className="absolute top-20 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full -z-10" />
      </section>

      {/* Mission Section */}
      <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-12">
            <SectionTransition>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 inline-flex items-center gap-4">
                <span className="w-12 h-[1px] bg-primary/20"></span>
                The Mission
              </h2>
            </SectionTransition>
          </div>

          <div className="lg:col-span-7">
            <SectionTransition delay={0.1}>
              <p className="text-base md:text-lg font-bold leading-relaxed text-[#000000]/80 mb-6 italic border-l-2 border-primary/10 pl-6">
                "Building intelligent AI systems that solve real-world problems through data, automation, and scalable machine learning.”
              </p>
            </SectionTransition>

            <StaggerWrapper className="space-y-6 text-base md:text-lg text-[#000000]/40 leading-relaxed max-w-2xl">
              <StaggerItem>
                Building strong foundations in Artificial Intelligence, Machine Learning, Data Science, and intelligent system development while actively participating in technical projects and innovation programs.
              </StaggerItem>
            </StaggerWrapper>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <SectionTransition delay={0.3} className="space-y-4">
              <h3 className="font-display font-normal uppercase text-xs tracking-[0.3em] text-[#000000]/40 -ml-[0.1em]">Focus</h3>
              <ul className="space-y-2 text-sm text-[#000000]/40">
                <li>Predictive Modeling</li>
                <li className="font-bold text-[#000000]/40">NLP & RAG</li>
                <li>AI Product Development </li>
              </ul>
            </SectionTransition>
            <SectionTransition delay={0.4} className="space-y-4">
              <h3 className="font-display font-normal uppercase text-xs tracking-[0.3em] text-[#000000]/40 -ml-[0.1em]">Interests</h3>
              <ul className="space-y-2 text-sm text-[#000000]/40">
                <li>Data Analytics</li>
                <li className="font-bold text-[#000000]/40">Cyber AI</li>
                <li>Intelligent Systems</li>
              </ul>
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-32 px-6 md:px-12 lg:px-24 bg-slate-50/50 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionTransition className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold inline-flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary/20"></span>
              My Journey
            </h2>
          </SectionTransition>

          <Timeline />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 md:px-12 lg:px-24 scroll-mt-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTransition className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold inline-flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary/20"></span>
              Technical Arsenal
            </h2>
          </SectionTransition>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="md:col-span-3">
              <SkillCard
                icon={<Brain className="w-8 h-8 text-indigo-500" />}
                title="Machine Learning"
                skills={["Regression", "Clustering", "Explainable AI", "Feature Engineering", "Scikit-Learn"]}
                className="h-full"
              />
            </div>
            <div className="md:col-span-3">
              <SkillCard
                icon={<Cpu className="w-8 h-8 text-emerald-500" />}
                title="Deep Learning & NLP"
                skills={["Transformers", "CNNs", "RAG", "LLMs", "Tf-Idf", "PyTorch", "TensorFlow"]}
                className="h-full"
              />
            </div>
            <div className="md:col-span-2">
              <SkillCard
                icon={<Code className="w-8 h-8 text-blue-500" />}
                title="Computer Vision"
                skills={["YOLO", "OCR", "OpenCV", "Object Detection"]}
                className="h-full"
              />
            </div>
            <div className="md:col-span-2">
              <SkillCard
                icon={<Database className="w-8 h-8 text-amber-500" />}
                title="Data Systems"
                skills={["MongoDB", "SQL", "FAISS Vector DB", "Pandas", "Tableau"]}
                className="h-full"
              />
            </div>
            <div className="md:col-span-2">
              <SkillCard
                icon={<Layers className="w-8 h-8 text-rose-500" />}
                title="Engineering"
                skills={["Node.js", "Docker", "FastAPI", "Microservices", "Git"]}
                className="h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Problem -> Solution -> Impact */}
      <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionTransition className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold inline-flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary/20"></span>
              The Solutions
            </h2>
            <p className="mt-4 text-muted-foreground font-light max-w-xl italic">
              A selection of engineering projects focused on real-world impact and technical depth.
            </p>
          </SectionTransition>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ProjectCard
              title="FlipVision"
              category="AI Commerce & Computer Vision"
              problem="Manual product verification and freshness assessment in e-commerce systems are time-consuming and inconsistent."
              solution="Built an AI-powered e-commerce platform using YOLO, PaddleOCR, and ResNet50 to detect brands, assess freshness, and extract expiry dates from product images."
              impact="Improves product quality assurance, automates inventory verification, and enhances intelligent retail workflows."
              tech={["YOLO", "PaddleOCR", "Django", "ResNet50"]}
              link="https://github.com/amaljoshmaadhavj/FlipVision.git"
            />
            <ProjectCard
              title="REVA AI"
              category="Recruitment Automation & Document Intel"
              problem="Traditional recruitment and document verification workflows are slow, fragmented, and prone to tampering."
              solution="Developed a federated AI ecosystem integrating OCR, ATS scoring, interview simulation, skill analysis, and intelligent verification modules."
              impact="Creates a scalable and secure AI-driven hiring ecosystem with automated candidate evaluation and document authentication."
              tech={["React", "FastAPI", "MongoDB", "DocTR OCR"]}
              link="https://github.com/amaljoshmaadhavj/REVA-AI.git"
            />
            <ProjectCard
              title="TRIAGEON"
              category="Clinical Health Tech"
              problem="Delayed identification of high-risk patients often leads to poor healthcare prioritization and avoidable complications."
              solution="Built an ML-powered digital triage platform for disease risk prediction, urgency classification, and explainable patient prioritization."
              impact="Enables faster medical risk assessment and supports healthcare teams with intelligent urgency-aware recommendations."
              tech={["Python", "React", "Flask", "Scikit-Learn"]}
              link="https://github.com/amaljoshmaadhavj/Triageon.git"
            />
            <ProjectCard
              title="TraceGuard AI"
              category="Cyber Forensics"
              problem="Most forensic investigation systems rely on cloud infrastructure, risking privacy and offline accessibility."
              solution="Created an offline AI-powered cyber investigation assistant using RAG, FAISS, and local LLMs for forensic evidence analysis."
              impact="Supports secure investigation of Windows Event Logs and network traffic in isolated and privacy-focused environments."
              tech={["Ollama", "FAISS", "Python", "RAG"]}
              link="https://github.com/amaljoshmaadhavj/TraceGuard-AI.git"
            />
            <ProjectCard
              title="MatExtractAI"
              category="Research Automation"
              problem="Scientific research PDFs are difficult to convert into structured and machine-readable datasets."
              solution="Designed an AI-powered extraction pipeline using local LLM agents and hybrid PDF parsing for evidence-backed material science data extraction."
              impact="Automates scientific data extraction workflows while improving research traceability and reproducibility."
              tech={["PyMuPDF", "Camelot", "Next.js", "Local LLMs"]}
              link="https://github.com/amaljoshmaadhavj/MatExtractAI.git"
            />
            <ProjectCard
              title="INYA Airlines"
              category="Travel & Booking Systems"
              problem="Lightweight flight booking systems often lack simple APIs for reservation tracking and cancellation workflows."
              solution="Developed a RESTful flight booking API supporting reservations, booking status tracking, multilingual responses, and refund calculations."
              impact="Simplifies airline reservation workflows with fast and lightweight backend operations."
              tech={["Node.js", "Express.js", "REST API", "JSON Storage"]}
              link="https://github.com/amaljoshmaadhavj/INYA-Airlines.git"
            />
          </div>

          {/* Explore More Projects Button */}
          <SectionTransition className="mt-20 flex justify-center">
            <Button
              onClick={() => setShowMoreProjects(!showMoreProjects)}
              className="h-12 md:h-14 px-6 md:px-8 rounded-full font-semibold transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/5 active:scale-[0.98] flex items-center gap-3"
            >
              Explore More Projects
              <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${showMoreProjects ? 'rotate-180' : ''}`} />
            </Button>
          </SectionTransition>

          {/* Additional Projects - Expandable Section */}
          <div className={`mt-16 overflow-hidden transition-all duration-700 ${showMoreProjects ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
              <ProjectCard
                title="InterviewIQ"
                category="AI Interview & Career Assistance"
                problem="Candidates lack realistic interview practice environments with detailed performance feedback."
                solution="Built an AI-powered interview practice platform with resume analysis, real-time evaluation, and intelligent feedback systems."
                impact="Helps candidates improve technical interview performance through personalized AI-driven assessments."
                tech={["Next.js", "FastAPI", "OpenRouter", "Node.js"]}
                link="https://github.com/amaljoshmaadhavj/InterviewIQ.git"
              />
              <ProjectCard
                title="ArthroCare AI"
                category="AI Clinical Decision Support"
                problem="Rheumatoid Arthritis is frequently underdiagnosed due to inconsistent symptom interpretation and fragmented analysis."
                solution="Developed an intelligent clinical decision support system for RA risk prediction, longitudinal monitoring, and personalized recommendations."
                impact="Supports early detection and personalized healthcare guidance using explainable machine learning models."
                tech={["React", "Python", "Node.js", "XGBoost"]}
                link="https://github.com/santhoshr-15/arthrocare-ai.git"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Certifications */}
      <section id="experience" className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-12">
              <SectionTransition>
                <h2 className="text-3xl md:text-4xl font-display font-bold inline-flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-primary/20"></span>
                  Experience
                </h2>
              </SectionTransition>
            </div>

            <div className="lg:col-span-8">
              <SectionTransition delay={0.1} className="relative pl-12 py-10 border-l border-border hover:border-primary transition-colors duration-500">
                <span className="absolute top-10 left-[-4px] w-2 h-2 rounded-full bg-primary" />
                <div className="mb-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold font-display uppercase tracking-tight">Artificial Intelligence Trainee</h3>
                    <p className="text-primary font-medium mt-1 uppercase tracking-widest text-sm">KaviiTamil Solutions</p>
                  </div>
                  <p className="text-muted-foreground font-medium uppercase text-xs tracking-[0.2em] bg-muted px-4 py-2 border border-border">July 2024 – August 2024</p>
                </div>
                <ul className="space-y-4 text-muted-foreground leading-relaxed">
                  <li className="flex gap-4">
                    <span className="text-primary opacity-50 font-bold tracking-tighter shrink-0">//</span>
                    Developed supervised and unsupervised ML models using Scikit-Learn on real-world datasets for predictive performance.
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary opacity-50 font-bold tracking-tighter shrink-0">//</span>
                    Implemented modular machine learning workflows from data preprocessing to feature engineering and validation.
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary opacity-50 font-bold tracking-tighter shrink-0">//</span>
                    Optimized predictive performance using practical evaluation techniques and data leakage prevention strategies.
                  </li>
                </ul>
              </SectionTransition>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <SectionTransition delay={0.3}>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60 mb-8 border-b border-border pb-4">Key Certifications</h3>
                <div className="space-y-4">
                  <CertItem title="Data Science Bootcamp" issuer="Udemy" />
                  <CertItem title="Machine Learning Beginner" issuer="Infosys Springboard" />
                  <CertItem title="CUDA at Scale" issuer="Johns Hopkins" />
                  <CertItem title="PyTorch Foundations" issuer="Packt" />
                  <CertItem title="Student Automation Dev" issuer="UiPath" />
                </div>
              </SectionTransition>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Connect */}
      <footer id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-[#000000] border-t border-white/10 relative overflow-hidden">
        {/* Decorative Background Glow */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -z-10 opacity-30" />

        <div className="max-w-7xl mx-auto flex flex-col items-start gap-24">
          <SectionTransition className="w-full">
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-12 text-white">
              LET'S BUILD THE <br />
              FUTURE OF AI<span className="text-primary">.</span>
            </h2>
            <p style={{ color: '#a2a2a2ff' }} className="text-xl md:text-2xl font-normal max-w-2xl leading-relaxed">
              Currently open to collaborations on research-driven AI products and scalable machine learning ecosystems.
            </p>
          </SectionTransition>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full pt-16 border-t border-white/10">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-white font-bold">Contact</h4>
              <a
                href="mailto:amal018josephmathi@gmail.com"
                className="group block text-base md:text-lg font-display font-bold text-white hover:text-primary transition-all duration-500 relative w-fit"
              >
                amal018josephmathi@gmail.com
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
              </a>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-white font-bold">Location</h4>
              <p className="text-base md:text-lg font-display font-bold text-white leading-tight">Chennai, India</p>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-white font-bold">Social Architecture</h4>
              <div className="flex flex-wrap gap-8">
                <a href="https://github.com/amaljoshmaadhavj" target="_blank" className="text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-2 group">
                  <Github className="w-4 h-4 opacity-70 group-hover:opacity-100 text-white" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/amaljoshmaadhavj/" target="_blank" className="text-base font-bold text-white hover:text-primary transition-colors flex items-center gap-2 group">
                  <Linkedin className="w-4 h-4 opacity-70 group-hover:opacity-100 text-white" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full pt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.4em] font-black text-white">
            <p>© {new Date().getFullYear()} Amaljosh Maadhav J</p>
            <div className="flex items-center gap-4 text-white">
              <span className="w-8 h-[1px] bg-white"></span>
              <p>Engineered with Precision & AI</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills, className }: { icon: React.ReactNode, title: string, skills: string[], className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Apply springs to the tilt values for buttery smooth interaction
  const mouseXSpring = useSpring(x, { damping: 25, stiffness: 150 });
  const mouseYSpring = useSpring(y, { damping: 25, stiffness: 150 });

  const rotateX = useTransform(mouseYSpring, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-100, 100], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: [0, 15, 0],
        boxShadow: [
          "0 5px 15px rgba(0,0,0,0.1)",
          "0 25px 45px rgba(0,0,0,0.15)",
          "0 5px 15px rgba(0,0,0,0.1)"
        ]
      }}
      transition={{
        duration: 3.5 + Math.random() * 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
        transformOrigin: "top center"
      }}
      className={cn(
        "group sticky-note p-8 md:p-10 bg-[#FEF9C3] border-b-2 border-r-2 border-yellow-200/50 shadow-md transition-all duration-500 relative overflow-hidden",
        className
      )}
    >
      {/* Digital Scotch Tape Effect */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 backdrop-blur-md border border-white/20 rounded-sm rotate-1 shadow-sm z-20" />

      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
        {icon}
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        <div className="mb-6 p-3 bg-white/40 rounded-2xl w-fit group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-500">
          {icon}
        </div>
        <h3 className="text-2xl font-bold font-display uppercase tracking-tight mb-6 text-yellow-900">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-xs px-4 py-2 bg-white/60 rounded-md text-yellow-800 font-semibold border border-yellow-200/50 hover:bg-white hover:text-primary transition-all cursor-default shadow-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Decorative Shadow for paper feel */}
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-black/5 pointer-events-none" />
    </motion.div>
  );
}

function ProjectCard({ title, category, problem, solution, impact, tech, link }: { title: string, category: string, problem: string, solution: string, impact: string, tech: string[], link: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [5, -5]);
  const rotateY = useTransform(x, [-300, 300], [-5, 5]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <SectionTransition>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <Card className="rounded-[2rem] border border-border bg-white shadow-none transition-all duration-500 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full overflow-hidden">
          <CardHeader style={{ transform: "translateZ(20px)" }} className="space-y-2 p-6 md:p-10 pb-6 border-b border-border/50">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/50">{category}</span>
              <div className="flex gap-3">
                <a href={link} target="_blank" className="p-2 border border-border rounded-xl text-muted-foreground hover:bg-muted hover:text-primary transition-all">
                  <Github className="w-4 h-4" />
                </a>
                <a href={link} target="_blank" className="p-2 border border-border rounded-xl text-muted-foreground hover:bg-muted hover:text-primary transition-all">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <CardTitle className="text-4xl font-display font-bold tracking-tighter">{title}</CardTitle>
          </CardHeader>

          <CardContent style={{ transform: "translateZ(10px)" }} className="p-6 md:p-10 space-y-10 flex-grow">
            <div className="space-y-8">
              <ProjectStep label="Problem" content={problem} />
              <ProjectStep label="Solution" content={solution} />
              <ProjectStep label="Impact" content={impact} highlighted />
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
              {tech.map((t, i) => (
                <Badge key={i} variant="secondary" className="bg-muted/50 text-muted-foreground font-medium rounded-full px-3 py-1 text-xs">
                  {t}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionTransition>
  );
}

function ProjectStep({ label, content, highlighted = false }: { label: string, content: string, highlighted?: boolean }) {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-6">
      <div className="whitespace-nowrap w-24">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/30">{label}</span>
      </div>
      <p className={`text-base leading-relaxed ${highlighted ? 'text-primary font-medium' : 'text-muted-foreground font-normal'}`}>
        {content}
      </p>
    </div>
  );
}

function CertItem({ title, issuer }: { title: string, issuer: string }) {
  return (
    <div className="flex items-center justify-between group p-2 rounded-xl transition-colors hover:bg-muted/50 cursor-default">
      <div className="flex items-center gap-4">
        <CheckCircle2 className="w-4 h-4 text-primary opacity-30 group-hover:opacity-100 transition-opacity" />
        <span className="text-sm font-medium">{title}</span>
      </div>
      <span className="text-[10px] font-bold uppercase opacity-30 group-hover:opacity-100 tracking-tighter">{issuer}</span>
    </div>
  );
}

export default App;
