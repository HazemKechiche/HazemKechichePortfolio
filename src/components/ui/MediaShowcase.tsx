import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VideoPreview } from "./VideoPreview";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

export const MediaShowcase = ({ project }: { project: any }) => {
  // On stocke l'index de l'image au lieu de l'URL pour pouvoir naviguer
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.gallery && activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % project.gallery.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.gallery && activeIndex !== null) {
      setActiveIndex((activeIndex - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      {/* 1. SECTION VIDÉO */}
      {project.videoDemo && (
        <div className="w-full">
          <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> 
            Video Presentation
          </h4>
          <VideoPreview src={project.videoDemo} />
        </div>
      )}

      {/* 2. SECTION GALERIE */}
     {project.gallery && project.gallery.length > 0 && (
  <div className="w-full">
    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
      <ImageIcon size={14} className="text-blue-500/50" /> Gallery
    </h4>
    
    {/* Conteneur avec scroll horizontal */}
    <div className="relative w-full overflow-x-auto custom-scrollbar snap-x snap-mandatory pb-4">
    <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
  {project.gallery.map((img: string, i: number) => (
    <motion.div
      key={i}
      whileHover={{ y: -4, scale: 1.05, borderColor: "rgba(59, 130, 246, 0.3)" }}
      onClick={() => setActiveIndex(i)}
      className="snap-center flex-shrink-0 h-[150px] md:h-[200px] aspect-[16/9] rounded-xl overflow-hidden border border-white/5 shadow-lg cursor-pointer transition-all"
    >
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </motion.div>
  ))}
</div>


    </div>
  </div>
)}

      {/* 3. LIGHTBOX INTERACTIVE AVEC NAVIGATION */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-[250] bg-slate-950/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
          >
            {/* Boutons de contrôle */}
            <button className="absolute top-8 right-8 z-[260] p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all">
              <X size={24} />
            </button>

            {/* Flèche Gauche */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-[260] p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all border border-white/5"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Image avec animation de transition entre les slides */}
            <motion.div
              key={activeIndex} // Important : force l'animation quand l'index change
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-6xl w-full h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={project.gallery[activeIndex]} 
                className="max-w-full max-h-full rounded-xl shadow-2xl object-contain border border-white/10"
              />
              
              {/* Compteur d'images */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {activeIndex + 1} / {project.gallery.length}
              </div>
            </motion.div>

            {/* Flèche Droite */}
            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-[260] p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all border border-white/5"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};