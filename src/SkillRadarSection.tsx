import React, { useState, useEffect } from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, 
  ResponsiveContainer, PolarRadiusAxis 
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, ShieldCheck, Zap, Server, Layout, Database, Terminal } from 'lucide-react';

interface SkillDetail {
  subject: string;
  level: number; // 1-5
  label: string;
  description: string;
  projects: string[];
  tools: string[];
  experience: string;
  icon: React.ReactNode;
}

const SKILLS_DATA: SkillDetail[] = [
  { 
    subject: 'Backend Architecture', 
    level: 5, 
    label: 'Expert', 
    description: 'Enterprise-grade systems with .NET & Java', 
    projects: ['Medical Platform', 'Data Governance'], 
    tools: ['.NET 8', 'C#', 'Java', 'Spring Boot', 'Entity Framework'], 
    experience: 'Deep expertise in Clean Architecture, Microservices, and high-concurrency C#/.NET 8 & Java environments.',
    icon: <Server size={20} />
  },
  { 
    subject: 'Frontend / Web', 
    level: 5, 
    label: 'Advanced', 
    description: 'Modern SPA development', 
    projects: ['Intelligent Medical Dashboard', 'Portfolio'], 
    tools: ['React.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Framer Motion'], 
    experience: 'Building responsive, high-performance UIs using React and Angular with strict TypeScript typing.',
    icon: <Layout size={20} />
  },
  { 
    subject: 'AI & Data Science', 
    level: 4, 
    label: 'Specialist', 
    description: 'Intelligence layer integration', 
    projects: ['Disease Prediction API'], 
    tools: ['ML.NET', 'FastAPI', 'Python', 'BioClinicalBERT'], 
    experience: 'Specialized in bridging AI models with production environments via FastAPI and ML.NET.',
    icon: <Cpu size={20} />
  },
  { 
    subject: 'DevOps & Infra', 
    level: 4, 
    label: 'Advanced', 
    description: 'Automation & Monitoring', 
    projects: ['DevOps Automation Pipeline'], 
    tools: ['Docker', 'Jenkins', 'SonarQube', 'Prometheus', 'Grafana', 'Nexus'], 
    experience: 'Implementing full CI/CD pipelines, container orchestration, and real-time monitoring solutions.',
    icon: <Terminal size={20} />
  },
  { 
    subject: 'Data Management', 
    level: 4, 
    label: 'Advanced', 
    description: 'SQL & NoSQL Ecosystems', 
    projects: ['Enterprise Data Platform'], 
    tools: ['SQL Server', 'MongoDB', 'MySQL', 'Nexus'], 
    experience: 'Managing complex data transformations, schema design, and secure storage solutions.',
    icon: <Database size={20} />
  },
  { 
    subject: 'Classic Engines', 
    level: 3, 
    label: 'Versatile', 
    description: 'PHP & C++ Ecosystems', 
    projects: ['Recycling Ecosystem', 'Desktop Tooling'], 
    tools: ['Symfony', 'Laravel', 'C++', 'Qt'], 
    experience: 'Solid foundation in classic MVC frameworks and desktop application development with Qt.',
    icon: <Zap size={20} />
  },
];

export default function SkillRadarSection() {
  const [activeSkill, setActiveSkill] = useState<SkillDetail | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<SkillDetail | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeSkill ? 'hidden' : 'unset';
  }, [activeSkill]);

  return (
    <section id="skills" className="relative py-32 bg-[#020617] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            Technical Intelligence
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6">
            Capability <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>Matrix.</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed italic">
            "Skills are not just tools — they are experiences. Hover over an axis to analyze my proficiency."
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* THE RADAR ENGINE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 aspect-square bg-slate-900/10 rounded-[4rem] border border-white/5 backdrop-blur-3xl p-4 relative group"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={SKILLS_DATA}>
                <PolarGrid stroke="#1e293b" strokeWidth={2} />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: '#64748b', fontSize: 10, fontWeight: '900', letterSpacing: '1px' }} 
                />
                <Radar
                  name="Hazem"
                  dataKey="level"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fill="#3b82f6"
                  fillOpacity={0.2}
                  onMouseEnter={(data) => setHoveredSkill(data as any)}
                  onClick={(data) => setActiveSkill(data as any)}
                  className="cursor-crosshair"
                />
              </RadarChart>
            </ResponsiveContainer>

            <AnimatePresence>
              {hoveredSkill && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute inset-x-8 bottom-8 bg-slate-900/90 border border-blue-500/30 p-6 rounded-3xl backdrop-blur-md pointer-events-none">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-black uppercase italic tracking-tighter text-xl">{hoveredSkill.subject}</span>
                    <span className="text-[10px] bg-blue-500 text-white px-3 py-1 rounded-full font-black uppercase">Level: {hoveredSkill.label}</span>
                  </div>
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{hoveredSkill.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* QUICK LIST FOR RECRUITERS */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILLS_DATA.map((skill, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 5, backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                onClick={() => setActiveSkill(skill)}
                className="p-6 bg-slate-900/30 border border-white/5 rounded-[2rem] cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-slate-800 text-blue-500 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {skill.icon}
                  </div>
                  <h4 className="text-white font-black uppercase italic tracking-tighter text-sm">{skill.subject}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tools.slice(0, 3).map(t => (
                    <span key={t} className="text-[8px] font-bold text-slate-500 uppercase border border-white/5 px-2 py-0.5 rounded-md">{t}</span>
                  ))}
                  {skill.tools.length > 3 && <span className="text-[8px] font-bold text-blue-500">+{skill.tools.length - 3} More</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* DETAILED SIDE DRAWER */}
      <AnimatePresence>
        {activeSkill && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveSkill(null)} className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 30, stiffness: 300 }} className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-slate-950 border-l border-white/10 z-[101] p-12 overflow-y-auto custom-scrollbar">
              <button onClick={() => setActiveSkill(null)} className="absolute top-10 right-10 text-slate-500 hover:text-white transition-colors"><X size={32} /></button>
              
              <div className="mt-20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-blue-600 text-white rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.3)]">{activeSkill.icon}</div>
                  <h3 className="text-5xl font-black text-white uppercase italic tracking-tighter leading-none">{activeSkill.subject}</h3>
                </div>
                
                <p className="text-slate-400 text-lg leading-relaxed mb-12 italic border-l-4 border-blue-600 pl-6">{activeSkill.experience}</p>

                <div className="space-y-12">
                  <section>
                    <h5 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
                      <ShieldCheck size={14} /> Ecosystem Tools
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {activeSkill.tools.map(tool => (
                        <span key={tool} className="px-4 py-2 bg-white/5 border border-white/10 text-white text-[11px] font-black rounded-xl uppercase tracking-widest">{tool}</span>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h5 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
                      <Zap size={14} /> Proven In Projects
                    </h5>
                    <div className="space-y-3">
                      {activeSkill.projects.map(project => (
                        <div key={project} className="p-4 bg-slate-900 rounded-2xl border border-white/5 text-slate-300 font-bold text-xs flex items-center justify-between">
                          {project}
                          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}