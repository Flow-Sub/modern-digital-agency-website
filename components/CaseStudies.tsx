import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Globe, LayoutDashboard, Smartphone, Zap, Search } from 'lucide-react';

const services = [
  { 
    id: '01', 
    name: 'AI Voice Agents', 
    description: 'Intelligent voice assistants that handle calls, bookings & support 24/7 with human-like latency.',
    result: '90% Call Automation',
    tag: 'Voice AI',
    icon: Bot,
    color: 'from-indigo-500 to-purple-600',
    image: 'https://images.prismic.io/codiste-website/Z_YcJHdAxsiBwd3u_1-1-.webp?auto=format,compress'
  },
  { 
    id: '02', 
    name: 'Custom Chatbots', 
    description: 'Smart conversational bots trained on your business data for sales and support.',
    result: '24/7 Instant Response',
    tag: 'Chatbot',
    icon: MessageSquare,
    color: 'from-cyan-500 to-blue-600',
    image: 'https://cdn.dribbble.com/userupload/17323665/file/original-33a0e329261c75e6b2b18775b03ad74f.png?resize=400x0'
  },
  { 
    id: '03', 
    name: 'AI Automations', 
    description: 'End-to-end workflow automation with intelligent agents and Zapier/Make.',
    result: '10x Productivity',
    tag: 'Automation',
    icon: Zap,
    color: 'from-amber-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    id: '04', 
    name: 'Modern Websites', 
    description: 'High-converting, blazing fast websites built with Next.js and Framer.',
    result: 'Sub 1s Load Time',
    tag: 'Web Dev',
    icon: Globe,
    color: 'from-emerald-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    id: '05', 
    name: 'Dashboards', 
    description: 'Real-time analytics dashboards with integrated AI insights.',
    result: 'Live Data Sync',
    tag: 'Analytics',
    icon: LayoutDashboard,
    color: 'from-pink-500 to-rose-600',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    id: '06', 
    name: 'Mobile Apps', 
    description: 'Native iOS & Android apps with seamless UX and AI features.',
    result: 'Cross Platform',
    tag: 'Mobile',
    icon: Smartphone,
    color: 'from-violet-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    id: '07', 
    name: 'Neural Scraping', 
    description: 'AI-powered data extraction from complex websites and directories.',
    result: '99% Data Accuracy',
    tag: 'Data',
    icon: Search,
    color: 'from-yellow-500 to-red-600',
    image: 'https://cdn.dribbble.com/userupload/11047586/file/original-55fee2375605065b0f2e86f45b3eb173.png?format=webp&resize=400x300&vertical=center'
  }
];

export const CaseStudies: React.FC = () => {
  const featuredService = services[0];
  const gridServices = services.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-indigo-500 mb-4">
            What We Build
          </h2>
          <h3 className="text-4xl md:text-7xl font-futuristic font-bold tracking-tighter mb-6">
            Our <span className="text-gradient">Services</span>
          </h3>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-light">
            From intelligent AI agents to stunning digital experiences — we build the future of your business.
          </p>
        </motion.div>
      </div>

      {/* Featured Card (AI Voice Agents) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="group relative glass-panel rounded-[3rem] p-8 md:p-12 overflow-hidden cursor-pointer grid md:grid-cols-2 gap-8 items-center">
          {/* HOVER IMAGE BG */}
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-30 transition-all duration-1000 scale-110 group-hover:scale-100 pointer-events-none">
            <img src={featuredService.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs uppercase tracking-widest text-indigo-400 mb-6">
              <Bot className="w-4 h-4" />
              Featured Service
            </span>
            
            <h4 className="text-4xl md:text-5xl font-futuristic font-bold mb-4">
              {featuredService.name}
            </h4>
            <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
              {featuredService.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {['Call Handling', 'Lead Qualification', 'Appointment Booking', '24/7 Support'].map((feature) => (
                <span key={feature} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400">
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div className="text-3xl font-mono font-bold text-indigo-400">{featuredService.result.split(' ')[0]}</div>
              <div className="text-sm text-zinc-500">Call Automation<br/>Achieved</div>
            </div>
          </div>

          {/* Lottie Animation Area */}
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
            <iframe 
              src="https://lottie.host/embed/9890f3de-2f8c-4762-8db4-a4e3e6448031/hhi1EFFkRW.lottie"
              className="w-full h-full border-0"
              style={{ background: 'transparent' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gridServices.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative glass-panel rounded-[2rem] p-8 overflow-hidden cursor-pointer"
          >
            {/* HOVER IMAGE BG */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-all duration-700 scale-110 group-hover:scale-100 pointer-events-none">
                <img src={service.image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            <div className="absolute top-6 right-6 text-5xl font-futuristic font-bold text-white/[0.03] group-hover:text-white/[0.08] transition-colors">
              {service.id}
            </div>
            
            <div className="relative z-10">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] mb-6`}>
                <div className="w-full h-full rounded-2xl bg-black/80 flex items-center justify-center group-hover:bg-transparent transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest text-zinc-500 mb-4 group-hover:text-white group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all">
                {service.tag}
              </span>
              
              <h4 className="text-2xl font-futuristic font-bold mb-3 group-hover:text-white transition-colors">
                {service.name}
              </h4>
              
              <p className="text-zinc-500 text-sm mb-6 leading-relaxed group-hover:text-zinc-200 transition-colors h-12">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/5 group-hover:border-white/20 transition-colors">
                <span className={`font-mono text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:text-white`}>
                  {service.result}
                </span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  →
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-zinc-600 text-sm mb-6 font-mono tracking-widest">SIGNAL_QUERY_PENDING</p>
        <button className="px-10 py-4 border border-indigo-500/30 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all shadow-[0_0_20px_rgba(99,102,241,0)] hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
          Initialize Connection →
        </button>
      </motion.div>
    </div>
  );
};