import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';
import { useWallet } from '../../hooks/useWallet';
import { MobileMenu } from './MobileMenu';

const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Whitepaper', href: '#whitepaper' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Join', href: '#join' },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { account, isConnected, isConnecting, connect, disconnect } = useWallet();

  const handleConnectWallet = async () => {
    if (isConnected) {
      await disconnect();
    } else {
      await connect();
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-blue-900 border-b border-blue-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <motion.div
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="/logo.png"
              alt="GIA Token"
              className="h-12 w-12 object-contain"
            />
          </motion.div>

          {/* Desktop Navigation - Middle */}
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-300 transition-colors font-semibold font-mono"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Connect Wallet Button - Right */}
          <div className="hidden md:block">
            <Button
              onClick={handleConnectWallet}
              disabled={isConnecting}
              variant="outline"
              className="min-w-[140px] font-mono font-semibold border-white text-white hover:bg-blue-800"
            >
              {isConnecting
                ? 'Connecting...'
                : isConnected && account
                ? formatAddress(account)
                : 'Connect Wallet'}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-300 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isConnected={isConnected}
        account={account}
        onConnectWallet={handleConnectWallet}
        isConnecting={isConnecting}
      />
    </motion.header>
  );
};