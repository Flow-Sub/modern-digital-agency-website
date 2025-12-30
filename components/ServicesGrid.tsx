import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Zap, 
  Award,
  ArrowRight,
  Quote,
  Rocket,
  Target,
  CheckCircle2
} from 'lucide-react';

// Success Stories Data
const successStories = [
  {
    id: 1,
    client: "TechFlow Finance",
    logo: "TF",
    industry: "FinTech",
    challenge: "Manual customer support handling 2000+ daily queries",
    solution: "AI Voice Agent + Custom Chatbot",
    results: [
      { metric: "94%", label: "Queries Automated" },
      { metric: "2.3M", label: "Annual Savings" },
      { metric: "24/7", label: "Availability" }
    ],
    testimonial: "Flow transformed our customer experience. What took 50 agents now runs autonomously.",
    author: "Sarah Chen",
    role: "CTO",
    color: "indigo"
  },
  {
    id: 2,
    client: "MedCare Plus",
    logo: "M+",
    industry: "Healthcare",
    challenge: "Appointment scheduling bottleneck causing patient drop-off",
    solution: "Voice AI + Automation Pipeline",
    results: [
      { metric: "340%", label: "Booking Increase" },
      { metric: "12sec", label: "Avg Response" },
      { metric: "99.2%", label: "Accuracy" }
    ],
    testimonial: "Patient satisfaction scores hit all-time highs after implementing Flow's voice agents.",
    author: "Dr. James Wilson",
    role: "Operations Director",
    color: "emerald"
  },
  {
    id: 3,
    client: "ShipFast Logistics",
    logo: "SF",
    industry: "Logistics",
    challenge: "Real-time tracking queries overwhelming support team",
    solution: "Multi-channel Bot + Dashboard",
    results: [
      { metric: "50K+", label: "Daily Queries" },
      { metric: "89%", label: "Cost Reduction" },
      { metric: "<1s", label: "Response Time" }
    ],
    testimonial: "We scaled 10x without adding a single support agent. The ROI was immediate.",
    author: "Mike Torres",
    role: "VP Engineering",
    color: "amber"
  }
];

// Overall Stats
const impactStats = [
  { value: "150+", label: "Projects Delivered", icon: Rocket },
  { value: "$47M", label: "Client Revenue Generated", icon: TrendingUp },
  { value: "12M+", label: "AI Interactions/Month", icon: Zap },
  { value: "99.9%", label: "Uptime Guaranteed", icon: Target }
];

// Timeline milestones
const milestones = [
  { year: "2021", title: "Founded", desc: "Started with a vision to democratize AI" },
  { year: "2022", title: "First Enterprise Client", desc: "Deployed AI for Fortune 500 company" },
  { year: "2023", title: "Voice AI Launch", desc: "Introduced human-grade voice agents" },
  { year: "2024", title: "Global Expansion", desc: "Serving clients in 30+ countries" },
  { year: "2025", title: "AI Agents 2.0", desc: "Next-gen autonomous reasoning systems" }
];

// Animated Counter Component
const AnimatedCounter: React.FC<{ value: string; duration?: number }> = ({ value, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    const numericPart = value.replace(/[^0-9.]/g, '');
    const suffix = value.replace(/[0-9.]/g, '');
    const target = parseFloat(numericPart);
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current) + suffix);
      }
    }, (duration * 1000) / steps);
    
    return () => clearInterval(timer);
  }, [value, duration]);
  
  return <span>{displayValue}</span>;
};

// Color classes helper
const getColorClasses = (color: string): string => {
  const colors: Record<string, string> = {
    indigo: "from-indigo-600 to-blue-600",
    emerald: "from-emerald-600 to-teal-600",
    amber: "from-amber-500 to-orange-500"
  };
  return colors[color] || colors.indigo;
};

// Story Card Component
const StoryCard: React.FC<{ 
  story: typeof successStories[0]; 
  isActive: boolean; 
  onClick: () => void 
}> = ({ story, isActive, onClick }) => {
  const colorClass = getColorClasses(story.color);

  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-500 ${isActive ? 'z-10' : 'z-0'}`}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
    >
      <div className={`
        relative overflow-hidden rounded-[2rem] border transition-all duration-500
        ${isActive 
          ? 'border-white/20 bg-white/5' 
          : 'border-white/5 bg-white/[0.02] hover:border-white/10'
        }
      `}>
        <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 ${isActive ? 'opacity-10' : ''} transition-opacity`} />
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center text-white font-bold text-lg`}>
                {story.logo}
              </div>
              <div>
                <h4 className="font-futuristic font-bold text-xl">{story.client}</h4>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">{story.industry}</span>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${colorClass} text-xs font-bold text-white`}>
              Success Story
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {story.results.map((result, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-white/5">
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${colorClass} bg-clip-text text-transparent`}>
                  {result.metric}
                </div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">
                  {result.label}
                </div>
              </div>
            ))}
          </div>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                    <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                      <Target className="w-3 h-3" />
                      Challenge
                    </div>
                    <p className="text-zinc-400 text-sm">{story.challenge}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                    <div className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-wider mb-2">
                      <CheckCircle2 className="w-3 h-3" />
                      Solution
                    </div>
                    <p className="text-zinc-400 text-sm">{story.solution}</p>
                  </div>
                </div>

                <div className="relative p-6 rounded-xl bg-white/5 border border-white/10">
                  <Quote className="absolute top-4 left-4 w-8 h-8 text-white/10" />
                  <p className="text-zinc-300 italic pl-8 mb-4">"{story.testimonial}"</p>
                  <div className="flex items-center gap-3 pl-8">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-xs font-bold">
                      {story.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{story.author}</div>
                      <div className="text-xs text-zinc-500">{story.role}, {story.client}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-center mt-6">
            <motion.div
              animate={{ rotate: isActive ? 90 : 0 }}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// MAIN COMPONENT - Keep the same export name!
export const ServicesGrid: React.FC = () => {
  const [activeStory, setActiveStory] = useState<number>(1);
  const [activeYear, setActiveYear] = useState<number>(4);

  return (
    <div className="relative max-w-7xl mx-auto px-6 py-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      {/* SECTION 1: Impact Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative mb-32"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
          >
            <Award className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Our Impact</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-futuristic font-bold tracking-tighter mb-6">
            <span className="text-white">Building the</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future of Business
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                </div>

                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold font-futuristic mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* SECTION 2: Success Stories */}
            {/* SECTION 2: Success Stories - NEW MODERN DESIGN */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative mb-32"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-indigo-500 mb-4">
            Case Studies
          </h3>
          <h4 className="text-3xl md:text-5xl font-futuristic font-bold tracking-tighter">
            Client Success Stories
          </h4>
        </div>

        {/* Main Container - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Story Selector Tabs */}
          <div className="lg:col-span-4 flex lg:flex-col gap-3">
            {successStories.map((story, index) => {
              const colorClass = getColorClasses(story.color);
              const isActive = activeStory === story.id;
              
              return (
                <motion.div
                  key={story.id}
                  onClick={() => setActiveStory(story.id)}
                  className={`
                    relative cursor-pointer p-5 rounded-2xl border transition-all duration-500 flex-1 lg:flex-none
                    ${isActive 
                      ? 'bg-white/10 border-white/20 shadow-[0_0_30px_rgba(99,102,241,0.2)]' 
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/5 hover:border-white/10'
                    }
                  `}
                  whileHover={{ x: isActive ? 0 : 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Active Indicator Line */}
                  <motion.div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full bg-gradient-to-b ${colorClass}`}
                    initial={{ height: 0 }}
                    animate={{ height: isActive ? '60%' : '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="flex items-center gap-4 pl-3">
                    {/* Logo */}
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm
                      ${isActive ? `bg-gradient-to-br ${colorClass}` : 'bg-white/10'}
                    `}>
                      {story.logo}
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h5 className={`font-bold truncate ${isActive ? 'text-white' : 'text-zinc-400'}`}>
                        {story.client}
                      </h5>
                      <p className="text-xs text-zinc-500">{story.industry}</p>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      animate={{ x: isActive ? 5 : 0, opacity: isActive ? 1 : 0.3 }}
                      className="text-zinc-400"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Featured Story Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {successStories.filter(s => s.id === activeStory).map(story => {
                const colorClass = getColorClasses(story.color);
                
                return (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative h-full"
                  >
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent h-full">
                      
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-5`} />
                      
                      {/* Decorative Circles */}
                      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl" />
                      <div className={`absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br ${colorClass} opacity-10 rounded-full blur-3xl`} />

                      <div className="relative p-8 md:p-10">
                        
                        {/* Top: Badge & Industry */}
                        <div className="flex items-center justify-between mb-8">
                          <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${colorClass} text-xs font-bold text-white inline-flex items-center gap-2`}>
                            <CheckCircle2 className="w-3 h-3" />
                            Verified Success
                          </div>
                          <span className="text-zinc-500 text-sm">{story.industry}</span>
                        </div>

                        {/* Client Name - Large */}
                        <h3 className="text-4xl md:text-5xl font-futuristic font-bold mb-6">
                          {story.client}
                        </h3>

                        {/* Metrics - Horizontal Bars Style */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          {story.results.map((result, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="relative"
                            >
                              <div className="text-3xl md:text-4xl font-bold font-futuristic mb-1">
                                <span className={`bg-gradient-to-r ${colorClass} bg-clip-text text-transparent`}>
                                  {result.metric}
                                </span>
                              </div>
                              <div className="text-xs text-zinc-500 uppercase tracking-wider">
                                {result.label}
                              </div>
                              {/* Animated underline */}
                              <motion.div 
                                className={`h-[2px] bg-gradient-to-r ${colorClass} mt-3 rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                              />
                            </motion.div>
                          ))}
                        </div>

                        {/* Challenge & Solution - Side by Side */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                          <div className="p-5 rounded-xl bg-black/30 border border-red-500/20">
                            <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
                              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                              Challenge
                            </div>
                            <p className="text-zinc-300 text-sm leading-relaxed">{story.challenge}</p>
                          </div>
                          <div className="p-5 rounded-xl bg-black/30 border border-green-500/20">
                            <div className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-wider mb-3">
                              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                              Solution
                            </div>
                            <p className="text-zinc-300 text-sm leading-relaxed">{story.solution}</p>
                          </div>
                        </div>

                        {/* Testimonial - Modern Quote */}
                        <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10">
                          <div className="absolute -top-3 left-6">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center`}>
                              <Quote className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          <p className="text-lg text-white/90 italic leading-relaxed mt-2 mb-6">
                            "{story.testimonial}"
                          </p>
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center text-white font-bold`}>
                              {story.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="font-bold text-white">{story.author}</div>
                              <div className="text-sm text-zinc-400">{story.role}</div>
                            </div>
                            <div className="ml-auto hidden md:flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.5 + i * 0.1 }}
                                  className="text-yellow-500"
                                >
                                  ★
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {successStories.map((story) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(story.id)}
              className={`
                transition-all duration-300 rounded-full
                ${activeStory === story.id 
                  ? 'w-8 h-2 bg-indigo-500' 
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }
              `}
            />
          ))}
        </div>
      </motion.div>

      {/* SECTION 3: Journey Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="text-center mb-16">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-indigo-500 mb-4">
            Our Journey
          </h3>
          <h4 className="text-3xl md:text-5xl font-futuristic font-bold tracking-tighter">
            From Vision to Reality
          </h4>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />
          
          <motion.div 
            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-indigo-600 to-purple-600 -translate-y-1/2"
            initial={{ width: '0%' }}
            whileInView={{ width: `${(activeYear + 1) * 20}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          <div className="relative flex justify-between">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                onClick={() => setActiveYear(i)}
                className="relative cursor-pointer group"
              >
                <div className={`
                  relative z-10 w-6 h-6 rounded-full border-2 transition-all duration-300 mx-auto mb-4
                  ${i <= activeYear 
                    ? 'bg-indigo-600 border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.5)]' 
                    : 'bg-black border-white/20 group-hover:border-white/40'
                  }
                `}>
                  {i <= activeYear && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-1 bg-white rounded-full"
                    />
                  )}
                </div>

                <div className={`
                  text-center transition-all duration-300 w-24 md:w-32
                  ${i === activeYear ? 'opacity-100' : 'opacity-50 group-hover:opacity-80'}
                `}>
                  <div className={`
                    text-2xl md:text-3xl font-bold font-futuristic mb-2
                    ${i <= activeYear ? 'text-white' : 'text-zinc-600'}
                  `}>
                    {milestone.year}
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${i <= activeYear ? 'text-indigo-400' : 'text-zinc-600'}`}>
                    {milestone.title}
                  </div>
                  <div className="text-[10px] text-zinc-500 hidden md:block">
                    {milestone.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          key={activeYear}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="p-8 rounded-[2rem] bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border border-indigo-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">{milestones[activeYear].year}</div>
                <div className="text-indigo-400 font-bold">{milestones[activeYear].title}</div>
              </div>
            </div>
            <p className="text-zinc-400">{milestones[activeYear].desc}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <p className="text-zinc-500 mb-6">Ready to write your success story?</p>
        <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all">
          Start Your Journey
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};