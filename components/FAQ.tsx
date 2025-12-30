import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const items = [
  { q: "How secure is the Neural System?", a: "We utilize quantum-resistant AES-256-GCM encryption on a fully decentralized distributed ledger. Your data never touches a monolithic server." },
  { q: "Can the AI Agents learn our custom logic?", a: "Yes. Our models are pre-trained but feature a 'Local Context' module that learns your specific business heuristics in real-time." },
  { q: "What is the implementation timeline?", a: "Standard node deployments take 24-48 hours. Custom neural architecture builds typically range from 2-4 weeks." },
  { q: "Do you offer post-human support?", a: "Our support is handled by our Level 3 Tier 1 autonomous agents with 99.8% resolution rates. Human oversight is available for Enterprise Apex clients." }
];

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-indigo-500 mb-4">Diagnostics</h2>
        <h3 className="text-4xl font-futuristic font-bold">Inquiry Modules</h3>
      </div>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="glass-panel rounded-2xl overflow-hidden">
            <button 
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full p-8 flex items-center justify-between text-left hover:bg-white/[0.02] transition-all"
            >
              <span className="font-bold text-lg font-futuristic">{item.q}</span>
              <motion.div animate={{ rotate: open === i ? 180 : 0 }}>
                <ChevronDown className="text-indigo-500" />
              </motion.div>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-8 pb-8 text-zinc-500 text-sm leading-relaxed"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};