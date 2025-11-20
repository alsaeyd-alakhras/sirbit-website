'use client';

import Hero from '@/components/sections/Hero';
import WhoIsSirbit from '@/components/sections/WhoIsSirbit';
import ServicesPreview from '@/components/sections/ServicesPreview';
import WhySirbit from '@/components/sections/WhySirbit';
import FeaturedWork from '@/components/sections/FeaturedWork';
import TechStack from '@/components/sections/TechStack';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoIsSirbit />
      <ServicesPreview />
      <WhySirbit />
      <FeaturedWork />
      <TechStack />
      <FinalCTA />
    </>
  );
}

