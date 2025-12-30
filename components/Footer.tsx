
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg" />
            <span className="font-bold tracking-tighter uppercase text-zinc-900">Nexus</span>
          </div>
          <p className="text-zinc-400 text-sm">© 2024 Nexus AI Agency. Future-proof automation.</p>
        </div>

        <div className="flex items-center gap-10 text-[13px] font-bold text-zinc-600 uppercase tracking-widest">
          <a href="#" className="hover:text-indigo-600 transition-colors">Twitter</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Email</a>
        </div>

        <div className="px-6 py-2 bg-zinc-50 rounded-full border border-black/5 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">
          Building the autonomous world
        </div>
      </div>
    </footer>
  );
};
