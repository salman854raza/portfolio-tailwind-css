"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Technologies",   value: "8+"  },
  { label: "Commits",        value: "200+" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-100px" });
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 blur-3xl pointer-events-none" style={{ background:"radial-gradient(circle, #08E95E, transparent)" }} />
      <div ref={ref} className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity:0, x:-60 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.9, ease:[0.22,1,0.36,1] }} style={{ perspective:1000 }}>
            <div className="glass rounded-3xl p-8 border border-[#08E95E]/20 glow-accent-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10" style={{ background:"linear-gradient(135deg, #08E95E, transparent)" }} />
              <p className="text-[#08E95E] font-mono text-xs tracking-[0.3em] uppercase mb-4">About Me</p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">Passionate<br /><span className="text-[#08E95E]">Developer</span></h2>
              <p className="text-gray-400 leading-relaxed text-base">I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0, &amp; Metaverse. Passionate about technology and constantly learning new skills to stay up to date with the latest innovations.</p>
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10">
                {stats.map((s,i) => (
                  <motion.div key={s.label} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.6+i*0.1 }} className="text-center">
                    <p className="text-2xl font-black text-[#08E95E]">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity:0, x:60 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.9, delay:0.2 }} className="space-y-6">
            {[
              { year:"2023", title:"Started at GIAIC",    desc:"Enrolled in AI, Web3 & Metaverse program" },
              { year:"2024", title:"Built 10+ Projects",  desc:"Full stack apps with Next.js, React & TypeScript" },
              { year:"2025", title:"Open for Freelance",  desc:"Taking on client work and open source contributions" },
            ].map((item,i) => (
              <motion.div key={item.year} initial={{ opacity:0, x:30 }} animate={inView?{opacity:1,x:0}:{}} transition={{ delay:0.3+i*0.15 }} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-[#08E95E] flex items-center justify-center group-hover:bg-[#08E95E] transition-colors duration-300">
                    <span className="text-[10px] font-bold text-[#08E95E] group-hover:text-black transition-colors">{item.year}</span>
                  </div>
                  {i<2 && <div className="w-px flex-1 bg-gradient-to-b from-[#08E95E]/40 to-transparent mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
