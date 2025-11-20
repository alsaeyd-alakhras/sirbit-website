import React from 'react';
import { motion } from 'framer-motion';

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const IconCard: React.FC<IconCardProps> = ({
  icon,
  title,
  description,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`p-6 rounded-2xl bg-white dark:bg-[#1A1C1F] shadow-md hover:shadow-xl transition-all ${className}`}
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#7B61FF] flex items-center justify-center mb-4">
        <div className="text-white text-2xl">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </motion.div>
  );
};

export default IconCard;

