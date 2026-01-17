import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, AlertCircle } from "lucide-react";

export const VideoPreview = ({ src }: { src: string }) => {
  const [isFull, setIsFull] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reset l'erreur si la source change
  useEffect(() => {
    setHasError(false);
  }, [src]);

  useEffect(() => {
    if (videoRef.current && src) {
      videoRef.current.load(); // Force le chargement du nouveau buffer
      videoRef.current.play().catch((e) => {
        // On ignore l'erreur d'interruption (souvent dû au chargement rapide)
        if (e.name !== "AbortError") console.error("Playback error:", e);
      });
    }
  }, [isFull, src]);

  if (!src) return null;

  return (
    <>
      <motion.div 
        layoutId={`video-wrapper-${src}`}
        onClick={() => !hasError && setIsFull(true)}
        className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-zoom-in group bg-slate-950 border border-white/5 shadow-2xl flex items-center justify-center"
      >
        {hasError ? (
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <AlertCircle size={24} />
            <span className="text-[10px] font-black uppercase tracking-widest">Source not found</span>
          </div>
        ) : (
          <video
            ref={videoRef}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            onError={() => setHasError(true)}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
        
        {!hasError && (
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
              <Maximize2 size={14} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Project Demo</span>
              <span className="text-[8px] font-medium uppercase tracking-widest text-white/40">Expand view</span>
            </div>
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {isFull && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setIsFull(false)}
          >
            <button className="absolute top-8 right-8 z-[210] p-4 bg-white/5 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-all border border-white/10">
              <X size={24} />
            </button>

            <motion.div 
              layoutId={`video-wrapper-${src}`}
              className="relative max-w-6xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={src}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};