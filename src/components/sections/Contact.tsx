import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Activity } from "lucide-react";

export const Contact = () => (
  <section id="contact" className="max-w-4xl mx-auto py-32 px-8 text-center relative z-40">
    <motion.h2 
      whileInView={{ y: [20, 0], opacity: [0, 1] }} 
      viewport={{ once: true }} 
      className="text-6xl md:text-8xl font-black mb-16 text-white tracking-tighter uppercase italic"
    >
      Let's talk
    </motion.h2>
    <div className="flex flex-wrap justify-center gap-12">
      <a href="mailto:hazemkechiche@gmail.com" className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.4em] hover:text-blue-500 transition-all">
        <Mail size={18} className="text-blue-500" /> Email
      </a>
      <a href="https://linkedin.com/in/hazem-kechiche-386b02248" target="_blank" className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.4em] hover:text-blue-500 transition-all">
        <Linkedin size={18} className="text-blue-500" /> LinkedIn
      </a>
      <a href="https://github.com/hazemkechiche" target="_blank" className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.4em] hover:text-blue-500 transition-all">
        <Github size={18} className="text-blue-500" /> GitHub
      </a>
      <a href="tel:+21628240023" className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.4em] hover:text-blue-500 transition-all">
        <Activity size={18} className="text-blue-500" /> +216 28 240 023
      </a>
    </div>
  </section>
);