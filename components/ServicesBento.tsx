
import React from 'react';
import { motion } from 'framer-motion';
import { Database, TrendingUp, Sparkles, MessageCircle, Code2, Play } from 'lucide-react';

export const ServicesBento: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Top Left: Main Header & Mini Cards */}
        <div className="md:col-span-6 space-y-6">
          <div className="p-8 bento-card min-h-[300px] flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-zinc-900 mb-8 tracking-tight">AI Automation Services</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-indigo-500 text-2xl mt-[-4px]">✳</span>
                <p className="text-zinc-800 font-bold"><span className="text-zinc-400 font-normal">Make Business Ease:</span> Simplify your process with automation.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-indigo-500 text-2xl mt-[-4px]">✳</span>
                <p className="text-zinc-800 font-bold"><span className="text-zinc-400 font-normal">Insights Drive Growth:</span> Leverage actionable data to scale with AI.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 bento-card">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                <Database size={24} className="text-indigo-600" />
              </div>
              <h4 className="text-xl font-bold mb-3">Data-driven</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">Turn raw data into actionable insights that smarter decisions and measurable growth.</p>
            </div>
            <div className="p-8 bento-card">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp size={24} className="text-indigo-600" />
              </div>
              <h4 className="text-xl font-bold mb-3">Efficient Growth</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">Work smarter, not harder. Unlock faster results and lower costs with AI-powered efficiency.</p>
            </div>
          </div>
        </div>

        {/* Top Right: Workflow Card */}
        <div className="md:col-span-6 p-8 bento-card flex flex-col items-center text-center overflow-hidden">
          <h3 className="text-2xl font-bold text-zinc-900 mb-2">Workflow Automation & Optimization.</h3>
          <p className="text-zinc-500 text-sm mb-12">Streamline repetitive tasks & Keep your business running on autopilot.</p>
          
          <div className="relative w-full aspect-square max-w-[350px] flex items-center justify-center">
            {/* Animated Circles & Icons */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 border border-indigo-100 rounded-full"
            />
            <div className="absolute inset-16 border border-indigo-50 rounded-full" />
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 p-3 bg-white shadow-lg rounded-full border border-black/5 z-10">
               <MessageCircle size={20} className="text-indigo-600" />
            </div>
            <div className="absolute bottom-1/4 right-0 p-3 bg-white shadow-lg rounded-full border border-black/5 z-10">
               <Database size={20} className="text-indigo-600" />
            </div>
            <div className="absolute bottom-1/4 left-0 p-3 bg-white shadow-lg rounded-full border border-black/5 z-10">
               <TrendingUp size={20} className="text-indigo-600" />
            </div>

            <div className="relative z-20 px-6 py-2 bg-indigo-900 text-white rounded-full font-bold text-xs shadow-xl shadow-indigo-200">
               AI-Automation
            </div>
          </div>
        </div>

        {/* Bottom Left: Custom AI Model Card */}
        <div className="md:col-span-7 p-10 bento-card relative overflow-hidden group">
          <div className="relative z-10">
             <h3 className="text-2xl font-bold text-zinc-900 mb-2">Custom AI Model Development</h3>
             <p className="text-zinc-500 text-sm mb-8">Get AI solutions built around your unique needs.</p>
             
             {/* Code Editor Mockup */}
             <div className="bg-[#f8f9ff] rounded-2xl border border-indigo-100 p-6 font-mono text-sm overflow-hidden shadow-inner">
                <div className="flex items-center justify-between mb-4 border-b border-indigo-50 pb-2">
                   <div className="text-indigo-400 flex items-center gap-2">
                      <span className="text-[10px]">Name : AI_development.py</span>
                   </div>
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                   </div>
                </div>
                <div className="space-y-1">
                   <p className="text-indigo-600">def evaluate_task(self, workload_value):</p>
                   <p className="pl-4 text-zinc-500">if workload_value > self.activation_limit:</p>
                   <p className="pl-8 text-indigo-400">self.current_mode = "engaged"</p>
                   <p className="pl-8 text-indigo-500">return "Automation agent activated!"</p>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Right: Chatbots Card */}
        <div className="md:col-span-5 p-10 bento-card relative overflow-hidden flex flex-col justify-between">
           <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">Chatbots & virtual assistants</h3>
              <p className="text-zinc-500 text-sm mb-8">Engage customers 24/7 with intelligent Virtual assistants.</p>
           </div>
           
           <div className="bg-[#fcfdff] rounded-2xl border border-indigo-50 p-6 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Sparkles size={16} className="text-indigo-600" />
                 </div>
                 <div className="text-sm font-bold text-zinc-800">Creating Content Now</div>
                 <div className="ml-auto flex gap-1">
                    <div className="w-1.5 h-1.5 bg-indigo-200 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                 </div>
              </div>
              <div className="w-full h-2 bg-indigo-50 rounded-full" />
              <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-indigo-50">
                 <div className="flex items-center gap-2 text-xs font-bold text-zinc-600">
                    <Play size={14} className="fill-indigo-400 text-indigo-400" />
                    Create a banner
                 </div>
                 <button className="px-4 py-1.5 bg-indigo-800 text-white text-[10px] font-bold rounded-lg">Create</button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};
