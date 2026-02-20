import { motion } from "framer-motion";

const METRICS = [
  { value: "7+", label: "Engineering Projects Delivered" },
  { value: "40%", label: "Deployment Speed Increase" },
  { value: "3+", label: "AI & ML Systems Built" },
  { value: "5+", label: "Tech Stacks Mastered" },
];

export const Impact = () => (
  <section className="py-32 px-8 relative z-40">
    <div className="max-w-6xl mx-auto">
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] italic mb-6">
          Track Record
        </h2>
        <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
          Proven{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            Impact
          </span>
        </h3>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {METRICS.map((metric, idx) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-slate-900/50 border border-white/5 hover:border-blue-500/30 rounded-[2rem] p-8 text-center transition-all group"
          >
            <p className="text-4xl md:text-5xl font-black text-white italic mb-3 group-hover:text-blue-400 transition-colors">
              {metric.value}
            </p>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-relaxed">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
