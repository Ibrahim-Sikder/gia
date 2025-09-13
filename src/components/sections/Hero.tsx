import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { SocialLinks } from '../ui/SocialLinks';
import { useTypingAnimation } from '../../hooks/useTypingAnimation';

export const Hero: React.FC = () => {
  const subtitle = "Revolutionary AI-powered blockchain technology that transforms how we interact with decentralized systems. Join the next generation of intelligent cryptocurrency.";
  const { displayText } = useTypingAnimation(subtitle, 30);

  return (
    <section className="min-h-screen flex items-end justify-start relative overflow-hidden bg-brand-bg">
      {/* Background Video with Fallback */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-first.mp4"
        className="absolute inset-0 w-full h-full object-cover object-top"
      >
        <source src="/hero-first.mp4" type="video/mp4" />
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-brand-bg/60 to-transparent" />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 w-full">
        <div className="flex flex-col items-center h-full lg:w-1/2 mx-auto">
          {/* Single Column - Text Content */}
          <motion.div
            className="text-center max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Title */}
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gradient">The Future of</span>
              <br />
              <span className="text-gradient">Artificial Intelligence</span>
            </motion.h1>

            {/* Animated Subtitle with Typing Effect */}
            <motion.div
              className="max-w-2xl mb-8 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-lg md:text-xl text-brand-secondary leading-relaxed">
                {displayText}
                <motion.span
                  className="inline-block w-1 h-6 bg-brand-accent ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Button
                size="lg"
                variant="translucent"
                onClick={() => console.log('Join waitlist clicked')}
                className="min-w-[200px]"
              >
                Join Our Waitlist
              </Button>
              <Button
                size="lg"
                variant="translucent"
                onClick={() => console.log('Download whitepaper clicked')}
                className="min-w-[200px]"
              >
                Download Whitepaper
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};