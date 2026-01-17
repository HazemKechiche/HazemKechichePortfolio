import { motion } from "framer-motion";

interface PreloaderProps {
  progress: number;
}

export const Preloader = ({ progress }: PreloaderProps) => (
  <motion.div 
    key="loader"
    exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    className="fixed inset-0 z-[200] bg-[#020617] flex flex-col items-center justify-center"
  >
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
      <div className="text-white text-6xl md:text-9xl font-black italic tracking-tighter mb-4 tabular-nums">
        {progress}%
      </div>
      <div className="w-64 h-[2px] bg-white/5 relative overflow-hidden mx-auto">
        <motion.div 
          className="absolute inset-0 bg-blue-500" 
          style={{ scaleX: progress / 100, transformOrigin: "left" }}
        />
      </div>
      <p className="mt-6 text-[10px] font-black uppercase tracking-[0.6em] text-blue-500 animate-pulse">
        Initializing System
      </p>
    </motion.div>
  </motion.div>
);