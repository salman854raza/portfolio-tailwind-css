"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props { title: string; subtitle?: string; }

export default function Heading({ title, subtitle }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="text-center mb-16">
      <motion.p initial={{ opacity:0, y:10 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.5 }} className="text-[#08E95E] font-mono text-xs tracking-[0.4em] uppercase mb-3">{subtitle ?? "— Featured —"}</motion.p>
      <motion.h2 initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6, delay:0.1 }} className="text-4xl md:text-6xl font-black tracking-tight">{title}<span className="text-[#08E95E]">.</span></motion.h2>
      <motion.div initial={{ scaleX:0 }} animate={inView?{scaleX:1}:{}} transition={{ duration:0.6, delay:0.3 }} className="h-px w-24 bg-gradient-to-r from-transparent via-[#08E95E] to-transparent mx-auto mt-6" />
    </div>
  );
}
