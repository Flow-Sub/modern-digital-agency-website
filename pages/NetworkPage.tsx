import React from 'react';
import { motion } from 'framer-motion';

export const NetworkPage: React.FC = () => {
  return (
    <div className="pt-44 pb-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h1 className="text-6xl md:text-8xl font-futuristic font-bold text-gradient mb-8">GLOBAL INFRANET.</h1>
        <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-light">
          A truly decentralized hardware layer powered by custom ASIC clusters in 40+ strategic geo-nodes.
        </p>
      </div>

      <div className="relative w-full aspect-video glass-panel rounded-[3rem] overflow-hidden p-12 mb-24 border border-white/5">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-indigo-500">Hardware Layer</h2>
              <p className="text-4xl font-futuristic font-bold">Titan-V Neural Processors</p>
            </div>
            <p className="text-zinc-500">Our custom silicon allows for parallel neural training with 10x the power efficiency of standard H100 clusters.</p>
            <div className="flex gap-4">
               {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-8 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/5 flex justify-between items-center">
              <span className="text-zinc-400 font-mono text-xs">Uptime Performance</span>
              <span className="text-indigo-400 font-bold">99.999%</span>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/5 flex justify-between items-center">
              <span className="text-zinc-400 font-mono text-xs">Compute Density</span>
              <span className="text-indigo-400 font-bold">14.2 TFLOPS/W</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};