
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Custom type for intrinsic elements to support spline-viewer
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any;
    }
  }
}

export const NeuralFooter: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.footer-content-block', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.1
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative min-h-[90vh] flex flex-col justify-end pt-48 pb-12 px-6 border-t border-white/5 bg-black overflow-hidden">
      {/* Spline 3D Model Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        {/* @ts-ignore - spline-viewer is a web component and might not be recognized by JSX types in all environments */}
        {/* <spline-viewer url="https://prod.spline.design/zmaRhqg7qcYFbKbA/scene.splinecode"></spline-viewer> */}
      </div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

      {/* Footer Glows */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div 
          className="bg-glow-blob w-[800px] h-[800px] bg-indigo-900/40 bottom-[-20%] left-[-10%]" 
          style={{ animationDuration: '40s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32 footer-content-block">
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-sm shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
              <span className="font-futuristic font-bold tracking-[0.2em] text-2xl uppercase">Flow</span>
            </div>
            <p className="text-zinc-400 max-w-md text-lg leading-relaxed font-light">
              Building the autonomous neural infrastructure for the modern enterprise. Custom bots, voice agents, and high-frequency intelligence at your fingertips.
            </p>
            <div className="flex gap-4 pt-4">
               <button 
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl"
               >
                 Start Project
               </button>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500">Infrastructure</h4>
            <ul className="text-zinc-500 text-sm space-y-4 font-medium">
              <li onClick={() => onNavigate('labs')} className="hover:text-white transition-colors cursor-pointer">Flow Labs</li>
              <li onClick={() => onNavigate('docs')} className="hover:text-white transition-colors cursor-pointer">Solutions</li>
              <li onClick={() => onNavigate('blogs')} className="hover:text-white transition-colors cursor-pointer">Insights</li>
              <li onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">Initialize Sync</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500">Social Core</h4>
            <ul className="text-zinc-500 text-sm space-y-4 font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">Project Stream</li>
              <li className="hover:text-white transition-colors cursor-pointer">X Neural Stream</li>
              <li className="hover:text-white transition-colors cursor-pointer">Matrix Hub</li>
              <li className="hover:text-white transition-colors cursor-pointer">Engineering Log</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-white/5 text-[9px] font-mono text-zinc-700 tracking-[0.4em] uppercase">
          <div className="flex gap-12">
            <p>© FLOW AI SYSTEMS // 2025</p>
            <p className="hidden md:block">ISO-27001 COMPLIANT</p>
          </div>
          <div className="flex gap-12 mt-8 md:mt-0">
            <p>SYNC: PERSISTENT</p>
            <p>LOC: GLOBAL_DISTRIBUTED</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
