import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Project } from "../../interfaces/Projects";


interface Props {
  projects: Project[];
  onSelect: (p: Project) => void;
}

export const ProjectGrid = ({ projects, onSelect }: Props) => (
  <section id="projects" className="py-32 px-8 relative z-40">
    <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] italic text-center mb-16">Engineering Projects</h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {projects.map((p, idx) => (
        <motion.div 
          key={idx} 
          whileInView={{ opacity: 1, scale: 1 }} 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileHover={{ y: -10, borderColor: 'rgba(59, 130, 246, 0.5)' }} 
          onClick={() => onSelect(p)} 
          className="group cursor-pointer bg-slate-900/30 border border-white/5 rounded-[3rem] p-10 transition-all shadow-2xl backdrop-blur-sm"
        >
          <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] bg-blue-500/10 px-4 py-1.5 rounded-full">{p.category}</span>
          <h3 className="text-3xl font-black text-white mt-6 mb-4 uppercase italic group-hover:text-blue-400 transition-colors leading-tight">{p.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">{p.description}</p>
          <div className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-[0.3em] opacity-50 group-hover:opacity-100 transition-all">
            View Case Study <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);