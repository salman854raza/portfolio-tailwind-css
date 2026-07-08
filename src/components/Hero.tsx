"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const textVariants = {
    hidden:  { opacity: 0, y: 60, skewY: 5 },
    visible: (i: number) => ({
      opacity: 1, y: 0, skewY: 0,
      transition: { delay: i * 0.15 + 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
    }),
  };

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </motion.div>

      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(8,233,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(8,233,94,0.3) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <motion.div animate={{ scale: [1,1.2,1], opacity:[0.3,0.5,0.3] }} transition={{ duration:6, repeat:Infinity }} className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full z-0" style={{ background: "radial-gradient(circle, rgba(8,233,94,0.15) 0%, transparent 70%)" }} />
      <motion.div animate={{ scale: [1,1.3,1], opacity:[0.2,0.4,0.2] }} transition={{ duration:8, repeat:Infinity, delay:2 }} className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full z-0" style={{ background: "radial-gradient(circle, rgba(8,233,94,0.1) 0%, transparent 70%)" }} />

      <motion.div style={{ opacity }} className="container mx-auto px-6 max-w-7xl relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          <div className="order-2 lg:order-1">
            <motion.p initial={{ opacity:0, x:-30 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.2 }} className="text-[#08E95E] font-mono text-sm tracking-[0.3em] mb-6 uppercase">Full Stack Developer</motion.p>

            <div className="overflow-hidden">
              {["I'm", "Salman", "Raza"].map((word, i) => (
                <motion.div key={word} custom={i} variants={textVariants} initial="hidden" animate="visible">
                  <span className={`block font-black leading-[0.9] tracking-tighter ${i===0?"text-6xl sm:text-7xl text-gray-300":""} ${i===1?"text-7xl sm:text-9xl text-white":""} ${i===2?"text-7xl sm:text-9xl text-[#08E95E]":""}`}>{word}</span>
                </motion.div>
              ))}
            </div>

            <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.0 }} className="mt-8 text-gray-400 text-lg max-w-md leading-relaxed">
              Building modern web experiences with Next.js, React &amp; TypeScript. Student at GIAIC — AI, Web3 &amp; Metaverse.
            </motion.p>

            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.2 }} className="mt-10 flex gap-4 flex-wrap">
              <a href="#projects" className="px-8 py-3 bg-[#08E95E] text-black font-bold rounded-full hover:bg-[#06c44e] transition-all duration-300 glow-accent text-sm tracking-wide">View Work</a>
              <a href="#contact" className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:border-[#08E95E] hover:text-[#08E95E] transition-all duration-300 text-sm tracking-wide glass">Contact Me</a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ delay:0.5, duration:1 }} className="order-1 lg:order-2 flex justify-center">
            <motion.div animate={{ y:[0,-16,0] }} transition={{ duration:4, repeat:Infinity, ease:"easeInOut" }} className="relative">
              <motion.div animate={{ rotate:360 }} transition={{ duration:20, repeat:Infinity, ease:"linear" }} className="absolute -inset-4 rounded-full border border-dashed border-[#08E95E]/30" />
              <motion.div animate={{ rotate:-360 }} transition={{ duration:30, repeat:Infinity, ease:"linear" }} className="absolute -inset-8 rounded-full border border-dotted border-[#08E95E]/15" />
              <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border-4 border-[#08E95E]/40 glow-accent">
                <Image src="/profile image.gif" alt="Salman Raza" fill className="object-cover" priority />
              </div>
              <motion.div initial={{ opacity:0, x:30 }} animate={{ opacity:1, x:0 }} transition={{ delay:1.4 }} className="absolute -right-4 bottom-8 glass rounded-xl px-4 py-2 glow-accent-sm">
                <p className="text-xs text-gray-400">Available for</p>
                <p className="text-sm font-bold text-[#08E95E]">Freelance</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.5, repeat:Infinity }} className="w-px h-12 bg-gradient-to-b from-[#08E95E] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
