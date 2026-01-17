import React from "react";

export const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-8">
      <span className="text-xl font-black text-white tracking-tighter uppercase italic">
        Hazem<span className="text-blue-500 not-italic">.Kechiche</span>
      </span>
      <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
        {["About", "Skills", "Experience", "Projects", "Contact"].map((i) => (
          <a key={i} href={`#${i.toLowerCase()}`} className="hover:text-blue-500 transition-colors">
            {i}
          </a>
        ))}
      </div>
    </div>
  </nav>
);