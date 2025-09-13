import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import {
  CpuChipIcon,
  ShieldCheckIcon,
  BoltIcon,
  GlobeAltIcon,
  CircleStackIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: CpuChipIcon,
    title: "Advanced AI Integration",
    description: "Cutting-edge machine learning algorithms that adapt and evolve with network usage patterns."
  },
  {
    icon: ShieldCheckIcon,
    title: "Quantum-Resistant Security",
    description: "Future-proof cryptographic protocols designed to withstand quantum computing threats."
  },
  {
    icon: BoltIcon,
    title: "Lightning Fast Transactions",
    description: "Process thousands of transactions per second with minimal energy consumption."
  },
  {
    icon: GlobeAltIcon,
    title: "Global Scalability",
    description: "Distributed architecture that scales globally while maintaining decentralization."
  },
  {
    icon: CircleStackIcon,
    title: "Smart Data Management",
    description: "Intelligent data compression and storage optimization through AI-driven algorithms."
  },
  {
    icon: UserGroupIcon,
    title: "Community Governance",
    description: "Decentralized decision-making powered by AI-assisted consensus mechanisms."
  }
];

const futureFeatures = [
  "AI-powered consensus mechanisms",
  "Self-healing network architecture",
  "Predictive network optimization",
  "Cross-chain compatibility"
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-bg/50 relative overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/80 via-brand-bg/60 to-transparent" />

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
            About GIA
          </h2>
          <p className="text-lg md:text-xl text-brand-secondary max-w-3xl mx-auto leading-relaxed">
            GIA (General Intelligence Architecture) represents the next evolution in blockchain technology,
            combining advanced artificial intelligence with decentralized systems to create a truly
            intelligent and adaptive cryptocurrency ecosystem.
          </p>
        </motion.div>

        {/* Portrait Video on Left Side */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-start">
            <div className="flex justify-center">
              <div className="relative w-fit">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-accent rounded-2xl blur-sm opacity-25 group-hover:opacity-75 transition duration-1000" />
                <div className="relative">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/about-style.mp4"
                    className="w-auto h-auto object-contain rounded-xl lg:h-[calc(2*24rem+2rem)] max-h-[800px]"
                    style={{ aspectRatio: '864/1280' }}
                  >
                    <source src="/about-style.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div>
              {/* Features Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-brand-cardbg/30 backdrop-blur-sm border border-brand-secondary/20 rounded-xl p-6
                               hover:border-brand-accent/50 transition-all duration-300 group h-full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    style={{ minHeight: '24rem' }}
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-full
                                    group-hover:bg-brand-accent/20 transition-colors duration-300 mb-4">
                      <feature.icon className="w-8 h-8 text-brand-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-brand-secondary">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Built for the Future Card - Video in second column */}
        <motion.div
          className="bg-gradient-to-r from-brand-accent/10 to-brand-secondary/10 rounded-2xl p-8 
                     border border-brand-accent/20 backdrop-blur-sm text-center lg:text-left"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className='justify-center mx-auto'>
              <h3 className="text-3xl font-bold text-gradient mb-4">
                Built for the Future
              </h3>
              <p className="text-brand-secondary mb-6">
                GIA is designed to revolutionize how artificial intelligence and blockchain technology work together.
              </p>
              <ul className="space-y-3 flex flex-col items-center lg:items-start">
                {futureFeatures.map((feature, index) => (
                  <motion.li
                    key={feature}
                    className="flex items-center text-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-brand-accent rounded-full mr-3" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="relative w-fit mx-auto mb-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-accent rounded-2xl blur-sm opacity-25 group-hover:opacity-75 transition duration-1000" />
                <div className="relative">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/feature-style.mp4"
                    className="w-[100%] h-auto max-w-xs max-h-48 object-contain rounded-xl max-h-[480px] mx-auto"
                    style={{ aspectRatio: '1280/864', maxWidth: '640px' }}
                  >
                    <source src="/feature-style.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative Hero Image Container */}
        <motion.div
          className="mt-16 relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-accent rounded-2xl blur-sm opacity-25 group-hover:opacity-75 transition duration-1000" />
          <div className="relative">
            <img
              src="/gia-heros-1280x853.jpg"
              alt="GIA Technology"
              className="w-full h-auto max-w-full object-cover rounded-xl"
              style={{ maxHeight: 'calc(853px * 0.66)' }}
            />
            {/* Learn More Button positioned at bottom */}
            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                variant="translucent"
                onClick={() => console.log('Learn more clicked')}
                className="min-w-[200px] opacity-80"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>
    </section>
  );
};