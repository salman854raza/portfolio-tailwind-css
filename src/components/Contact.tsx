"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Heading from "./Heading";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-5 pointer-events-none" style={{ background:"radial-gradient(ellipse, #08E95E, transparent)" }} />
      <div ref={ref} className="container mx-auto px-6 max-w-7xl">
        <Heading title="Contact" subtitle="— Get In Touch —" />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity:0, x:-50 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7 }} className="space-y-8">
            <div>
              <h3 className="text-3xl font-black text-white mb-4">Let&apos;s work <span className="text-[#08E95E]">together</span></h3>
              <p className="text-gray-400 leading-relaxed">Drop me a line, give me a call, or send me a message by submitting the form. I&apos;m always open to new opportunities and collaborations.</p>
            </div>
            <div className="space-y-4">
              {[
                { icon:<AiOutlineMail size={22}/>, label:"Email", value:"salman854raza@gmail.com" },
                { icon:<BsTelephone   size={20}/>, label:"Phone", value:"+923-133856076" },
              ].map((item) => (
                <motion.div key={item.label} whileHover={{ x:6 }} className="flex items-center gap-4 glass rounded-xl p-4 border border-white/10 hover:border-[#08E95E]/40 transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-[#08E95E]/10 border border-[#08E95E]/30 flex items-center justify-center text-[#08E95E] shrink-0">{item.icon}</div>
                  <div><p className="text-xs text-gray-500">{item.label}</p><p className="text-sm font-medium text-gray-200">{item.value}</p></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity:0, x:50 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.2 }} className="glass rounded-3xl p-8 border border-white/10">
            <div className="space-y-5">
              {[
                { id:"name",  label:"Name",  type:"text",  placeholder:"Your name" },
                { id:"email", label:"Email", type:"email", placeholder:"your@email.com" },
              ].map((field) => (
                <div key={field.id} className="flex flex-col gap-2">
                  <label htmlFor={field.id} className="text-sm font-medium text-gray-400">{field.label}</label>
                  <input type={field.type} id={field.id} placeholder={field.placeholder} className="h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#08E95E]/60 transition-all duration-300" />
                </div>
              ))}
              <div className="flex flex-col gap-2">
                <label htmlFor="msg" className="text-sm font-medium text-gray-400">Message</label>
                <textarea id="msg" rows={6} placeholder="Tell me about your project..." className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#08E95E]/60 transition-all duration-300 resize-none" />
              </div>
              <motion.button whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }} className="w-full py-3 bg-[#08E95E] text-black font-bold rounded-xl hover:bg-[#06c44e] transition-colors duration-300 glow-accent text-sm tracking-wide">Send Message</motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
