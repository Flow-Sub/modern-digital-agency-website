import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Fingerprint, Zap } from 'lucide-react';

const teamMembers = [
  {
    name: "Sadam A.",
    role: "CTO | CEO",
    id: "882-S",
    img: "https://images.squarespace-cdn.com/content/v1/5a2c77d812abd9bc7ab2b450/c9414c95-f952-4b96-bd2a-3798dbea082a/IMG_3657.JPG",
    bio: "Orchestrating the transition from static systems to autonomous neural entities.",
    tag: "Neural Lead",
    pos: "center 20%" 
  },
  {
    name: "Elena K.",
    role: "Systems Analyst",
    id: "441-E",
    img: "https://img.freepik.com/free-photo/businesswoman-posing_23-2148142812.jpg?semt=ais_hybrid&w=740&q=80",
    bio: "Specializing in extreme-scale data scraping and vector embedding optimization.",
    tag: "Data Ops",
    pos: "center 15%" 
  },
  {
    name: "Jaxon V.",
    role: "Architect",
    id: "109-J",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
    bio: "Crafting the visual and sensory experience of AI interaction and human emotion.",
    tag: "Visual Core",
    pos: "center 25%" 
  }
];

export const Testimonials: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    /* SECTION BG UPDATED TO INDIGO-600 WITH THE REQUESTED SHADOW */
    <section className="relative bg-indigo-600 py-32 overflow-hidden shadow-[0_0_20px_rgba(99,102,241,0.3)]">
      
      {/* BACKGROUND DECORATION - LIGHTER GLOW FOR DEPTH */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-white/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Text color adjusted to white for contrast on indigo bg */}
              <span className="text-white font-mono text-xs tracking-[0.5em] uppercase opacity-80">System_Personnel</span>
              <div className="h-[1px] w-24 bg-white/30" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none">
              THE <span className="text-outline text-transparent opacity-40">Personnel</span>
            </h2>
          </div>
          <div className="bg-white/10 border border-white/20 p-4 rounded-2xl backdrop-blur-md max-w-xs">
             <p className="text-indigo-100 text-[10px] md:text-xs font-light leading-relaxed">
               Hover to establish neural connection with our core architect group. Expansion reveals bio-metric data.
             </p>
          </div>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="flex flex-col lg:flex-row gap-4 h-[650px] w-full">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              className="relative overflow-hidden rounded-[2.5rem] cursor-pointer group border border-white/20 shadow-2xl"
              animate={{ 
                flex: hoveredIndex === index ? 3.5 : 1 
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
            >
              {/* IMAGE BACKGROUND - ZOOM REDUCED (SCALE 1) */}
              <motion.div className="absolute inset-0">
                <motion.div 
                  animate={{ 
                    scale: 1, // Reduced zoom to zero to prevent cutting portions
                    filter: hoveredIndex === index ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.4)'
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${member.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: member.pos, // Correct centering for faces
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-900/20 to-transparent" />
              </motion.div>

              {/* CARD CONTENT */}
              <div className="relative h-full w-full p-8 flex flex-col justify-between z-20">
                
                {/* TOP: Status Pill */}
                <div className="flex justify-between items-start">
                  <motion.div 
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0, 
                      y: hoveredIndex === index ? 0 : -10 
                    }}
                    className="bg-white text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg"
                  >
                    <Zap size={12} fill="currentColor" />
                    {member.tag}
                  </motion.div>

                  {/* Vertical Name - Collapsed State */}
                  {hoveredIndex !== index && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.6 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap font-black text-2xl uppercase tracking-tighter text-white pointer-events-none"
                    >
                      {member.name}
                    </motion.p>
                  )}
                </div>

                {/* BOTTOM: Expanded Details */}
                <div className="overflow-hidden">
                  <AnimatePresence mode="wait">
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="space-y-4"
                      >
                        <div>
                           <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                             {member.name.split(' ')[0]}
                           </h3>
                           <p className="text-indigo-200 font-mono text-[10px] md:text-xs tracking-[0.3em] mt-1">{member.role}</p>
                        </div>
                        
                        <p className="text-indigo-50 text-xs md:text-sm max-w-sm leading-relaxed font-light">
                          {member.bio}
                        </p>

                        <div className="flex flex-wrap gap-4 border-t border-white/20 pt-4">
                           <div className="flex items-center gap-2">
                              <Fingerprint size={14} className="text-white" />
                              <span className="text-[9px] font-mono text-indigo-100 uppercase">{member.id}</span>
                           </div>
                           <div className="flex items-center gap-2">
                              <Activity size={14} className="text-white" />
                              <span className="text-[9px] font-mono text-indigo-100 uppercase">Neural_Link: Active</span>
                           </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* SCANNING LINE */}
              <motion.div 
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[1px] bg-white/40 z-10 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                style={{ opacity: hoveredIndex === index ? 1 : 0 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .text-outline {
          -webkit-text-stroke: 1px rgba(255,255,255,0.6);
        }
      `}</style>
    </section>
  );
};