
import { TypeAnimation } from 'react-type-animation';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import './Hero.css';

const projects = [
  {
    id: 1,
    title: "ReportIT",
    tag: "Featured Hub",
    problem: "Inefficient and scattered complaint reporting processes.",
    solution: "A centralized platform tracking issues with role-based dashboards.",
    impact: "Streamlines resolution workflows by 40%.",
    features: ["JWT Authentication", "Real-time tracking", "Role-based access", "Scalable backend"],
    techStack: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    demoLink: "#",
    githubLink: "https://github.com/JahanviSharma18",
    imagePlaceholder: "ReportIT Preview"
  },
  {
    id: 2,
    title: "BookNest",
    tag: "Case Study",
    problem: "Manual and difficult tracking of book lending records.",
    solution: "An online platform with secure authentication and admin management.",
    impact: "Digitalized 100% of lending operations.",
    features: ["Secure Authentication", "Admin Dashboard", "Inventory Tracking", "Responsive UI"],
    techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
    demoLink: "#",
    githubLink: "https://github.com/JahanviSharma18",
    imagePlaceholder: "BookNest Preview"
  }
];

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);



  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "skills", "projects", "certifications", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (

    <div className="bg-[#1a0a0a] text-cream min-h-screen relative overflow-hidden">

      {/* 🌈 BACKGROUND LAYERS */}
      <div className="absolute inset-0 -z-10">

        {/* soft gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a0f0f] via-[#1a0a0a] to-[#120606]"></div>

        {/* soft wine glow (top left) */}
        <div className="absolute w-[600px] h-[600px] bg-[#7a1f1f]/20 blur-[160px] top-[-150px] left-[-150px] rounded-full"></div>

        {/* subtle purple/pink tone (bottom right) */}
        <div className="absolute w-[500px] h-[500px] bg-[#a855f7]/10 blur-[160px] bottom-[-150px] right-[-150px] rounded-full"></div>

      </div>

      {/* GLOW */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          width: "120px",
          height: "120px",
          background: "radial-gradient(circle, rgba(255,0,0,0.4) 0%, rgba(255,0,0,0.1) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
      ></div>

      {/* CENTER DOT */}
      <div
        className="fixed w-2 h-2 bg-red-600 rounded-full pointer-events-none z-50"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      {/* 🔝 NAVBAR */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <nav className="pointer-events-auto flex items-center justify-between px-6 py-3 bg-[#1a0505]/70 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_4px_30px_rgba(255,20,147,0.15)] w-[90%] max-w-4xl transition-all duration-300">
          <h1 className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-[#ff4d6d] to-[#ff9aa2] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,77,109,0.5)]">
            Janvi<span className="text-white">.dev</span>
          </h1>

          <div className="hidden md:flex items-center gap-2 bg-black/40 p-1.5 rounded-full border border-white/5 shadow-inner">
            {["home", "about", "education", "skills", "projects", "certifications", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${activeSection === section
                  ? "text-white shadow-[0_0_15px_rgba(255,77,109,0.3)]"
                  : "text-gray-400 hover:text-[#ffb3c6]"
                  }`}
              >
                {activeSection === section && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-gradient-to-r from-[#ff4d6d] to-[#800000] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="capitalize relative z-10 tracking-wide">{section}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#ff4d6d] bg-[#ff4d6d]/10 border border-[#ff4d6d]/30 hover:bg-[#ff4d6d] hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(255,77,109,0.2)] hover:shadow-[0_0_20px_rgba(255,77,109,0.5)] group/resume">
              Resume
              <svg className="w-3 h-3 group-hover/resume:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
            <button className="md:hidden text-white p-2">
            <svg className="w-6 h-6 drop-shadow-[0_0_8px_rgba(255,20,147,0.6)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
          </div>
        </nav>
      </div>


      {/* 🚀 HERO SECTION */}
      <motion.section id="home" className="hero-section">
        {/* OVERSIZED PARALLAX BACKGROUND TEXT */}
        <div
          className="bg-text-portfolio"
          style={{ transform: `translate(calc(-50% + ${-position.x * 0.05}px), calc(-50% + ${-position.y * 0.05}px))` }}
        >
          PORTFOLIO
        </div>

        {/* 🔥 LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hero-col hero-left"
        >
          <div className="intro-text">Hi, I am</div>
          <div>
            <div className="name-first">JAHANVI</div>
            <div className="name-last">Sharma</div>
          </div>

          <div className="role-description">
            I build aesthetic and functional digital experiences.
          </div>
          <div className="typewriter-text mt-4 text-xl">
            <TypeAnimation
              sequence={[
                "Creative Developer ✨", 1500,
                "Building real-world products 🚀", 1500,
                "Blending design + logic 💻", 1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 md:gap-5 mt-8 max-w-lg">
            <button className="px-8 py-3 bg-gradient-to-r from-[#ff4d6d] to-[#ff758f] text-white rounded-full shadow-[0_0_15px_rgba(255,77,109,0.5)] hover:scale-105 hover:shadow-[0_0_25px_rgba(255,77,109,0.8)] transition duration-300 font-semibold tracking-wide text-center">
              View Work
            </button>
            <button className="px-8 py-3 border-2 border-[#ff4d6d] text-[#ff4d6d] font-semibold tracking-wide rounded-full hover:bg-[#ff4d6d] hover:text-white hover:shadow-[0_0_15px_rgba(255,77,109,0.5)] transition duration-300 text-center">
              Contact Me
            </button>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3 bg-[#1a0505]/60 backdrop-blur-md border border-[#ff4d6d]/30 text-[#ffb3c6] font-semibold tracking-wide rounded-full hover:bg-[#ff4d6d]/20 hover:border-[#ff4d6d] hover:text-white shadow-[0_0_10px_rgba(255,77,109,0.1)] hover:shadow-[0_0_20px_rgba(255,77,109,0.4)] transition-all duration-300 group/hero-resume">
              Download Resume
              <svg className="w-5 h-5 group-hover/hero-resume:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </a>
          </div>
        </motion.div>

        {/* 🔥 CENTER: VISUAL FOCUS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="hero-col hero-center"
        >
          <div className="photo-container">
            <img src="/src/assets/avatar.png" alt="Developer Avatar" className="profile-photo" />
          </div>
        </motion.div>

        {/* 🔥 RIGHT SIDE: ROLE EMPHASIS */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hero-col hero-right"
        >
          <div className="vertical-text-container">
            <span className="vertical-text-outline">WEB</span>
            <span className="vertical-text-filled">DEVELOPER</span>
          </div>
        </motion.div>
      </motion.section>

      <section id="about" className="scroll-mt-20 px-6 md:px-8 py-24 max-w-6xl mx-auto relative z-10 w-full">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">

          {/* 📸 LEFT SIDE: Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-5/12 relative flex justify-center"
          >
            {/* Background glow & decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#ff4d6d]/10 blur-[80px] rounded-full -z-10 animate-pulse"></div>

            {/* Image Frame */}
            <div className="relative group perspective-[1000px]">
              <div className="relative w-64 h-80 md:w-80 md:h-[400px] rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1a0505] to-[#2a0f0f] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] group-hover:shadow-[0_0_40px_rgba(255,77,109,0.3)] transition-all duration-700 ease-out transform group-hover:-rotate-3 group-hover:scale-105 animate-[float_6s_ease-in-out_infinite]">
                {/* Subtle Inner Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120606] via-transparent to-[#ff4d6d]/10 z-10 transition-opacity duration-500 group-hover:opacity-50"></div>
                <img src="/src/assets/avatar.png" alt="Jahanvi Sharma" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 z-0 scale-105 group-hover:scale-110" />
              </div>

              {/* Floating Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 md:-left-10 bg-[#1a0505]/80 backdrop-blur-xl border border-[#ff4d6d]/20 py-3 px-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-20 group-hover:-translate-y-2 transition-transform duration-500"
              >
                <span className="text-sm md:text-base font-semibold text-gray-200 tracking-wide flex items-center gap-2">
                  Currently Building <span className="text-xl">🚀</span>
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* 📝 RIGHT SIDE: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-7/12 flex flex-col items-start text-left"
          >
            {/* Heading */}
            <div className="mb-8">
              <h2 className="relative flex items-baseline gap-4 mb-2">
                <span className="text-2xl md:text-3xl font-['Inter'] font-bold uppercase tracking-widest text-white/90">
                  Who I
                </span>
                <span className="text-5xl md:text-6xl font-['Caveat'] text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d6d] to-[#ffb3c6] drop-shadow-[0_0_20px_rgba(255,77,109,0.4)]">
                  Am
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#ff4d6d] to-transparent rounded-full"></div>
            </div>

            {/* Identity */}
            <div className="mb-6">
              <h3 className="text-4xl md:text-5xl font-['Inter'] font-black text-white tracking-tight mb-2">
                Jahanvi <span className="font-['Playfair_Display'] italic font-normal text-gray-400">Sharma</span>
              </h3>
              <p className="text-[#ff9aa2] font-semibold tracking-wide uppercase text-sm md:text-base">
                B.Tech Computer Science Student | Web Developer
              </p>
            </div>

            {/* Description */}
            <div className="text-gray-400 text-lg leading-relaxed mb-10 space-y-4 font-light">
              <p>
                I specialize in building real-world applications that merge <span className="text-white font-medium">clean code</span> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d6d] to-[#ffb3c6] font-medium">stunning aesthetics</span>.
              </p>
              <p>
                My approach to development goes beyond just writing functionality. I focus on the "why" behind the code, designing systems that are robust, highly performant, and provide an intuitive user experience. From architecting <span className="text-white font-medium">full-stack MERN platforms</span> to crafting interactive web experiences, I thrive on turning complex problems into elegant solutions.
              </p>
            </div>

            {/* Highlights / Tech Stack */}
            <div className="w-full">
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-semibold">Core Arsenal</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { tag: "💻 Full Stack / MERN" },
                  { tag: "⚛️ React & Frontend" },
                  { tag: "🐍 Python Programming" },
                  { tag: "🐙 GitHub & Version Control" },
                  { tag: "🧠 Problem Solving" },
                ].map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-xl shadow-sm hover:bg-white/10 hover:border-[#ff4d6d]/40 hover:text-white transition-all cursor-default"
                  >
                    {item.tag}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* =========================================
          EDUCATION TIMELINE SECTION
      ========================================= */}
      <section id="education" className="scroll-mt-32 px-6 md:px-8 py-24 md:py-32 max-w-[75rem] mx-auto relative z-10 w-full mb-10">

        {/* Background Atmosphere */}
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#ff4d6d]/5 blur-[150px] rounded-full pointer-events-none -z-20"></div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-20 md:mb-28 relative"
        >
          <h2 className="relative flex flex-col items-center justify-center gap-1 z-10 w-full">
            <span className="font-['Playfair_Display'] italic text-2xl md:text-3xl text-[#ffb3c6] font-light tracking-widest mb-1">
              Academic Journey
            </span>
            <span className="text-4xl md:text-6xl font-['Inter'] font-black uppercase tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-[0_4px_15px_rgba(255,77,109,0.15)]">
              EDUCATION
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#ff4d6d]/60 to-transparent rounded-full mt-5 shadow-[0_0_10px_rgba(255,77,109,0.5)]"
          ></motion.div>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Faded Background Text for Left Balance */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.03 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="hidden lg:block absolute top-[20%] -left-[30%] -rotate-90 origin-center text-[150px] font-black font-['Inter'] text-white pointer-events-none select-none tracking-widest z-0"
          >
            STUDY
          </motion.div>

          {/* Central Connecting Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff4d6d] via-[#ffb3c6]/60 to-transparent md:-translate-x-1/2 -z-10 shadow-[0_0_20px_rgba(255,77,109,0.5)]">
            {/* Bottom Glow Endpoint */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-t from-transparent to-[#ff4d6d]/50 blur-[4px]"></div>
          </div>

          {/* Timeline Items Wrapper */}
          <div className="space-y-16 lg:space-y-24 pb-20">

            {/* --- ITEM 1: LPU (Current) --- */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
              {/* Timeline Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute left-6 md:left-1/2 w-14 h-14 bg-[#1a0505] border-2 border-[#ff4d6d] rounded-full flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_25px_rgba(255,77,109,0.6)] animate-[pulse_3s_infinite]"
              >
                <div className="text-[#ffb3c6] drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
              </motion.div>

              {/* Card (Right Side on Desktop) */}
              <div className="w-full md:w-1/2 pl-24 md:pl-20 md:ml-auto">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative group bg-white/5 backdrop-blur-xl border border-[#ff4d6d]/40 p-8 md:p-10 rounded-2xl md:scale-105 shadow-[0_15px_40px_rgba(255,77,109,0.25)] hover:bg-[#1a0505]/80 hover:border-[#ff4d6d]/80 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.07] hover:shadow-[0_20px_50px_rgba(255,77,109,0.4)] z-10"
                >
                  <div className="absolute -top-4 right-6 bg-gradient-to-r from-[#e63956] to-[#ff4d6d] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,77,109,0.5)] animate-pulse">
                    Current
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#ffb3c6] transition-colors duration-300">Lovely Professional University</h3>
                  <h4 className="text-base md:text-lg font-medium text-gray-300 mb-5">B.Tech – Computer Science & Engineering</h4>

                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base text-gray-400 mb-8 font-light">
                    <span>Phagwara, Punjab</span>
                    <span className="w-1 h-1 rounded-full bg-[#ff4d6d]/50"></span>
                    <span>Aug 2023 - Present</span>
                  </div>

                  <span className="inline-block px-5 py-2 bg-[#ff4d6d]/15 border border-[#ff4d6d]/40 text-[#ff4d6d] text-xs font-bold tracking-widest uppercase rounded-full shadow-inner group-hover:bg-[#ff4d6d]/25 transition-colors">
                    CGPA: 7.8
                  </span>
                </motion.div>
              </div>
            </div>

            {/* --- ITEM 2: SKV --- */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
              {/* Timeline Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute left-6 md:left-1/2 w-12 h-12 bg-[#1a0505] border border-[#ffb3c6]/40 rounded-full flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(255,179,198,0.2)] hover:border-[#ffb3c6] transition-colors hover:shadow-[0_0_20px_rgba(255,179,198,0.4)]"
              >
                <div className="text-gray-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 22h16A2 2 0 0022 20V4a2 2 0 00-2-2H4a2 2 0 00-2 2v16a2 2 0 002 2z" />
                    <path d="M9 16v6" />
                    <path d="M15 16v6" />
                  </svg>
                </div>
              </motion.div>

              {/* Card (Left Side on Desktop) */}
              <div className="w-full md:w-1/2 pl-24 md:pl-0 md:pr-20 md:mr-auto text-left md:text-right">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative group bg-white/5 backdrop-blur-xl border border-white/10 p-7 md:p-8 rounded-2xl opacity-95 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-[#1a0505]/80 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:opacity-100 hover:shadow-[0_15px_40px_rgba(255,255,255,0.05)]"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">Sampoorna Kendra Vidyalaya</h3>
                  <h4 className="text-sm md:text-base font-medium text-gray-300 mb-5">Intermediate (12th)</h4>

                  <div className="flex flex-wrap md:justify-end items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-400 mb-6 font-light">
                    <span>Dibrugarh, Assam</span>
                    <span className="hidden md:block w-1 h-1 rounded-full bg-[#ffb3c6]/40"></span>
                    <span>Apr 2020 – Mar 2022</span>
                  </div>

                  <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-xs font-bold tracking-widest uppercase rounded-full shadow-inner group-hover:border-white/30 transition-colors">
                    Percentage: 90%
                  </span>
                </motion.div>
              </div>
            </div>

            {/* --- ITEM 3: Little Flower --- */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
              {/* Timeline Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute left-6 md:left-1/2 w-12 h-12 bg-[#1a0505] border border-white/10 rounded-full flex items-center justify-center -translate-x-1/2 z-20 shadow-inner hover:border-white/30 transition-colors"
              >
                <div className="text-gray-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 22h16A2 2 0 0022 20V4a2 2 0 00-2-2H4a2 2 0 00-2 2v16a2 2 0 002 2z" />
                    <path d="M9 16v6" />
                    <path d="M15 16v6" />
                  </svg>
                </div>
              </motion.div>

              {/* Card (Right Side on Desktop) */}
              <div className="w-full md:w-1/2 pl-24 md:pl-20 md:ml-auto">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative group bg-white/5 backdrop-blur-xl border border-white/10 p-7 md:p-8 rounded-2xl opacity-90 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-[#1a0505]/80 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:opacity-100 hover:shadow-[0_15px_40px_rgba(255,255,255,0.05)]"
                >
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 transition-colors duration-300">Little Flower Hr. Sec School</h3>
                  <h4 className="text-sm font-medium text-gray-400 mb-5">Matriculation (10th)</h4>

                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 mb-6 font-light">
                    <span>Dibrugarh, Assam</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                    <span>Mar 2020</span>
                  </div>

                  <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/5 text-gray-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-full shadow-inner">
                    Percentage: 94%
                  </span>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="thinking" className="px-6 md:px-8 py-24 max-w-6xl mx-auto relative z-10 w-full">

        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-16 relative">
          <span className="px-5 py-2 mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#ff4d6d] bg-[#ff4d6d]/10 border border-[#ff4d6d]/20 rounded-full shadow-[0_0_15px_rgba(255,77,109,0.2)]">
            Thinking Process
          </span>
          <h2 className="relative flex items-center gap-3 md:gap-5 z-10">
            <span className="text-3xl md:text-5xl font-['Inter'] font-black uppercase text-transparent tracking-wider" style={{ WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.4)' }}>
              HOW I
            </span>
            <span className="relative text-4xl md:text-6xl font-['Inter'] font-black uppercase text-[#ff4d6d] drop-shadow-[0_0_15px_rgba(255,20,147,0.5)] group">
              THINK
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-2 left-0 h-1 bg-[#ff4d6d] shadow-[0_0_10px_rgba(255,77,109,0.8)]"
              ></motion.div>
            </span>
          </h2>
        </div>

        {/* Workflow Container */}
        <div className="relative w-full py-10">

          {/* Decorative Elements Setup Space */}
          {/* Left Background Glow */}
          <div className="absolute top-1/2 -left-[10%] -translate-y-1/2 w-96 h-96 bg-[#ff4d6d]/10 blur-[120px] rounded-full pointer-events-none animate-[pulse_5s_infinite]"></div>
          {/* Right Background Glow */}
          <div className="absolute bottom-[-10%] -right-[10%] w-[30rem] h-[30rem] bg-[#ffb3c6]/5 blur-[120px] rounded-full pointer-events-none animate-[pulse_7s_infinite]"></div>

          {/* Faded Background Typography */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 0.03 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="hidden xl:block absolute top-[15%] -left-[120px] -rotate-90 origin-center text-[160px] font-black font-['Inter'] text-white pointer-events-none select-none tracking-tighter z-0"
          >
            PROCESS
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 0.02 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden xl:block absolute bottom-[0%] -right-[80px] text-[180px] font-black font-['Inter'] text-white pointer-events-none select-none tracking-widest z-0"
          >
            FLOW
          </motion.div>

          {/* Floating Tags */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="hidden lg:flex absolute top-[10%] -left-[5%] bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-2xl shadow-xl z-20 animate-[float_5s_ease-in-out_infinite]"
          >
            <span className="text-gray-300 text-sm font-semibold tracking-wide">Problem Solving 🧠</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="hidden lg:flex absolute bottom-[10%] -right-[5%] bg-[#1a0505]/60 backdrop-blur-xl border border-[#ff4d6d]/20 px-5 py-2.5 rounded-2xl shadow-xl z-20 animate-[float_6s_ease-in-out_infinite] [animation-delay:2s]"
          >
            <span className="text-[#ffb3c6] text-sm font-semibold tracking-wide">Logical Thinking ⚡</span>
          </motion.div>

          {/* SVG Hand-drawn Arrows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="hidden xl:block absolute top-[18%] left-[2%] z-10"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#ff4d6d]">
              <path d="M10 10 Q 40 10, 60 40 T 65 70" strokeWidth="2" strokeLinecap="round" fill="none" className="drop-shadow-[0_0_8px_rgba(255,77,109,0.8)]" />
              <path d="M45 65 L 65 70 L 60 50" strokeWidth="2" strokeLinecap="round" fill="none" className="drop-shadow-[0_0_8px_rgba(255,77,109,0.8)]" />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="hidden xl:block absolute bottom-[15%] right-[2%] z-10"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-white">
              <path d="M70 70 Q 40 70, 20 40 T 15 10" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" fill="none" />
              <path d="M30 15 L 15 10 L 20 25" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </motion.div>

          {/* Extended Connecting Line */}
          <div className="hidden md:block absolute top-[50%] -left-[10%] w-[120%] h-[2px] bg-gradient-to-r from-transparent via-[#ff4d6d]/40 to-transparent border-t border-dashed border-[#ff4d6d]/30 -z-10">
            {/* Node dots */}
            <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-3 h-3 rounded-full bg-[#1a0505] border-[2px] border-[#ff4d6d] shadow-[0_0_10px_rgba(255,77,109,0.8)]"></div>
            <div className="absolute top-1/2 left-[50%] -translate-y-1/2 w-3 h-3 rounded-full bg-[#1a0505] border-[2px] border-[#ff4d6d] shadow-[0_0_10px_rgba(255,77,109,0.8)]"></div>
            <div className="absolute top-1/2 left-[80%] -translate-y-1/2 w-3 h-3 rounded-full bg-[#1a0505] border-[2px] border-[#ff4d6d] shadow-[0_0_10px_rgba(255,77,109,0.8)]"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">

            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group [perspective:1200px] h-[280px] md:h-[320px] w-full cursor-pointer"
            >
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(255,77,109,0.2)] rounded-3xl">
                {/* FRONT */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-end [backface-visibility:hidden] overflow-hidden">
                  {/* Massive Faded Number */}
                  <span className="absolute -top-6 -right-4 text-[8rem] font-black text-white/[0.03] font-['Inter'] leading-none tracking-tighter transition-all group-hover:text-[#ff4d6d]/10">01</span>

                  <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Break it Down</h3>
                  <p className="text-gray-400 font-light text-sm relative z-10">Simplifying complexity.</p>
                </div>
                {/* BACK */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] to-[#2a0f0f] border border-[#ff4d6d]/30 rounded-3xl p-8 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-[inset_0_0_30px_rgba(255,77,109,0.1)]">
                  <span className="text-[#ff4d6d] mb-4 text-3xl">🔍</span>
                  <p className="text-gray-200 leading-relaxed font-light text-sm md:text-base">
                    I divide complex, overwhelming problems into smaller, manageable milestones to architect clear, step-by-step solutions without losing focus.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group [perspective:1200px] h-[280px] md:h-[320px] w-full cursor-pointer md:mt-12"
            >
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(255,77,109,0.2)] rounded-3xl">
                {/* FRONT */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-end [backface-visibility:hidden] overflow-hidden">
                  {/* Massive Faded Number */}
                  <span className="absolute -top-6 -right-4 text-[8rem] font-black text-white/[0.03] font-['Inter'] leading-none tracking-tighter transition-all group-hover:text-[#ff4d6d]/10">02</span>

                  <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Understand Logic</h3>
                  <p className="text-gray-400 font-light text-sm relative z-10">Mastering the 'Why'.</p>
                </div>
                {/* BACK */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] to-[#2a0f0f] border border-[#ff4d6d]/30 rounded-3xl p-8 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-[inset_0_0_30px_rgba(255,77,109,0.1)]">
                  <span className="text-[#ff4d6d] mb-4 text-3xl">⚙️</span>
                  <p className="text-gray-200 leading-relaxed font-light text-sm md:text-base">
                    I focus deeply on why a system works rather than just making it run. This deep logic understanding builds robust intuition for solving novel bugs.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="group [perspective:1200px] h-[280px] md:h-[320px] w-full cursor-pointer"
            >
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(255,77,109,0.2)] rounded-3xl">
                {/* FRONT */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-end [backface-visibility:hidden] overflow-hidden">
                  {/* Massive Faded Number */}
                  <span className="absolute -top-6 -right-4 text-[8rem] font-black text-white/[0.03] font-['Inter'] leading-none tracking-tighter transition-all group-hover:text-[#ff4d6d]/10">03</span>

                  <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Build & Debug</h3>
                  <p className="text-gray-400 font-light text-sm relative z-10">Execution over theory.</p>
                </div>
                {/* BACK */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] to-[#2a0f0f] border border-[#ff4d6d]/30 rounded-3xl p-8 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-[inset_0_0_30px_rgba(255,77,109,0.1)]">
                  <span className="text-[#ff4d6d] mb-4 text-3xl">🛠️</span>
                  <p className="text-gray-200 leading-relaxed font-light text-sm md:text-base">
                    I learn rapidly by building real projects, throwing errors, and meticulously debugging. Failure teaches far more effectively than flawless success.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>














      <section id="skills" className="scroll-mt-20 px-6 md:px-8 py-20 md:py-24 max-w-[80rem] mx-auto relative z-10 w-full">

        {/* Deep Atmospheric Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#100303] rounded-[100px] blur-[80px] -z-20 opacity-80 pointer-events-none"></div>
        <div className="absolute top-0 right-[-5%] w-[20rem] h-[20rem] bg-[#ff4d6d]/10 blur-[100px] rounded-full -z-10 animate-[pulse_6s_infinite] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-[#ffb3c6]/5 blur-[100px] rounded-full -z-10 animate-[pulse_8s_infinite] pointer-events-none"></div>

        {/* Floating Tech Orbs */}
        <motion.div initial={{ y: 0 }} animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="hidden md:block absolute top-[15%] left-[10%] text-4xl opacity-[0.08] blur-[1px] pointer-events-none select-none">⚛️</motion.div>
        <motion.div initial={{ y: 0 }} animate={{ y: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="hidden md:block absolute bottom-[25%] right-[5%] text-5xl opacity-[0.08] blur-[2px] pointer-events-none select-none">🟢</motion.div>
        <motion.div initial={{ y: 0, rotate: 0 }} animate={{ y: [0, -25, 0], rotate: 45 }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="hidden md:block absolute top-[40%] right-[12%] text-3xl opacity-[0.04] blur-[1px] pointer-events-none select-none">🎨</motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-16 relative"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -top-6 md:-top-16 text-[4.5rem] md:text-[8rem] font-black text-white/[0.02] tracking-widest pointer-events-none select-none z-0"
          >
            EXPERTISE
          </motion.span>
          <h2 className="relative flex flex-col items-center z-10">
            <motion.span
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-['Playfair_Display'] italic text-xl md:text-2xl text-[#ffb3c6] font-light tracking-[0.2em] mb-1"
            >
              Core
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-['Inter'] font-black uppercase tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
            >
              SKILLS
            </motion.span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#ff4d6d]/60 to-transparent rounded-full mt-6 shadow-[0_0_10px_rgba(255,77,109,0.5)]"
          ></motion.div>
        </motion.div>

        {/* DASHBOARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 w-full">

          {/* LEFT COLUMN: Insights Sidebar (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* Featured Skill Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative h-[260px] md:h-[300px] bg-gradient-to-b from-[#ff4d6d]/5 to-[#1a0505]/70 backdrop-blur-xl border border-[#ff4d6d]/20 p-6 rounded-[2rem] shadow-lg hover:shadow-[0_15px_40px_rgba(255,77,109,0.1)] transition-all duration-400 hover:-translate-y-1 overflow-hidden flex flex-col items-center justify-center"
            >
              {/* Spinning Glow FX */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#ff4d6d]/10 blur-[50px] rounded-full"></div>

              <div className="absolute top-5 left-5 flex flex-col gap-1.5">
                <span className="px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#1a0505] bg-[#ff4d6d] rounded-full shadow-[0_0_8px_#ff4d6d]">Strongest</span>
                <span className="px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#ff4d6d] bg-[#ff4d6d]/10 border border-[#ff4d6d]/20 rounded-full w-fit">Daily Use</span>
              </div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="text-[5rem] md:text-[6rem] leading-none mb-4 relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer"
              >
                ⚛️
              </motion.div>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-wide relative z-10">React.js</h3>
              <p className="text-[#ffb3c6] text-xs mt-1 font-medium tracking-wide relative z-10">Mastery Level</p>
            </motion.div>

            {/* Currently Learning Mini-Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-[#1a0505]/50 backdrop-blur-xl border border-white/5 p-5 md:p-6 rounded-[1.5rem] shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-1 overflow-hidden"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.15em]">Currently Learning</span>
                <span className="text-xl animate-pulse">⚡</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white">Next.js</h3>

              {/* Mini Loading Bar */}
              <div className="w-full h-1 bg-white/5 rounded-full mt-4 overflow-hidden relative">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '60%' }} transition={{ duration: 1.2, delay: 0.3 }} viewport={{ once: true }} className="h-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></motion.div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Execution Panels (Span 8) */}
          <div className="lg:col-span-8 flex flex-col gap-6">

            {/* FRONTEND DASHBOARD */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-[#1a0505]/60 backdrop-blur-xl border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl hover:shadow-[0_15px_40px_rgba(255,77,109,0.05)] transition-all duration-400 overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6 relative z-10 border-b border-white/5 pb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl border border-white/10 shadow-inner">💻</div>
                <h3 className="text-xl md:text-2xl font-black text-white tracking-widest uppercase">
                  Frontend
                </h3>
              </div>

              <div className="space-y-4 relative z-10">
                {[
                  { name: "JavaScript", icon: "🟨", percent: "90%" },
                  { name: "HTML / CSS", icon: "🎨", percent: "95%" },
                  { name: "Tailwind CSS", icon: "💨", percent: "88%" },
                  { name: "Framer Motion", icon: "✨", percent: "75%" },
                ].map((skill, index) => (
                  <div key={index} className="w-full">
                    {/* Compact Pill Progress Bar */}
                    <div className="relative w-full h-9 md:h-10 bg-[#0a0202] rounded-xl overflow-hidden shadow-inner border border-white/5 group/pill">

                      {/* Gradient Fill */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.percent }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-[#800f1c] via-[#cc1a34] to-[#ff4d6d] relative overflow-hidden shadow-[inset_0_0_15px_rgba(255,255,255,0.08)]"
                      >
                        {/* Moving Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/pill:translate-x-[200%] transition-transform duration-[1200ms] ease-in-out skew-x-12"></div>
                      </motion.div>

                      {/* Foreground Text Overlay */}
                      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                        <span className="text-white font-semibold text-xs md:text-sm tracking-wide flex items-center gap-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                          <span className="text-sm md:text-base bg-white/10 w-6 h-6 flex items-center justify-center rounded backdrop-blur-sm shadow-inner">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-white font-bold text-xs md:text-sm tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                          {skill.percent}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* BACKEND DASHBOARD */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              viewport={{ once: true }}
              className="group relative bg-[#1a0505]/60 backdrop-blur-xl border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl hover:shadow-[0_15px_40px_rgba(255,77,109,0.05)] transition-all duration-400 overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6 relative z-10 border-b border-white/5 pb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl border border-white/10 shadow-inner">⚙️</div>
                <h3 className="text-xl md:text-2xl font-black text-white tracking-widest uppercase">
                  Backend
                </h3>
              </div>

              <div className="space-y-4 relative z-10">
                {[
                  { name: "Node.js", icon: "🟢", percent: "80%" },
                  { name: "Express", icon: "🚀", percent: "82%" },
                  { name: "MongoDB", icon: "🍃", percent: "75%" },
                  { name: "MySQL / SQL", icon: "🗄️", percent: "70%" },
                ].map((skill, index) => (
                  <div key={index} className="w-full">
                    {/* Compact Pill Progress Bar */}
                    <div className="relative w-full h-9 md:h-10 bg-[#0a0202] rounded-xl overflow-hidden shadow-inner border border-white/5 group/pill">

                      {/* Gradient Fill */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.percent }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-[#4a0d14] via-[#991427] to-[#e63956] relative overflow-hidden shadow-[inset_0_0_15px_rgba(255,255,255,0.08)]"
                      >
                        {/* Moving Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/pill:translate-x-[200%] transition-transform duration-[1200ms] ease-in-out skew-x-12"></div>
                      </motion.div>

                      {/* Foreground Text Overlay */}
                      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                        <span className="text-white font-semibold text-xs md:text-sm tracking-wide flex items-center gap-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                          <span className="text-sm md:text-base bg-white/10 w-6 h-6 flex items-center justify-center rounded backdrop-blur-sm shadow-inner">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-white font-bold text-xs md:text-sm tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                          {skill.percent}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </section>







      <section id="projects" className="scroll-mt-20 px-6 md:px-8 py-24 max-w-6xl mx-auto relative z-10">
        {/* BACKGROUND GLOWS SPECIFIC TO THIS SECTION */}
        <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-[#ff4d6d]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-[#800000]/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="relative mb-6">
            <span className="absolute -top-16 md:-top-24 left-1/2 -translate-x-1/2 text-[6rem] md:text-[10rem] font-black text-white/[0.03] tracking-tighter pointer-events-none select-none z-0">
              PROJECTS
            </span>
            <h2 className="relative flex flex-col items-center justify-center gap-2 z-10 w-full">
              <span className="font-['Playfair_Display'] italic text-2xl md:text-3xl text-gray-400 font-light tracking-wide -mb-2">
                Selected
              </span>
              <span className="text-5xl md:text-7xl font-['Inter'] font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_0_20px_rgba(255,77,109,0.2)]" style={{ WebkitTextStroke: '1px rgba(255, 77, 109, 0.5)' }}>
                WORK
              </span>
            </h2>
          </div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            A showcase of projects where I turn complex problems into elegant, functional digital experiences.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative group flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* GLOW EFFECT BEHIND CARD */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d6d]/0 via-[#ff4d6d]/5 to-[#800000]/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10"></div>

              {/* IMAGE / VISUAL SIDE */}
              <div className="w-full md:w-1/2 relative">
                <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#1a0505] shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(255,77,109,0.2)] transition-all duration-500 group-hover:-translate-y-2">
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120606] via-transparent to-[#2a0f0f]/30 z-10 transition-opacity duration-300 group-hover:opacity-50"></div>

                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium tracking-widest z-0 group-hover:scale-110 transition-transform duration-700">
                    {project.imagePlaceholder}
                  </div>
                </div>

                {/* Decorative floating dots */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[radial-gradient(circle,rgba(255,77,109,0.2)_1px,transparent_1px)] [background-size:8px_8px] rounded-lg -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* CONTENT SIDE */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff4d6d] bg-[#ff4d6d]/10 border border-[#ff4d6d]/20 rounded-full">
                    {project.tag}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-[#ffb3c6] transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="space-y-4 mb-6 relative">
                  {/* Problem -> Solution */}
                  <div className="pl-4 border-l-2 border-white/10 group-hover:border-[#ff4d6d]/50 transition-colors duration-500">
                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">The Problem</p>
                    <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="pl-4 border-l-2 border-white/10 group-hover:border-[#ff4d6d]/50 transition-colors duration-500">
                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">The Solution</p>
                    <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                  </div>
                  <div className="pt-2">
                    <p className="text-[#ff9aa2] font-medium flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 text-sm text-gray-400 bg-white/5 border border-white/5 rounded-full hover:bg-white/10 hover:border-white/20 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.demoLink} className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-[#ff4d6d] to-[#800000] rounded-full hover:shadow-[0_0_20px_rgba(255,77,109,0.4)] hover:scale-105 overflow-hidden group/btn">
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                    <span className="relative flex items-center gap-2">
                      Live Demo
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </span>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-[#ffb3c6] transition-all duration-300 border border-[#ff4d6d]/30 rounded-full hover:bg-[#ff4d6d]/10 hover:border-[#ff4d6d] hover:shadow-[0_0_15px_rgba(255,77,109,0.2)]">
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================
          CERTIFICATIONS SHOWCASE GALLERY
      ========================================= */}
      <section id="certifications" className="scroll-mt-32 py-24 md:py-32 relative z-10 w-full overflow-hidden">

        {/* Background Atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ff4d6d]/5 blur-[120px] rounded-full -z-20"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ffb3c6]/5 blur-[150px] rounded-full -z-20"></div>
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] -z-10"></div>
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-16 relative px-6 md:px-8"
        >
          {/* Faded Background Text */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -top-8 md:-top-16 text-[4.5rem] md:text-[8rem] font-black text-white/[0.02] tracking-widest pointer-events-none select-none z-0"
          >
            CERTIFIED
          </motion.span>

          <h2 className="relative flex flex-col items-center justify-center gap-1 z-10 w-full">
            <span className="font-['Playfair_Display'] italic text-xl md:text-3xl text-[#ffb3c6] font-light tracking-widest mb-1">
              Learning & Growth
            </span>
            <span className="text-3xl md:text-6xl font-['Inter'] font-black uppercase tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-[0_4px_15px_rgba(255,77,109,0.15)]">
              CERTIFICATIONS
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#ff4d6d]/60 to-transparent rounded-full mt-4 shadow-[0_0_10px_rgba(255,77,109,0.5)]"
          ></motion.div>
        </motion.div>

        {/* HORIZONTAL GALLERY WRAPPER */}
        <div className="relative w-full max-w-[100vw]">

          {/* Subtle edge fades to indicate scrollability */}
          <div className="absolute top-0 bottom-0 left-0 w-8 md:w-24 bg-gradient-to-r from-[#100303] to-transparent z-10 pointer-events-none hidden md:block"></div>
          <div className="absolute top-0 bottom-0 right-0 w-8 md:w-24 bg-gradient-to-l from-[#100303] to-transparent z-10 pointer-events-none hidden md:block"></div>

          {/* Horizontally scrolling container */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-6 md:gap-10 px-6 md:px-24 pb-16 pt-8 items-center cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >

            {/* CERT 1: Mobile Security NPTEL */}
            <div className="relative group min-w-[300px] w-[85vw] md:min-w-[420px] md:w-[420px] h-[500px] rounded-3xl overflow-hidden snap-center flex-shrink-0 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              {/* BACKGROUND POSTER ART */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] via-[#2a0f0f] to-[#120606] transition-transform duration-700 group-hover:scale-105 z-0 flex flex-col justify-between p-8">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

                {/* Glowing Orb */}
                <div className="absolute top-10 right-10 w-48 h-48 bg-[#ff4d6d]/10 blur-[60px] rounded-full pointer-events-none"></div>

                {/* Platform Logo */}
                <div className="relative z-10">
                  <h4 className="text-3xl font-black tracking-widest text-white/30 group-hover:text-[#ffca28] transition-colors duration-500 flex items-center gap-2">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                    NPTEL
                  </h4>
                </div>

                {/* Huge Typography Title */}
                <div className="relative z-10 mb-[110px] md:mb-[120px] pointer-events-none">
                  <h3 className="text-[2.2rem] leading-[1.1] font-black text-white/90 group-hover:text-white transition-colors duration-500 uppercase tracking-tighter">
                    Privacy &<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d6d] to-[#ffb3c6]">Security</span>
                  </h3>
                  <p className="text-gray-400 mt-2 font-medium tracking-wide">in Online Social Media</p>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-[#ff4d6d]/30 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,77,109,0.3)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d6d] animate-pulse"></span>
                Verified
              </div>

              {/* Glass Details Panel (Slides up on Hover) */}
              <div className="absolute bottom-0 left-0 right-0 p-3 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-[#0a0202]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.5)] group-hover:bg-[#1a0505]/95 group-hover:border-[#ff4d6d]/40 transition-colors duration-500">
                  <div className="flex justify-between items-center mb-5">
                    <span className="inline-block px-3 py-1 bg-[#ff4d6d]/10 border border-[#ff4d6d]/20 text-[#ffb3c6] text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-md">
                      Security
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d6d]/60"></span> Jul 2025
                    </span>
                  </div>
                  <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300 group-hover:bg-[#ff4d6d] group-hover:border-[#ff4d6d] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,77,109,0.4)] transition-all duration-300 overflow-hidden relative">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View Credential
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* CERT 2: ChatGPT Udemy */}
            <div className="relative group min-w-[300px] w-[85vw] md:min-w-[420px] md:w-[420px] h-[500px] rounded-3xl overflow-hidden snap-center flex-shrink-0 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              {/* BACKGROUND POSTER ART */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#120606] via-[#2a0f0f] to-[#1a0505] transition-transform duration-700 group-hover:scale-105 z-0 flex flex-col justify-between p-8">
                {/* Dot Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px]"></div>

                {/* Glowing Orb */}
                <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#a435f0]/15 blur-[60px] rounded-full pointer-events-none"></div>

                {/* Platform Logo */}
                <div className="relative z-10">
                  <h4 className="text-3xl font-black tracking-tighter text-white/30 group-hover:text-[#a435f0] transition-colors duration-500 flex items-center gap-2">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-7h2v7h-2z" /></svg>
                    udemy
                  </h4>
                </div>

                {/* Huge Typography Title */}
                <div className="relative z-10 mb-[110px] md:mb-[120px] pointer-events-none">
                  <h3 className="text-[2.5rem] leading-[1.1] font-black text-white/90 group-hover:text-white transition-colors duration-500 uppercase tracking-tighter shadow-inner">
                    ChatGPT<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a435f0] to-[#ffb3c6]">AI Essentials</span>
                  </h3>
                  <p className="text-gray-400 mt-2 font-medium tracking-wide">For Beginners</p>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-[#ff4d6d]/30 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,77,109,0.3)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d6d] animate-pulse"></span>
                Verified
              </div>

              {/* Glass Details Panel (Slides up on Hover) */}
              <div className="absolute bottom-0 left-0 right-0 p-3 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-[#0a0202]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.5)] group-hover:bg-[#1a0505]/95 group-hover:border-[#ff4d6d]/40 transition-colors duration-500">
                  <div className="flex justify-between items-center mb-5">
                    <span className="inline-block px-3 py-1 bg-[#ff4d6d]/10 border border-[#ff4d6d]/20 text-[#ffb3c6] text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-md">
                      AI
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d6d]/60"></span> Jul 2025
                    </span>
                  </div>
                  <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300 group-hover:bg-[#ff4d6d] group-hover:border-[#ff4d6d] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,77,109,0.4)] transition-all duration-300 overflow-hidden relative">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View Credential
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>



            {/* CERT 4: Hardware & OS IBM */}
            <div className="relative group min-w-[300px] w-[85vw] md:min-w-[420px] md:w-[420px] h-[500px] rounded-3xl overflow-hidden snap-center flex-shrink-0 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              {/* BACKGROUND POSTER ART */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1a0505] via-[#120606] to-[#0a192f] transition-transform duration-700 group-hover:scale-105 z-0 flex flex-col justify-between p-8">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Glowing Orb */}
                <div className="absolute top-10 right-10 w-48 h-48 bg-[#0056D2]/15 blur-[60px] rounded-full pointer-events-none"></div>

                {/* Platform Logo */}
                <div className="relative z-10 flex gap-4 items-center">
                  <h4 className="text-2xl font-black italic tracking-tighter text-white/30 group-hover:text-[#0056D2] transition-colors duration-500">
                    coursera
                  </h4>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  <h4 className="text-xl font-black tracking-[0.2em] text-white/30 group-hover:text-white transition-colors duration-500">
                    IBM
                  </h4>
                </div>

                {/* Huge Typography Title */}
                <div className="relative z-10 mb-[110px] md:mb-[120px] pointer-events-none">
                  <h3 className="text-[2.2rem] leading-[1.1] font-black text-white/90 group-hover:text-white transition-colors duration-500 uppercase tracking-tighter">
                    HARDWARE<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0056D2] to-[#ff4d6d]">OPERATING SYS</span>
                  </h3>
                  <p className="text-gray-400 mt-2 font-medium tracking-wide border-l-2 border-[#ff4d6d]/50 group-hover:border-[#0056D2] transition-colors pl-3">Architecture & Logistics</p>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-[#ff4d6d]/30 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,77,109,0.3)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d6d] animate-pulse"></span>
                Verified
              </div>

              {/* Glass Details Panel (Slides up on Hover) */}
              <div className="absolute bottom-0 left-0 right-0 p-3 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-[#0a0202]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.5)] group-hover:bg-[#1a0505]/95 group-hover:border-[#ff4d6d]/40 transition-colors duration-500">
                  <div className="flex justify-between items-center mb-5">
                    <span className="inline-block px-3 py-1 bg-[#ff4d6d]/10 border border-[#ff4d6d]/20 text-[#ffb3c6] text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-md">
                      Hardware
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d6d]/60"></span> Completed
                    </span>
                  </div>
                  <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300 group-hover:bg-[#ff4d6d] group-hover:border-[#ff4d6d] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,77,109,0.4)] transition-all duration-300 overflow-hidden relative">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View Credential
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* CERT 5: Master Gen AI Udemy */}
            <div className="relative group min-w-[300px] w-[85vw] md:min-w-[420px] md:w-[420px] h-[500px] rounded-3xl overflow-hidden snap-center flex-shrink-0 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              {/* BACKGROUND POSTER ART */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a0505] via-[#2a0f0f] to-[#120606] transition-transform duration-700 group-hover:scale-105 z-0 flex flex-col justify-between p-8">
                {/* Abstract Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04)_1px,transparent_2px)] bg-[size:24px_24px]"></div>

                {/* Glowing Orb */}
                <div className="absolute bottom-1/2 left-10 w-48 h-48 bg-[#ff4d6d]/15 blur-[60px] rounded-full pointer-events-none"></div>

                {/* Platform Logo */}
                <div className="relative z-10">
                  <h4 className="text-3xl font-black tracking-tighter text-white/30 group-hover:text-[#a435f0] transition-colors duration-500 flex items-center gap-2">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-7h2v7h-2z" /></svg>
                    udemy
                  </h4>
                </div>

                {/* Huge Typography Title */}
                <div className="relative z-10 mb-[110px] md:mb-[120px] pointer-events-none">
                  <h3 className="text-[2.2rem] leading-[1.1] font-black text-white/90 group-hover:text-white transition-colors duration-500 uppercase tracking-tighter shadow-inner">
                    MASTER<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb3c6] to-white">GENERATIVE AI</span>
                  </h3>
                  <p className="text-[#ff4d6d] mt-2 font-bold tracking-wide">& Modern Tools</p>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-[#ff4d6d]/30 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,77,109,0.3)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d6d] animate-pulse"></span>
                Verified
              </div>

              {/* Glass Details Panel (Slides up on Hover) */}
              <div className="absolute bottom-0 left-0 right-0 p-3 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-[#0a0202]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.5)] group-hover:bg-[#1a0505]/95 group-hover:border-[#ff4d6d]/40 transition-colors duration-500">
                  <div className="flex justify-between items-center mb-5">
                    <span className="inline-block px-3 py-1 bg-[#ff4d6d]/10 border border-[#ff4d6d]/20 text-[#ffb3c6] text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-md">
                      AI
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d6d]/60"></span> Received
                    </span>
                  </div>
                  <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300 group-hover:bg-[#ff4d6d] group-hover:border-[#ff4d6d] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,77,109,0.4)] transition-all duration-300 overflow-hidden relative">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View Credential
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>










            {/* CERT 3: Responsive Web FreeCodeCamp */}
            <div className="relative group min-w-[300px] w-[85vw] md:min-w-[420px] md:w-[420px] h-[500px] rounded-3xl overflow-hidden snap-center flex-shrink-0 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              {/* BACKGROUND POSTER ART */}
              <div className="absolute inset-0 bg-[#0a0202] transition-transform duration-700 group-hover:scale-105 z-0 flex flex-col justify-between p-8">
                {/* Line Pattern */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.02)_0,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_10px)]"></div>

                {/* Glowing Orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gray-500/10 blur-[50px] rounded-full pointer-events-none"></div>

                {/* Platform Logo */}
                <div className="relative z-10">
                  <h4 className="text-xl font-bold font-mono tracking-widest text-white/30 group-hover:text-gray-200 transition-colors duration-500 flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
                    freeCodeCamp
                  </h4>
                </div>

                {/* Huge Typography Title */}
                <div className="relative z-10 mb-[110px] md:mb-[120px] pointer-events-none">
                  <h3 className="text-4xl md:text-[2.4rem] leading-[1.1] font-black text-white/90 group-hover:text-white transition-colors duration-500 uppercase tracking-tight drop-shadow-lg">
                    RESPONSIVE<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">WEB DESIGN</span>
                  </h3>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-[#ff4d6d]/30 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,77,109,0.3)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d6d] animate-pulse"></span>
                Verified
              </div>

              {/* Glass Details Panel (Slides up on Hover) */}
              <div className="absolute bottom-0 left-0 right-0 p-3 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-[#0a0202]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.5)] group-hover:bg-[#1a0505]/95 group-hover:border-[#ff4d6d]/40 transition-colors duration-500">
                  <div className="flex justify-between items-center mb-5">
                    <span className="inline-block px-3 py-1 bg-[#ff4d6d]/10 border border-[#ff4d6d]/20 text-[#ffb3c6] text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-md">
                      Web
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d6d]/60"></span> Dec 2023
                    </span>
                  </div>
                  <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300 group-hover:bg-[#ff4d6d] group-hover:border-[#ff4d6d] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,77,109,0.4)] transition-all duration-300 overflow-hidden relative">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View Credential
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>



          </motion.div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 px-6 md:px-8 py-12 md:py-16 max-w-[75rem] mx-auto relative z-10 w-full mb-10">

        {/* Atmospheric Backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#ff4d6d]/5 blur-[120px] rounded-full -z-20 pointer-events-none"></div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-12 md:mb-16 relative"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -top-4 md:-top-12 text-[4rem] md:text-[6rem] font-black text-white/[0.02] tracking-widest pointer-events-none select-none z-0"
          >
            CONTACT
          </motion.span>
          <h2 className="relative flex flex-col items-center z-10">
            <motion.span
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-['Playfair_Display'] italic text-xl md:text-2xl text-[#ffb3c6] font-light tracking-[0.1em] mb-1"
            >
              Let's
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-['Inter'] font-black uppercase tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
            >
              CONNECT
            </motion.span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#ff4d6d]/60 to-transparent rounded-full mt-4 shadow-[0_0_10px_rgba(255,77,109,0.5)]"
          ></motion.div>
        </motion.div>

        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">

          {/* LEFT SIDE: Personal Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            {/* Floating Tag */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-fit mb-6 px-4 py-1.5 rounded-full border border-[#ff4d6d]/30 bg-[#ff4d6d]/10 text-[#ff4d6d] text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(255,77,109,0.15)] backdrop-blur-md"
            >
              Available for opportunities 🚀
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d6d] to-[#ffb3c6]">incredible</span> together.
            </h3>

            <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed max-w-md">
              Whether you have a specific project in mind, an exciting opportunity, or just want to chat about tech, I’m always open to connect.<br/><br/><span className="text-gray-300 font-medium">Prefer a quick overview? <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[#ff4d6d] hover:text-white underline decoration-[#ff4d6d]/50 underline-offset-4 transition-colors font-bold">Download my resume.</a></span>
            </p>

            <div className="flex flex-col gap-5">

              <a href="mailto:mailjanvi.sharma77@gmail.com" className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300 w-fit">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#1a0505]/60 border border-white/10 group-hover:border-[#ff4d6d]/50 group-hover:bg-[#ff4d6d]/10 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,77,109,0.2)]">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">📧</span>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#ff4d6d] mb-0.5">Email</p>
                  <p className="font-medium text-xs sm:text-sm tracking-wide">mailjanvi.sharma77@gmail.com</p>
                </div>
              </a>

              <div className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300 w-fit cursor-default">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#1a0505]/60 border border-white/10 group-hover:border-[#ff4d6d]/50 group-hover:bg-[#ff4d6d]/10 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,77,109,0.2)]">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">📍</span>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#ff4d6d] mb-0.5">Location</p>
                  <p className="font-medium text-xs sm:text-sm tracking-wide">Global / Remote</p>
                </div>
              </div>

              <div className="flex gap-4 mt-4 text-gray-300">
                <a href="https://github.com/JahanviSharma18" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a0505]/60 border border-white/10 hover:border-[#ff4d6d]/50 hover:bg-[#ff4d6d]/10 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-[0_10px_20px_rgba(255,77,109,0.2)] hover:text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/jahanvisharma18/" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a0505]/60 border border-white/10 hover:border-[#ff4d6d]/50 hover:bg-[#ff4d6d]/10 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-[0_10px_20px_rgba(255,77,109,0.2)] hover:text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Glassmorphic Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full relative mt-6 lg:mt-0"
          >
            {/* Form Background Blur container */}
            <div className="absolute inset-0 bg-[#1a0505]/60 backdrop-blur-2xl rounded-[2rem] border border-[#ff4d6d]/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] -z-10"></div>

            <div className="p-6 md:p-10 relative z-10 h-full flex flex-col justify-center">

              {!isSubmitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div className="space-y-1.5 group">
                    <label htmlFor="name" className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#ff4d6d] ml-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 sm:py-4 bg-[#0a0202]/80 border border-white/5 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff4d6d]/50 focus:ring-1 focus:ring-[#ff4d6d]/50 focus:bg-[#1a0505]/80 transition-all duration-300 shadow-inner"
                    />
                  </div>

                  <div className="space-y-1.5 group">
                    <label htmlFor="email" className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#ff4d6d] ml-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 sm:py-4 bg-[#0a0202]/80 border border-white/5 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff4d6d]/50 focus:ring-1 focus:ring-[#ff4d6d]/50 focus:bg-[#1a0505]/80 transition-all duration-300 shadow-inner"
                    />
                  </div>

                  <div className="space-y-1.5 group">
                    <label htmlFor="message" className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#ff4d6d] ml-1">Message</label>
                    <textarea
                      id="message"
                      required
                      rows="3"
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 sm:py-4 bg-[#0a0202]/80 border border-white/5 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff4d6d]/50 focus:ring-1 focus:ring-[#ff4d6d]/50 focus:bg-[#1a0505]/80 transition-all duration-300 shadow-inner resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3 sm:py-4 px-6 rounded-xl bg-gradient-to-r from-[#e63956] to-[#ff4d6d] text-white font-black text-xs sm:text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(255,77,109,0.3)] hover:shadow-[0_0_30px_rgba(255,77,109,0.5)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-400 flex justify-center items-center gap-2 group/btn"
                  >
                    Send Message
                    <span className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300 text-lg">↗</span>
                  </button>
                </form>
              ) : (
                /* Success Animated State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center justify-center text-center py-6"
                >
                  <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-[#ff4d6d]/30 to-[#1a0505] flex items-center justify-center border border-[#ff4d6d] shadow-[0_0_30px_rgba(255,77,109,0.4)]">
                    <span className="text-3xl drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-bounce">✨</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ffb3c6] mb-3 tracking-wide">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 max-w-sm mx-auto text-sm leading-relaxed mb-6">
                    Thanks for reaching out! Your message just beamed perfectly into my inbox. I'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-[#ff4d6d] hover:text-[#1a0505] border border-[#ff4d6d]/50 hover:bg-[#ff4d6d] hover:border-[#ff4d6d] rounded-full transition-all duration-400 shadow-[0_0_10px_rgba(255,77,109,0.1)] hover:shadow-[0_0_20px_rgba(255,77,109,0.5)]"
                  >
                    Send Another
                  </button>
                </motion.div>
              )}

            </div>
          </motion.div>

        </div>
      </section>



      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2026 Janvi — Built with React & Tailwind ✨
      </footer>








    </div>
  );
}

export default App;