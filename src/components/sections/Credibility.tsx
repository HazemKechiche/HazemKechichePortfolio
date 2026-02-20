import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Code2,
  Layers,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const REASONS = [
  {
    icon: Layers,
    text: "Built multiple full-stack and backend systems end-to-end",
  },
  {
    icon: ShieldCheck,
    text: "Strong focus on clean architecture and scalable design",
  },
  {
    icon: Zap,
    text: "Fast delivery without compromising code quality",
  },
  {
    icon: Code2,
    text: "Production-ready code with CI/CD and monitoring",
  },
  {
    icon: Rocket,
    text: "Experience with SaaS, AI systems, and complex platforms",
  },
];

export const Credibility = () => (
  <section className="py-32 px-8 relative z-40">
    <div className="max-w-4xl mx-auto">
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] italic mb-6">
          Why Me
        </h2>
        <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
          Why Work{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            With Me
          </span>
        </h3>
      </motion.div>

      <div className="bg-slate-900/50 border border-blue-500/20 rounded-[3rem] p-10 md:p-14">
        <div className="space-y-6">
          {REASONS.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="flex items-center gap-5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <reason.icon size={18} className="text-blue-400" />
              </div>
              <p className="text-slate-300 text-lg font-medium">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
