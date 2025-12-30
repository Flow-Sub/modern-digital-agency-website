import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const NewFooter: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.footer-animate', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className="relative min-h-screen flex flex-col justify-end pt-32 pb-8 px-6 overflow-hidden bg-black"
    >
      {/* ============ ANIMATED BACKGROUND - z-[1] ============ */}
      <div className="absolute inset-0 z-[1]">
        
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-indigo-950/20 to-black" />

        {/* Running Horizontal Lines - MORE VISIBLE */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`h-line-${i}`}
              className="absolute h-[2px] running-line-horizontal"
              style={{
                top: `${10 + i * 10}%`,
                left: '-100%',
                width: '60%',
                background: `linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.6), transparent)`,
                boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Running Vertical Lines - MORE VISIBLE */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={`v-line-${i}`}
              className="absolute w-[2px] running-line-vertical"
              style={{
                left: `${5 + i * 8}%`,
                bottom: '-50%',
                height: '50%',
                background: `linear-gradient(to top, transparent, rgba(139, 92, 246, 0.7), rgba(99, 102, 241, 0.5), transparent)`,
                boxShadow: '0 0 8px rgba(139, 92, 246, 0.4)',
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        {/* Diagonal Speed Lines - BRIGHTER */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={`diag-${i}`}
              className="absolute diagonal-line"
              style={{
                width: '3px',
                height: '150px',
                left: `${i * 7}%`,
                top: '-150px',
                background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.8) 50%, transparent 100%)',
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)',
                transform: 'rotate(35deg)',
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        {/* Floating Orbs - BRIGHTER */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full floating-orb"
              style={{
                width: `${30 + i * 20}px`,
                height: `${30 + i * 20}px`,
                left: `${5 + i * 12}%`,
                bottom: `${10 + (i % 4) * 20}%`,
                background: `radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, rgba(139, 92, 246, 0.3) 40%, transparent 70%)`,
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)',
                animationDelay: `${i * 0.8}s`,
              }}
            />
          ))}
        </div>

        {/* Pulsing Grid - VISIBLE */}
        <div className="absolute inset-0 pulsing-grid" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Moving Glow Spots - BRIGHTER */}
        <div className="absolute w-[500px] h-[500px] rounded-full moving-glow-1 blur-[100px] bg-indigo-600/40" />
        <div className="absolute w-[400px] h-[400px] rounded-full moving-glow-2 blur-[80px] bg-purple-600/30" />
        <div className="absolute w-[300px] h-[300px] rounded-full moving-glow-3 blur-[60px] bg-blue-500/25" />

        {/* Particle Field - BRIGHTER */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-indigo-400 rounded-full particle-float"
              style={{
                left: `${(i * 3.3) % 100}%`,
                top: `${(i * 7) % 100}%`,
                boxShadow: '0 0 6px rgba(129, 140, 248, 0.8)',
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

      </div>

      {/* LIGHTER Dark Overlay - z-[2] - REDUCED OPACITY */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/70 via-black/30 to-black/50 pointer-events-none" />

      {/* ============ CONTENT - z-[3] ============ */}
      <div className="max-w-7xl mx-auto w-full relative z-[3]">
        
        {/* Big CTA */}
        <div className="footer-animate text-center mb-32">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-futuristic font-bold tracking-tighter mb-8">
            <span className="text-gradient">Let's Build</span>
            <br />
            <span className="text-white">Something Epic</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            Ready to transform your business with AI? Let's create intelligent solutions together.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="px-12 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            Start Your Project
          </button>
        </div>

        {/* Footer Grid */}
        <div className="footer-animate grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-[0_0_30px_rgba(99,102,241,0.5)] flex items-center justify-center">
                <span className="font-futuristic font-bold text-white text-lg">F</span>
              </div>
              <span className="font-futuristic font-bold tracking-wider text-xl">FLOW</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              AI-powered solutions for the modern enterprise. Abdullahkha7701@gmail.com
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400 mb-6">Services</h4>
            <ul className="space-y-3">
              {['AI Voice Agents', 'Custom Chatbots', 'Automations', 'Web Development', 'Mobile Apps'].map((item) => (
                <li key={item} className="text-zinc-400 text-sm hover:text-white transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400 mb-6">Company</h4>
            <ul className="space-y-3">
              <li onClick={() => onNavigate('labs')} className="text-zinc-400 text-sm hover:text-white transition-colors cursor-pointer">About Us</li>
              <li onClick={() => onNavigate('docs')} className="text-zinc-400 text-sm hover:text-white transition-colors cursor-pointer">Our Work</li>
              <li onClick={() => onNavigate('blogs')} className="text-zinc-400 text-sm hover:text-white transition-colors cursor-pointer">Blog</li>
              <li onClick={() => onNavigate('contact')} className="text-zinc-400 text-sm hover:text-white transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400 mb-6">Connect</h4>
            <div className="flex gap-3">
              {['X', 'in', 'G'].map((icon, i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all cursor-pointer text-xs font-bold"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-animate flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase">
            © 2025 Flow AI Systems
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
            <span className="text-[10px] font-mono text-zinc-500">All Systems Operational</span>
          </div>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80 z-[4]" />
      
      {/* ============ CSS ANIMATIONS ============ */}
      <style>{`
        /* Horizontal Running Lines */
        @keyframes runHorizontal {
          0% { 
            left: -60%; 
            opacity: 0; 
          }
          5% { 
            opacity: 1; 
          }
          95% { 
            opacity: 1; 
          }
          100% { 
            left: 120%; 
            opacity: 0; 
          }
        }
        .running-line-horizontal {
          animation: runHorizontal 5s linear infinite;
        }

        /* Vertical Running Lines */
        @keyframes runVertical {
          0% { 
            bottom: -50%; 
            opacity: 0; 
          }
          5% { 
            opacity: 1; 
          }
          95% { 
            opacity: 1; 
          }
          100% { 
            bottom: 120%; 
            opacity: 0; 
          }
        }
        .running-line-vertical {
          animation: runVertical 6s linear infinite;
        }

        /* Diagonal Speed Lines */
        @keyframes diagonalRun {
          0% { 
            top: -150px; 
            opacity: 0;
            transform: rotate(35deg) translateX(0);
          }
          10% { 
            opacity: 1; 
          }
          90% { 
            opacity: 1; 
          }
          100% { 
            top: 120%; 
            opacity: 0;
            transform: rotate(35deg) translateX(100px);
          }
        }
        .diagonal-line {
          animation: diagonalRun 3s linear infinite;
        }

        /* Floating Orbs */
        @keyframes floatOrb {
          0%, 100% { 
            transform: translateY(0) translateX(0) scale(1); 
            opacity: 0.5; 
          }
          25% { 
            transform: translateY(-40px) translateX(30px) scale(1.2); 
            opacity: 0.8; 
          }
          50% { 
            transform: translateY(-20px) translateX(-20px) scale(0.9); 
            opacity: 0.6; 
          }
          75% { 
            transform: translateY(-50px) translateX(20px) scale(1.1); 
            opacity: 0.7; 
          }
        }
        .floating-orb {
          animation: floatOrb 6s ease-in-out infinite;
        }

        /* Pulsing Grid */
        @keyframes pulseGrid {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        .pulsing-grid {
          animation: pulseGrid 3s ease-in-out infinite;
        }

        /* Moving Glow 1 */
        @keyframes moveGlow1 {
          0%, 100% { 
            bottom: -20%; 
            left: -20%; 
          }
          33% { 
            bottom: 30%; 
            left: 20%; 
          }
          66% { 
            bottom: 20%; 
            left: 50%; 
          }
        }
        .moving-glow-1 {
          animation: moveGlow1 15s ease-in-out infinite;
        }

        /* Moving Glow 2 */
        @keyframes moveGlow2 {
          0%, 100% { 
            top: -10%; 
            right: -20%; 
          }
          50% { 
            top: 30%; 
            right: 30%; 
          }
        }
        .moving-glow-2 {
          animation: moveGlow2 12s ease-in-out infinite;
        }

        /* Moving Glow 3 */
        @keyframes moveGlow3 {
          0%, 100% { 
            bottom: 10%; 
            left: 40%; 
          }
          33% { 
            bottom: 50%; 
            left: 20%; 
          }
          66% { 
            bottom: 30%; 
            left: 60%; 
          }
        }
        .moving-glow-3 {
          animation: moveGlow3 18s ease-in-out infinite;
        }

        /* Particle Float */
        @keyframes particleFloat {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 0.4; 
          }
          25% { 
            transform: translateY(-30px) translateX(20px); 
            opacity: 0.8; 
          }
          50% { 
            transform: translateY(-60px) translateX(-15px); 
            opacity: 0.5; 
          }
          75% { 
            transform: translateY(-30px) translateX(25px); 
            opacity: 0.7; 
          }
        }
        .particle-float {
          animation: particleFloat 8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};