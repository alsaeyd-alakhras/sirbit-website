'use client';

import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import VisionMissionValues from '@/components/sections/VisionMissionValues';
import HowWeWork from '@/components/sections/HowWeWork';
import FinalCTA from '@/components/sections/FinalCTA';

export default function AboutPage() {
  const t = useTranslations('aboutPage');

  return (
    <>
      <section className="pt-32 pb-12">
        <Container>
          <SectionHeader title={t('title')} subtitle={t('description')} as="h1" />
        </Container>
      </section>

      <VisionMissionValues />
      <HowWeWork />

       {/* SEO text section to enrich About page */}
       <section className="pb-12">
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

