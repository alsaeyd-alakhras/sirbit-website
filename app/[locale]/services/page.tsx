'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import ServiceDetailBlock from '@/components/sections/ServiceDetailBlock';
import FinalCTA from '@/components/sections/FinalCTA';
import { Code, Smartphone, Layers } from 'lucide-react';

export default function ServicesPage() {
  const t = useTranslations('servicesPage');

  return (
    <>
      <section className="pt-32 pb-12">
        <Container>
          <SectionHeader title={t('title')} subtitle={t('description')} as="h1" />
        </Container>
      </section>

      <div id="web-development">
        <ServiceDetailBlock
          icon={
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop"
              alt="Web Development"
              width={800}
              height={800}
            />
          }
          title={t('webDevelopment.title')}
          description={t('webDevelopment.description')}
          features={[
            t('webDevelopment.features.0'),
            t('webDevelopment.features.1'),
            t('webDevelopment.features.2'),
            t('webDevelopment.features.3'),
          ]}
          buttonText={t('webDevelopment.button')}
          imagePosition="right"
          serviceType="web"
        />
      </div>

      <div id="mobile-development">
        <ServiceDetailBlock
          icon={
            <Image
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=800&fit=crop"
              alt="Mobile Development"
              width={800}
              height={800}
            />
          }
          title={t('mobileDevelopment.title')}
          description={t('mobileDevelopment.description')}
          features={[
            t('mobileDevelopment.features.0'),
            t('mobileDevelopment.features.1'),
            t('mobileDevelopment.features.2'),
            t('mobileDevelopment.features.3'),
          ]}
          buttonText={t('mobileDevelopment.button')}
          imagePosition="left"
          serviceType="mobile"
        />
      </div>

      <div id="wordpress-development">
        <ServiceDetailBlock
          icon={
            <Image
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=800&fit=crop"
              alt="WordPress Development"
              width={800}
              height={800}
            />
          }
          title={t('wordpressDevelopment.title')}
          description={t('wordpressDevelopment.description')}
          features={[
            t('wordpressDevelopment.features.0'),
            t('wordpressDevelopment.features.1'),
            t('wordpressDevelopment.features.2'),
            t('wordpressDevelopment.features.3'),
          ]}
          buttonText={t('wordpressDevelopment.button')}
          imagePosition="right"
          serviceType="wordpress"
        />
      </div>

      {/* SEO text section to enrich content */}
      <section className="py-12">
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

