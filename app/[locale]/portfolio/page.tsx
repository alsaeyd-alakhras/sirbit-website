'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';
import FinalCTA from '@/components/sections/FinalCTA';
import { motion } from 'framer-motion';
import { projects, getProjectsByCategory } from '@/data/portfolio';
import { portfolioFilters } from '@/data/filters';

export default function PortfolioPage() {
  const t = useTranslations('portfolioPage');
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = portfolioFilters.map(filter => ({
    id: filter.id,
    label: t(filter.labelKey.replace('portfolioPage.', '')),
  }));

  const allProjects = projects.map(project => ({
    ...project,
    title: locale === 'ar' ? project.titleAr : project.titleEn,
    description: locale === 'ar' ? project.descriptionAr : project.descriptionEn,
  }));

  const filteredProjects = getProjectsByCategory(activeFilter).map(project => ({
    ...project,
    title: locale === 'ar' ? project.titleAr : project.titleEn,
    description: locale === 'ar' ? project.descriptionAr : project.descriptionEn,
  }));

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
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${activeFilter === filter.id
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

