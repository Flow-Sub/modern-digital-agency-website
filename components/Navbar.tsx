import React from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC<{ onNavigate: (page: string) => void, activePage: string }> = ({ onNavigate, activePage }) => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] flex justify-center py-8 px-6"
    >
      <div className="glass-panel rounded-full px-10 py-4 flex items-center gap-12 border border-white/5 backdrop-blur-3xl">
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-6 h-6 border-2 border-indigo-500 rounded-sm rotate-45 group-hover:bg-indigo-500 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300" />
          <span className="font-futuristic font-bold tracking-[0.2em] text-sm uppercase">Cubixn</span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
          {[
            { id: 'labs', label: 'Projects' },
            { id: 'docs', label: 'Solutions' },
            { id: 'blogs', label: 'Blogs' },
            { id: 'network', label: 'Systems' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`hover:text-white transition-all relative py-1 ${activePage === item.id ? 'text-indigo-400' : ''}`}
            >
              {item.label}
              {activePage === item.id && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 w-full h-[1px] bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]" />
              )}
            </button>
          ))}
        </div>

        <button 
          onClick={() => onNavigate('contact')}
          className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] active:scale-95"
        >
          Contact Us
        </button>
      </div>
    </motion.nav>
  );
};