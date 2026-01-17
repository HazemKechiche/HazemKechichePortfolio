import { Cpu, MapPin } from "lucide-react";

export const About = () => (
  <section id="about" className="max-w-4xl mx-auto py-24 px-8">
    <div className="bg-slate-900/50 border border-blue-500/20 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-10 opacity-5"><Cpu size={150} /></div>
      <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-6">About My Mission</h2>
      <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase italic">
        Highly Motivated <span className="text-blue-500">Fresh Graduate</span>
      </h3>
      <p className="text-slate-300 text-lg leading-relaxed mb-6">
        I am a newly graduated Software Engineer from <span className="text-white font-bold">ESPRIT</span> with a relentless drive for building scalable applications.
      </p>
      <p className="text-slate-400 text-lg leading-relaxed mb-6">
        I am <span className="text-blue-400 font-bold italic underline decoration-2 underline-offset-4">exceptionally motivated</span> to launch my career in a challenging environment. Ready to bring fresh energy and a solid technical foundation to your team.
      </p>
      <span className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.4em] text-slate-500">
        <MapPin size={16} /> Sousse, Tunisia
      </span>
    </div>
  </section>
);