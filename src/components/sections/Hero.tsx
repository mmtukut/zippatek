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
  <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500">
    {/* Animated abstract background */}
    <span className="absolute inset-0 pointer-events-none block"> <AnimatedNetworkBG /> </span>
    {/* Main content */}
    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center text-center gap-6 px-6">
      <div className="flex items-center justify-center mb-2"><BridgeIcon /></div>
      <motion.h1 initial={{y: 36, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2}} className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white leading-tight drop-shadow-xl">Building Africa's Infrastructure for Property Intelligence</motion.h1>
      <motion.h2 initial={{y: 18, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.4}} className="text-lg sm:text-2xl text-primary-100 mt-2 font-medium">
        We leverage AI, satellite data, and modern web infrastructure to solve Africa's biggest market inefficiencies — starting with real estate.
      </motion.h2>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.7}} className="flex flex-wrap gap-4 justify-center mt-5">
        <Button variant="primary" size="lg" href="/products">Explore Our Solutions</Button>
        <Button variant="secondary" size="lg" href="/contact">Book a Demo</Button>
      </motion.div>
      {/* Trust indicators */}
      <div className="mt-10 flex flex-col items-center gap-3 text-sm text-white/70">
        <div className="flex gap-8">
          <span>Trusted by <span className="font-bold text-accent-cyan">4+ Government Agencies</span></span>
          <span>Mapping <span className="font-bold text-accent-cyan">2M+ Properties</span> Across Nigeria</span>
        </div>
        <div className="flex gap-5 mt-3 opacity-80">
          {/* Partner Logos (placeholder) */}
          <Image src="/vercel.svg" alt="NIGCOMSAT Logo" width={50} height={24} />
          <Image src="/next.svg" alt="Partner Logo" width={50} height={24} />
        </div>
      </div>
    </div>
  </section>
);
