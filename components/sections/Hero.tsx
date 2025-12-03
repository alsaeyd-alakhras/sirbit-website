'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const Hero = () => {
  const t = useTranslations('hero');
  const locale = useLocale();

  const scrollToPortfolio = () => {
    const el = document.getElementById('featured-work');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/10 via-transparent to-[#7B61FF]/10 pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: locale === 'ar' ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={locale === 'ar' ? 'lg:order-2' : ''}
          >
            {/* small badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r
                from-[#00AEEF]/10 to-[#7B61FF]/10 border border-[#00AEEF]/30 dark:border-[#00AEEF]/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#00AEEF]" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                {locale === 'ar'
                  ? 'حلول رقمية متكاملة'
                  : 'Integrated Digital Solutions'}
              </span>
            </motion.div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#00AEEF] to-[#7B61FF] bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>

            {/* description */}
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-8 leading-relaxed max-w-xl">
              {t('description')}
            </p>

            {/* buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                href={`/${locale}/contact`}
                variant="primary"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                {t('startProject')}
              </Button>

              <Button variant="secondary" onClick={scrollToPortfolio}>
                {t('viewWork')}
              </Button>
            </motion.div>
          </motion.div>

          {/* HERO IMAGE / Illustration */}
          <motion.div
            initial={{ opacity: 0, x: locale === 'ar' ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={locale === 'ar' ? 'lg:order-1 relative' : 'relative'}
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden">

              {/* ⚡ Optimized IMAGE */}
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=1200&auto=format&fit=crop&q=80"
                alt="Digital solutions and software services by Sirbit"
                fill
                priority     // LCP optimization
                decoding="async"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-3xl shadow-2xl"
              />

            </div>
          </motion.div>
        </div>
      </Container>

      {/* Small scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.3, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
