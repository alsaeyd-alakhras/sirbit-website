import React from 'react';

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, className = '' }) => {
  const getCategoryColor = (category: string) => {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes('web') || lowerCategory.includes('ويب')) {
      return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
    }
    if (lowerCategory.includes('mobile') || lowerCategory.includes('موبايل')) {
      return 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400';
    }
    if (lowerCategory.includes('wordpress')) {
      return 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400';
    }
    return 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400';
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(text)} ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;

