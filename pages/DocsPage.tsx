import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Fixed: Removed non-existent icon 'CpuCore' and unused icons 'Layers', 'MessageSquare' from lucide-react
import { Bot, Cpu, Terminal, Zap, Search, Shield, Globe, Activity, Share2, Workflow, Database, CheckCircle2, Network, ArrowRight } from 'lucide-react';

const NeuralTerminal = () => {
  const [logs, setLogs] = useState<string[]>([
    "INITIALIZING_NEURAL_CORE...",
    "HANDSHAKE: NODE_SERVER_NYC_4",
    "SCRAPING_PROTOCOL: ACTIVE",
    "REASONING_ENGINE: 98.4% LOAD",
  ]);

  useEffect(() => {
    const messages = [
      "EXTRACTING: Market_Data_Payload_X9...",
      "SYNTHESIZING: Voice_Agent_Alpha_Response",
      "BYPASSING: Cloudflare_WAF_Security",
      "INJECTING: Dynamic_Context_Memory",
      "DEPLOYING: Auto_Bot_Cluster_v2",
      "STATUS: ALL_SYSTEMS_OPTIMAL",
      "LATENCY: 12ms",
    ];
    
    const interval = setInterval(() => {
      setLogs(prev => [...prev.slice(-5), messages[Math.floor(Math.random() * messages.length)]]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/80 border border-white/5 rounded-2xl p-6 font-mono text-[10px] text-indigo-400 overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.1)]">
      <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-zinc-500 uppercase tracking-widest">Live Process Stream</span>
      </div>
      <div className="space-y-1.5 h-32">
        {logs.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-3"
          >
            <span className="text-indigo-800">[{new Date().toLocaleTimeString()}]</span>
            <span className={log.includes('BYPASSING') ? 'text-cyan-400' : ''}>{log}</span>
          </motion.div>
        ))}
        <motion.span 
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-3 bg-indigo-500"
        />
      </div>
    </div>
  );
};

const LogicCanvasSimulator = () => {
  return (
    <div className="relative w-full aspect-video bg-[#050505] rounded-3xl border border-white/5 overflow-hidden group">
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      {/* Nodes */}
      <div className="relative z-10 w-full h-full flex items-center justify-around px-12">
        {/* Node 1: Trigger */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/30 rounded-xl flex items-center justify-center text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
            <Zap size={24} />
          </div>
          <span className="text-[9px] font-mono text-zinc-500 uppercase">Trigger</span>
        </div>

        {/* Node 2: Logic (n8n style) */}
        <div className="flex flex-col items-center gap-3 relative">
           <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-indigo-600 rounded text-[7px] font-bold uppercase tracking-tighter animate-pulse">Processing</div>
          <div className="w-16 h-16 bg-indigo-600/10 border border-indigo-500/40 rounded-2xl flex items-center justify-center text-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
            <Share2 size={28} />
          </div>
          <span className="text-[9px] font-mono text-zinc-500 uppercase">AI Workflow</span>
        </div>

        {/* Node 3: Output */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            <Database size={24} />
          </div>
          <span className="text-[9px] font-mono text-zinc-500 uppercase">Sync CRM</span>
        </div>
      </div>

      {/* Connection Cables with Pulses */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {/* Line 1 */}
        <path d="M 120 100 L 170 100" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
        <motion.path 
          d="M 120 100 L 170 100" 
          stroke="url(#lineGrad)" 
          strokeWidth="2" 
          fill="none"
          animate={{ strokeDashoffset: [20, -20] }}
          strokeDasharray="10 30"
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
        {/* Line 2 */}
        <path d="M 230 100 L 280 100" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
        <motion.path 
          d="M 230 100 L 280 100" 
          stroke="url(#lineGrad)" 
          strokeWidth="2" 
          fill="none"
          animate={{ strokeDashoffset: [20, -20] }}
          strokeDasharray="10 30"
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.75 }}
        />
      </svg>
    </div>
  );
};

const ToolIntegrationPulse = () => {
  const tools = [
    { name: 'n8n', color: 'bg-indigo-500', desc: 'Custom Logic' },
    { name: 'Zapier', color: 'bg-orange-500', desc: '10k+ Integrations' },
    { name: 'Make', color: 'bg-purple-500', desc: 'Visual Flow' },
    { name: 'Slack', color: 'bg-pink-500', desc: 'Comms Loop' },
    { name: 'Python', color: 'bg-blue-500', desc: 'Heavy Scraping' },
    { name: 'OpenAI', color: 'bg-green-500', desc: 'Neural Core' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {tools.map((tool, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -5, scale: 1.02 }}
          className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl group transition-all hover:border-white/10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-3 h-3 rounded-full ${tool.color} shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:animate-pulse`} />
            <span className="text-xs font-bold uppercase tracking-widest">{tool.name}</span>
          </div>
          <p className="text-[10px] text-zinc-500 leading-tight uppercase tracking-tighter">{tool.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};

const AgentReasoningLab = () => {
  const steps = [
    "Receiving raw payload from Webhook Node.",
    "Analyzing intent using Neural Vector Core.",
    "Bypassing data silos using custom Python bridge.",
    "Updating Airtable & Notion concurrently.",
    "Triggering Voice AI Follow-up protocol."
  ];

  return (
    <div className="space-y-3">
      {steps.map((step, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.4 }}
          className="flex items-center gap-3 p-3 glass-panel rounded-xl border-l-2 border-l-indigo-500"
        >
          <div className="w-4 h-4 rounded-full bg-indigo-500/20 flex items-center justify-center">
            <CheckCircle2 size={10} className="text-indigo-500" />
          </div>
          <span className="text-[10px] font-mono text-zinc-400">{step}</span>
        </motion.div>
      ))}
    </div>
  );
};

export const DocsPage: React.FC = () => {
  return (
    <div className="pt-44 pb-32 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Hero Visualization */}
      <div className="relative mb-32">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] font-bold uppercase tracking-[0.6em] text-indigo-500 mb-6"
            >
              Enterprise Integration Protocols
            </motion.h2>
            <h1 className="text-6xl md:text-[100px] font-futuristic font-bold text-gradient tracking-tighter leading-[0.8] mb-12 uppercase">
              Automated <br /> Ecosystem.
            </h1>
            <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-xl">
              We architect custom AI engines that bridge the gap between niche tools and autonomous execution.
            </p>
          </div>

          <div className="flex-1 w-full relative">
            <div className="absolute -inset-20 bg-indigo-500/10 blur-[100px] rounded-full -z-10" />
            <NeuralTerminal />
          </div>
        </div>
      </div>

      {/* Main Feature: Workflow Orchestration */}
      <div className="mb-48 glass-panel rounded-[3.5rem] p-8 md:p-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">
          <div className="md:col-span-5">
            <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px] block mb-6">Workflow Engineering</span>
            <h2 className="text-4xl md:text-5xl font-futuristic font-bold mb-8">Low-Code <br /> High-Logic.</h2>
            <p className="text-zinc-500 text-lg font-light leading-relaxed mb-10">
              We leverage the power of n8n and Make to create visually mapped systems that are easy to maintain but powerful enough to handle millions of operations.
            </p>
            <div className="space-y-6 mb-12">
               <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-indigo-500/30 transition-all cursor-default">
                  <Workflow className="text-indigo-500" size={20} />
                  <div>
                    <h4 className="text-xs font-bold uppercase">Dynamic Routing</h4>
                    <p className="text-[10px] text-zinc-500 tracking-tight">Smart paths based on real-time data input.</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-cyan-500/30 transition-all cursor-default">
                  <Network className="text-cyan-500" size={20} />
                  <div>
                    <h4 className="text-xs font-bold uppercase">Node Stability</h4>
                    <p className="text-[10px] text-zinc-500 tracking-tight">99.9% uptime for critical business pipelines.</p>
                  </div>
               </div>
            </div>
            <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-indigo-400 hover:text-white transition-all group">
              Explore Node Library <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center">
             <LogicCanvasSimulator />
          </div>
        </div>
      </div>

      {/* Tech Grid: Tools We Scale */}
      <div className="mb-48">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="flex-1">
             <h2 className="text-4xl font-futuristic font-bold tracking-tighter">THE TOOLSTACK.</h2>
             <p className="text-zinc-500 text-sm mt-4 max-w-sm">Every system we build utilizes a blend of industry-standard automation and custom neural layers.</p>
          </div>
          <div className="flex-1">
             <ToolIntegrationPulse />
          </div>
        </div>
      </div>

      {/* Capabilities Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-48">
        
        {/* Agent Reasoning Feature */}
        <div className="md:col-span-7 glass-panel rounded-[3rem] p-12 overflow-hidden flex flex-col md:flex-row items-center gap-12 group">
          <div className="flex-1">
            <Bot size={40} className="text-indigo-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-3xl font-futuristic font-bold mb-4 uppercase">Neural Pathing</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              We go beyond simple triggers. Our systems evaluate context, check history, and make decisions just like a human operator.
            </p>
            <div className="flex gap-3">
              <span className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-bold text-zinc-400">Context Aware</span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-bold text-zinc-400">Self-Optimizing</span>
            </div>
          </div>
          <div className="flex-1 border-l border-white/5 pl-8 hidden md:block">
            <AgentReasoningLab />
          </div>
        </div>

        {/* Small Data Feature */}
        <div className="md:col-span-5 glass-panel rounded-[3rem] p-12 overflow-hidden group">
          <Search size={40} className="text-cyan-400 mb-6 group-hover:rotate-12 transition-transform" />
          <h3 className="text-3xl font-futuristic font-bold mb-4 uppercase">Deep Scrape</h3>
          <p className="text-zinc-500 text-sm leading-relaxed mb-8">
            Distributed proxy clusters capable of harvesting millions of data points without detection from Amazon, LinkedIn, and others.
          </p>
          <div className="relative h-20 bg-black/40 rounded-2xl border border-white/5 p-4 flex items-center justify-around">
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ 
                  height: [10, 40, 10], 
                  opacity: [0.3, 1, 0.3] 
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
                className="w-1 bg-indigo-500 rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Custom Bots Feature */}
        <div className="md:col-span-5 glass-panel rounded-[3rem] p-12 group">
          <Terminal size={40} className="text-purple-400 mb-6 group-hover:scale-90 transition-transform" />
          <h3 className="text-3xl font-futuristic font-bold mb-4 uppercase">Local Bots</h3>
          <p className="text-zinc-500 text-sm leading-relaxed mb-8">
            Modular Python/Rust bots built for local machine tasks like inventory tracking, file parsing, and legacy system sync.
          </p>
          <div className="flex gap-2">
             <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-indigo-500" />
             </div>
             <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div animate={{ width: ['0%', '80%'] }} transition={{ duration: 5, repeat: Infinity }} className="h-full bg-purple-500" />
             </div>
          </div>
        </div>

        {/* Automation Feature */}
        <div className="md:col-span-7 glass-panel rounded-[3rem] p-12 flex flex-col md:flex-row gap-12 group">
          <div className="flex-1">
            <Zap size={40} className="text-yellow-400 mb-6" />
            <h3 className="text-3xl font-futuristic font-bold mb-4 uppercase">Voice Agents</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Human-grade AI voice intelligence built with Kore.ai and custom LLMs for high-bandwidth sales and support.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
               <Activity size={120} className="text-indigo-500 animate-pulse" />
            </div>
            {[Shield, Cpu, Globe, Terminal].map((Icon, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Icon size={24} className="text-zinc-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-[3.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-indigo-500/20 shadow-[0_0_80px_rgba(99,102,241,0.1)]"
      >
        <div>
          <h4 className="text-2xl font-futuristic font-bold mb-2 uppercase tracking-tighter">Ready to Scale?</h4>
          <p className="text-zinc-500 text-sm font-light">Join the automated future. Book a diagnostic with our systems engineers.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-10 py-4 bg-indigo-600 rounded-full font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-indigo-600/20">
            Initialize Project
          </button>
          <button className="px-10 py-4 border border-white/10 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all text-zinc-400">
            View Specs
          </button>
        </div>
      </motion.div>
    </div>
  );
};
