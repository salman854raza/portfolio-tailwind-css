"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} className="border-t border-white/10 py-10 glass">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">© 2025 <span className="text-[#08E95E] font-semibold">Salman Raza</span>. All rights reserved.</p>
        <div className="flex gap-6">
          {["Home","Projects","Skills","Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-xs text-gray-500 hover:text-[#08E95E] transition-colors duration-200">{l}</a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
