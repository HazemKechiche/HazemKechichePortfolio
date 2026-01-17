import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";

// Layout Components


// Section Components
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import { ProjectGrid } from "./components/sections/Projects";

// UI Components
import { ProjectModal } from "./components/ui/ProjectModal";
import { Preloader } from "./components/layouts/Preloader";
import SkillRadarSection from "./SkillRadarSection";
import { Navbar } from "./components/layouts/Navbar";
import { Footer } from "./components/layouts/Footer";
import { Project } from "./interfaces/Projects";


// Types


// --- Data ---
const PROJECTS_DATA: Project[] = [
  {
    title: "Intelligent Medical Platform",
    category: "PFE / End-of-Study Project",
    period: "Apr 2025 - Oct 2025",
    company: "Axia Solutions",
    description: "AI-powered teleconsultation platform with real-time WebRTC communication.",
    longDescription: "Developed at Axia Solutions, this platform integrates WebRTC for low-latency video calls. I built a recommendation system using ML.NET and a disease prediction API via FastAPI/BioClinicalBERT. The backend utilizes .NET 8 and SignalR for real-time synchronization.",
    techStack: ["React.js", ".NET 8", "SQL Server", "WebRTC", "SignalR", "ML.NET", "Python", "FastAPI", "BioClinicalBERT"],
    highlights: ["Real-time Audio/Video", "AI Disease Prediction", "Smart Doctor Matching", "Digital Medical Records"],
    videoDemo: "https://dl.dropboxusercontent.com/scl/fi/dx4ktao20olfus27zj25m/media1.mp4?rlkey=3le7dczmwiw6mbkvz5thmojnc&st=4x228z9c&dl=0",

    githubUrl: "https://github.com/HazemKechiche/GestionHopital-Front-Dashbord/tree/FirstVersion"



  },
  {
    title: "DevOps Automation Pipeline",
    category: "Engineering Project",
    period: "Oct 2024 - Nov 2024",
    company: "ESPRIT",
    description: "CI/CD pipeline automation reducing production time by 40%.",
    longDescription: "Engineered a professional DevOps pipeline to automate the software lifecycle. Integrated SonarQube for static analysis and Prometheus/Grafana for infrastructure monitoring, ensuring a high-quality deployment flow.",
    techStack: ["Jenkins", "GitHub", "SonarQube", "JUnit", "Mockito", "Docker", "Grafana", "Prometheus"],
    highlights: ["40% Speed Increase", "Unit Test Automation", "Infrastructure Monitoring", "Quality Gate Enforcement"],
    gallery: ["assets/galeries/1.png", "assets/galeries/2.png", "assets/galeries/3.png", "assets/galeries/4.png", "assets/galeries/5.png", "assets/galeries/6.png", "assets/galeries/7.png", "assets/galeries/8.png"],
    githubUrl: "https://gitlab.com/sondesfouzai/projet_devops_5sae5/-/tree/hazem?ref_type=heads"
  },
  {
    title: "Data Governance Platform",
    category: "4th Year Project",
    period: "Mar 2024 - Jun 2024",
    company: "ESPRIT",
    description: "Enterprise system for secure data management and complex transformations.",
    longDescription: "Focused on the data transformation layer, building high-performance modules for data concatenation, type conversion, and cleansing to improve organizational decision-making quality.",
    techStack: ["Spring Boot", "Angular", "MongoDB", "NoSQL"],
    highlights: ["Data Concatenation", "Type Conversion Engine", "Data Cleansing", "Intricate SQL/NoSQL logic"],
    gallery: ["assets/galeries/a1.png", "assets/galeries/a2.png", "assets/galeries/a3.jpg", "assets/galeries/a4.png", "assets/galeries/a5.png", "assets/galeries/a6.jpg", "assets/galeries/a7.jpg", "assets/galeries/a8.jpg", "assets/galeries/a9.png"]
  },
  {
    title: "Recycling Multi-Platform Ecosystem",
    category: "3rd Year Project",
    period: "Mar 2023 - Jun 2023",
    company: "ESPRIT",
    description: "Integrated Web, Mobile, and Desktop management for recycling events.",
    longDescription: "Developed a cross-platform event management system featuring automated ticketing, reward lottery systems with email integration, and social media sharing APIs to drive engagement.",
    techStack: ["Symfony", "Codename One", "JavaFX", "MySQL"],
    highlights: ["Cross-platform Sync", "Automated Email Notifications", "Ticketing System", "Social API Integration"], githubUrl: "https://github.com/WassefTalbi/gestion_recyclage/tree/gestion_evenement"
  },
  {
    title: "Personal Developer Portfolio",
    category: "Portfolio / Personal Project",
    period: "Jan 2026",
    company: "Self",
    description: "Interactive and modern portfolio showcasing my projects and skills using React.js, Vite, Tailwind, and Framer Motion.",
    longDescription: "Built a professional portfolio to display projects, media galleries, and technical expertise. Features smooth animations, responsive design, video previews, and a lightbox gallery to enhance user experience and impress recruiters.",
    techStack: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    highlights: [
      "Interactive Project Modals",
      "Video & Image Lightbox",
      "Smooth Animations & Hover Effects",
      "Responsive & Modern Design"
    ],


    githubUrl: "https://github.com/HazemKechiche/HazemKechichePortfolio",
    liveUrl: "https://hazem-kechiche-portfolio.vercel.app"
  }, {
    title: "User Management Mobile App",
    category: "Mobile App Project",
    period: "Nov 2025 - Dec 2025",
    company: "ESPRIT / Android Studio",
    description: "Mobile application for user management with secure authentication and role-based access.",
    longDescription: "Developed a full-featured mobile app using Android Studio to manage users efficiently. Features include role-based permissions, signup/signin, password reset, double verification via email, account banning, and responsive UI/UX design.",
    techStack: ["Android Studio", "Java/Kotlin", "Firebase Auth", "SQLite", "Material Design", "Email Verification"],
    highlights: [
      "Role-Based Access Control",
      "Forgot Password Flow",
      "Double Verification by Email",
      "Signup & Signin with Validation",
      "Account Ban / Management",
      "Clean Material Design UI/UX"
    ],
    gallery: [
      "/assets/galeries/mobile.png",

    ],


    githubUrl: "https://github.com/HazemKechiche/SportySpace-Mobile-5sae5"
  },
  {
    title: "Network Security Workshop",
    category: "Security / Workshop",
    period: "Feb 2025",
    company: "ESPRIT / Workshop",
    description: "Implemented a network security solution using pfSense to protect a local network with internal and DMZ segments.",
    longDescription: "In this workshop, I configured and implemented a network security solution based on pfSense to protect a local network composed of two machines: one on Ubuntu (internal network) and one in a DMZ (demilitarized zone). pfSense was installed as a firewall to segment the network and apply security rules between LAN, DMZ, and external access. Snort was integrated to monitor network traffic and detect intrusion attempts. OpenVPN was configured to allow secure remote access to the local network. The architecture isolated the DMZ machine, limiting access only from the internal machine, and provided active protection against threats, demonstrating the effectiveness of open-source tools in enhancing network security.",
    techStack: ["pfSense", "Snort", "OpenVPN", "Ubuntu", "Network Security", "Firewall", "DMZ Configuration"],
    highlights: [
      "LAN and DMZ segmentation with pfSense",
      "Intrusion detection using Snort",
      "Secure remote access via OpenVPN",
      "Isolation of DMZ for enhanced security",
      "Hands-on open-source network security implementation"
    ],
    gallery: [
      "/assets/galeries/sec.jfif",

    ],

  }
];

export default function HazemFinalPortfolio() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // --- 1. Preloader Logic ---
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(timer);
  }, []);

  // --- 2. Spotlight Effect Logic ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30, mass: 0.5 });
  const spotlightBackground = useMotionTemplate`radial-gradient(800px at ${springX}px ${springY}px, rgba(30, 64, 175, 0.25), transparent 80%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 1. Loading Overlay */}
      <AnimatePresence mode="wait">
        {loading && <Preloader progress={progress} />}
      </AnimatePresence>

      <div className="bg-[#020617] text-slate-300 min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">

        {/* 2. Interactive Spotlight Background */}
        <motion.div
          className="pointer-events-none fixed inset-0 z-30 lg:absolute"
          style={{ background: spotlightBackground }}
        />

        {/* 3. Navigation */}
        <Navbar />

        {/* 4. Main Content Sections */}
        <main className="relative z-40">
          <Hero loading={loading} />

          <About />

          <section id="skills" className="py-32 relative z-40 overflow-hidden">
            <SkillRadarSection />
          </section>

          <Experience />

          <ProjectGrid
            projects={PROJECTS_DATA}
            onSelect={setSelectedProject}
          />

          <Contact />
        </main>

        {/* 5. Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>

        {/* 6. Site Footer */}
        <Footer />
      </div>
    </>
  );
}