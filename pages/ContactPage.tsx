import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Globe, Zap, Shield } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', query: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-44 pb-32 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-6xl md:text-8xl font-futuristic font-bold text-gradient tracking-tighter mb-8 leading-[0.85]">
            NEURAL <br /> SYNC.
          </h1>
          <p className="text-zinc-500 text-xl font-light max-w-lg mb-12">
            Initialize a high-bandwidth connection with our engineering core. We usually respond within 24 operational hours.
          </p>
          
          <div className="space-y-8">
            {[
              { icon: <Zap size={20} />, label: "Response Rate", val: "14ms Avg" },
              { icon: <Shield size={20} />, label: "Channel", val: "AES-256 Encrypted" },
              { icon: <Globe size={20} />, label: "Coverage", val: "Global Nodes" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400 border border-white/5 group-hover:border-indigo-500/50 transition-all">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600">{item.label}</p>
                  <p className="font-bold text-white">{item.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] -z-10 rounded-full" />
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel rounded-[3.5rem] p-8 md:p-12"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 pl-4">Neural Identity</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Subject Name"
                    className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 px-8 outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-white placeholder-zinc-600"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 pl-4">Comms Channel</label>
                  <input 
                    required
                    type="email" 
                    placeholder="user@protocol.net"
                    className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 px-8 outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-white placeholder-zinc-600"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 pl-4">Query Packet</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Project Brief..."
                    className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 px-8 outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all text-white placeholder-zinc-600 resize-none"
                    value={formState.query}
                    onChange={e => setFormState({...formState, query: e.target.value})}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-6 bg-white text-black rounded-3xl font-bold uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4"
                >
                  Broadcast Query <Send size={18} />
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-indigo-500/50">
                  <Zap className="text-indigo-400" size={32} />
                </div>
                <h3 className="text-3xl font-futuristic font-bold mb-4">Sync Successful</h3>
                <p className="text-zinc-500">Your signal has been received by our core processors. Stand by for neural feedback.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};