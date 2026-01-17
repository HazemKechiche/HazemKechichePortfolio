export const Experience = () => {
  const experiences = [
    {
      period: "Apr 2025 - Oct 2025",
      title: "Stage PFE • Axia Solutions",
      description: "Developed a high-concurrency Medical Platform with .NET & React. Integrated WebRTC for telemedicine and ML.NET/BioClinicalBERT for intelligent diagnostics.",
      active: false
    },
    {
      period: "Jul 2024 - Sep 2024",
      title: "Engineering Intern • ITSolution",
      description: "Focused on containerization (Docker) and building interactive UI notification systems with React.js.",
      active: false
    }
  ];

  return (
    <section id="experience" className="max-w-7xl mx-auto py-24 px-8 border-t border-white/5 relative z-40">
      <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-12">Roadmap</h2>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-20 group">
            <div className="md:w-1/4 text-slate-600 text-sm font-black uppercase tracking-widest group-hover:text-blue-500 transition-colors">
              {exp.period}
            </div>
            <div className="md:w-3/4 border-l border-white/10 pl-8 relative">
              <div className={`absolute -left-[5px] top-0 w-2 h-2 rounded-full ${exp.active ? 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'bg-slate-700'}`} />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase italic">{exp.title}</h3>
              <p className="text-slate-400 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};