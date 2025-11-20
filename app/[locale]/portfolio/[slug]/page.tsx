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

// This would come from a database or API
const getProjectData = (slug: string, locale: string) => {
  // Mock data
  return {
    title: locale === 'ar' ? 'نظام إدارة متقدم' : 'Advanced Management System',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    description: locale === 'ar' 
      ? 'نظام إدارة شامل ومتكامل يساعد الشركات على تنظيم عملياتها وزيادة الإنتاجية'
      : 'Comprehensive management system helping companies organize operations and increase productivity',
    domain: locale === 'ar' ? 'التجارة الإلكترونية' : 'E-commerce',
    role: locale === 'ar' ? 'تطوير كامل' : 'Full Development',
    technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
    duration: locale === 'ar' ? '3 أشهر' : '3 Months',
    challenge: locale === 'ar'
      ? 'كانت الشركة تواجه صعوبة في إدارة العمليات اليومية وتتبع الطلبات والمخزون بشكل فعال.'
      : 'The company faced difficulty managing daily operations and tracking orders and inventory effectively.',
    solution: locale === 'ar'
      ? 'قمنا ببناء نظام إدارة متكامل يوفر لوحة تحكم شاملة مع إمكانية إدارة الطلبات والمخزون والمبيعات في مكان واحد.'
      : 'We built an integrated management system providing a comprehensive dashboard with order, inventory, and sales management in one place.',
    features: [
      locale === 'ar' ? 'لوحة تحكم تفاعلية' : 'Interactive Dashboard',
      locale === 'ar' ? 'إدارة المخزون الذكية' : 'Smart Inventory Management',
      locale === 'ar' ? 'تقارير تحليلية متقدمة' : 'Advanced Analytics Reports',
      locale === 'ar' ? 'نظام إشعارات فوري' : 'Real-time Notification System',
      locale === 'ar' ? 'واجهة سهلة الاستخدام' : 'User-friendly Interface',
    ],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    ],
    liveUrl: '#',
  };
};

export default function ProjectDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const locale = useLocale();
  const project = getProjectData(slug, locale);
  const t = useTranslations();

  if (!project) {
    notFound();
  }

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

