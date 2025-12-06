'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import FinalCTA from '@/components/sections/FinalCTA';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { getProjectBySlug } from '@/data/portfolio';

export default function ProjectDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const locale = useLocale();
  const projectData = getProjectBySlug(slug);
  const t = useTranslations();

  if (!projectData) {
    notFound();
  }

  // Map data to locale-specific values
  const project = {
    title: locale === 'ar' ? projectData.titleAr : projectData.titleEn,
    description: locale === 'ar' ? projectData.descriptionAr : projectData.descriptionEn,
    category: projectData.category,
    image: projectData.image,
    domain: locale === 'ar' ? projectData.domainAr : projectData.domainEn,
    role: locale === 'ar' ? projectData.roleAr : projectData.roleEn,
    duration: locale === 'ar' ? projectData.durationAr : projectData.durationEn,
    technologies: projectData.technologies,
    challenge: locale === 'ar' ? projectData.challengeAr : projectData.challengeEn,
    solution: locale === 'ar' ? projectData.solutionAr : projectData.solutionEn,
    features: (locale === 'ar' ? projectData.featuresAr : projectData.featuresEn) || [],
    images: projectData.images || [projectData.image],
    liveUrl: projectData.liveUrl,
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge text={project.category} className="mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <Button href={project.liveUrl} variant="primary" icon={<ExternalLink className="w-5 h-5" />}>
                    {locale === 'ar' ? 'زيارة المشروع' : 'Visit Project'}
                  </Button>
                )}
                <Button href={`/${locale}/contact`} variant="secondary" icon={<ArrowRight className="w-5 h-5" />}>
                  {locale === 'ar' ? 'أريد مشروع مشابه' : 'I Want Similar Project'}
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Project Summary */}
      <section className="py-12 bg-gray-50 dark:bg-[#0E0F11]">
        <Container>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                {locale === 'ar' ? 'المجال' : 'Domain'}
              </h3>
              <p className="text-lg font-bold text-gray-900 dark:text-white">{project.domain}</p>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                {locale === 'ar' ? 'الدور' : 'Role'}
              </h3>
              <p className="text-lg font-bold text-gray-900 dark:text-white">{project.role}</p>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                {locale === 'ar' ? 'التقنيات' : 'Technologies'}
              </h3>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {project.technologies.join(', ')}
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                {locale === 'ar' ? 'المدة' : 'Duration'}
              </h3>
              <p className="text-lg font-bold text-gray-900 dark:text-white">{project.duration}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenge */}
      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            {locale === 'ar' ? 'التحدي' : 'The Challenge'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.challenge}
          </p>
        </Container>
      </section>

      {/* Solution */}
      <section className="py-20 bg-gray-50 dark:bg-[#0E0F11]">
        <Container>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            {locale === 'ar' ? 'الحل' : 'The Solution'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            {project.solution}
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {locale === 'ar' ? 'الميزات الرئيسية' : 'Key Features'}
          </h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#7B61FF] flex items-center justify-center text-white text-sm flex-shrink-0">
                  ✓
                </span>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}

