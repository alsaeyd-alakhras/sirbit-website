'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Code2, Zap, Palette, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';

const WhySirbit = () => {
  const t = useTranslations('whySirbit');
  const locale = useLocale();

  const reasons = [
    {
      icon: <Code2 className="w-7 h-7" />,
      title: t('cleanCode'),
      description: locale === 'ar' ? 'نكتب كود نظيف ومنظم يسهل صيانته وتطويره مستقبلاً' : 'We write clean, organized code that is easy to maintain and develop in the future',
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: t('highPerformance'),
      description: locale === 'ar' ? 'نضمن أداء عالي وسرعة تحميل ممتازة لجميع مشاريعنا' : 'We guarantee high performance and excellent loading speed for all our projects',
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: t('modernUI'),
      description: locale === 'ar' ? 'تصاميم عصرية وجذابة مع تجربة مستخدم سلسة' : 'Modern and attractive designs with smooth user experience',
    },
    {
      icon: <CheckCircle2 className="w-7 h-7" />,
      title: t('fullExperience'),
      description: locale === 'ar' ? 'نرافقك من الفكرة إلى الإطلاق مع دعم شامل' : 'We accompany you from idea to launch with comprehensive support',
    },
  ];

  return (
    <section className="py-20">
      <Container>
        <SectionHeader title={t('title')} />
        
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-[#00AEEF]/5 to-[#7B61FF]/5 border-2 border-[#00AEEF]/20 dark:border-[#7B61FF]/20 hover:border-[#00AEEF] dark:hover:border-[#7B61FF] hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00AEEF] to-[#7B61FF] flex items-center justify-center text-white flex-shrink-0 group-hover:shadow-lg transition-shadow"
                >
                  {reason.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhySirbit;

