'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const FinalCTA = () => {
  const t = useTranslations('cta');
  const locale = useLocale();

  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-r from-[#00AEEF] to-[#7B61FF] p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              {t('title')}
            </h2>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
              {t('description')}
            </p>
            <Button
              href={`/${locale}/contact`}
              variant="secondary"
              className="bg-white !text-[#00AEEF] hover:!bg-gray-100 hover:scale-105 border-0 shadow-xl"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              {t('button')}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FinalCTA;

