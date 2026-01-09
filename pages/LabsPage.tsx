import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity, Brain } from 'lucide-react';

export const LabsPage: React.FC = () => {
  return (
    <div className="pt-44 pb-32 px-6 max-w-7xl mx-auto">
      <div className="mb-24 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h1 className="text-6xl md:text-9xl font-futuristic font-bold text-gradient tracking-tighter mb-8 leading-[0.85]">
            Cubixn <br /> LABS.
          </h1>
          <p className="text-zinc-500 text-xl font-light max-w-xl leading-relaxed">
            Incubating the next generation of voice intelligence and autonomous bots. Experimental protocols and live neural stress tests.
          </p>
        </div>
        <div className="flex-1 w-full aspect-square glass-panel rounded-[4rem] flex items-center justify-center relative overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-64 h-64 border-2 border-indigo-500/30 rounded-3xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Brain size={120} className="text-indigo-500/20" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          { title: "Project: Synapse", status: "Staged", details: "Self-correcting voice synthesis for enterprise support." },
          { title: "Project: Ghost", status: "Active", details: "Undetectable scraping clusters for real-time market data." },
          { title: "Project: Oracle", status: "Staged", details: "Macro-economic predictive modeling for custom bot clusters." },
          { title: "Project: Hive", status: "Live", details: "Swarm intelligence for automated app deployment." }
        ].map((p, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="glass-panel rounded-[3rem] p-12 border border-white/5"
          >
            <div className="flex justify-between items-start mb-12">
              <h3 className="text-3xl font-futuristic font-bold">{p.title}</h3>
              <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo-400 border border-indigo-500/30">
                {p.status}
              </span>
            </div>
            <p className="text-zinc-500 mb-12">{p.details}</p>
            <div className="flex gap-4">
              <div className="h-1 bg-indigo-500 w-full rounded-full overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                  className="w-1/3 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};