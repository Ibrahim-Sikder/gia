import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { CheckIcon } from '@heroicons/react/24/outline';

const benefits = [
  "Early Access",
  "Exclusive Updates", 
  "Priority Support"
];

export const JoinRevolution: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Email submitted:', email);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  return (
    <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Video with Fallback */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-video-background-1920x1080-cover.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectFit: 'cover' }}
      >
        <source src="/hero-video-background-1920x1080-cover.mp4" type="video/mp4" />
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-brand-bg/70 to-brand-bg/80" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-gradient mb-6">
            Join the Revolution
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
            Be among the first to experience the future of AI-powered blockchain technology. 
            Get exclusive access to early features, airdrops, and updates.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-brand-cardbg/70 border border-brand-secondary/20 rounded-lg 
                           text-white placeholder-brand-secondary focus:border-brand-accent 
                           focus:outline-none transition-colors duration-200"
                required
              />
              <Button
                type="submit"
                size="lg"
                variant="translucent"
                disabled={isLoading}
                className="min-w-[150px]"
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </div>
          </form>

          {/* Benefits */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckIcon className="w-5 h-5 text-brand-accent mr-2" />
                  <span className="text-white font-semibold">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-sm text-white/80">
            By joining our waitlist, you agree to receive updates about GIA. 
            We respect your privacy and you can unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};