"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FiExternalLink } from "react-icons/fi";

interface Props {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  index?: number;
  link?: string;
}

export default function Card({ title, desc, img, tags, index = 0, link }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const handleClick = () => {
    if (link) window.open(link, "_blank", "noopener,noreferrer");
  };

  const isExternal = img.startsWith("http");

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className={`glass rounded-2xl overflow-hidden border border-white/10
        hover:border-[#08E95E]/40 transition-colors duration-300
        hover:glow-accent-sm group w-full max-w-[360px]
        ${link ? "cursor-pointer" : "cursor-default"}`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-white/5">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          unoptimized={isExternal}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Live link badge */}
        {link && (
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-1 bg-[#08E95E] text-black text-[10px] font-bold px-2 py-1 rounded-full">
              <FiExternalLink size={10} />
              Live
            </div>
          </div>
        )}

        {/* Coming soon badge for no link */}
        {!link && (
          <div className="absolute top-3 right-3">
            <div className="bg-white/10 text-gray-400 text-[10px] font-medium px-2 py-1 rounded-full border border-white/10">
              Link soon
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-bold text-white group-hover:text-[#08E95E] transition-colors leading-tight">
            {title}
          </h3>
          {link && (
            <FiExternalLink
              size={16}
              className="text-gray-600 group-hover:text-[#08E95E] transition-colors shrink-0 mt-1"
            />
          )}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{desc}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span key={tag} className="tags text-[11px] rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 3D shine overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(135deg, rgba(8,233,94,0.05) 0%, transparent 60%)" }}
      />
    </motion.div>
  );
}
