import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target } from 'lucide-react';

const tiers = [
  {
    name: 'Neural Starter',
    price: '99',
    icon: <Target size={24} />,
    features: ['1 Autonomous Agent', 'Basic NLP Processing', 'Standard Webhosting', 'Email Support']
  },
  {
    name: 'System Core',
    price: '499',
    icon: <Zap size={24} />,
    features: ['5 Specialized Agents', 'Real-time Data Scraping', 'Neural Dashboard', 'Priority Processing'],
    featured: true
  },
  {
    name: 'Enterprise Apex',
    price: 'Custom',
    icon: <Shield size={24} />,
    features: ['Unlimited Clusters', 'Custom Neural Models', 'Dedicated Infranet', 'Direct Human Engineering']
  }
];

export const Pricing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-indigo-500 mb-4">Scaling Models</h2>
        <h3 className="text-4xl md:text-6xl font-futuristic font-bold tracking-tighter">Neural Access Packs</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`relative glass-panel rounded-[3rem] p-12 flex flex-col ${tier.featured ? 'border-indigo-500/50 shadow-[0_0_50px_rgba(99,102,241,0.1)]' : ''}`}
          >
            {tier.featured && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-indigo-600 rounded-full text-[10px] font-bold uppercase tracking-widest">
                Recommended
              </div>
            )}
            
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-indigo-400 border border-white/5">
              {tier.icon}
            </div>
            
            <h4 className="text-2xl font-futuristic font-bold mb-2">{tier.name}</h4>
            <div className="flex items-baseline gap-1 mb-12">
              <span className="text-4xl font-bold font-futuristic">{tier.price === 'Custom' ? '' : '$'}</span>
              <span className="text-6xl font-bold font-futuristic tracking-tighter">{tier.price}</span>
              {tier.price !== 'Custom' && <span className="text-zinc-500 text-sm">/mo</span>}
            </div>

            <ul className="space-y-6 mb-16 flex-grow">
              {tier.features.map(f => (
                <li key={f} className="flex items-center gap-4 text-zinc-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                  {f}
                </li>
              ))}
            </ul>

            <button className={`w-full py-5 rounded-full font-bold uppercase tracking-widest text-xs transition-all ${
              tier.featured ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-white/5 text-white hover:bg-white/10'
            }`}>
              {tier.price === 'Custom' ? 'Contact Engineers' : 'Initialize Pack'}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};