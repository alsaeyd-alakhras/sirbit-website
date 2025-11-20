'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, BarChart3, Palette, Code2, TestTube, Rocket } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';

const HowWeWork = () => {
  const t = useTranslations('aboutPage.howWeWork');

  const steps = [
    { icon: <Search className="w-6 h-6" />, title: t('discovery') },
    { icon: <BarChart3 className="w-6 h-6" />, title: t('analysis') },
    { icon: <Palette className="w-6 h-6" />, title: t('design') },
    { icon: <Code2 className="w-6 h-6" />, title: t('development') },
    { icon: <TestTube className="w-6 h-6" />, title: t('testing') },
    { icon: <Rocket className="w-6 h-6" />, title: t('delivery') },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0E0F11]">
      <Container>
        <SectionHeader title={t('title')} />

        {/* Desktop - Horizontal */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#7B61FF] flex items-center justify-center text-white shadow-lg">
                  {step.icon}
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                  {step.title}
                </span>
              </motion.div>
              
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  className="flex-1 h-0.5 bg-gradient-to-r from-[#00AEEF] to-[#7B61FF] origin-left"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile - Vertical */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#7B61FF] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                {step.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowWeWork;

