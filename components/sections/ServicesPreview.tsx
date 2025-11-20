'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Code, Smartphone, Layers } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import ServiceCard from '@/components/ui/ServiceCard';

const ServicesPreview = () => {
  const t = useTranslations('services');
  const locale = useLocale();

  const services = [
    {
      icon: <Code />,
      title: t('web.title'),
      description: t('web.description'),
      linkText: t('web.learnMore'),
      href: `/${locale}/services#web-development`,
    },
    {
      icon: <Smartphone />,
      title: t('mobile.title'),
      description: t('mobile.description'),
      linkText: t('mobile.learnMore'),
      href: `/${locale}/services#mobile-development`,
    },
    {
      icon: <Layers />,
      title: t('wordpress.title'),
      description: t('wordpress.description'),
      linkText: t('wordpress.learnMore'),
      href: `/${locale}/services#wordpress-development`,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0E0F11]">
      <Container>
        <SectionHeader title={t('title')} subtitle={t('description')} />
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesPreview;

