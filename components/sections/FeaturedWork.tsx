'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';
import Button from '@/components/ui/Button';

const FeaturedWork = () => {
  const t = useTranslations('featuredWork');
  const locale = useLocale();
  const [showAll, setShowAll] = useState(false);

  // Mock project data - replace with real data
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      title: locale === 'ar' ? 'نظام إدارة متقدم' : 'Advanced Management System',
      category: t('web'),
      description: locale === 'ar' ? 'نظام إدارة شامل للشركات مع لوحة تحكم تفاعلية' : 'Comprehensive management system with interactive dashboard',
      slug: 'project-1',
      technologies: ['Laravel', 'Vue.js', 'MySQL']
    },
    {
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      title: locale === 'ar' ? 'تطبيق موبايل تجاري' : 'E-Commerce Mobile App',
      category: t('mobile'),
      description: locale === 'ar' ? 'تطبيق موبايل بأداء عالي للتجارة الإلكترونية' : 'High-performance mobile app for e-commerce',
      slug: 'project-2',
      technologies: ['Flutter', 'Firebase', 'REST API']
    },
    {
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      title: locale === 'ar' ? 'موقع شركة احترافي' : 'Professional Corporate Website',
      category: t('wordpress'),
      description: locale === 'ar' ? 'موقع شركة احترافي مع نظام إدارة محتوى' : 'Professional corporate website with CMS',
      slug: 'project-3',
      technologies: ['WordPress', 'PHP', 'MySQL']
    },
    {
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      title: locale === 'ar' ? 'منصة تعليمية' : 'Learning Platform',
      category: t('web'),
      description: locale === 'ar' ? 'منصة تعليمية متكاملة مع نظام دورات' : 'Complete learning platform with course system',
      slug: 'project-4',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      title: locale === 'ar' ? 'تطبيق توصيل' : 'Delivery App',
      category: t('mobile'),
      description: locale === 'ar' ? 'تطبيق توصيل سريع مع تتبع فوري' : 'Fast delivery app with real-time tracking',
      slug: 'project-5',
      technologies: ['Flutter', 'Google Maps', 'Firebase']
    },
    {
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
      title: locale === 'ar' ? 'مدونة شخصية' : 'Personal Blog',
      category: t('wordpress'),
      description: locale === 'ar' ? 'مدونة شخصية عصرية وسريعة' : 'Modern and fast personal blog',
      slug: 'project-6',
      technologies: ['WordPress', 'Elementor', 'WooCommerce']
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="featured-work" className="py-20 bg-gray-50 dark:bg-[#0E0F11]">
      <Container>
        <SectionHeader title={t('title')} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="flex justify-center gap-4">
          {!showAll && projects.length > 3 && (
            <Button onClick={() => setShowAll(true)} variant="secondary">
              {locale === 'ar' ? 'تحميل المزيد' : 'Load More'}
            </Button>
          )}
          <Button href={`/${locale}/portfolio`} variant="primary" icon={<ArrowRight className="w-5 h-5" />}>
            {locale === 'ar' ? 'عرض جميع الأعمال' : 'View All Work'}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedWork;

