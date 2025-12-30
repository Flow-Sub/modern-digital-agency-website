import React from 'react';
import { motion } from 'framer-motion';

export const NetworkStats: React.FC = () => {
  const stats = [
    { label: 'Active Nodes', val: '12,402' },
    { label: 'Neural Throughput', val: '4.2 PB/s' },
    { label: 'Latency (Global)', val: '14ms' },
    { label: 'Agent Uptime', val: '99.999%' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 relative">
      <div className="absolute inset-0 bg-indigo-500/[0.02] rounded-[4rem] -z-10 border border-white/5" />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600 mb-4">{s.label}</div>
            <div className="text-3xl md:text-5xl font-futuristic font-bold text-gradient">{s.val}</div>
          </motion.div>
        ))}
      </div>
      
      {/* Animated Waveform Simulation */}
      <div className="mt-24 h-32 flex items-end gap-1 opacity-20 px-12">
        {Array.from({ length: 120 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ height: [10, Math.random() * 100 + 10, 10] }}
            transition={{ duration: 1.5 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
            className="flex-1 bg-indigo-500 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};