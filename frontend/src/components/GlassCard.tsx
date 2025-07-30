'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = '',
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`backdrop-blur-md bg-glass border border-white/10 rounded-xl shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_#8A2BE2] ${className}`}
    >
      {children}
    </motion.div>
  );
}
