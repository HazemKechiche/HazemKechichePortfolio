import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Briefcase, CheckCircle2, Layers, Settings, 
  ExternalLink, Github, ArrowUpRight, Zap, Target 
} from "lucide-react";
import { Project } from "../../interfaces/Projects";
import { MediaShowcase } from "./MediaShowcase";

interface Props {
  project: Project;
  onClose: () => void;
}

const springConfig = { 
  type: "spring", 
  damping: 25, 
  stiffness: 200 
} as const;

export const ProjectModal = ({ project, onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  // Animation pour les sections qui apparaissent une par une
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-950/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 30, opacity: 0 }}
        transition={springConfig}
        className="bg-slate-900 border border-white/10 max-w-7xl w-full max-h-[92vh] rounded-[2rem] overflow-hidden relative shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col md:flex-row" 
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[110] p-3 bg-white/5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-all backdrop-blur-xl border border-white/5"
        >
          <X size={20} />
        </button>

        {/* --- GAUCHE : INFOS TEXTUELLES (Scrollable) --- */}
        <div className="md:w-3/5 p-8 md:p-14 overflow-y-auto custom-scrollbar bg-[#0a0f1d]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-black text-blue-400 uppercase tracking-widest mb-6 italic">
              <Zap size={12} /> {project.category}
            </span>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase italic leading-[0.9] tracking-tighter">
              {project.title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 !== 0 ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400" : ""}>{word} </span>
              ))}
            </h2>

            <div className="flex flex-wrap items-center gap-6 text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-12">
              <span className="flex items-center gap-2 font-black text-slate-300"><Briefcase size={14} className="text-blue-500" /> {project.company}</span>
              <span className="w-1 h-1 rounded-full bg-slate-800" />
              <span>{project.period}</span>
            </div>
          </motion.div>

          <div className="space-y-12">
            {/* Media sur Mobile */}
            <div className="md:hidden">
               <MediaShowcase project={project} />
            </div>

            <motion.section custom={1} initial="hidden" animate="visible" variants={sectionVariants}>
              <h4 className="flex items-center gap-2 text-white font-black mb-6 uppercase tracking-widest text-xs">
                <Layers size={16} className="text-blue-500" /> Executive Summary
              </h4>
              <p className="text-slate-400 text-xl leading-relaxed font-medium">
                {project.longDescription}
              </p>
            </motion.section>

            {project.metrics && (
              <motion.div custom={2} initial="hidden" animate="visible" variants={sectionVariants} className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.metrics.map((m, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 group-hover:text-blue-400 transition-colors">{m.label}</p>
                    <p className="text-2xl font-black text-white italic">{m.value}</p>
                  </div>
                ))}
              </motion.div>
            )}

            <motion.section custom={3} initial="hidden" animate="visible" variants={sectionVariants}>
              <h4 className="flex items-center gap-2 text-white font-black mb-6 uppercase tracking-widest text-xs">
                <Target size={16} className="text-blue-500" /> Key Deliverables
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.highlights.map((h, idx) => (
                  <div key={h} className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-white/5 hover:border-blue-500/30 transition-all">
                    <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300 font-medium leading-tight">{h}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>

        {/* --- DROITE : VISUELS (MediaShowcase) & STACK --- */}
       {/* --- DROITE : VISUELS (MediaShowcase) & STACK --- */}
<div className="md:w-2/5 flex flex-col bg-[#0f172a]/50 border-l border-white/5 relative overflow-hidden">
  
  {/* Zone de contenu scrollable à droite avec padding réduit */}
  <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8">
    
    {/* Media ShowCase : On lui donne de l'espace sans trop de contraintes */}
    <div className="mb-10">
      <MediaShowcase project={project} />
    </div>

    {/* Stack technique : Plus compact */}
    <motion.div custom={4} initial="hidden" animate="visible" variants={sectionVariants}>
      <h4 className="flex items-center gap-2 text-slate-500 font-black mb-4 uppercase tracking-[0.2em] text-[9px]">
        <Settings size={14} className="text-blue-500/50" /> Tech Stack
      </h4>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((t) => (
          <span 
            key={t} 
            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[9px] font-bold text-slate-400 uppercase tracking-wider"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  </div>

  {/* Footer de la colonne de droite : Boutons fixes en bas */}
 <div className="p-6 bg-slate-900/80 backdrop-blur-md border-t border-white/5 grid grid-cols-2 gap-3">
  {/* Live Button ou Message */}
  {project.liveUrl ? (
    <motion.a 
      whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
      href={project.liveUrl} target="_blank" rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-xl font-black uppercase text-[9px] tracking-widest transition-all shadow-lg shadow-blue-500/20"
    >
      Live <ArrowUpRight size={14} />
    </motion.a>
  ) : (
    <div 
      className="flex items-center justify-center gap-2 bg-blue-700/80 text-white px-4 py-3 rounded-xl font-black uppercase text-[9px] tracking-widest text-center shadow-lg shadow-blue-500/20"
    >
      Stay tuned, we're working on Live Demo
    </div>
  )}

  {/* Github Button */}
  {project.githubUrl ? (
    <motion.a 
      whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
      href={project.githubUrl} target="_blank" rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-xl font-black uppercase text-[9px] tracking-widest border border-white/10 transition-all"
    >
      Code <Github size={14} />
    </motion.a>
  ) : (
    <div 
      className="flex items-center justify-center gap-2 bg-slate-700/80 text-white px-4 py-3 rounded-xl font-black uppercase text-[9px] tracking-widest text-center"
    >
      Code unavailable
    </div>
  )}
</div>

  {/* Effet de lumière en fond */}
  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none" />
</div>
      </motion.div>
    </motion.div>
  );
};