import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";

export const Hero = ({ loading }: { loading: boolean }) => {
  const [showCvOptions, setShowCvOptions] = useState(false);

  return (
    <section className="pt-64 pb-20 px-8 max-w-7xl mx-auto text-center relative z-40">
      <div className="overflow-hidden">
        <motion.h1 
          initial={{ y: "100%" }} animate={!loading ? { y: 0 } : {}} transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase italic leading-none"
        >
          Full-Stack
        </motion.h1>
      </div>
      <div className="overflow-hidden mb-12">
        <motion.h1 
          initial={{ y: "100%" }} animate={!loading ? { y: 0 } : {}} transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 uppercase italic leading-none"
        >
          Engineer
        </motion.h1>
      </div>
      
      <motion.div initial={{ opacity: 0 }} animate={!loading ? { opacity: 1 } : {}} transition={{ delay: 1 }} className="flex flex-wrap justify-center gap-5 mt-12">
        <a href="#contact" className="group relative bg-blue-600 overflow-hidden text-white px-10 py-4 rounded-full font-bold transition-all uppercase tracking-widest text-xs">
          <span className="relative z-10">Hire Me</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </a>
        
        <div className="relative">
          <button onClick={() => setShowCvOptions(!showCvOptions)} className="border border-slate-700 hover:bg-slate-800 text-white px-10 py-4 rounded-full font-bold transition-all uppercase tracking-widest text-xs flex items-center gap-2">
            <Download size={16} /> Resume <ChevronDown size={14} className={`${showCvOptions ? 'rotate-180' : ''} transition-transform`} />
          </button>
          <AnimatePresence>
            {showCvOptions && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="absolute top-full mt-4 left-0 w-full bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50">
                <a href="/assets/pdfs/ResumeFr.pdf" target="_blank" className="block px-6 py-4 text-xs font-black uppercase hover:bg-blue-600 transition-colors text-white border-b border-white/5">Français (FR)</a>
                <a href="/assets/pdfs/ResumeEngl.pdf" target="_blank" className="block px-6 py-4 text-xs font-black uppercase hover:bg-blue-600 transition-colors text-white">English (EN)</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};