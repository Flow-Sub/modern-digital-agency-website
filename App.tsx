import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { TechStack } from './components/TechStack';
import { CaseStudies } from './components/CaseStudies';
import { FAQ } from './components/FAQ';
import { NetworkStats } from './components/NetworkStats';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { LabsPage } from './pages/LabsPage';
import { NetworkPage } from './pages/NetworkPage';
import { DocsPage } from './pages/DocsPage';
import { ContactPage } from './pages/ContactPage';
import { BlogsPage } from './pages/BlogsPage';
import { NewFooter } from './components/NewFooter';

const BackgroundGlows = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div 
      className="bg-glow-blob w-[700px] h-[700px] bg-indigo-600/30 top-[-15%] left-[-15%]" 
      style={{ animationDuration: '20s' }}
    />
    <div 
      className="bg-glow-blob w-[600px] h-[600px] bg-purple-600/20 bottom-[-15%] right-[-15%]" 
      style={{ animationDuration: '28s', animationDelay: '-4s' }}
    />
    <div 
      className="bg-glow-blob w-[500px] h-[500px] bg-blue-500/15 top-[35%] left-[55%]" 
      style={{ animationDuration: '32s', animationDelay: '-8s' }}
    />
  </div>
);

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'labs': return <LabsPage />;
      case 'network': return <NetworkPage />;
      case 'docs': return <DocsPage />;
      case 'blogs': return <BlogsPage />;
      case 'contact': return <ContactPage />;
      default: return (
        <>
          <Hero onCtaClick={() => setActivePage('contact')} />
          <div className="relative z-10 space-y-48 py-32">
            <section id="services"><ServicesGrid /></section>
            <section id="process"><Process /></section>
            <section id="case-studies"><CaseStudies /></section>
            <section id="tech"><TechStack /></section>
            <section id="network-stats"><NetworkStats /></section>
            <section id="testimonials"><Testimonials /></section>
            <section id="faq"><FAQ /></section>
            <section id="cta" className="max-w-7xl mx-auto px-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-panel rounded-[3rem] p-12 md:p-32 text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <h2 className="text-5xl md:text-8xl font-futuristic font-bold mb-8 tracking-tighter text-gradient leading-tight">
                    DECENTRALIZE <br /> EVERYTHING.
                  </h2>
                  <p className="text-zinc-500 text-lg md:text-2xl max-w-2xl mx-auto mb-16 font-light">
                    The next evolution of your enterprise starts with a single neural connection. 
                  </p>
                  <button 
                    onClick={() => setActivePage('contact')}
                    className="px-16 py-6 bg-white text-black rounded-full font-bold text-lg hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-indigo-500/40"
                  >
                    SYNC NOW
                  </button>
                </div>
              </motion.div>
            </section>
          </div>
        </>
      );
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-black overflow-x-hidden">
      <BackgroundGlows />
      <Navbar onNavigate={setActivePage} activePage={activePage} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.5 }}
          className="flex-grow flex flex-col relative z-10"
        >
          <main className="flex-grow">
            {renderPage()}
          </main>
          <NewFooter onNavigate={setActivePage} />
        </motion.div>
      </AnimatePresence>

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-20 mix-blend-overlay opacity-5 cyber-grid" />
    </div>
  );
};

export default App;