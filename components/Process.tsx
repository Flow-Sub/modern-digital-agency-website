import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    content: "We audit your existing tech stack and identify high-impact AI opportunities."
  },
  {
    num: "02",
    title: "Architecture Design",
    content: "Mapping out the AI logic, data flows, and modern UI/UX requirements."
  },
  {
    num: "03",
    title: "Rapid Prototyping",
    content: "Building an MVP in weeks, not months, to validate intelligence and utility."
  },
  {
    num: "04",
    title: "Scale & Optimize",
    content: "Deployment and continuous fine-tuning based on real-world usage metrics."
  }
];

export const Process: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-indigo-500 mb-4">Deployment Phase</h2>
        <h3 className="text-4xl md:text-6xl font-futuristic font-bold tracking-tighter">System Implementation</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="text-7xl font-futuristic font-bold text-zinc-900 group-hover:text-indigo-500/20 transition-colors duration-500 mb-8 tracking-tighter">
              {step.num}
            </div>
            <h4 className="text-xl font-bold mb-4 font-futuristic">{step.title}</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {step.content}
            </p>
            <div className="mt-8 h-[2px] w-0 bg-indigo-500 group-hover:w-full transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};