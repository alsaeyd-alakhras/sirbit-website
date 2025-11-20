import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  href: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  linkText,
  href,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`group p-8 rounded-2xl bg-white dark:bg-[#1A1C1F] shadow-lg hover:shadow-2xl border border-transparent hover:border-[#00AEEF]/30 dark:hover:border-[#7B61FF]/30 transition-all ${className}`}
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00AEEF] to-[#7B61FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <div className="text-white text-3xl">
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>
      
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-[#00AEEF] dark:text-[#7B61FF] font-semibold group-hover:gap-3 transition-all"
      >
        {linkText}
        <ArrowRight className="w-5 h-5" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;

