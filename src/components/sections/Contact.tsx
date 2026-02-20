import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Activity, Briefcase } from "lucide-react";

const AVAILABILITY = [
  "Freelance Projects",
  "Remote Opportunities",
  "Backend / Full Stack Roles",
];

export const Contact = () => (
  <section id="contact" className="max-w-4xl mx-auto py-32 px-8 text-center relative z-40">
    <motion.h2
      whileInView={{ y: [20, 0], opacity: [0, 1] }}
      viewport={{ once: true }}
      className="text-6xl md:text-8xl font-black mb-6 text-white tracking-tighter uppercase italic"
    >
      Let's talk
    </motion.h2>

    <motion.p
      whileInView={{ y: [10, 0], opacity: [0, 1] }}
      viewport={{ once: true }}
      className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
    >
      Let's build something great together.
    </motion.p>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-3 mb-14"
    >
      {AVAILABILITY.map((item) => (
        <span
          key={item}
          className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-400 uppercase tracking-widest"
        >
          <Briefcase size={12} /> {item}
        </span>
      ))}
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      viewport={{ once: true }}
      className="bg-slate-900/50 border border-blue-500/20 rounded-[3rem] p-10 md:p-14 mb-12"
    >
      <a
        href="mailto:hazemkechiche@gmail.com"
        className="text-2xl md:text-3xl font-black text-white hover:text-blue-400 transition-colors break-all"
      >
        hazemkechiche@gmail.com
      </a>
    </motion.div>

    <div className="flex flex-wrap justify-center gap-12">
      <a
        href="mailto:hazemkechiche@gmail.com"
        className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.4em] hover:text-blue-500 transition-all"
      >
        <Mail size={18} className="text-blue-500" /> Email
      </a>
      <a
        href="https://linkedin.com/in/hazem-kechiche-386b02248"
        target="_blank"
        className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.4em] hover:text-blue-500 transition-all"
      >
        <Linkedin size={18} className="text-blue-500" /> LinkedIn
      </a>
      <a
        href="https://github.com/hazemkechiche"
        target="_blank"
        className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.4em] hover:text-blue-500 transition-all"
      >
        <Github size={18} className="text-blue-500" /> GitHub
      </a>
      <a
        href="tel:+21628240023"
        className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.4em] hover:text-blue-500 transition-all"
      >
        <Activity size={18} className="text-blue-500" /> +216 28 240 023
      </a>
    </div>
  </section>
);
