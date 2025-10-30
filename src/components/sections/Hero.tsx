"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

// Abstract dynamic pattern/example: SVG data flow for unique icon
const BridgeIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="36" cy="58" rx="28" ry="5" fill="#DBEAFE"/>
    <path d="M8 58c0-20 17.9-36 28-36s28 16 28 36" stroke="#1E40AF" strokeWidth="3" strokeLinecap="round"/>
    <path d="M24 58c0-10 6.7-18 12-18s12 7.7 12 18" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="36" cy="40" r="3.5" fill="#F97316" stroke="#fff" strokeWidth="2"/>
  </svg>
);

const AnimatedNetworkBG = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    {/* Points */}
    {[{x:160,y:140},{x:340,y:90},{x:580,y:180},{x:990,y:330},{x:800,y:88},{x:250,y:350},{x:650,y:450},{x:1100,y:170},{x:950,y:540},{x:320,y:510}].map((p,i)=>(
      <motion.circle key={i} cx={p.x} cy={p.y} r={10} fill="#06B6D4" initial={{r:10}} animate={{r:[10,18,10]}} transition={{repeat:Infinity, duration:3.5 + i, delay:i/4}}/>
    ))}
    {/* Lines */}
    <motion.line x1={160} y1={140} x2={340} y2={90} stroke="#3B82F6" strokeWidth={2} initial={{opacity:0.2}} animate={{opacity:0.4}} transition={{repeat:Infinity, duration:3}} />
    <motion.line x1={340} y1={90} x2={800} y2={88} stroke="#0A2463" strokeWidth={2} initial={{opacity:0.17}} animate={{opacity:0.24}} transition={{repeat:Infinity, duration:5, repeatType:"mirror"}} />
    <motion.line x1={500} y1={150} x2={160} y2={140} stroke="#DBEAFE" strokeWidth={1} initial={{opacity:0.15}} animate={{opacity:0.22}} transition={{repeat:Infinity, duration:4, repeatType:"mirror"}} />
    <motion.line x1={650} y1={450} x2={320} y2={510} stroke="#06B6D4" strokeDasharray={6} strokeWidth={2.5} initial={{opacity:0.1}} animate={{opacity:0.19}} transition={{repeat:Infinity, duration:6}} />
    <motion.line x1={990} y1={330} x2={950} y2={540} stroke="#F97316" strokeDasharray={8} strokeWidth={2} initial={{opacity:0.14}} animate={{opacity:0.16}} transition={{repeat:Infinity, duration:5}} />
    <motion.line x1={800} y1={88} x2={1100} y2={170} stroke="#06B6D4" strokeWidth={2.5} initial={{opacity:0.11}} animate={{opacity:0.20}} transition={{repeat:Infinity, duration:7}} />
  </svg>
);

export const Hero = () => (
  <section className="section-primary section-xl relative flex items-center justify-center min-h-screen overflow-hidden">
    {/* Animated abstract background */}
    <span className="absolute inset-0 pointer-events-none block opacity-40">
      <AnimatedNetworkBG />
    </span>
    
    {/* Main content */}
    <div className="container-sm relative z-10 flex flex-col items-center justify-center text-center">
      {/* Brand Icon */}
      <motion.div 
        initial={{scale: 0.8, opacity:0}} 
        animate={{scale:1, opacity:1}} 
        transition={{duration:0.5}}
        className="mb-8"
      >
        <BridgeIcon />
      </motion.div>
      
      {/* Hero Title */}
      <motion.h1 
        initial={{y: 30, opacity:0}} 
        animate={{y:0, opacity:1}} 
        transition={{delay:0.2, duration:0.6}}
        className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white leading-tight mb-6"
      >
        Building Africa's Infrastructure for Property Intelligence
      </motion.h1>
      
      {/* Hero Subtitle */}
      <motion.p 
        initial={{y: 20, opacity:0}} 
        animate={{y:0, opacity:1}} 
        transition={{delay:0.4, duration:0.6}}
        className="text-lg sm:text-xl md:text-2xl text-primary-100 font-medium max-w-3xl mb-10 leading-relaxed"
      >
        We leverage AI, satellite data, and modern web infrastructure to solve Africa's biggest market inefficiencies — starting with real estate.
      </motion.p>
      
      {/* CTAs - World-Class Pill Style */}
      <motion.div 
        initial={{opacity:0, y:20}} 
        animate={{opacity:1, y:0}} 
        transition={{delay:0.6, duration:0.6, ease:[0.22,1,0.36,1]}}
        className="flex flex-wrap gap-5 justify-center mb-20"
      >
        <motion.a
          href="/products"
          whileHover={{scale: 1.02, y: -2}}
          whileTap={{scale: 0.98}}
          className="h-14 px-10 bg-white text-gray-900 text-base font-semibold rounded-full 
            shadow-[0_1px_3px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.08),0_8px_32px_rgba(0,0,0,0.04)]
            hover:shadow-[0_2px_6px_rgba(0,0,0,0.15),0_8px_24px_rgba(0,0,0,0.12),0_16px_48px_rgba(0,0,0,0.06)]
            transition-all duration-300 active:scale-[0.98]
            flex items-center justify-center"
        >
          Explore Our Solutions
        </motion.a>
        <motion.a
          href="/contact"
          whileHover={{scale: 1.02, y: -2}}
          whileTap={{scale: 0.98}}
          className="h-14 px-10 bg-accent-orange-100 text-accent-orange text-base font-semibold rounded-full
            shadow-[0_1px_3px_rgba(249,115,22,0.2),0_4px_16px_rgba(249,115,22,0.15),0_8px_32px_rgba(249,115,22,0.08)]
            hover:shadow-[0_2px_6px_rgba(249,115,22,0.25),0_8px_24px_rgba(249,115,22,0.2),0_16px_48px_rgba(249,115,22,0.12)]
            hover:bg-accent-orange-50
            transition-all duration-300 active:scale-[0.98]
            flex items-center justify-center"
        >
          Book a Demo
        </motion.a>
      </motion.div>
      
      {/* Trust Indicators - Premium Cards */}
      <motion.div 
        initial={{opacity:0, y:30}} 
        animate={{opacity:1, y:0}} 
        transition={{delay:0.8, duration:0.7, ease:[0.22,1,0.36,1]}}
        className="flex flex-col items-center gap-10 w-full max-w-5xl"
      >
        {/* Stats Row - World-Class Design */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          {/* Trusted By */}
          <motion.div 
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{delay:1, duration:0.6}}
            whileHover={{y: -4, scale: 1.02}}
            className="bg-white rounded-3xl flex flex-col items-center text-center py-10 px-8 
              shadow-[0_2px_8px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.08),0_16px_64px_rgba(0,0,0,0.04)]
              hover:shadow-[0_4px_16px_rgba(0,0,0,0.1),0_12px_48px_rgba(0,0,0,0.12),0_24px_80px_rgba(0,0,0,0.06)]
              border border-gray-50
              transition-all duration-500 cursor-pointer
              relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 w-full">
              <div className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-bold mb-4 letter-spacing-wide">
                Trusted by
              </div>
              <div className="text-6xl font-black text-gray-900 mb-3 tracking-tight leading-none">4+</div>
              <div className="text-sm text-gray-700 font-semibold">Government Agencies</div>
            </div>
          </motion.div>
          
          {/* Mapping */}
          <motion.div 
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{delay:1.15, duration:0.6}}
            whileHover={{y: -4, scale: 1.02}}
            className="bg-white rounded-3xl flex flex-col items-center text-center py-10 px-8 
              shadow-[0_2px_8px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.08),0_16px_64px_rgba(0,0,0,0.04)]
              hover:shadow-[0_4px_16px_rgba(0,0,0,0.1),0_12px_48px_rgba(0,0,0,0.12),0_24px_80px_rgba(0,0,0,0.06)]
              border border-gray-50
              transition-all duration-500 cursor-pointer
              relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 w-full">
              <div className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-bold mb-4 letter-spacing-wide">
                Mapping
              </div>
              <div className="text-6xl font-black text-gray-900 mb-3 tracking-tight leading-none">2M+</div>
              <div className="text-sm text-gray-700 font-semibold">Properties</div>
            </div>
      </motion.div>
          
          {/* Coverage */}
          <motion.div 
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{delay:1.3, duration:0.6}}
            whileHover={{y: -4, scale: 1.02}}
            className="bg-white rounded-3xl flex flex-col items-center text-center py-10 px-8 
              shadow-[0_2px_8px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.08),0_16px_64px_rgba(0,0,0,0.04)]
              hover:shadow-[0_4px_16px_rgba(0,0,0,0.1),0_12px_48px_rgba(0,0,0,0.12),0_24px_80px_rgba(0,0,0,0.06)]
              border border-gray-50
              transition-all duration-500 cursor-pointer
              relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 w-full">
              <div className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-bold mb-4 letter-spacing-wide">
                Across
              </div>
              <div className="text-6xl font-black text-gray-900 mb-3 tracking-tight leading-none">6</div>
              <div className="text-sm text-gray-700 font-semibold">Nigerian States</div>
        </div>
          </motion.div>
        </div>
        
        {/* Partner Logos */}
        <div className="flex gap-8 items-center opacity-60">
          <Image src="/vercel.svg" alt="NIGCOMSAT Logo" width={70} height={32} className="brightness-0 invert" />
          <Image src="/next.svg" alt="Partner Logo" width={70} height={32} className="brightness-0 invert" />
      </div>
      </motion.div>
    </div>
  </section>
);
