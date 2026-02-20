import { motion } from "framer-motion";
import { Server, LayoutDashboard, Boxes, Bot } from "lucide-react";

const SERVICES = [
  {
    icon: Server,
    title: "Scalable Backend APIs",
    description:
      "High-performance REST APIs built with FastAPI, .NET, and Spring Boot. Designed for scale, security, and maintainability from day one.",
  },
  {
    icon: LayoutDashboard,
    title: "Complete SaaS Platforms",
    description:
      "End-to-end SaaS development from database architecture to frontend delivery. Authentication, real-time features, and cloud deployment included.",
  },
  {
    icon: Boxes,
    title: "Clean System Architecture",
    description:
      "Modular, maintainable systems using Clean Architecture, microservices, and DevOps pipelines. Built to evolve without breaking.",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description:
      "Intelligent systems powered by ML models and NLP. From disease prediction APIs to smart recommendation engines integrated into production apps.",
  },
];

export const Services = () => (
  <section id="services" className="py-32 px-8 relative z-40">
    <div className="max-w-6xl mx-auto">
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] italic mb-6">
          Services
        </h2>
        <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
          What I Can Do{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            For You
          </span>
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-slate-900/30 border border-white/5 hover:border-blue-500/30 rounded-[2rem] p-10 transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <service.icon size={22} className="text-blue-400" />
            </div>
            <h4 className="text-xl font-black text-white uppercase italic mb-4 tracking-tight">
              {service.title}
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
