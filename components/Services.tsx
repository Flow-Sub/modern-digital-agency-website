
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Layout, Share2, Search, Zap } from 'lucide-react';

const serviceList = [
  {
    icon: <Bot className="text-purple-400" />,
    title: "AI Agents",
    desc: "Autonomous agents capable of handling complex reasoning, customer support, and internal operations 24/7."
  },
  {
    icon: <Zap className="text-yellow-400" />,
    title: "Auto-Workflows",
    desc: "Seamlessly connect your tools. We build custom pipelines that eliminate repetitive manual data entry."
  },
  {
    icon: <Layout className="text-blue-400" />,
    title: "Modern Web Apps",
    desc: "Fast, sleek, and conversion-optimized websites built with React, Next.js, and high-performance stacks."
  },
  {
    icon: <Search className="text-green-400" />,
    title: "Advanced Scraping",
    desc: "Real-time data harvesting from any web source. Power your business with structured, actionable insights."
  },
  {
    icon: <Cpu className="text-red-400" />,
    title: "App Development",
    desc: "End-to-end mobile and desktop application development focused on scalability and user experience."
  },
  {
    icon: <Share2 className="text-indigo-400" />,
    title: "Custom Integrations",
    desc: "Custom API development to bridge the gap between your legacy software and modern AI tools."
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4">Core Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Solutions for a <br /> faster world.</h3>
        </div>
        <p className="text-zinc-400 max-w-md text-lg">
          We leverage the latest in GenAI and software engineering to solve your business bottlenecks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceList.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-white/10 hover:bg-zinc-900/60 transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-black rounded-2xl border border-white/5 mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold mb-4">{service.title}</h4>
            <p className="text-zinc-500 leading-relaxed text-sm">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
