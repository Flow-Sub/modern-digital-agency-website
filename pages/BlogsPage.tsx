import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const blogPosts = [
  {
    title: "The Rise of Autonomous AI Voice Agents",
    excerpt: "Why low-latency voice intelligence is the next frontier for customer-facing enterprises in 2025.",
    category: "Voice AI",
    date: "Oct 24, 2024",
    author: "Core Core",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Building Modern Webs with Agentic Workflows",
    excerpt: "Integrating AI agents directly into the frontend to create truly dynamic, self-adapting user experiences.",
    category: "Development",
    date: "Oct 20, 2024",
    author: "Node System",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Advanced Scraping: Bypassing Anti-Bot Architecture",
    excerpt: "How neural clusters are changing the game of data extraction and web harvesting at scale.",
    category: "Automation",
    date: "Oct 15, 2024",
    author: "Scrape Lead",
    image: "https://scrape.do/uploads/blog/web-scraping-prevention_hu59c483a256274449d0c7f5e2760d4e16_800379_600x0_resize_q75_h2_box_3.webp"
  },
  {
    title: "Scaling Custom AI Bots for Niche Markets",
    excerpt: "A guide to building specialized bots that outperform general-purpose AI in specific business sectors.",
    category: "Custom Bots",
    date: "Oct 10, 2024",
    author: "Bot Architect",
    image: "https://appinventiv.com/wp-content/uploads/2025/09/banner-4.webp"
  }
];

export const BlogsPage: React.FC = () => {
  return (
    <div className="pt-44 pb-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-indigo-500 mb-4">Neural Library</h2>
          <h1 className="text-6xl md:text-8xl font-futuristic font-bold text-gradient tracking-tighter">Insights.</h1>
        </div>
        <p className="text-zinc-500 max-w-md text-lg font-light leading-relaxed">
          Deep dives into the protocols, systems, and intelligence shaping the future of autonomous business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {blogPosts.map((post, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-8 border border-white/5">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute top-8 left-8">
                <span className="px-4 py-1.5 rounded-full bg-indigo-600/90 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="px-4">
              <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-6">
                <div className="flex items-center gap-2"><Calendar size={14} className="text-indigo-500" /> {post.date}</div>
                <div className="flex items-center gap-2"><User size={14} className="text-indigo-500" /> {post.author}</div>
              </div>
              <h3 className="text-3xl font-futuristic font-bold mb-4 group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-zinc-500 mb-8 leading-relaxed font-light">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white group-hover:gap-5 transition-all">
                Read Protocol <ArrowRight size={16} className="text-indigo-500" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-32 p-12 glass-panel rounded-[3rem] text-center border border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-500/5 -z-10" />
        <h3 className="text-3xl font-futuristic font-bold mb-6">Stay Synchronized</h3>
        <p className="text-zinc-500 max-w-md mx-auto mb-10 text-sm">Join 5,000+ engineers and operators receiving our weekly neural update.</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="node@protocol.net" 
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-indigo-500/50 transition-all text-sm"
          />
          <button className="px-8 py-4 bg-white text-black rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};