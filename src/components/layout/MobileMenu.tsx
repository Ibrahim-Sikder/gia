import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isConnected: boolean;
  account: string | null;
  onConnectWallet: () => void;
  isConnecting: boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  isConnected,
  account,
  onConnectWallet,
  isConnecting,
}) => {
  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  };

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Whitepaper', href: '#whitepaper' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Join Revolution', href: '#join' },
  ];

  return (
    <motion.div
      className="md:hidden bg-brand-bg border-t border-brand-secondary/20 overflow-hidden"
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      variants={menuVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="px-4 py-6 space-y-6 flex flex-col items-center">
        {navigationItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block text-white hover:text-brand-accent transition-colors text-center"
            onClick={onClose}
          >
            {item.name}
          </a>
        ))}
        
        <Button
          onClick={() => {
            onConnectWallet();
            onClose();
          }}
          disabled={isConnecting}
          variant="outline"
          className="w-full max-w-xs"
        >
          {isConnecting
            ? 'Connecting...'
            : isConnected && account
            ? formatAddress(account)
            : 'Connect Wallet'}
        </Button>
      </div>
    </motion.div>
  );
};