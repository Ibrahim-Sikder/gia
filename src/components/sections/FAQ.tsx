import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqItems = [
  {
    question: "What is GIA and how does it work?",
    answer: "GIA (General Intelligence Architecture) is a revolutionary blockchain platform that integrates advanced AI algorithms directly into the consensus mechanism. Our network uses machine learning to optimize transaction processing, predict network congestion, and automatically adjust parameters for maximum efficiency."
  },
  {
    question: "How is GIA different from other cryptocurrencies?",
    answer: "Unlike traditional cryptocurrencies, GIA incorporates artificial intelligence at the protocol level. This means our network gets smarter over time, automatically optimizing for speed, security, and energy efficiency. We also offer quantum-resistant security and cross-chain compatibility out of the box."
  },
  {
    question: "What can I do with GIA tokens?",
    answer: "GIA tokens serve multiple purposes: network governance voting, staking for rewards, paying transaction fees, accessing premium AI services, and participating in our decentralized AI marketplace where users can buy and sell AI models and computational resources."
  },
  {
    question: "Is GIA environmentally friendly?",
    answer: "Yes! GIA uses an AI-optimized Proof-of-Stake consensus mechanism that consumes 99.9% less energy than traditional Proof-of-Work systems. Our AI algorithms continuously optimize energy usage across the network, making GIA one of the most sustainable blockchain platforms available."
  },
  {
    question: "How can I participate in the GIA ecosystem?",
    answer: "You can participate by joining our testnet, becoming a validator through staking, contributing to our open-source development, participating in governance votes, or building applications on our platform. We also have a bug bounty program and developer grants available."
  },
  {
    question: "What wallets support GIA?",
    answer: "GIA will be compatible with all major Ethereum wallets including MetaMask, Trust Wallet, and Ledger hardware wallets. We're also developing our own native wallet with advanced AI features for portfolio optimization and predictive analytics."
  },
  {
    question: "When will the mainnet launch?",
    answer: "Our mainnet is scheduled to launch in Q2 2024. We're currently in the final stages of security audits and testnet optimization. Join our community to stay updated on the exact launch date and participate in our final testing phases."
  },
  {
    question: "How secure is the GIA network?",
    answer: "GIA implements quantum-resistant cryptography, multi-layered security protocols, and AI-powered threat detection. Our network continuously monitors for suspicious activity and can automatically implement protective measures. We've also completed multiple security audits with leading blockchain security firms."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-bg/50 relative overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-brand-bg/70 to-brand-bg/80" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Decorative Image */}
          <motion.div
            className="hidden lg:block lg:sticky lg:top-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-brand-secondary rounded-xl blur opacity-30" />
              <div className="relative bg-brand-bg/30 backdrop-blur-sm rounded-lg overflow-hidden">
                <img 
                  src="/gia-heros-portrait-853x1280.jpg" 
                  alt="GIA Portrait" 
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/20 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - FAQ Content */}
          <div className="lg:col-span-2">
            {/* Section Header */}
            <motion.div
              className="text-center lg:text-left mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl text-gradient mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-xl text-brand-secondary max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Get answers to the most common questions about GIA and our revolutionary 
                AI-powered blockchain technology.
              </p>
            </motion.div>

            {/* FAQ Items */}
            <div className="space-y-4 mb-12">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-brand-cardbg/30 backdrop-blur-sm border border-brand-secondary/20 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-brand-bg/50 
                               transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-semibold text-white">{item.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDownIcon className="w-5 h-5 text-brand-accent" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-brand-secondary leading-relaxed">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Contact Links */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-brand-secondary mb-6">Still have questions? We're here to help.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-brand-button text-brand-dark rounded-lg font-semibold 
                           hover:bg-white/90 transition-colors duration-200 text-center"
                >
                  Join our Discord →
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-brand-accent text-brand-accent rounded-lg 
                           font-semibold hover:bg-brand-accent/10 transition-colors duration-200 text-center"
                >
                  Join Our Telegram →
                </a>
                <a
                  href="/#"
                  className="px-6 py-3 border border-brand-secondary text-brand-secondary rounded-lg 
                           font-semibold hover:bg-brand-secondary/10 transition-colors duration-200 text-center"
                >
                  Contact Support →
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-brand-accent/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>
    </section>
  );
};