import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Preloader } from './components/Preloader';
import { cn } from '@/lib/utils';
import { SectionTransition, StaggerItem } from './components/SectionTransition';
import { StatusIndicator } from './components/StatusIndicator';
import { Timeline } from './components/Timeline';
import { Button } from './components/ui/Button';
import { SpotlightButton } from './components/ui/SpotlightButton';
import CardSwap, { Card } from './components/ui/CardSwap';
import Folder from './components/ui/Folder';
import DecryptedText from './components/ui/DecryptedText';
import RotatingText from './components/ui/RotatingText';
import DotGrid from './components/ui/DotGrid';
import { Badge } from './components/ui/Badge';
import { Code as Github, Briefcase as Linkedin, Mail, ArrowRight, Code, Database, Cpu, Brain, ChevronDown, Server, Scan } from 'lucide-react';
import heroBackground from './assets/Untitled design-4.jpg';
import heroHoverBackground from './assets/Untitled design-5.jpg';
import heroPng from './assets/hero.png';

function App() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const experienceCertifications = [
    { title: 'The Data Science Course: Complete Data Science Bootcamp', issuer: 'Udemy', color: 'emerald' },
    { title: 'Introduction to Tableau', issuer: 'Simplilearn', color: 'cyan' },
    { title: 'PyTorch Foundations', issuer: 'Packt', color: 'violet' },
    { title: 'PyTorch Neural Networks', issuer: 'Packt', color: 'orange' },
    { title: 'PyTorch Advanced', issuer: 'Packt', color: 'rose' },
    { title: 'Student Automation Developer Associate', issuer: 'UiPath Academic Alliance', color: 'emerald' },
    { title: 'Machine Learning Beginner', issuer: 'Infosys Springboard', color: 'cyan' },
    { title: 'CUDA Specialization: Parallel & GPU Programming', issuer: 'Johns Hopkins University', color: 'violet' },
  ];

  const certificationColorClasses: Record<string, string> = {
    emerald: 'bg-emerald-400',
    cyan: 'bg-cyan-400',
    violet: 'bg-violet-400',
    orange: 'bg-orange-400',
    rose: 'bg-rose-400',
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-primary/10 selection:text-foreground bg-subtle-mesh overflow-x-hidden">
      <Preloader />
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        onMouseEnter={() => setIsHeroHovered(true)}
        onMouseLeave={() => setIsHeroHovered(false)}
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-36 lg:pt-24 scroll-mt-24 overflow-hidden"
      >
        {/* Cinematic Background Image Layer — with side gaps */}
        <div className="absolute top-5 bottom-8 left-2 right-2 md:left-6 md:right-6 lg:left-10 lg:right-10 z-0 rounded-[2.5rem] overflow-hidden">
          {/* Default Image */}
          <motion.img
            initial={false}
            animate={{ opacity: isHeroHovered ? 0 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            src={heroBackground}
            alt="Background Default"
            className="absolute inset-0 w-full h-full object-cover object-[80%_center] md:object-[center_15%]"
            style={{ borderRadius: 0 }}
          />

          {/* Hover Image */}
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: isHeroHovered ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            src={heroHoverBackground}
            alt="Background Hover"
            className="absolute inset-0 w-full h-full object-cover object-[80%_center] md:object-[center_15%]"
            style={{ borderRadius: 0 }}
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent" />
          <div className="absolute inset-0 bg-white/5 dark:bg-black/10 backdrop-blur-[0.5px]" />
        </div>

        {/* Content — lifted above image */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto w-full">
          <div className="order-2 lg:order-1 lg:col-span-8">
            <StaggerItem className="flex flex-col items-start gap-6">
              <StatusIndicator className="border-primary/10 shadow-lg" />

              <div className="flex flex-col gap-6 w-full">
                <h2 className="text-sm md:text-base font-display font-medium uppercase tracking-[0.3em] text-muted-foreground ml-1">
                  <DecryptedText
                    text="Amaljosh Maadhav J"
                    animateOn="hover"
                    speed={140}
                    maxIterations={25}
                    className="text-muted-foreground"
                    encryptedClassName="text-emerald-500 font-mono font-bold"
                  />
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-display font-bold leading-[1.05] tracking-tighter text-foreground">
                  <DecryptedText
                    text="AI & DATA SCIENCE"
                    animateOn="view"
                    revealDirection="center"
                    speed={110}
                    maxIterations={20}
                    className="text-foreground animate-none"
                    encryptedClassName="text-primary font-mono font-medium"
                  />
                  <br />
                  <DecryptedText
                    text="UNDERGRADUATE"
                    animateOn="view"
                    revealDirection="start"
                    speed={100}
                    maxIterations={20}
                    className="text-foreground animate-none"
                    encryptedClassName="text-primary font-mono font-medium"
                  />
                  <span className="text-primary">.</span>
                </h1>
                <div className="flex flex-wrap items-center gap-2 mt-4 text-xs md:text-sm font-mono uppercase tracking-wider text-muted-foreground select-none">
                  <span className="text-emerald-500 font-bold font-mono">&gt;</span> Specializing in{" "}
                  <RotatingText
                    texts={[
                      'Machine Learning',
                      'Computer Vision',
                      'Deep Learning',
                      'MLOps Pipelines',
                      'Generative AI',
                      'Large Language Models',
                      'AI System Design'
                    ]}
                    mainClassName="px-2.5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-bold overflow-hidden py-0.5 rounded-full inline-flex tracking-normal font-mono text-[10px] md:text-xs"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.02}
                    splitLevelClassName="overflow-hidden pb-0.5"
                    transition={{ type: "spring", damping: 30, stiffness: 450 }}
                    rotationInterval={2800}
                  />
                </div>
                <p className="max-w-2xl text-lg md:text-xl text-muted-foreground font-light leading-relaxed mt-4">
                  Building scalable, production-ready AI systems from data to deployment.
                  Focused on end-to-end machine learning pipelines.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-8 mt-4">
                <SpotlightButton
                  href="#projects"
                  className="px-10 h-16 text-base hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
                >
                  VIEW RESEARCH & PROJECTS <ArrowRight className="ml-2 w-5 h-5" />
                </SpotlightButton>
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

        {/* Subtle Decorative Glow */}
        <div className="absolute top-20 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full z-0 pointer-events-none" />
      </section>

      <section id="about" className="relative min-h-screen flex flex-col justify-center py-16 px-6 md:px-12 lg:px-24 border-b border-border overflow-hidden text-foreground bg-background">

        {/* DotGrid Background Layer */}
        <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
          <DotGrid
            dotSize={6}
            gap={22}
            baseColor="#1e293b"
            activeColor="#10b981"
            proximity={130}
            shockRadius={220}
            shockStrength={4}
            returnDuration={1.2}
          />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <SectionTransition className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4 inline-flex items-center gap-4 text-foreground uppercase">
              <span className="w-16 h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500"></span>
              The Mission
            </h2>
            <p className="text-foreground/40 uppercase tracking-[0.2em] text-xs">01 // VISION & CORE PATHWAYS</p>
          </SectionTransition>

          {/* Redesigned Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Box: Futuristic Interactive Terminal Shell (8 cols) */}
            <div className="lg:col-span-8 flex">
              <SectionTransition delay={0.1} className="w-full flex" innerClassName="w-full flex">
                <div className="relative w-full rounded-2xl border border-border bg-background backdrop-blur-md p-6 md:p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-500 group shadow-2xl shadow-emerald-950/10">
                  {/* Decorative Glass Reflection / Glowing Dot */}
                  <div className="absolute -top-[1px] left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

                  {/* Terminal Header */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#EF4444] opacity-80" />
                      <div className="w-3 h-3 rounded-full bg-[#F59E0B] opacity-80" />
                      <div className="w-3 h-3 rounded-full bg-[#10B981] opacity-80" />
                      <span className="ml-2 font-mono text-xs text-foreground/35">amal@intelligence:~</span>
                    </div>
                    <div className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                      build_ai.py
                    </div>
                  </div>

                  {/* Core Statement */}
                  <div className="space-y-6 flex-grow">
                    <p className="text-xl md:text-2xl font-bold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/70 italic pl-6 border-l-2 border-emerald-500/50">
                      "Building intelligent software systems that solve real-world problems through AI, engineering, and scalable technology.”
                    </p>

                    <p className="text-foreground/60 text-base md:text-lg leading-relaxed pt-2 font-light">
                      AI & Data Science undergraduate focused on building intelligent software systems that combine strong engineering with machine learning. Experienced in developing end-to-end applications, backend APIs, AI-powered workflows, and scalable solutions.
                    </p>
                  </div>

                  {/* Terminal Footer */}
                  <div className="mt-8 pt-4 border-t border-border flex items-center justify-between font-mono text-[10px] text-foreground/30">
                    <div>SYSTEM: BUILDING</div>
                    <div className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                      <span>LIVE TELEMETRY</span>
                    </div>
                  </div>
                </div>
              </SectionTransition>
            </div>

            {/* Right Box: Glowing Tech Grid Cards (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">

              {/* Focus Card */}
              <SectionTransition delay={0.2} className="flex-1 flex" innerClassName="w-full flex">
<div className="relative w-full rounded-2xl border border-border bg-background backdrop-blur-md p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-500 group shadow-lg">
                   <div className="absolute -top-[1px] left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

                   <div>
                     <h3 className="font-display font-bold uppercase text-xs tracking-[0.3em] text-cyan-400 mb-4 inline-flex items-center gap-2">
                       <Brain className="w-4 h-4 text-cyan-400" />
                       Focus
                     </h3>
<ul className="space-y-3 font-mono text-sm">
                        <li className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors">
                          <span className="text-emerald-500">▶</span> Software Engineering
                        </li>
                        <li className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors">
                          <span className="text-emerald-500">▶</span> AI & Machine Learning
                        </li>
                        <li className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors">
                          <span className="text-emerald-500">▶</span> Backend & APIs
                        </li>
                        <li className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors">
                          <span className="text-emerald-500">▶</span> Generative AI
                        </li>
                      </ul>
                   </div>
                   <div className="text-[10px] font-mono text-emerald-400 mt-6 uppercase tracking-wider">
                     // CORE EXPERTISE
                   </div>
                 </div>
              </SectionTransition>

              {/* Interests Card */}
              <SectionTransition delay={0.3} className="flex-1 flex" innerClassName="w-full flex">
<div className="relative w-full rounded-2xl border border-border bg-background backdrop-blur-md p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-500 group shadow-lg">
                   <div className="absolute -top-[1px] left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

                   <div>
                     <h3 className="font-display font-bold uppercase text-xs tracking-[0.3em] text-cyan-400 mb-4 inline-flex items-center gap-2">
                       <Cpu className="w-4 h-4 text-cyan-400" />
                       Interests
                     </h3>
<ul className="space-y-3 font-mono text-sm">
                        <li className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors">
                          <span className="text-cyan-500">▷</span> AI Agents
                        </li>
                        <li className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors">
                          <span className="text-cyan-500">▷</span> Computer Vision
                        </li>
                        <li className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors">
                          <span className="text-cyan-500">▷</span> Intelligent Systems
                        </li>
                        <li className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors">
                          <span className="text-cyan-500">▷</span> Scalable AI Applications
                        </li>
                      </ul>
                   </div>
                   <div className="text-[10px] font-mono text-emerald-400 mt-6 uppercase tracking-wider">  
                     // PASSION VECTORS
                   </div>
                 </div>
              </SectionTransition>

            </div>

          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-16 px-6 md:px-12 lg:px-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionTransition className="mb-10">
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4 inline-flex items-center gap-4 uppercase">
              <span className="w-16 h-[2px] bg-primary/40"></span>
              My Journey
            </h2>
          </SectionTransition>

          <Timeline />
        </div>
      </section>

      <section id="skills" className="relative pt-12 pb-16 px-6 md:px-12 lg:px-24 border-b border-border overflow-hidden text-foreground bg-background">

        {/* DotGrid Background Layer */}
        <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
          <DotGrid
            dotSize={6}
            gap={22}
            baseColor="#1e293b"
            activeColor="#10b981"
            proximity={130}
            shockRadius={220}
            shockStrength={4}
            returnDuration={1.2}
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <SectionTransition className="mb-10">
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4 inline-flex items-center gap-4 text-foreground uppercase">
              <span className="w-16 h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500"></span>
              Technical Arsenal
            </h2>
            <p className="text-foreground/40 uppercase tracking-[0.2em] text-xs">02 // CORE COMPETENCIES</p>
          </SectionTransition>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              icon={<Code className="w-8 h-8 text-indigo-500" />}
              title="Software Engineering"
              skills={["Python", "Java", "C", "OOP", "DSA", "Git", "REST APIs"]}
              className="h-full"
            />
            <SkillCard
              icon={<Brain className="w-8 h-8 text-emerald-500" />}
              title="AI & Machine Learning"
              skills={["Supervised Learning", "Unsupervised Learning", "Regression", "Classification", "Feature Engineering", "Model Evaluation", "Scikit-Learn"]}
              className="h-full"
            />
            <SkillCard
              icon={<Cpu className="w-8 h-8 text-cyan-500" />}
              title="Generative AI & NLP"
              skills={["NLP", "Transformers", "LLMs", "RAG", "Prompt Engineering", "AI Agents", "Document Intelligence"]}
              className="h-full"
            />
            <SkillCard
              icon={<Server className="w-8 h-8 text-amber-500" />}
              title="Backend & APIs"
              skills={["FastAPI", "Node.js", "Express.js", "Django", "REST API Development", "Backend Architecture", "API Integration"]}
              className="h-full"
            />
            <SkillCard
              icon={<Database className="w-8 h-8 text-violet-500" />}
              title="Data & Databases"
              skills={["SQL", "PostgreSQL", "MySQL", "MongoDB", "Pandas", "NumPy", "Tableau", "Data Visualization"]}
              className="h-full"
            />
            <SkillCard
              icon={<Scan className="w-8 h-8 text-rose-500" />}
              title="Computer Vision & DL"
              skills={["PyTorch", "TensorFlow", "OpenCV", "CNNs", "YOLO", "OCR", "Image Classification", "Object Detection"]}
              className="h-full"
            />
          </div>
        </div>
      </section>

      {/* Projects Section - Problem -> Solution -> Impact */}
      <section id="projects" className="pt-12 pb-16 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionTransition className="mb-10">
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4 inline-flex items-center gap-4 uppercase">
              <span className="w-16 h-[2px] bg-primary/40"></span>
              The Solutions
            </h2>
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-xs">// ENGINEERING PROJECTS</p>
          </SectionTransition>

          <div className="flex flex-col">
            <ProjectRow
              index={0}
              title="FlipVision"
              category="AI Commerce & Computer Vision"
              problem="Manual product verification and freshness assessment in e-commerce systems are time-consuming and inconsistent."
              solution="Built an AI-powered e-commerce platform using YOLO, PaddleOCR, and ResNet50 to detect brands, assess freshness, and extract expiry dates from product images."
              impact="Improves product quality assurance, automates inventory verification, and enhances intelligent retail workflows."
              tech={["YOLO", "PaddleOCR", "Django", "ResNet50"]}
              link="https://github.com/amaljoshmaadhavj/FlipVision.git"
              images={["/projects/FlipVision/1.png", "/projects/FlipVision/2.png", "/projects/FlipVision/3.png"]}
              metrics={[
                { value: "98.7%", label: "YOLO Accuracy" },
                { value: "10x", label: "Verification Speed" },
                { value: "Real-time", label: "Freshness Audit" }
              ]}
            />
            <ProjectRow
              index={1}
              title="REVA AI"
              category="Recruitment Automation & Document Intel"
              problem="Traditional recruitment and document verification workflows are slow, fragmented, and prone to tampering."
              solution="Developed a federated AI ecosystem integrating OCR, ATS scoring, interview simulation, skill analysis, and intelligent verification modules."
              impact="Creates a scalable and secure AI-driven hiring ecosystem with automated candidate evaluation and document authentication."
              tech={["React", "FastAPI", "MongoDB", "DocTR OCR"]}
link="https://github.com/amaljoshmaadhavj/REVA-AI.git"
               noImage={true}
              metrics={[
                { value: "85%", label: "Time Saved" },
                { value: "Secure", label: "Verification" },
                { value: "94.8", label: "ATS Score" }
              ]}
            />
            <ProjectRow
              index={2}
              title="TraceGuard AI"
              category="Cyber Forensics"
              problem="Most forensic investigation systems rely on cloud infrastructure, risking privacy and offline accessibility."
              solution="Created an offline AI-powered cyber investigation assistant using RAG, FAISS, and local LLMs for forensic evidence analysis."
              impact="Supports secure investigation of Windows Event Logs and network traffic in isolated and privacy-focused environments."
              tech={["Ollama", "FAISS", "Python", "RAG"]}
              link="https://github.com/amaljoshmaadhavj/TraceGuard-AI.git"
              images={["/projects/TraceGuard%20AI/1.png", "/projects/TraceGuard%20AI/2.png", "/projects/TraceGuard%20AI/3.png"]}
              metrics={[
                { value: "100%", label: "Privacy Secure" },
                { value: "Offline", label: "RAG Forensic Agent" },
                { value: "Local", label: "FAISS Vector DB" }
              ]}
            />
            <ProjectRow
              index={3}
              title="MatExtractAI"
              category="Research Automation"
              problem="Scientific research PDFs are difficult to convert into structured and machine-readable datasets."
              solution="Designed an AI-powered extraction pipeline using local LLM agents and hybrid PDF parsing for evidence-backed material science data extraction."
              impact="Automates scientific data extraction workflows while improving research traceability and reproducibility."
              tech={["PyMuPDF", "Camelot", "Next.js", "Local LLMs"]}
              link="https://github.com/amaljoshmaadhavj/MatExtractAI.git"
              images={["/projects/MatExtractAI/1.png", "/projects/MatExtractAI/2.png", "/projects/MatExtractAI/3.png"]}
              metrics={[
                { value: "Hybrid", label: "PDF Parsing" },
                { value: "Local", label: "LLM Agents" },
                { value: "Automated", label: "Material Sci Data" }
              ]}
            />
            <ProjectRow
              index={4}
              title="InterviewIQ"
              category="AI Interview & Career Assistance"
              problem="Candidates lack realistic interview practice environments with detailed performance feedback."
              solution="Built an AI-powered interview practice platform with resume analysis, real-time evaluation, and intelligent feedback systems."
              impact="Helps candidates improve technical interview performance through personalized AI-driven assessments."
              tech={["Next.js", "FastAPI", "OpenRouter", "Node.js"]}
              link="https://github.com/amaljoshmaadhavj/InterviewIQ.git"
              images={["/projects/InterviewIQ/1.png", "/projects/InterviewIQ/2.png", "/projects/InterviewIQ/3.png"]}
              metrics={[
                { value: "Real-time", label: "Speech Analytics" },
                { value: "AI-driven", label: "ATS Optimization" },
                { value: "Secure", label: "Evaluation Panel" }
              ]}
            />
            <ProjectRow
              index={5}
              title="ArthroCare AI"
              category="AI Clinical Decision Support"
              problem="Rheumatoid Arthritis is frequently underdiagnosed due to inconsistent symptom interpretation and fragmented analysis."
              solution="Developed an intelligent clinical decision support system for RA risk prediction, longitudinal monitoring, and personalized recommendations."
              impact="Supports early detection and personalized healthcare guidance using explainable machine learning models."
              tech={["React", "Python", "Node.js", "XGBoost"]}
              link="https://github.com/santhoshr-15/arthrocare-ai.git"
              images={["/projects/Arthrocare-AI/1.png", "/projects/Arthrocare-AI/2.png", "/projects/Arthrocare-AI/3.png"]}
              metrics={[
                { value: "Early Check", label: "RA Risk Model" },
                { value: "XGBoost", label: "ML Urgency Engine" },
                { value: "Explainable", label: "Clinical Support" }
              ]}
            />
          </div>

          {/* Explore More Projects Button — hides once expanded */}
          <AnimatePresence>
            {!showMoreProjects && (
              <SectionTransition className="mt-20 flex justify-center">
                <motion.div
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <Button
                    onClick={() => setShowMoreProjects(true)}
                    className="h-12 md:h-14 px-6 md:px-8 rounded-full font-semibold transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/5 active:scale-[0.98] flex items-center gap-3"
                  >
                    Explore More Projects
                    <ChevronDown className="w-5 h-5" />
                  </Button>
                </motion.div>
              </SectionTransition>
            )}
          </AnimatePresence>

{/* Additional Projects - Expandable Section */}
          <div className={`mt-16 overflow-hidden transition-all duration-700 ${showMoreProjects ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col gap-8 pt-8">
              <ProjectRow
                index={4}
                title="INYA Airlines"
                category="Travel & Booking Systems"
                problem="Lightweight flight booking systems often lack simple APIs for reservation tracking and cancellation workflows."
                solution="Developed a RESTful flight booking API supporting reservations, booking status tracking, multilingual responses, and refund calculations."
                impact="Simplifies airline reservation workflows with fast and lightweight backend operations."
                tech={["Node.js", "Express.js", "REST API", "JSON Storage"]}
                link="https://github.com/amaljoshmaadhavj/INYA-Airlines.git"
                noImage={true}
                metrics={[
                  { value: "RESTful", label: "Lightweight API" },
                  { value: "Automated", label: "Refund Config" },
                  { value: "Fast", label: "JSON DB Operations" }
                ]}
              />
              <ProjectRow
                index={5}
                title="TRIAGEON"
                category="Clinical Health Tech"
                problem="Delayed identification of high-risk patients often leads to poor healthcare prioritization and avoidable complications."
                solution="Built an ML-powered digital triage platform for disease risk prediction, urgency classification, and explainable patient prioritization."
                impact="Enables faster medical risk assessment and supports healthcare teams with intelligent urgency-aware recommendations."
                tech={["Python", "React", "Flask", "Scikit-Learn"]}
                link="https://github.com/amaljoshmaadhavj/Triageon.git"
                noImage={true}
                metrics={[
                  { value: "92%", label: "Urgency Accuracy" },
                  { value: "Instant", label: "Risk Classifier" },
                  { value: "Explainable", label: "Triage Engine" }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Certifications */}
      <section id="experience" className="relative py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-background overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        {/* Corner glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <SectionTransition className="mb-6">
            <p className="text-emerald-400 font-mono text-xs uppercase tracking-[0.4em] mb-4">// 04 PROFESSIONAL RECORD</p>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-foreground inline-flex items-center gap-4 uppercase">
              <span className="w-16 h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500" />
              Experience
            </h2>
          </SectionTransition>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-start">
            {/* Main Experience Card */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <SectionTransition delay={0.1}>
                <div className="relative rounded-2xl border border-border bg-foreground/[0.03] backdrop-blur-sm p-5 md:p-7 group hover:border-emerald-500/30 transition-all duration-500 overflow-hidden">
                  {/* Top glow line */}
                  <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

                  {/* Role badge + date */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    <div>
                      <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Internship
                      </span>
                      <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-foreground mt-2">
                        Artificial Intelligence Trainee
                      </h3>
                      <p className="text-emerald-400 font-mono text-sm mt-1 tracking-widest">KaviTamil Solutions</p>
                    </div>
                    <div className="shrink-0">
                      <span className="font-mono text-xs text-foreground/40 bg-foreground/5 border border-border px-4 py-2 rounded-full whitespace-nowrap">
                        July 2024 – Aug 2024
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-foreground/5 mb-6" />

                  {/* Responsibilities */}
                  <ul className="space-y-3.5">
                    {[
                      { code: '01', text: 'Developed supervised and unsupervised ML models using Scikit-Learn on real-world datasets for predictive performance.' },
                      { code: '02', text: 'Implemented modular machine learning workflows from data preprocessing to feature engineering and validation.' },
                      { code: '03', text: 'Optimized predictive performance using practical evaluation techniques and data leakage prevention strategies.' },
                    ].map(item => (
                      <li key={item.code} className="flex gap-5 group/item">
                        <span className="font-mono text-[10px] text-emerald-500/50 group-hover/item:text-emerald-400 transition-colors shrink-0 mt-1">{item.code}</span>
                        <p className="text-foreground/60 leading-relaxed text-sm md:text-base group-hover/item:text-foreground/80 transition-colors">{item.text}</p>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border">
                    {['Python', 'NumPy', 'Pandas', 'Scikit-Learn', 'Feature Engineering', 'Model Evaluation'].map(tag => (
                      <span key={tag} className="font-mono text-[10px] text-foreground/40 bg-foreground/5 border border-border px-3 py-1 rounded-full hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionTransition>

              <SectionTransition delay={0.5}>
                <div className="max-w-3xl rounded-2xl border border-border bg-foreground/[0.03] p-4 md:p-5 relative overflow-hidden">
                  <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                  <p className="font-mono text-[10px] text-foreground/30 uppercase tracking-[0.3em] mb-4">// AT A GLANCE</p>
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {[
                      { value: '8+', label: 'Certifications' },
                      { value: '8+', label: 'Projects' },
                      { value: '2024', label: 'AI Journey' },
                      { value: 'Active', label: 'Building' },
                    ].map(stat => (
                      <div key={stat.label} className="flex flex-col gap-1">
                        <span className="text-2xl font-display font-black text-foreground tracking-tight">{stat.value}</span>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-foreground/30">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionTransition>
            </div>

            {/* Certifications Column */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <SectionTransition delay={0.2}>
                <p className="font-mono text-[10px] text-foreground/30 uppercase tracking-[0.3em] mb-3">// CERTIFICATIONS</p>
                <div className="space-y-2">
                  {experienceCertifications.map((cert, i) => (
                    <SectionTransition key={cert.title} delay={0.25 + i * 0.06}>
                      <div className="group flex flex-col gap-2 p-2.5 rounded-xl border border-border bg-foreground/[0.02] hover:bg-foreground/[0.05] hover:border-border transition-all duration-300 cursor-default">
                        <div className="flex items-start gap-3">
                          <span className={`w-1.5 h-1.5 rounded-full ${certificationColorClasses[cert.color] ?? 'bg-foreground/40'} opacity-60 group-hover:opacity-100 transition-opacity shrink-0 mt-1`} />
                          <span className="text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors font-medium leading-snug">{cert.title}</span>
                        </div>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-foreground/25 group-hover:text-foreground/50 transition-colors whitespace-normal leading-relaxed pl-5">{cert.issuer}</span>
                      </div>
                    </SectionTransition>
                  ))}
                </div>
              </SectionTransition>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="min-h-screen md:h-screen md:min-h-[700px] flex flex-col justify-between py-10 md:py-12 lg:py-16 px-6 md:px-12 lg:px-24 bg-white dark:bg-black border-t border-black/10 dark:border-white/10 relative overflow-hidden">
        {/* Decorative Background Glow */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full z-0 opacity-40" />

        <div className="max-w-7xl mx-auto flex-1 flex flex-col justify-between items-start gap-8 lg:gap-0 relative z-10 w-full">
          <SectionTransition className="w-full">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-6 md:mb-8 text-black dark:text-white min-h-[2.2em] md:min-h-[1.8em] flex items-center overflow-visible">
              <RotatingText
                texts={[
                  "LET'S BUILD THE FUTURE OF AI.",
                  "LET'S BUILD TOGETHER.",
                  "LET'S BUILD BETTER TOMORROWS."
                ]}
                mainClassName="text-black dark:text-white py-1 flex flex-wrap"
                staggerFrom={"first"}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.04}
                splitBy="words"
                splitLevelClassName="overflow-hidden pb-1 md:pb-2"
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                rotationInterval={3500}
              />
            </h2>
            <p className="text-xl md:text-2xl font-normal max-w-2xl leading-relaxed text-black/50 dark:text-white/50">
              Interested in building intelligent AI systems, collaborating on impactful projects, and contributing to real-world machine learning solutions.
            </p>
          </SectionTransition>

          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="pointer-events-none absolute hidden lg:block right-0 top-[210px] xl:top-[225px] w-[min(34vw,380px)]"
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 dark:border-white/15 bg-slate-900/95 dark:bg-zinc-950/95 text-slate-100 shadow-2xl shadow-slate-900/20 dark:shadow-black/50 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
              <div className="relative p-4 xl:p-5">
                <div className="flex items-center justify-between mb-3 text-[10px] uppercase tracking-[0.3em] font-mono border-b border-slate-800 dark:border-white/10 pb-2.5">
                  <span className="text-emerald-400 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    BUILD_FUTURE.PY
                  </span>
                  <span className="text-cyan-400 font-bold text-[9px] px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">LIVE</span>
                </div>
                <div className="space-y-2 font-mono text-[11px] xl:text-xs leading-relaxed">
                  {[
                    { text: 'def build_future():', color: 'text-purple-400 font-bold' },
                    { text: '    learn()', color: 'text-sky-300' },
                    { text: '    build()', color: 'text-cyan-300'},
                    { text: '    innovate()', color: 'text-cyan-300' },
                    { text: '', color: '' },
                    { text: 'build_future()', color: 'text-emerald-400 font-bold drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.text || `blank-${index}`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.35, delay: 0.1 + index * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-4 text-right text-slate-500 font-mono select-none text-[10px] pt-0.5">
                        {index < 5 && item.text ? `0${index + 1}` : ''}
                      </span>
                      <span className={cn(item.color || 'text-slate-200', item.text && item.text.startsWith('    ') ? 'pl-4' : '')}>
                        {item.text || '\u00a0'}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-3 right-3 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]"
              />
            </div>
          </motion.div>

          <SectionTransition delay={0.08} className="w-full">
            <div className="max-w-3xl mt-8 md:mt-10 mb-4 md:mb-6 border-l-2 border-primary/30 pl-5 md:pl-6">
              <p className="text-lg md:text-2xl font-display italic font-medium leading-relaxed text-black dark:text-white/90">
                Always learning. Always building. Always improving.
              </p>
              <p className="mt-2 text-sm md:text-base font-medium tracking-wide text-black/55 dark:text-white/55">
                Let&apos;s build intelligent solutions together.
              </p>
            </div>
          </SectionTransition>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full pt-6 md:pt-8 border-t border-black/10 dark:border-white/10">
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-black dark:text-white font-bold">Contact</h4>
              <a
                href="mailto:amal018josephmathi@gmail.com"
                className="group block text-sm sm:text-base lg:text-lg font-display font-bold text-black dark:text-white hover:text-primary dark:hover:text-primary transition-all duration-500 relative w-fit break-all"
              >
                amal018josephmathi@gmail.com
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
              </a>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-black dark:text-white font-bold">Location</h4>
              <p className="text-sm sm:text-base lg:text-lg font-display font-bold text-black dark:text-white leading-tight">Chennai, India</p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-black dark:text-white font-bold">Social Architecture</h4>
              <div className="flex flex-wrap gap-8">
                <a href="https://github.com/amaljoshmaadhavj" target="_blank" className="text-sm sm:text-base lg:text-lg font-bold text-black dark:text-white hover:text-primary transition-colors flex items-center gap-2 group">
                  <Github className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/amaljoshmaadhavj/" target="_blank" className="text-sm sm:text-base lg:text-lg font-bold text-black dark:text-white hover:text-primary transition-colors flex items-center gap-2 group">
                  <Linkedin className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.4em] font-black text-black dark:text-white">
            <p>© {new Date().getFullYear()} Amaljosh Maadhav J</p>
            <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-black dark:bg-white" />
              <p>Engineered with Precision &amp; AI</p>
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
  const [activePaper, setActivePaper] = useState<number | null>(null);
  const [folderOpen, setFolderOpen] = useState(false);

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

  // Dynamic colors and glow configurations based on category
  const folderColor =
    title.includes("Software Engineering") ? '#6366f1' : // Indigo
      title.includes("AI & Machine Learning") ? '#10b981' : // Emerald
        title.includes("Generative AI") ? '#06b6d4' : // Cyan
          title.includes("Backend") ? '#f59e0b' : // Amber
            title.includes("Data & Databases") ? '#8b5cf6' : // Violet
              title.includes("Computer Vision") ? '#f43f5e' : // Rose
                '#10b981';

  const glowColorClass =
    title.includes("Software Engineering") ? 'hover:border-indigo-500/40 hover:shadow-indigo-500/5' :
      title.includes("AI & Machine Learning") ? 'hover:border-emerald-500/40 hover:shadow-emerald-500/5' :
        title.includes("Generative AI") ? 'hover:border-cyan-500/40 hover:shadow-cyan-500/5' :
          title.includes("Backend") ? 'hover:border-amber-500/40 hover:shadow-amber-500/5' :
            title.includes("Data & Databases") ? 'hover:border-violet-500/40 hover:shadow-violet-500/5' :
              title.includes("Computer Vision") ? 'hover:border-rose-500/40 hover:shadow-rose-500/5' :
                'hover:border-emerald-500/40 hover:shadow-emerald-500/5';

  const glowLightColorClass =
    title.includes("Software Engineering") ? 'bg-indigo-500/5' :
      title.includes("AI & Machine Learning") ? 'bg-emerald-500/5' :
        title.includes("Generative AI") ? 'bg-cyan-500/5' :
          title.includes("Backend") ? 'bg-amber-500/5' :
            title.includes("Data & Databases") ? 'bg-violet-500/5' :
              title.includes("Computer Vision") ? 'bg-rose-500/5' :
                'bg-emerald-500/5';

  // Dynamically split skills into 3 parts for papers
  const paperItemsCount = Math.ceil(skills.length / 3);
  const paperSkills1 = skills.slice(0, paperItemsCount);
  const paperSkills2 = skills.slice(paperItemsCount, paperItemsCount * 2);
  const paperSkills3 = skills.slice(paperItemsCount * 2);

  const papers = [
    // Paper 1
    <div key="p1" className="p-2 h-full flex flex-col justify-between font-mono text-[5.5px] leading-tight select-none text-left text-foreground">
      <div>
        <div className="flex items-center justify-between border-b border-border pb-0.5 mb-1 font-bold text-foreground/70">
          <DecryptedText
            key={folderOpen ? "open-file-1" : "closed-file-1"}
            text="📁 core_skills.sh"
            animateOn="view"
            speed={90}
            maxIterations={15}
            className="text-foreground font-bold"
            encryptedClassName="text-emerald-600 font-bold"
          />
          <span className="text-muted-foreground">01</span>
        </div>
        <div className="space-y-0.5 mt-1.5">
          {paperSkills1.map((s, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <span className="text-emerald-600 font-bold">✓</span>
              <span className="truncate inline-block max-w-[80%]">
                <DecryptedText
                  key={folderOpen ? `open-p1-${idx}` : `closed-p1-${idx}`}
                  text={s}
                  animateOn="view"
                  speed={65}
                  maxIterations={12}
                  className="text-foreground"
                  encryptedClassName="text-emerald-600 font-medium"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-[4px] text-muted-foreground border-t border-border pt-0.5 uppercase tracking-wider">
        // CORE TECH
      </div>
    </div>,

    // Paper 2
    <div key="p2" className="p-2 h-full flex flex-col justify-between font-mono text-[5.5px] leading-tight select-none text-left text-foreground">
      <div>
        <div className="flex items-center justify-between border-b border-border pb-0.5 mb-1 font-bold text-foreground/70">
          <DecryptedText
            key={folderOpen ? "open-file-2" : "closed-file-2"}
            text="📁 adv_concepts.py"
            animateOn="view"
            speed={90}
            maxIterations={15}
            className="text-foreground font-bold"
            encryptedClassName="text-blue-600 font-bold"
          />
          <span className="text-muted-foreground">02</span>
        </div>
        <div className="space-y-0.5 mt-1.5">
          {paperSkills2.map((s, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <span className="text-blue-600 font-bold">::</span>
              <span className="truncate inline-block max-w-[80%]">
                <DecryptedText
                  key={folderOpen ? `open-p2-${idx}` : `closed-p2-${idx}`}
                  text={s}
                  animateOn="view"
                  speed={65}
                  maxIterations={12}
                  className="text-foreground"
                  encryptedClassName="text-blue-600 font-medium"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-[4px] text-muted-foreground border-t border-border pt-0.5 uppercase tracking-wider">
        // ADVANCED
      </div>
    </div>,

    // Paper 3
    <div key="p3" className="p-2 h-full flex flex-col justify-between font-mono text-[5.5px] leading-tight select-none text-left text-foreground">
      <div>
        <div className="flex items-center justify-between border-b border-border pb-0.5 mb-1 font-bold text-foreground/70">
          <DecryptedText
            key={folderOpen ? "open-file-3" : "closed-file-3"}
            text="📁 frameworks.json"
            animateOn="view"
            speed={90}
            maxIterations={15}
            className="text-foreground font-bold"
            encryptedClassName="text-amber-600 font-bold"
          />
          <span className="text-muted-foreground">03</span>
        </div>
        <div className="space-y-0.5 mt-1.5">
          {paperSkills3.map((s, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <span className="text-amber-600 font-bold">▶</span>
              <span className="truncate inline-block max-w-[80%]">
                <DecryptedText
                  key={folderOpen ? `open-p3-${idx}` : `closed-p3-${idx}`}
                  text={s}
                  animateOn="view"
                  speed={65}
                  maxIterations={12}
                  className="text-foreground"
                  encryptedClassName="text-amber-600 font-medium"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-[4px] text-muted-foreground border-t border-border pt-0.5 uppercase tracking-wider">
        // TOOLS
      </div>
    </div>
  ];

  const renderDetailedPaper = (index: number) => {
    if (index === 0) {
      return (
        <div className="font-mono text-foreground flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
              <span className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                📄 core_skills.sh
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 font-bold">CORE</span>
            </div>
            <div className="space-y-3 mt-4">
              {paperSkills1.map((s, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <span className="font-semibold text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[10px] text-muted-foreground border-t border-border pt-3 mt-6 uppercase tracking-wider">
            // FOUNDATIONAL MACHINE LEARNING & DEEP LEARNING TECHNIQUES
          </div>
        </div>
      );
    }
    if (index === 1) {
      return (
        <div className="font-mono text-foreground flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
              <span className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                📄 adv_concepts.py
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 font-bold">ADVANCED</span>
            </div>
            <div className="space-y-3 mt-4">
              {paperSkills2.map((s, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <span className="text-blue-500 font-bold text-base">::</span>
                  <span className="font-semibold text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[10px] text-muted-foreground border-t border-border pt-3 mt-6 uppercase tracking-wider">
            // SPECIALIZED DOMAINS, ARCHITECTURES, & INTELLIGENT SYSTEMS
          </div>
        </div>
      );
    }
    return (
      <div className="font-mono text-foreground flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
            <span className="text-sm font-bold text-muted-foreground flex items-center gap-2">
              📄 frameworks.json
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 font-bold">ECOSYSTEM</span>
          </div>
          <div className="space-y-3 mt-4">
            {paperSkills3.map((s, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm">
                <span className="text-amber-500 font-bold text-base">▶</span>
                <span className="font-semibold text-foreground">{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-[10px] text-muted-foreground border-t border-border pt-3 mt-6 uppercase tracking-wider">
          // INTEGRATED PRODUCTION LIBRARIES, DATABASES & DEV TOOLS
        </div>
      </div>
    );
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
        transformOrigin: "top center"
      }}
      className={cn(
        "group p-8 shadow-2xl relative rounded-2xl border border-border bg-foreground/[0.02] backdrop-blur-md flex flex-col items-center justify-between transition-all duration-500 overflow-visible min-h-[350px]",
        glowColorClass,
        className
      )}
    >
      {/* Top corner glow based on theme color */}
      <div className={cn("absolute -top-12 -right-12 w-24 h-24 blur-[40px] rounded-full pointer-events-none opacity-30 transition-opacity group-hover:opacity-60", glowLightColorClass)} />

      {/* Header */}
      <div className="w-full flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-foreground/5 rounded-xl border border-border text-foreground/80 group-hover:text-foreground transition-colors">
            {icon}
          </div>
          <h3 className="text-base md:text-lg font-bold font-display uppercase tracking-tight text-foreground">{title}</h3>
        </div>
        <span className="font-mono text-[8px] text-foreground/30 tracking-[0.2em] uppercase">// 03 SKILLS</span>
      </div>

      {/* Centered Folder component */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-center my-4 overflow-visible py-4 z-10">
        <Folder
          size={1.9}
          color={folderColor}
          items={papers}
          onPaperClick={(idx) => setActivePaper(idx)}
          onOpenChange={(isOpen) => setFolderOpen(isOpen)}
        />
      </div>

      {/* Footer Visual Hint */}
      <div className="mt-4 font-mono text-[8px] text-foreground/30 uppercase tracking-widest flex items-center gap-1.5 pointer-events-none select-none relative z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-foreground/20 group-hover:bg-emerald-500 transition-colors animate-pulse" />
        Explore Source Folder
      </div>

      {/* Magnificent Modal Detailed View overlay */}
      <AnimatePresence>
        {activePaper !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              e.stopPropagation();
              setActivePaper(null);
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg aspect-[4/3] p-8 md:p-10 rounded-3xl bg-neutral-100 dark:bg-neutral-900 shadow-2xl border border-border flex flex-col justify-between"
              style={{
                backgroundImage: 'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.8) 0%, rgba(240,240,240,0.5) 100%)'
              }}
            >
              {/* Silver Metallic Clip/Fastener at the top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-400 border border-neutral-200/50 dark:border-border rounded-b-lg shadow-md z-50 flex items-center justify-center">
                <span className="w-16 h-1 rounded bg-neutral-400/20 dark:bg-neutral-500/20" />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setActivePaper(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors font-bold z-50 text-xs"
              >
                ✕
              </button>

              {/* Content */}
              <div className="flex-1 overflow-y-auto mt-2 pr-1">
                {renderDetailedPaper(activePaper)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface ProjectRowProps {
  index: number;
  title: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  link: string;
  metrics: { value: string; label: string }[];
  images?: string[];
  hideImages?: boolean;
  noImage?: boolean;
}

function ProjectRow({ index, title, category, problem, solution, impact, tech, link, metrics, images, hideImages, noImage }: ProjectRowProps) {
  const isEven = index % 2 === 0;
  const defaultImages = [heroBackground, heroHoverBackground, heroPng];
  const cardImages = images ? [...images, ...defaultImages].slice(0, 3) : defaultImages;

  return (
    <SectionTransition>
      <div className={cn(
        "flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-12 border-b border-border/60 last:border-0",
        isEven ? "lg:flex-row-reverse" : "lg:flex-row"
      )}>
        {/* Graphical Visual Mockup representation — Card Swap Stack */}
        {!noImage && !hideImages ? (
          <div className="relative aspect-[4/3] w-full lg:w-1/2 overflow-visible flex items-center justify-center bg-transparent">
            <div className="relative w-[240px] h-[180px] sm:w-[320px] sm:h-[240px] md:w-[360px] md:h-[270px] flex items-center justify-center">
              <CardSwap
                width="100%"
                height="100%"
                cardDistance={40}
                verticalDistance={30}
                delay={3500}
                pauseOnHover={true}
                easing="elastic"
                faceOpposite={!isEven}
              >
                <Card className="w-full h-full overflow-hidden shadow-2xl bg-black border border-white/10 rounded-2xl">
                  <img src={cardImages[0]} alt="View 1" className="w-full h-full object-cover pointer-events-none block" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </Card>
                <Card className="w-full h-full overflow-hidden shadow-2xl bg-black border border-white/10 rounded-2xl">
                  <img src={cardImages[1]} alt="View 2" className="w-full h-full object-cover pointer-events-none block" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </Card>
                <Card className="w-full h-full overflow-hidden shadow-2xl bg-black border border-white/10 rounded-2xl">
                  <img src={cardImages[2]} alt="View 3" className="w-full h-full object-cover pointer-events-none block" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </Card>
              </CardSwap>
            </div>
          </div>
        ) : null}

        {/* Product Details */}
        <div className={cn(
          "w-full flex flex-col gap-6",
          noImage ? "lg:w-full items-center text-center" : "lg:w-1/2"
        )}>
          <div className={cn(
            "flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary/50",
            noImage ? "justify-center" : ""
          )}>
            <span className="w-2 h-2 rounded-full bg-primary/40" />
            {category}
          </div>

          <a href={link} target="_blank" className="group/title inline-block w-fit">
            <h3 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter text-foreground transition-colors">
              {title}
            </h3>
            <div className="h-[2px] w-0 bg-primary transition-all duration-300 group-hover/title:w-full mt-1" />
          </a>

          <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
            <p><strong className="text-foreground font-semibold">Problem:</strong> {problem}</p>
            <p><strong className="text-foreground font-semibold">Solution:</strong> {solution}</p>
            <p className="text-primary font-medium bg-primary/5 p-4 rounded-2xl border-l-2 border-primary/40"><strong className="text-primary font-bold">Impact:</strong> {impact}</p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {tech.map((t, i) => (
              <Badge key={i} variant="secondary" className="bg-muted/50 text-muted-foreground font-medium rounded-full px-3 py-1 text-xs">
                {t}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6 mt-2 border-t border-border/60">
            {metrics.map((m, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="text-2xl md:text-3xl font-display font-extrabold tracking-tight text-foreground">{m.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>

          <a
            href={link}
            target="_blank"
            className={cn(
              "flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground hover:text-primary transition-all mt-4 group/explore",
              noImage ? "justify-center" : ""
            )}
          >
            <span>Explore Github</span>
            <ArrowRight size={14} className="transition-transform group-hover/explore:translate-x-1" />
          </a>
        </div>
      </div>
    </SectionTransition>
  );
}





export default App;
