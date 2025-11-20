'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Eye, Target, Heart } from 'lucide-react';
import Container from '@/components/ui/Container';

const VisionMissionValues = () => {
  const t = useTranslations('aboutPage');

  const items = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: t('vision.title'),
      description: t('vision.description'),
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('mission.title'),
      description: t('mission.description'),
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('values.title'),
      description: t('values.description'),
    },
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white dark:bg-[#1A1C1F] shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00AEEF] to-[#7B61FF] flex items-center justify-center text-white mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default VisionMissionValues;

