import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Zap, 
  Target, 
  ArrowUpRight, 
  Cpu, 
  Globe, 
  ShieldCheck,
  MousePointer2,
  Quote
} from 'lucide-react';

const impactStats = [
  { value: "150+", label: "Projects Delivered", icon: Cpu, color: "text-blue-400" },
  { value: "$47M", label: "Revenue Generated", icon: TrendingUp, color: "text-emerald-400" },
  { value: "12M+", label: "Neural Interactions", icon: Zap, color: "text-amber-400" },
  { value: "99.9%", label: "Uptime Guaranteed", icon: ShieldCheck, color: "text-indigo-400" }
];

const capabilities = [
  {
    title: "AI-Voice Agents",
    desc: "Human-grade AI agents for high-volume support.",
    metric: "2.3M Saved/yr",
    tags: ["RT-Latency", "NLP"]
  },
  {
    title: "AI-Agents/Mutli-Agents",
    desc: "Extreme-scale data scraping and embedding.",
    metric: "94% Automation",
    tags: ["Data Ops", "ML"]
  }
];

export const ServicesGrid: React.FC = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER: AGGRESSIVE & MODERN */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-12 bg-indigo-500" />
              <span className="text-indigo-500 font-mono text-xs font-bold tracking-[0.4em] uppercase">Performance_Report_02</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85]">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Output</span>
            </h2>
          </div>
          <div className="pb-2">
            <p className="text-zinc-500 text-sm font-light max-w-[280px] leading-relaxed border-l border-indigo-500/30 pl-4">
              Real-time analytics and neural deployment benchmarks across our global partner network.
            </p>
          </div>
        </div>

        {/* THE BENTO HUB */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* MAIN CARD: CASE STUDY REVEAL (Span 8) */}
          <motion.div 
            whileHover={{ scale: 0.995 }}
            className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-indigo-600 p-10 flex flex-col justify-between min-h-[450px] shadow-[0_0_40px_rgba(79,70,229,0.2)]"
          >
            <div className="absolute top-0 right-0 p-8">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-indigo-600 transition-all duration-500">
                    <ArrowUpRight size={32} />
                </div>
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-white/20 backdrop-blur-md text-[10px] font-bold px-3 py-1 rounded-full text-white uppercase tracking-widest">Featured_Success</span>
                    <span className="text-indigo-200 text-[10px] font-mono">ID: TECHFLOW_01</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                    Automating <br />The Enterprise.
                </h3>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-end justify-between">
                <div className="flex gap-4">
                    <div className="bg-black/20 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                        <div className="text-3xl font-black text-white">94%</div>
                        <div className="text-[10px] text-indigo-200 uppercase tracking-widest">Automation</div>
                    </div>
                    <div className="bg-black/20 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                        <div className="text-3xl font-black text-white">2.3M</div>
                        <div className="text-[10px] text-indigo-200 uppercase tracking-widest">Savings</div>
                    </div>
                </div>
                <p className="text-indigo-100 text-sm italic font-light max-w-[300px]">
                    "Cubixn transformed our customer experience. What took 50 agents now runs autonomously."
                </p>
            </div>

            {/* DECORATIVE GRID */}
            <div className="absolute inset-0 opacity-10 pointer-events-none cyber-grid" />
          </motion.div>

          {/* SIDE CARDS: QUICK CAPABILITIES (Span 4) */}
          <div className="md:col-span-4 grid grid-cols-1 gap-4">
            {capabilities.map((cap, i) => (
              <div key={i} className="group bg-zinc-900/50 border border-white/5 rounded-[2rem] p-8 hover:border-indigo-500/50 transition-all">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                        <Zap size={20} />
                    </div>
                    <span className="text-indigo-500 font-bold text-xs">{cap.metric}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{cap.title}</h4>
                <p className="text-zinc-500 text-xs mb-4">{cap.desc}</p>
                <div className="flex gap-2">
                    {cap.tags.map(tag => (
                        <span key={tag} className="text-[8px] font-mono bg-white/5 text-zinc-400 px-2 py-1 rounded-md">{tag}</span>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM STATS STRIP (Span 12) */}
          <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {impactStats.map((stat, i) => (
              <motion.div 
                key={i}
                onMouseEnter={() => setHoveredStat(i)}
                onMouseLeave={() => setHoveredStat(null)}
                className="relative bg-zinc-900/30 border border-white/5 rounded-3xl p-6 overflow-hidden group hover:bg-zinc-900/60 transition-all"
              >
                <div className="flex items-center gap-4 mb-2">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{stat.label}</span>
                </div>
                <div className="text-3xl font-black text-white tracking-tighter">{stat.value}</div>
                
                {/* ANIMATED BAR */}
                <div className="absolute bottom-0 left-0 h-1 bg-indigo-500 transition-all duration-700" 
                     style={{ width: hoveredStat === i ? '100%' : '0%' }} 
                />
              </motion.div>
            ))}
          </div>

        </div>

        {/* CTA TEXT */}
        <div className="mt-16 flex flex-col items-center">
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-indigo-500/40 transition-all"
            >
                View Network Capabilities <MousePointer2 size={14} />
            </motion.button>
        </div>

      </div>

      <style>{`
        .cyber-grid {
          background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .text-outline {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
      `}</style>
    </section>
  );
};