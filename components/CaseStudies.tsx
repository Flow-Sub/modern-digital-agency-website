import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Globe, LayoutDashboard, Smartphone, Zap } from 'lucide-react';

const services = [
  { 
    id: '01', 
    name: 'AI Voice Agents', 
    description: 'Intelligent voice assistants that handle calls, bookings & support 24/7',
    result: '90% Call Automation',
    tag: 'Voice AI',
    icon: Bot,
    color: 'from-indigo-500 to-purple-600',
    lottie: 'https://lottie.host/embed/c70bd851-f2a0-4bf2-84c0-d8f2432a4479/0DFUyy7J58.lottie'
  },
  { 
    id: '02', 
    name: 'Custom Chatbots', 
    description: 'Smart conversational bots trained on your business data',
    result: '24/7 Instant Response',
    tag: 'Chatbot',
    icon: MessageSquare,
    color: 'from-cyan-500 to-blue-600',
    lottie: null
  },
  { 
    id: '03', 
    name: 'AI Automations', 
    description: 'End-to-end workflow automation with intelligent agents',
    result: '10x Productivity',
    tag: 'Automation',
    icon: Zap,
    color: 'from-amber-500 to-orange-600',
    lottie: null
  },
  { 
    id: '04', 
    name: 'Modern Websites', 
    description: 'High-converting, blazing fast websites that stand out',
    result: 'Sub 1s Load Time',
    tag: 'Web Dev',
    icon: Globe,
    color: 'from-emerald-500 to-teal-600',
    lottie: null
  },
  { 
    id: '05', 
    name: 'Dashboards', 
    description: 'Real-time analytics dashboards with AI insights',
    result: 'Live Data Sync',
    tag: 'Analytics',
    icon: LayoutDashboard,
    color: 'from-pink-500 to-rose-600',
    lottie: null
  },
  { 
    id: '06', 
    name: 'Mobile Apps', 
    description: 'Native iOS & Android apps with seamless UX',
    result: 'Cross Platform',
    tag: 'Mobile',
    icon: Smartphone,
    color: 'from-violet-500 to-indigo-600',
    lottie: null
  }
];

export const CaseStudies: React.FC = () => {
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

      {/* Featured Card with Lottie */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="group relative glass-panel rounded-[3rem] p-8 md:p-12 overflow-hidden cursor-pointer grid md:grid-cols-2 gap-8 items-center">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Content */}
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs uppercase tracking-widest text-indigo-400 mb-6">
              <Bot className="w-4 h-4" />
              Featured Service
            </span>
            
            <h4 className="text-4xl md:text-5xl font-futuristic font-bold mb-4">
              AI Voice Agents
            </h4>
            <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
              Deploy intelligent voice assistants that handle customer calls, schedule appointments, qualify leads, and provide 24/7 support — all sounding completely human.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {['Call Handling', 'Lead Qualification', 'Appointment Booking', '24/7 Support'].map((feature) => (
                <span key={feature} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400">
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div className="text-3xl font-mono font-bold text-indigo-400">90%</div>
              <div className="text-sm text-zinc-500">Call Automation<br/>Achieved</div>
            </div>
          </div>

          {/* Lottie Animation */}
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
        {services.slice(1).map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative glass-panel rounded-[2rem] p-8 overflow-hidden cursor-pointer"
          >
            {/* Hover Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            {/* Number Badge */}
            <div className="absolute top-6 right-6 text-5xl font-futuristic font-bold text-white/[0.03] group-hover:text-white/[0.08] transition-colors">
              {service.id}
            </div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] mb-6`}>
                <div className="w-full h-full rounded-2xl bg-black/80 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Tag */}
              <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest text-zinc-500 mb-4 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-all">
                {service.tag}
              </span>
              
              {/* Title */}
              <h4 className="text-2xl font-futuristic font-bold mb-3 group-hover:text-white transition-colors">
                {service.name}
              </h4>
              
              {/* Description */}
              <p className="text-zinc-500 text-sm mb-6 leading-relaxed group-hover:text-zinc-400 transition-colors">
                {service.description}
              </p>
              
              {/* Result */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                <span className={`font-mono text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
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
        <p className="text-zinc-600 text-sm mb-6">Need something custom?</p>
        <button className="px-8 py-4 border border-white/10 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Let's Talk →
        </button>
      </motion.div>
    </div>
  );
};