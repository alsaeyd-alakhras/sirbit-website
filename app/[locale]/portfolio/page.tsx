'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';
import FinalCTA from '@/components/sections/FinalCTA';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  const t = useTranslations('portfolioPage');
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: t('filters.all') },
    { id: 'web', label: t('filters.web') },
    { id: 'mobile', label: t('filters.mobile') },
    { id: 'wordpress', label: t('filters.wordpress') },
  ];

  // Mock project data
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      title: locale === 'ar' ? 'نظام إدارة متقدم' : 'Advanced Management System',
      category: 'web',
      description: locale === 'ar' ? 'نظام إدارة شامل للشركات مع لوحة تحكم تفاعلية' : 'Comprehensive management system with interactive dashboard',
      slug: 'project-1',
      technologies: ['Laravel', 'Vue.js', 'MySQL']
    },
    {
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      title: locale === 'ar' ? 'تطبيق موبايل تجاري' : 'E-Commerce Mobile App',
      category: 'mobile',
      description: locale === 'ar' ? 'تطبيق موبايل بأداء عالي للتجارة الإلكترونية' : 'High-performance mobile app for e-commerce',
      slug: 'project-2',
      technologies: ['Flutter', 'Firebase', 'REST API']
    },
    {
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      title: locale === 'ar' ? 'موقع شركة احترافي' : 'Professional Corporate Website',
      category: 'wordpress',
      description: locale === 'ar' ? 'موقع شركة احترافي مع نظام إدارة محتوى' : 'Professional corporate website with CMS',
      slug: 'project-3',
      technologies: ['WordPress', 'PHP', 'MySQL']
    },
    {
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      title: locale === 'ar' ? 'منصة تعليمية' : 'Learning Platform',
      category: 'web',
      description: locale === 'ar' ? 'منصة تعليمية متكاملة مع نظام دورات' : 'Complete learning platform with course system',
      slug: 'project-4',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      title: locale === 'ar' ? 'تطبيق توصيل' : 'Delivery App',
      category: 'mobile',
      description: locale === 'ar' ? 'تطبيق توصيل سريع مع تتبع فوري' : 'Fast delivery app with real-time tracking',
      slug: 'project-5',
      technologies: ['Flutter', 'Google Maps', 'Firebase']
    },
    {
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
      title: locale === 'ar' ? 'مدونة شخصية' : 'Personal Blog',
      category: 'wordpress',
      description: locale === 'ar' ? 'مدونة شخصية عصرية وسريعة' : 'Modern and fast personal blog',
      slug: 'project-6',
      technologies: ['WordPress', 'Elementor', 'WooCommerce']
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <section className="pt-32 pb-12">
        <Container>
          <SectionHeader title={t('title')} subtitle={t('description')} as="h1" />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#00AEEF] to-[#7B61FF] text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard 
                  {...project}
                  category={t(`filters.${project.category}`)}
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* SEO text section to avoid thin content */}
      <section className="pb-16">
        <Container>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
            {t('seoBody')}
          </p>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}

