import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Badge from './Badge';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  slug: string;
  technologies?: string[];
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  category,
  description,
  slug,
  technologies = [],
  className = '',
}) => {
  const locale = useLocale();
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-white dark:bg-[#1A1C1F] ${className}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
          <Link
            href={`/${locale}/portfolio/${slug}`}
            className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            {locale === 'ar' ? 'عرض التفاصيل' : 'View Details'}
          </Link>
        </div>
      </div>
      
      <div className="p-6">
        <Badge text={category} className="mb-3" />
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-400 line-clamp-2 mb-3">
          {description}
        </p>
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

