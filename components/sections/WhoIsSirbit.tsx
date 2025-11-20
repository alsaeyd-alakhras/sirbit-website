'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Target, Zap, Users } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';

const WhoIsSirbit = () => {
  const t = useTranslations('whoIsSirbit');
  const locale = useLocale();

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: locale === 'ar' ? 'رؤية واضحة' : 'Clear Vision',
      description: locale === 'ar' ? 'نسعى لتقديم حلول رقمية مبتكرة تحدث فرقًا حقيقيًا في عالم الأعمال' : 'We strive to deliver innovative digital solutions that make a real difference in the business world',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: locale === 'ar' ? 'تقنية متقدمة' : 'Advanced Technology',
      description: locale === 'ar' ? 'نستخدم أحدث التقنيات والأدوات لبناء منتجات عالية الجودة وسريعة الأداء' : 'We use the latest technologies and tools to build high-quality, high-performance products',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: locale === 'ar' ? 'فريق محترف' : 'Professional Team',
      description: locale === 'ar' ? 'فريق من المطورين والمصممين المحترفين الملتزمين بتحقيق رضا العملاء' : 'A team of professional developers and designers committed to achieving customer satisfaction',
    },
  ];

  return (
    <section className="py-20">
      <Container>
        <SectionHeader title={t('title')} subtitle={t('description')} />
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-white dark:bg-[#1A1C1F] shadow-md hover:shadow-2xl transition-all cursor-pointer border border-transparent hover:border-[#00AEEF]/30 dark:hover:border-[#7B61FF]/30"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#7B61FF] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhoIsSirbit;

