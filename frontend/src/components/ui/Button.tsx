import React from 'react';

/**
 * Button Component
 *
 * Reusable button with variant support.
 * Used throughout the app for consistent button styling.
 *
 * TODO: Implement with variants (primary, secondary, danger, ghost)
 * TODO: Add loading state, disabled state, icon support
 */

export default function Button({
  children,
  variant = 'primary',
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2';
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    ghost: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-400',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
}
