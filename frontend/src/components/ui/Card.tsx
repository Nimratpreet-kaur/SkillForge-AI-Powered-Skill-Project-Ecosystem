import React from 'react';

/**
 * Card Component
 *
 * Reusable card container for content sections.
 *
 * TODO: Add variants (elevated, outlined, flat)
 * TODO: Add header/footer sections
 */

export default function Card({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
