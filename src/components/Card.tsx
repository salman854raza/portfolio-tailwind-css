"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface Props { title: string; desc: string; img: string; tags: string[]; index?: number; }

export default function Card({ title, desc, img, tags, index = 0 }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]),  { stiffness:300, damping:30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness:300, damping:30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width  - 0.5);
    y.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity:0, y:50 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:"-60px" }}
      transition={{ duration:0.6, delay:index*0.1, ease:[0.22,1,0.36,1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle:"preserve-3d", perspective:1000 }}
      className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-[#08E95E]/40 transition-colors duration-300 hover:glow-accent-sm group cursor-pointer w-full max-w-[360px]"
    >
      <div className="relative h-48 overflow-hidden">
        <Image src={img} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-white group-hover:text-[#08E95E] transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{desc}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (<span key={tag} className="tags text-[11px] rounded-md">{tag}</span>))}
        </div>
      </div>
    </motion.div>
  );
}
