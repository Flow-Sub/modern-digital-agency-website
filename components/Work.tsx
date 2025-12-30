
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Stratos AI",
    category: "AI Automation",
    image: "https://picsum.photos/seed/ai1/800/600",
  },
  {
    title: "Neon Finance",
    category: "Web Application",
    image: "https://picsum.photos/seed/web2/800/600",
  },
  {
    title: "Quantum Data",
    category: "Data Architecture",
    image: "https://picsum.photos/seed/data3/800/600",
  },
  {
    title: "Nexus Dashboard",
    category: "Enterprise Software",
    image: "https://picsum.photos/seed/dash4/800/600",
  }
];

export const Work: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-zinc-400 mb-4">Portfolio</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-zinc-900">Crafting digital benchmarks.</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] bg-white border border-black/5"
          >
            <div className="aspect-[4/3] overflow-hidden">
               <img 
                 src={project.image} 
                 alt={project.title}
                 className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
               />
            </div>
            <div className="p-10 flex justify-between items-end">
               <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-indigo-500 mb-2 block">{project.category}</span>
                  <h4 className="text-3xl font-bold text-zinc-900">{project.title}</h4>
               </div>
               <div className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-indigo-700 group-hover:text-white transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45"><path d="M3.64645 11.3536C3.45118 11.5488 3.45118 11.8655 3.64645 12.0607C3.84171 12.2559 4.15829 12.2559 4.35355 12.0607L3.64645 11.3536ZM11 4C11 3.72386 10.7761 3.5 10.5 3.5L6 3.5C5.72386 3.5 5.5 3.72386 5.5 4C5.5 4.27614 5.72386 4.5 6 4.5L10 4.5L10 8.5C10 8.77614 10.2239 9 10.5 9C10.7761 9 11 8.77614 11 8.5L11 4ZM4.35355 12.0607L10.8536 5.56066L10.1464 4.85355L3.64645 11.3536L4.35355 12.0607Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
