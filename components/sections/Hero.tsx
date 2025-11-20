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
    const portfolioSection = document.getElementById('featured-work');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/10 via-transparent to-[#7B61FF]/10 pointer-events-none" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: locale === 'ar' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={locale === 'ar' ? 'lg:order-2' : ''}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00AEEF]/10 to-[#7B61FF]/10 border border-[#00AEEF]/30 dark:border-[#00AEEF]/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#00AEEF] dark:text-[#00AEEF]" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                {locale === 'ar' ? 'حلول رقمية متكاملة' : 'Integrated Digital Solutions'}
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#00AEEF] to-[#7B61FF] bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
              {t('description')}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button href={`/${locale}/contact`} variant="primary" icon={<ArrowRight className="w-5 h-5" />}>
                {t('startProject')}
              </Button>
              <Button onClick={scrollToPortfolio} variant="secondary">
                {t('viewWork')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: locale === 'ar' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className={`relative ${locale === 'ar' ? 'lg:order-1' : ''}`}
          >
            <div className="relative w-full aspect-square">
              {/* Animated Background Circles */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/20 to-[#7B61FF]/20 rounded-full blur-3xl"
              />
              
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-10 bg-gradient-to-tl from-[#29C6B7]/20 to-transparent rounded-full blur-2xl"
              />

              {/* Hero Infographic */}
              <div className="relative z-10 w-full h-full">
                <Image 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=600&fit=crop" 
                  alt="Digital Solutions"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-3xl shadow-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

