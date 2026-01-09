import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Hyperspeed from './Hyperspeed'; // Commented out as requested

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const Hero: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title parallax and fade
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          },
          y: 100,
          opacity: 0,
          scale: 0.9,
          filter: 'blur(10px)'
        });
      }

      // Content items slight delay fade
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '40% top',
            scrub: 1
          },
          opacity: 0,
          y: 60
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* --- PREVIOUS HYPERSPEED BACKGROUND (COMMENTED OUT) --- */}
      {/* 
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        />
      </div> 
      */}

      {/* --- NEW VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://ik.imagekit.io/tslnuz0b3/277093_small.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center w-full max-w-7xl mx-auto"
      >
        <div className="mb-6 md:mb-10 flex items-center justify-center gap-4">
          <div className="w-8 md:w-12 h-[1px] bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,1)]" />
          <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-indigo-400">Cubixn Core v1.0 Stable</span>
          <div className="w-8 md:w-12 h-[1px] bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,1)]" />
        </div>

        <h1 
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-[110px] lg:text-[140px] font-futuristic font-bold leading-[1] md:leading-[0.8] tracking-tighter mb-8 md:mb-12 text-gradient uppercase px-4"
        >
          Custom AI-Agents <br />
          <span className="text-white">& Automation Services.</span>
        </h1>

        <div ref={contentRef}>
          <p className="max-w-2xl mx-auto text-zinc-300 md:text-zinc-500 text-base md:text-2xl font-light leading-relaxed mb-10 md:mb-16 px-6">
            We design AI agents that remove manual work, accelerate execution, 
                      and turn ideas into outcomes — across sales, support, ops, and growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 px-6">
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-6 bg-indigo-600 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] transform hover:-translate-y-2 transition-all active:scale-95 text-white"
            >
              Contact Us
            </button>
            <button className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-6 border border-white/20 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] hover:bg-white/5 transition-all text-zinc-300 hover:text-white">
              System Specs
            </button>
          </div>
        </div>
      </motion.div>

      {/* Kinetic Typography Footnote - Hidden on very small screens for better UX */}
      <div className="absolute bottom-10 md:bottom-20 w-full overflow-hidden whitespace-nowrap opacity-20 font-mono text-[8px] md:text-[10px] tracking-[0.8em] md:tracking-[1em] text-zinc-500">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          AI VOICE AGENTS // CUSTOM BOTS // NEURAL SCRAPING // MODERN WEBSITES // APP DEVELOPMENT // AUTONOMOUS FLOWS // HYPER SCALING // 
        </motion.div>
      </div>
    </section>
  );
};