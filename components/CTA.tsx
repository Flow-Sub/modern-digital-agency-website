
import React from 'react';
import { motion } from 'framer-motion';

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto rounded-[3rem] glass p-12 md:p-24 text-center border border-white/10 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Ready to build <br /> what's next?
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto mb-12">
            Schedule a strategy call to explore how AI can transform your agency or business operations.
          </p>
          <button className="px-12 py-5 bg-white text-black text-lg font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all">
            Book a Discovery Call
          </button>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
      </div>
    </section>
  );
};
