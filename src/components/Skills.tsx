"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Heading from "./Heading";

const skillList = [
  { name:"TypeScript", level:85, color:"#3178c6" },
  { name:"React",      level:90, color:"#61dafb" },
  { name:"Next.js",    level:88, color:"#ffffff" },
  { name:"Tailwind",   level:92, color:"#38bdf8" },
  { name:"CSS",        level:85, color:"#264de4" },
  { name:"Node.js",    level:75, color:"#68a063" },
];

const techGrid = ["TypeScript","React","Next.js","Tailwind CSS","Node.js","CSS","HTML5","Git"];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none" style={{ background:"radial-gradient(circle, #08E95E, transparent)" }} />
      <div ref={ref} className="container mx-auto px-6 max-w-7xl">
        <Heading title="Skills" subtitle="— Technologies —" />
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="space-y-6">
            <motion.h3 initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} className="text-2xl font-bold text-gray-300 mb-8">Technologies I work with</motion.h3>
            {skillList.map((skill,i) => (
              <motion.div key={skill.name} initial={{ opacity:0, x:-30 }} animate={inView?{opacity:1,x:0}:{}} transition={{ delay:i*0.1 }}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                  <span className="text-sm font-mono text-[#08E95E]">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width:0 }} animate={inView?{width:`${skill.level}%`}:{}} transition={{ duration:1.2, delay:0.3+i*0.1, ease:[0.22,1,0.36,1] }} className="h-full rounded-full" style={{ background:`linear-gradient(90deg, ${skill.color}, #08E95E)` }} />
                </div>
              </motion.div>
            ))}
          </div>
          <div>
            <motion.h3 initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} className="text-2xl font-bold text-gray-300 mb-8">My Stack</motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {techGrid.map((tech,i) => (
                <motion.div key={tech} initial={{ opacity:0, scale:0.8, y:20 }} animate={inView?{opacity:1,scale:1,y:0}:{}} transition={{ delay:0.1*i }} whileHover={{ scale:1.08, y:-4 }} className="glass rounded-xl p-4 text-center border border-white/10 hover:border-[#08E95E]/50 hover:glow-accent-sm transition-all duration-300 cursor-default">
                  <p className="text-sm font-semibold text-gray-300">{tech}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
