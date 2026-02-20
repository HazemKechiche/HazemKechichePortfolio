import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = ["About", "Services", "Skills", "Experience", "Projects", "Contact"];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-8">
        <span className="text-xl font-black text-white tracking-tighter uppercase italic">
          Hazem<span className="text-blue-500 not-italic">.Kechiche</span>
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
          {NAV_LINKS.map((i) => (
            <a key={i} href={`#${i.toLowerCase()}`} className="hover:text-blue-500 transition-colors">
              {i}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#020617]/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {NAV_LINKS.map((i, idx) => (
                <motion.a
                  key={i}
                  href={`#${i.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-500 transition-colors"
                >
                  {i}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
