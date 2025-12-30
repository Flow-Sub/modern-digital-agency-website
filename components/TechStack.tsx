
import React from 'react';
import { motion } from 'framer-motion';

const stack = [
  "LLM Training", "Next.js 15", "PyTorch", "Rust Engine", "AWS Global", "GraphQL", "LangChain", "WebAssembly"
];

export const TechStack: React.FC = () => {
  return (
    <div className="py-24 overflow-hidden bg-white/[0.01] border-y border-white/5">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center px-10"
        >
          {[...stack, ...stack, ...stack].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-2 h-2 bg-indigo-500 rounded-full" />
              <span className="text-2xl md:text-5xl font-futuristic font-bold text-zinc-700 hover:text-white transition-colors cursor-default select-none">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
