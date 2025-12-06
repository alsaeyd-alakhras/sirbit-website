'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Code, Smartphone, Layers } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import ServiceCard from '@/components/ui/ServiceCard';
import { servicesPreview } from '@/data/services';

const ServicesPreview = () => {
  const t = useTranslations('services');
  const locale = useLocale();

  const services = servicesPreview.map((service, index) => {
    const icons = [<Code key="code" />, <Smartphone key="smartphone" />, <Layers key="layers" />];
    return {
      icon: icons[index],
      title: t(service.titleKey.replace('services.', '')),
      description: t(service.descriptionKey.replace('services.', '')),
      linkText: t(service.linkTextKey.replace('services.', '')),
      href: `/${locale}${service.href}`,
    };
  });

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

