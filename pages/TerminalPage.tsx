import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const TerminalPage: React.FC = () => {
  const [lines, setLines] = useState<string[]>(['Nexus Core OS v4.0.2', 'Initializing communication protocol...', 'Establishing secure tunnel...']);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLines([...lines, `> ${input}`, `Processing message: "${input}"...`, 'Message queued for neural analysis.', 'An engineer will sync with you shortly.']);
    setInput('');
  };

  return (
    <div className="pt-44 pb-32 px-6 max-w-5xl mx-auto h-screen flex flex-col">
      <div className="flex-1 glass-panel rounded-[2.5rem] p-8 md:p-12 font-mono text-sm md:text-base text-zinc-400 overflow-hidden flex flex-col border border-indigo-500/20 shadow-[0_0_100px_rgba(99,102,241,0.05)]">
        <div className="flex-1 overflow-y-auto mb-8 space-y-2 scrollbar-hide">
          {lines.map((line, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={line.startsWith('>') ? 'text-indigo-400 font-bold' : ''}
            >
              {line}
            </motion.div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-4 items-center">
          <span className="text-indigo-500 font-bold">NEXUS_USER:~$</span>
          <input 
            autoFocus
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0"
            placeholder="Enter query or type 'contact'..."
          />
        </form>
      </div>
      
      <div className="mt-8 flex justify-between text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
        <span>Channel: Encrypted</span>
        <span>Ping: 12ms</span>
        <span>Stability: Nominal</span>
      </div>
    </div>
  );
};