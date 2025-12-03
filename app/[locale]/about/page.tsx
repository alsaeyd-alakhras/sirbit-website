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
      <FinalCTA />
    </>
  );
}

