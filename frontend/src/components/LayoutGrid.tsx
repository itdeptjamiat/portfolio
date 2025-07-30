import React from 'react';

interface LayoutGridProps {
  children: React.ReactNode;
  className?: string;
}

export default function LayoutGrid({
  children,
  className = '',
}: LayoutGridProps) {
  return (
    <div className='max-w-7xl mx-auto px-6 py-8'>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
