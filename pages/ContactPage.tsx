import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Globe, Zap, Shield, MapPin, Phone, Cpu, CreditCard } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
    query: '', 
    type: 'AI Agents', 
    budget: '$10k - $25k' 
  });
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = ['AI Agents', 'Automation', 'Voice AI', 'Web3/App', 'Scraping'];
  const budgetRanges = ['<$5k', '$5k - $10k', '$10k - $25k', '$25k - $50k', '$50k+'];

  const locations = [
    {
      country: "USA",
      phone: "+1 (307) 310-5878",
      address: "30 N GOULD ST STE R, SHERIDAN 82801",
      color: "from-blue-500 to-indigo-500"
    },
    {
      country: "United Kingdom",
      phone: "+44 7440 725382",
      address: "49 Halifax Roadd, Rochdale, OL129DB",
      color: "from-purple-500 to-pink-500"
    },
    {
      country: "Azerbaijan",
      phone: "+994 70 667 55 97",
      address: "Office 402, Caspian Plaza, 45 Nizami Street, Baku",
      color: "from-emerald-500 to-teal-500"
    },
    {
      country: "Pakistan",
      phone: "+92 304 6958943",
      address: "2nd floor E2-A Mainmarket Gulberg 2, Lahore",
      color: "from-orange-500 to-red-500"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT COLUMN: INFO & LOCATIONS */}
        <div className="space-y-12">
          <div>
            <h1 className="text-6xl md:text-8xl font-futuristic font-bold text-gradient tracking-tighter mb-8 leading-[0.85]">
              Cubixn <br /> SYNC.
            </h1>
            <p className="text-zinc-500 text-xl font-light max-w-lg mb-12">
              Initialize a high-bandwidth connection with our engineering core. Select your protocol and allocate resources to begin.
            </p>
          </div>

          {/* Office Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((loc, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="glass-panel p-6 rounded-3xl border border-white/5 hover:border-white/20 transition-all group"
              >
                <div className={`w-10 h-10 rounded-xl mb-4 bg-gradient-to-br ${loc.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                  <MapPin size={14} className="text-indigo-400" /> {loc.country}
                </h3>
                <p className="text-[11px] text-zinc-500 leading-relaxed mb-3 uppercase tracking-wider">{loc.address}</p>
                <a href={`tel:${loc.phone}`} className="text-xs text-indigo-400 font-mono flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={12} /> {loc.phone}
                </a>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-8 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">Systems Online</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap size={14} className="text-indigo-500" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">Latency: 14ms</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: THE CREATIVE FORM */}
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] -z-10 rounded-full" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel rounded-[3rem] p-8 md:p-10 border border-white/10"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Identity & Comms Group */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 pl-4">Subject Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Enter Identity"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-indigo-500/50 transition-all text-white placeholder-zinc-700"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 pl-4">Neural Mail</label>
                    <input 
                      required
                      type="email" 
                      placeholder="email@protocol.net"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-indigo-500/50 transition-all text-white placeholder-zinc-700"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                {/* Project Protocol Selection (TYPE) */}
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 pl-4 flex items-center gap-2">
                    <Cpu size={12} /> Select Project Protocol
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {projectTypes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setFormState({...formState, type: t})}
                        className={`px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all border ${
                          formState.type === t 
                          ? 'bg-indigo-600 border-indigo-400 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]' 
                          : 'bg-white/5 border-white/5 text-zinc-500 hover:border-white/20'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Resource Allocation (BUDGET) */}
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 pl-4 flex items-center gap-2">
                    <CreditCard size={12} /> Resource Allocation (Budget)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {budgetRanges.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormState({...formState, budget: b})}
                        className={`py-3 rounded-xl text-[10px] font-bold transition-all border ${
                          formState.budget === b 
                          ? 'bg-white text-black border-white' 
                          : 'bg-white/5 border-white/5 text-zinc-500 hover:border-white/10'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 pl-4">Project Brief</label>
                  <textarea 
                    required
                    rows={3}
                    placeholder="Describe the objective..."
                    className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 px-8 outline-none focus:border-indigo-500/50 transition-all text-white placeholder-zinc-700 resize-none"
                    value={formState.query}
                    onChange={e => setFormState({...formState, query: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-6 bg-indigo-600 text-white rounded-3xl font-bold uppercase tracking-[0.3em] text-xs hover:bg-indigo-500 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-4 shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                >
                  Broadcast Query <Send size={16} />
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-indigo-500/50 relative">
                  <Zap className="text-indigo-400 animate-pulse" size={40} />
                  <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-ping" />
                </div>
                <h3 className="text-4xl font-futuristic font-bold mb-4 tracking-tighter">Sync Successful</h3>
                <p className="text-zinc-500 max-w-xs mx-auto text-sm leading-relaxed">
                  Your signal has been received by our core processors. Stand by for neural feedback within 24 cycles.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-[10px] font-bold uppercase tracking-widest text-indigo-400 hover:text-white transition-colors"
                >
                  Send another signal
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};