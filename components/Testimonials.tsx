import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    author: "Elena Vance",
    role: "CTO, Aether Flux",
    content: "Flow isn't just an agency; they are an extension of our engineering team. Their custom bots reduced our support overhead by 85% in one quarter.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    author: "Marcus Thorne",
    role: "Director of Ops, Titan",
    content: "The voice agents Flow deployed are light-years ahead of anything we tried building in-house. Customer satisfaction is now at an all-time high.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    author: "Sarah Chen",
    role: "Founder, Echo Health",
    content: "Scaling our platform with Flow's modern stack allowed us to launch in record time. Their scraping tools are invaluable for our market research.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-indigo-500 mb-4">Neural Feedback</h2>
        <h3 className="text-4xl md:text-6xl font-futuristic font-bold tracking-tighter">Synchronized Success</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel rounded-[3rem] p-10 flex flex-col justify-between"
          >
            <p className="text-zinc-400 italic text-lg leading-relaxed mb-12">
              "{rev.content}"
            </p>
            <div className="flex items-center gap-4 pt-8 border-t border-white/5">
              <img src={rev.avatar} className="w-12 h-12 rounded-full border border-indigo-500/50" alt={rev.author} />
              <div>
                <h4 className="font-bold text-white">{rev.author}</h4>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">{rev.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};