import React from 'react';
import { motion } from 'framer-motion';
import { SocialLinks } from '../ui/SocialLinks';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const footerSections = {
    product: {
      title: 'Product',
      links: [
        { name: 'Token', href: '#token' },
        { name: 'Features', href: '#features' },
        { name: 'Roadmap', href: '#roadmap' },
        { name: 'Whitepaper', href: '#whitepaper' },
      ]
    },
    community: {
      title: 'Community',
      links: [
        { name: 'Discord', href: 'https://discord.gg' },
        { name: 'Twitter', href: 'https://x.com' },
        { name: 'Telegram', href: 'https://t.me' },
        { name: 'Blog', href: '#blog' },
      ]
    },
    developers: {
      title: 'Developers',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'GitHub', href: '#github' },
        { name: 'API Reference', href: '#api' },
        { name: 'Smart Contracts', href: '#contracts' },
      ]
    }
  };

  return (
    <footer className={`bg-brand-dark/50 border-t border-brand-secondary/20 py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GIA Description - Centered */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-4">
            <img
              src="/logo.png"
              alt="GIA Token"
              className="h-20 w-20 object-contain opacity-90"
            />
          </div>
          <p className="text-brand-secondary max-w-2xl mx-auto leading-relaxed">
            The next evolution in blockchain technology, combining advanced artificial intelligence with decentralized systems for a truly intelligent cryptocurrency ecosystem.
          </p>
          
          <div className="mt-6 max-w-md mx-auto">
            <p className="text-white mb-3">Stay Updated</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-brand-cardbg border border-brand-secondary rounded-lg text-white placeholder-brand-secondary focus:outline-none focus:border-brand-accent"
              />
              <button className="px-4 py-2 bg-brand-button text-brand-dark rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Product, Community, Developers Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {Object.entries(footerSections).map(([key, section], index) => (
            <motion.div
              key={key}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-brand-secondary hover:text-brand-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <SocialLinks className="mt-8" />
        </motion.div>

        {/* Copyright - Updated to 2025 */}
        <motion.div
          className="text-center mt-8 text-brand-secondary text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p>&copy; 2025 GIA Token. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};