import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import {
  CpuChipIcon,
  ShieldCheckIcon,
  ArrowsRightLeftIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

const whitepaperSections = [
  {
    number: "01",
    title: "Executive Summary",
    description: "Overview of GIA's revolutionary approach to AI-powered blockchain technology."
  },
  {
    number: "02",
    title: "Technical Architecture",
    description: "Deep dive into our novel consensus mechanism and AI integration."
  },
  {
    number: "03",
    title: "Economic Model",
    description: "Tokenomics, staking rewards, and governance structure analysis."
  },
  {
    number: "04",
    title: "Use Cases & Applications",
    description: "Real-world applications and potential industry transformations."
  },
  {
    number: "05",
    title: "Roadmap & Implementation",
    description: "Development phases, milestones, and timeline for full deployment."
  },
  {
    number: "06",
    title: "Security & Audits",
    description: "Comprehensive security analysis and third-party audit results."
  }
];

const keyHighlights = [
  {
    icon: CpuChipIcon,
    title: "Revolutionary Consensus",
    description: "AI-powered Proof-of-Intelligence mechanism"
  },
  {
    icon: ShieldCheckIcon,
    title: "Quantum Resistance",
    description: "Future-proof cryptographic protocols"
  },
  {
    icon: ArrowsRightLeftIcon,
    title: "Cross-Chain Interoperability",
    description: "Seamless integration with existing blockchains"
  },
  {
    icon: BoltIcon,
    title: "Energy Efficiency",
    description: "99.9% reduction in energy consumption"
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Self-Healing Network",
    description: "Autonomous optimization and recovery"
  },
  {
    icon: CodeBracketIcon,
    title: "Developer Ecosystem",
    description: "Comprehensive tools and documentation"
  }
];

export const Whitepaper: React.FC = () => {
  return (
    <section id="whitepaper" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Video with Fallback */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-video-background-1920x1080-cover.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video-background-1920x1080-cover.mp4" type="video/mp4" />
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/90 via-brand-bg/80 to-brand-bg/90" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-gradient mb-6">
            GIA Whitepaper
          </h2>
          <p className="text-lg md:text-xl text-brand-secondary max-w-3xl mx-auto leading-relaxed mb-8">
            Dive deep into the technical specifications, economic model, and revolutionary 
            architecture that powers the GIA ecosystem. A comprehensive guide to the future 
            of AI-blockchain integration.
          </p>
          <Button
            size="lg"
            variant="translucent"
            onClick={() => console.log('Download whitepaper clicked')}
            className="min-w-[250px]"
          >
            Download Full Whitepaper
          </Button>
        </motion.div>

        {/* Whitepaper Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {whitepaperSections.map((section, index) => (
            <motion.div
              key={section.number}
              className="bg-brand-cardbg/40 backdrop-blur-sm border border-brand-secondary/20 rounded-xl p-6 
                         hover:border-brand-accent/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-3xl font-bold text-brand-accent mb-3">
                {section.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{section.title}</h3>
              <p className="text-brand-secondary text-sm">{section.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Highlights Card */}
        <motion.div
          className="bg-gradient-to-r from-brand-secondary/10 to-brand-accent/10 rounded-2xl p-8 
                     border border-brand-secondary/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <div className=' flex flex-col items-center lg:items-start'>
              <h3 className="text-3xl font-bold text-gradient mb-6 text-center lg:text-left">Key Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <highlight.icon className="w-6 h-6 text-brand-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold">{highlight.title}</h4>
                      <p className="text-brand-secondary text-sm">{highlight.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                className="relative w-fit mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Glow effect properly fitted to video */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-accent rounded-2xl blur-sm opacity-25 group-hover:opacity-75 transition duration-1000" />
                
                {/* Video with Fallback */}
                <div className="relative">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/gia-heros-presentation-1280x864.jpg"
                    className="w-auto h-auto max-w-full max-h-[480px] object-contain rounded-xl"
                    style={{ aspectRatio: '1280/864' }}
                  >
                    <source src="/gia-heros-presentation-1280x864.mp4" type="video/mp4" />
                  </video>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};