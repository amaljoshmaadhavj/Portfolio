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
import { Code as Github, Briefcase as Linkedin, Mail, ArrowRight, Code, Database, Cpu, Brain, Layers, ChevronDown } from 'lucide-react';
import heroBackground from './assets/Untitled design-4.jpg';
import heroHoverBackground from './assets/Untitled design-5.jpg';
import heroPng from './assets/hero.png';

function App() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
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

      <section id="about" className="relative py-36 px-6 md:px-12 lg:px-24 border-b border-border overflow-hidden text-white bg-black">

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
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4 inline-flex items-center gap-4 text-white uppercase">
              <span className="w-16 h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500"></span>
              The Mission
            </h2>
            <p className="text-white/40 uppercase tracking-[0.2em] text-xs">01 // VISION & CORE PATHWAYS</p>
          </SectionTransition>

          {/* Redesigned Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Box: Futuristic Interactive Terminal Shell (8 cols) */}
            <div className="lg:col-span-8 flex">
              <SectionTransition delay={0.1} className="w-full flex">
                <div className="relative w-full rounded-2xl border border-white/10 bg-black backdrop-blur-md p-6 md:p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-500 group shadow-2xl shadow-emerald-950/10">
                  {/* Decorative Glass Reflection / Glowing Dot */}
                  <div className="absolute -top-[1px] left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                  
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#EF4444] opacity-80" />
                      <div className="w-3 h-3 rounded-full bg-[#F59E0B] opacity-80" />
                      <div className="w-3 h-3 rounded-full bg-[#10B981] opacity-80" />
                      <span className="ml-2 font-mono text-xs text-white/35">amal@amal-pc:~</span>
                    </div>
                    <div className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                      active_mission.sh
                    </div>
                  </div>

                  {/* Core Statement */}
                  <div className="space-y-6 flex-grow">
                    <p className="text-xl md:text-2xl font-bold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 italic pl-6 border-l-2 border-emerald-500/50">
                      "Building intelligent AI systems that solve real-world problems through data, automation, and scalable machine learning.”
                    </p>

                    <p className="text-white/60 text-base md:text-lg leading-relaxed pt-2 font-light">
                      Building strong foundations in Artificial Intelligence, Machine Learning, Data Science, and intelligent system development while actively participating in technical projects and innovation programs.
                    </p>
                  </div>

                  {/* Terminal Footer */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-white/30">
                    <div>SYSTEM: ONLINE</div>
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
              <SectionTransition delay={0.2} className="flex-1 flex">
                <div className="relative w-full rounded-2xl border border-white/10 bg-black backdrop-blur-md p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-500 group shadow-lg">
                  <div className="absolute -top-[1px] left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                  
                  <div>
                    <h3 className="font-display font-bold uppercase text-xs tracking-[0.3em] text-cyan-400 mb-4 inline-flex items-center gap-2">
                      <Brain className="w-4 h-4 text-cyan-400" />
                      Focus
                    </h3>
                    <ul className="space-y-3 font-mono text-sm">
                      <li className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                        <span className="text-cyan-500">▶</span> Predictive Modeling
                      </li>
                      <li className="flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors">
                        <span className="text-emerald-500">▶</span> NLP & RAG
                      </li>
                      <li className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                        <span className="text-cyan-500">▶</span> AI Product Development
                      </li>
                    </ul>
                  </div>
                  <div className="text-[10px] font-mono text-white/20 mt-6 uppercase tracking-wider">
                    // CORE EXPERTISE
                  </div>
                </div>
              </SectionTransition>

              {/* Interests Card */}
              <SectionTransition delay={0.3} className="flex-1 flex">
                <div className="relative w-full rounded-2xl border border-white/10 bg-black backdrop-blur-md p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-500 group shadow-lg">
                  <div className="absolute -top-[1px] left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                  
                  <div>
                    <h3 className="font-display font-bold uppercase text-xs tracking-[0.3em] text-emerald-400 mb-4 inline-flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-emerald-400" />
                      Interests
                    </h3>
                    <ul className="space-y-3 font-mono text-sm">
                      <li className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                        <span className="text-emerald-500">▷</span> Data Analytics
                      </li>
                      <li className="flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
                        <span className="text-cyan-500">▷</span> Cyber AI
                      </li>
                      <li className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                        <span className="text-emerald-500">▷</span> Intelligent Systems
                      </li>
                    </ul>
                  </div>
                  <div className="text-[10px] font-mono text-white/20 mt-6 uppercase tracking-wider">
                    // PASSION VECTORS
                  </div>
                </div>
              </SectionTransition>

            </div>

          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-32 px-6 md:px-12 lg:px-24 bg-background border-b border-border">
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

      <section id="skills" className="relative py-32 px-6 md:px-12 lg:px-24 scroll-mt-32 border-b border-border overflow-hidden text-white bg-black">

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
          <SectionTransition className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold inline-flex items-center gap-4 text-white">
              <span className="w-12 h-[1px] bg-white/20"></span>
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
      <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionTransition className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold inline-flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary/20"></span>
              The Solutions
            </h2>
            <p className="mt-4 text-muted-foreground font-light whitespace-nowrap">
              A selection of engineering projects focused on real-world impact and technical depth.
            </p>
          </SectionTransition>

          <div className="flex flex-col gap-8">
            <ProjectRow
              index={0}
              title="FlipVision"
              category="AI Commerce & Computer Vision"
              problem="Manual product verification and freshness assessment in e-commerce systems are time-consuming and inconsistent."
              solution="Built an AI-powered e-commerce platform using YOLO, PaddleOCR, and ResNet50 to detect brands, assess freshness, and extract expiry dates from product images."
              impact="Improves product quality assurance, automates inventory verification, and enhances intelligent retail workflows."
              tech={["YOLO", "PaddleOCR", "Django", "ResNet50"]}
              link="https://github.com/amaljoshmaadhavj/FlipVision.git"
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
              metrics={[
                { value: "85%", label: "Time Saved" },
                { value: "Secure", label: "Verification" },
                { value: "94.8", label: "ATS Score" }
              ]}
            />
            <ProjectRow
              index={2}
              title="TRIAGEON"
              category="Clinical Health Tech"
              problem="Delayed identification of high-risk patients often leads to poor healthcare prioritization and avoidable complications."
              solution="Built an ML-powered digital triage platform for disease risk prediction, urgency classification, and explainable patient prioritization."
              impact="Enables faster medical risk assessment and supports healthcare teams with intelligent urgency-aware recommendations."
              tech={["Python", "React", "Flask", "Scikit-Learn"]}
              link="https://github.com/amaljoshmaadhavj/Triageon.git"
              metrics={[
                { value: "92%", label: "Urgency Accuracy" },
                { value: "Instant", label: "Risk Classifier" },
                { value: "Explainable", label: "Triage Engine" }
              ]}
            />
            <ProjectRow
              index={3}
              title="TraceGuard AI"
              category="Cyber Forensics"
              problem="Most forensic investigation systems rely on cloud infrastructure, risking privacy and offline accessibility."
              solution="Created an offline AI-powered cyber investigation assistant using RAG, FAISS, and local LLMs for forensic evidence analysis."
              impact="Supports secure investigation of Windows Event Logs and network traffic in isolated and privacy-focused environments."
              tech={["Ollama", "FAISS", "Python", "RAG"]}
              link="https://github.com/amaljoshmaadhavj/TraceGuard-AI.git"
              metrics={[
                { value: "100%", label: "Privacy Secure" },
                { value: "Offline", label: "RAG Forensic Agent" },
                { value: "Local", label: "FAISS Vector DB" }
              ]}
            />
            <ProjectRow
              index={4}
              title="MatExtractAI"
              category="Research Automation"
              problem="Scientific research PDFs are difficult to convert into structured and machine-readable datasets."
              solution="Designed an AI-powered extraction pipeline using local LLM agents and hybrid PDF parsing for evidence-backed material science data extraction."
              impact="Automates scientific data extraction workflows while improving research traceability and reproducibility."
              tech={["PyMuPDF", "Camelot", "Next.js", "Local LLMs"]}
              link="https://github.com/amaljoshmaadhavj/MatExtractAI.git"
              metrics={[
                { value: "Hybrid", label: "PDF Parsing" },
                { value: "Local", label: "LLM Agents" },
                { value: "Automated", label: "Material Sci Data" }
              ]}
            />
            <ProjectRow
              index={5}
              title="INYA Airlines"
              category="Travel & Booking Systems"
              problem="Lightweight flight booking systems often lack simple APIs for reservation tracking and cancellation workflows."
              solution="Developed a RESTful flight booking API supporting reservations, booking status tracking, multilingual responses, and refund calculations."
              impact="Simplifies airline reservation workflows with fast and lightweight backend operations."
              tech={["Node.js", "Express.js", "REST API", "JSON Storage"]}
              link="https://github.com/amaljoshmaadhavj/INYA-Airlines.git"
              metrics={[
                { value: "RESTful", label: "Lightweight API" },
                { value: "Automated", label: "Refund Config" },
                { value: "Fast", label: "JSON DB Operations" }
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
                index={6}
                title="InterviewIQ"
                category="AI Interview & Career Assistance"
                problem="Candidates lack realistic interview practice environments with detailed performance feedback."
                solution="Built an AI-powered interview practice platform with resume analysis, real-time evaluation, and intelligent feedback systems."
                impact="Helps candidates improve technical interview performance through personalized AI-driven assessments."
                tech={["Next.js", "FastAPI", "OpenRouter", "Node.js"]}
                link="https://github.com/amaljoshmaadhavj/InterviewIQ.git"
                metrics={[
                  { value: "Real-time", label: "Speech Analytics" },
                  { value: "AI-driven", label: "ATS Optimization" },
                  { value: "Secure", label: "Evaluation Panel" }
                ]}
              />
              <ProjectRow
                index={7}
                title="ArthroCare AI"
                category="AI Clinical Decision Support"
                problem="Rheumatoid Arthritis is frequently underdiagnosed due to inconsistent symptom interpretation and fragmented analysis."
                solution="Developed an intelligent clinical decision support system for RA risk prediction, longitudinal monitoring, and personalized recommendations."
                impact="Supports early detection and personalized healthcare guidance using explainable machine learning models."
                tech={["React", "Python", "Node.js", "XGBoost"]}
                link="https://github.com/santhoshr-15/arthrocare-ai.git"
                metrics={[
                  { value: "Early Check", label: "RA Risk Model" },
                  { value: "XGBoost", label: "ML Urgency Engine" },
                  { value: "Explainable", label: "Clinical Support" }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Certifications */}
      <section id="experience" className="relative py-32 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        {/* Corner glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <SectionTransition className="mb-20">
            <p className="text-emerald-400 font-mono text-xs uppercase tracking-[0.4em] mb-3">// 04 PROFESSIONAL RECORD</p>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-white inline-flex items-center gap-4">
              <span className="w-16 h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500" />
              Experience
            </h2>
          </SectionTransition>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Experience Card */}
            <div className="lg:col-span-8">
              <SectionTransition delay={0.1}>
                <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10 group hover:border-emerald-500/30 transition-all duration-500 overflow-hidden">
                  {/* Top glow line */}
                  <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

                  {/* Role badge + date */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
                    <div>
                      <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Internship
                      </span>
                      <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-white mt-2">
                        Artificial Intelligence Trainee
                      </h3>
                      <p className="text-emerald-400 font-mono text-sm mt-1 tracking-widest uppercase">KaviiTamil Solutions</p>
                    </div>
                    <div className="shrink-0">
                      <span className="font-mono text-xs text-white/40 bg-white/5 border border-white/10 px-4 py-2 rounded-full whitespace-nowrap">
                        July 2024 – Aug 2024
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/5 mb-8" />

                  {/* Responsibilities */}
                  <ul className="space-y-5">
                    {[
                      { code: '01', text: 'Developed supervised and unsupervised ML models using Scikit-Learn on real-world datasets for predictive performance.' },
                      { code: '02', text: 'Implemented modular machine learning workflows from data preprocessing to feature engineering and validation.' },
                      { code: '03', text: 'Optimized predictive performance using practical evaluation techniques and data leakage prevention strategies.' },
                    ].map(item => (
                      <li key={item.code} className="flex gap-5 group/item">
                        <span className="font-mono text-[10px] text-emerald-500/50 group-hover/item:text-emerald-400 transition-colors shrink-0 mt-1">{item.code}</span>
                        <p className="text-white/60 leading-relaxed text-sm md:text-base group-hover/item:text-white/80 transition-colors">{item.text}</p>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/5">
                    {['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Jupyter'].map(tag => (
                      <span key={tag} className="font-mono text-[10px] text-white/40 bg-white/5 border border-white/10 px-3 py-1 rounded-full hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionTransition>
            </div>

            {/* Certifications Column */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              <SectionTransition delay={0.2}>
                <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] mb-6">// CERTIFICATIONS</p>
                <div className="space-y-3">
                  {[
                    { title: 'Data Science Bootcamp', issuer: 'Udemy', color: 'emerald' },
                    { title: 'Machine Learning Beginner', issuer: 'Infosys Springboard', color: 'cyan' },
                    { title: 'CUDA at Scale', issuer: 'Johns Hopkins', color: 'violet' },
                    { title: 'PyTorch Foundations', issuer: 'Packt', color: 'orange' },
                    { title: 'Student Automation Dev', issuer: 'UiPath', color: 'rose' },
                  ].map((cert, i) => (
                    <SectionTransition key={cert.title} delay={0.25 + i * 0.06}>
                      <div className="group flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 cursor-default">
                        <div className="flex items-center gap-3">
                          <span className={`w-1.5 h-1.5 rounded-full bg-${
                            cert.color === 'emerald' ? 'emerald-400' :
                            cert.color === 'cyan' ? 'cyan-400' :
                            cert.color === 'violet' ? 'violet-400' :
                            cert.color === 'orange' ? 'orange-400' : 'rose-400'
                          } opacity-60 group-hover:opacity-100 transition-opacity`} />
                          <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors font-medium">{cert.title}</span>
                        </div>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-white/25 group-hover:text-white/50 transition-colors shrink-0 ml-2">{cert.issuer}</span>
                      </div>
                    </SectionTransition>
                  ))}
                </div>
              </SectionTransition>

              {/* Stats Card */}
              <SectionTransition delay={0.5}>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 relative overflow-hidden">
                  <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                  <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] mb-5">// AT A GLANCE</p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: '5+', label: 'Certifications' },
                      { value: '8+', label: 'Projects' },
                      { value: '2024', label: 'Started' },
                      { value: 'Active', label: 'Status' },
                    ].map(stat => (
                      <div key={stat.label} className="flex flex-col gap-1">
                        <span className="text-2xl font-display font-black text-white tracking-tight">{stat.value}</span>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-white/30">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionTransition>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-white dark:bg-black border-t border-black/10 dark:border-white/10 relative overflow-hidden">
        {/* Decorative Background Glow */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full z-0 opacity-40" />

        <div className="max-w-7xl mx-auto flex flex-col items-start gap-24 relative z-10">
          <SectionTransition className="w-full">
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-12 text-black dark:text-white min-h-[2.2em] md:min-h-[1.8em] flex items-center overflow-visible">
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
              Currently open to collaborations on research-driven AI products and scalable machine learning ecosystems.
            </p>
          </SectionTransition>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full pt-16 border-t border-black/10 dark:border-white/10">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-black dark:text-white font-bold">Contact</h4>
              <a
                href="mailto:amal018josephmathi@gmail.com"
                className="group block text-base md:text-lg font-display font-bold text-black dark:text-white hover:text-primary dark:hover:text-primary transition-all duration-500 relative w-fit"
              >
                amal018josephmathi@gmail.com
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
              </a>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-black dark:text-white font-bold">Location</h4>
              <p className="text-base md:text-lg font-display font-bold text-black dark:text-white leading-tight">Chennai, India</p>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-black dark:text-white font-bold">Social Architecture</h4>
              <div className="flex flex-wrap gap-8">
                <a href="https://github.com/amaljoshmaadhavj" target="_blank" className="text-sm font-bold text-black dark:text-white hover:text-primary transition-colors flex items-center gap-2 group">
                  <Github className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/amaljoshmaadhavj/" target="_blank" className="text-base font-bold text-black dark:text-white hover:text-primary transition-colors flex items-center gap-2 group">
                  <Linkedin className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full pt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.4em] font-black text-black dark:text-white">
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
    title.includes("Machine Learning") ? '#6366f1' : // Indigo
    title.includes("Deep Learning") ? '#10b981' : // Emerald
    title.includes("Computer Vision") ? '#3b82f6' : // Blue
    title.includes("Data Systems") ? '#f59e0b' : // Amber
    title.includes("Engineering") ? '#f43f5e' : // Rose
    '#10b981';

  const glowColorClass =
    title.includes("Machine Learning") ? 'hover:border-indigo-500/40 hover:shadow-indigo-500/5' :
    title.includes("Deep Learning") ? 'hover:border-emerald-500/40 hover:shadow-emerald-500/5' :
    title.includes("Computer Vision") ? 'hover:border-blue-500/40 hover:shadow-blue-500/5' :
    title.includes("Data Systems") ? 'hover:border-amber-500/40 hover:shadow-amber-500/5' :
    title.includes("Engineering") ? 'hover:border-rose-500/40 hover:shadow-rose-500/5' :
    'hover:border-emerald-500/40 hover:shadow-emerald-500/5';

  const glowLightColorClass =
    title.includes("Machine Learning") ? 'bg-indigo-500/5' :
    title.includes("Deep Learning") ? 'bg-emerald-500/5' :
    title.includes("Computer Vision") ? 'bg-blue-500/5' :
    title.includes("Data Systems") ? 'bg-amber-500/5' :
    title.includes("Engineering") ? 'bg-rose-500/5' :
    'bg-emerald-500/5';

  // Dynamically split skills into 3 parts for papers
  const paperItemsCount = Math.ceil(skills.length / 3);
  const paperSkills1 = skills.slice(0, paperItemsCount);
  const paperSkills2 = skills.slice(paperItemsCount, paperItemsCount * 2);
  const paperSkills3 = skills.slice(paperItemsCount * 2);

  const papers = [
    // Paper 1
    <div key="p1" className="p-2 h-full flex flex-col justify-between font-mono text-[5.5px] leading-tight select-none text-left text-neutral-800">
      <div>
        <div className="flex items-center justify-between border-b border-black/10 pb-0.5 mb-1 font-bold text-black/70">
          <DecryptedText
            key={folderOpen ? "open-file-1" : "closed-file-1"}
            text="📁 core_skills.sh"
            animateOn="view"
            speed={90}
            maxIterations={15}
            className="text-black font-bold"
            encryptedClassName="text-emerald-600 font-bold"
          />
          <span className="text-neutral-400">01</span>
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
                  className="text-neutral-800"
                  encryptedClassName="text-emerald-600 font-medium"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-[4px] text-neutral-400 border-t border-black/5 pt-0.5 uppercase tracking-wider">
        // CORE TECH
      </div>
    </div>,

    // Paper 2
    <div key="p2" className="p-2 h-full flex flex-col justify-between font-mono text-[5.5px] leading-tight select-none text-left text-neutral-800">
      <div>
        <div className="flex items-center justify-between border-b border-black/10 pb-0.5 mb-1 font-bold text-black/70">
          <DecryptedText
            key={folderOpen ? "open-file-2" : "closed-file-2"}
            text="📁 adv_concepts.py"
            animateOn="view"
            speed={90}
            maxIterations={15}
            className="text-black font-bold"
            encryptedClassName="text-blue-600 font-bold"
          />
          <span className="text-neutral-400">02</span>
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
                  className="text-neutral-800"
                  encryptedClassName="text-blue-600 font-medium"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-[4px] text-neutral-400 border-t border-black/5 pt-0.5 uppercase tracking-wider">
        // ADVANCED
      </div>
    </div>,

    // Paper 3
    <div key="p3" className="p-2 h-full flex flex-col justify-between font-mono text-[5.5px] leading-tight select-none text-left text-neutral-800">
      <div>
        <div className="flex items-center justify-between border-b border-black/10 pb-0.5 mb-1 font-bold text-black/70">
          <DecryptedText
            key={folderOpen ? "open-file-3" : "closed-file-3"}
            text="📁 frameworks.json"
            animateOn="view"
            speed={90}
            maxIterations={15}
            className="text-black font-bold"
            encryptedClassName="text-amber-600 font-bold"
          />
          <span className="text-neutral-400">03</span>
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
                  className="text-neutral-800"
                  encryptedClassName="text-amber-600 font-medium"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-[4px] text-neutral-400 border-t border-black/5 pt-0.5 uppercase tracking-wider">
        // TOOLS
      </div>
    </div>
  ];

  const renderDetailedPaper = (index: number) => {
    if (index === 0) {
      return (
        <div className="font-mono text-neutral-800 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-4">
              <span className="text-sm font-bold text-neutral-500 flex items-center gap-2">
                📄 core_skills.sh
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">CORE</span>
            </div>
            <div className="space-y-3 mt-4">
              {paperSkills1.map((s, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <span className="font-semibold text-neutral-900">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[10px] text-neutral-400 border-t border-neutral-100 pt-3 mt-6 uppercase tracking-wider">
            // FOUNDATIONAL MACHINE LEARNING & DEEP LEARNING TECHNIQUES
          </div>
        </div>
      );
    }
    if (index === 1) {
      return (
        <div className="font-mono text-neutral-800 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-4">
              <span className="text-sm font-bold text-neutral-500 flex items-center gap-2">
                📄 adv_concepts.py
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">ADVANCED</span>
            </div>
            <div className="space-y-3 mt-4">
              {paperSkills2.map((s, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <span className="text-blue-500 font-bold text-base">::</span>
                  <span className="font-semibold text-neutral-900">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[10px] text-neutral-400 border-t border-neutral-100 pt-3 mt-6 uppercase tracking-wider">
            // SPECIALIZED DOMAINS, ARCHITECTURES, & INTELLIGENT SYSTEMS
          </div>
        </div>
      );
    }
    return (
      <div className="font-mono text-neutral-800 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-4">
            <span className="text-sm font-bold text-neutral-500 flex items-center gap-2">
              📄 frameworks.json
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">ECOSYSTEM</span>
          </div>
          <div className="space-y-3 mt-4">
            {paperSkills3.map((s, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm">
                <span className="text-amber-500 font-bold text-base">▶</span>
                <span className="font-semibold text-neutral-900">{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-[10px] text-neutral-400 border-t border-neutral-100 pt-3 mt-6 uppercase tracking-wider">
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
        "group p-8 shadow-2xl relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md flex flex-col items-center justify-between transition-all duration-500 overflow-visible min-h-[350px]",
        glowColorClass,
        className
      )}
    >
      {/* Top corner glow based on theme color */}
      <div className={cn("absolute -top-12 -right-12 w-24 h-24 blur-[40px] rounded-full pointer-events-none opacity-30 transition-opacity group-hover:opacity-60", glowLightColorClass)} />

      {/* Header */}
      <div className="w-full flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/5 rounded-xl border border-white/10 text-white/80 group-hover:text-white transition-colors">
            {icon}
          </div>
          <h3 className="text-base md:text-lg font-bold font-display uppercase tracking-tight text-white">{title}</h3>
        </div>
        <span className="font-mono text-[8px] text-white/30 tracking-[0.2em] uppercase">// 03 SKILLS</span>
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
      <div className="mt-4 font-mono text-[8px] text-white/30 uppercase tracking-widest flex items-center gap-1.5 pointer-events-none select-none relative z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-emerald-500 transition-colors animate-pulse" />
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
              className="relative w-full max-w-lg aspect-[4/3] p-8 md:p-10 rounded-3xl bg-neutral-50 shadow-2xl border border-white/20 flex flex-col justify-between"
              style={{
                backgroundImage: 'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.8) 0%, rgba(240,240,240,0.5) 100%)'
              }}
            >
              {/* Silver Metallic Clip/Fastener at the top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-400 border border-neutral-200/50 rounded-b-lg shadow-md z-50 flex items-center justify-center">
                <span className="w-16 h-1 rounded bg-neutral-400/20" />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setActivePaper(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-neutral-500 hover:text-neutral-800 transition-colors font-bold z-50 text-xs"
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
}

function ProjectRow({ index, title, category, problem, solution, impact, tech, link, metrics }: ProjectRowProps) {
  const isEven = index % 2 === 0;

  return (
    <SectionTransition>
      <div className={cn(
        "flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-20 border-b border-border/60 last:border-0",
        isEven ? "lg:flex-row-reverse" : "lg:flex-row"
      )}>
        {/* Graphical Visual Mockup representation — Card Swap Stack */}
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
              <Card className="w-full h-full border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img src={heroBackground} alt="View 1" className="w-full h-full object-cover pointer-events-none" />
              </Card>
              <Card className="w-full h-full border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img src={heroHoverBackground} alt="View 2" className="w-full h-full object-cover pointer-events-none" />
              </Card>
              <Card className="w-full h-full border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img src={heroPng} alt="View 3" className="w-full h-full object-cover pointer-events-none" />
              </Card>
            </CardSwap>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary/50">
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
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground hover:text-primary transition-all mt-4 group/explore"
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
