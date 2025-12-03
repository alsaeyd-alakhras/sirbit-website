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
  if (slug === 'project-1') {
    return {
      title: locale === 'ar' ? 'نظام إدارة متقدم' : 'Advanced Management System',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      description: locale === 'ar'
        ? 'نظام إدارة شامل يساعد الشركات على تنظيم الطلبات والمخزون والمبيعات في منصة واحدة.'
        : 'An advanced management system that centralizes orders, inventory, and sales into a single platform.',
      domain: locale === 'ar' ? 'الشركات المتوسطة' : 'SMEs',
      role: locale === 'ar' ? 'تطوير كامل للنظام' : 'Full system development',
      technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
      duration: locale === 'ar' ? '3 أشهر' : '3 Months',
      challenge: locale === 'ar'
        ? 'الشركة كانت تستخدم أكثر من أداة لإدارة الطلبات والفواتير مما تسبب في ضياع البيانات وصعوبة المتابعة.'
        : 'The company relied on multiple tools for orders and invoicing, causing data loss and poor visibility.',
      solution: locale === 'ar'
        ? 'قمنا بتجميع جميع العمليات في نظام مركزي مع لوحة تحكم تفاعلية وتقارير لحظية تساعد الإدارة في اتخاذ القرار.'
        : 'We unified all operations into a central system with an interactive dashboard and real-time reporting.',
      features: [
        locale === 'ar' ? 'لوحة تحكم تفاعلية للإدارة' : 'Interactive admin dashboard',
        locale === 'ar' ? 'تقارير لحظية للمبيعات والمخزون' : 'Real-time sales and inventory reports',
        locale === 'ar' ? 'صلاحيات متعددة للمستخدمين' : 'Role-based user permissions',
        locale === 'ar' ? 'تكامل مع نظام الفوترة' : 'Integration with billing system',
      ],
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
    };
  }

  if (slug === 'project-2') {
    return {
      title: locale === 'ar' ? 'تطبيق موبايل تجاري' : 'E-Commerce Mobile App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      description: locale === 'ar'
        ? 'تطبيق تجارة إلكترونية عبر الموبايل يوفر تجربة شراء سريعة مع تنبيهات فورية للحالة.'
        : 'A mobile e-commerce app that delivers a fast shopping experience with real-time order updates.',
      domain: locale === 'ar' ? 'التجارة الإلكترونية' : 'E-commerce',
      role: locale === 'ar' ? 'تطوير تطبيقات موبايل' : 'Mobile app development',
      technologies: ['Flutter', 'Firebase', 'REST API'],
      duration: locale === 'ar' ? '4 أشهر' : '4 Months',
      challenge: locale === 'ar'
        ? 'العميل كان يعاني من معدلات تحويل منخفضة على الموقع التقليدي وعدم وضوح في متابعة الطلبات.'
        : 'The client had low conversion rates on the web store and no clear way to track mobile orders.',
      solution: locale === 'ar'
        ? 'أنشأنا تطبيق موبايل بواجهة بسيطة وسريعة مع دعم إشعارات فورية وتتبع مباشر لحالة الطلب.'
        : 'We built a mobile app with a clean UI, push notifications, and live order tracking.',
      features: [
        locale === 'ar' ? 'تتبع مباشر لحالة الطلب' : 'Live order tracking',
        locale === 'ar' ? 'دفع إلكتروني آمن' : 'Secure online payments',
        locale === 'ar' ? 'تنبيهات فورية للعروض والطلبات' : 'Instant offers and order alerts',
        locale === 'ar' ? 'دعم متعدد اللغات' : 'Multi-language support',
      ],
      images: [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
    };
  }

  if (slug === 'project-3') {
    return {
      title: locale === 'ar' ? 'موقع شركة احترافي' : 'Professional Corporate Website',
      category: 'wordpress',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      description: locale === 'ar'
        ? 'موقع تعريفي لشركة يقدم صفحات مخصصة للخدمات، الفريق، والمدونة.'
        : 'A corporate website with custom service pages, team profiles, and a blog.',
      domain: locale === 'ar' ? 'الشركات والخدمات' : 'Corporate services',
      role: locale === 'ar' ? 'تطوير واجهات وإدارة محتوى' : 'Frontend & CMS implementation',
      technologies: ['WordPress', 'PHP', 'MySQL'],
      duration: locale === 'ar' ? '2 شهرين' : '2 Months',
      challenge: locale === 'ar'
        ? 'الشركة كانت تستخدم موقع قديم غير متوافق مع الجوال وأداءه ضعيف في محركات البحث.'
        : 'The company used an outdated website with poor mobile support and SEO issues.',
      solution: locale === 'ar'
        ? 'بنينا موقعًا جديدًا متجاوبًا مع تحسين SEO وهيكلة واضحة للمحتوى لزيادة الثقة والتحويل.'
        : 'We delivered a responsive, SEO-friendly website with a clear content structure.',
      features: [
        locale === 'ar' ? 'تصميم متجاوب مع جميع الأجهزة' : 'Fully responsive design',
        locale === 'ar' ? 'لوحة تحكم سهلة للمحتوى' : 'Easy-to-use content CMS',
        locale === 'ar' ? 'تحسين لمحركات البحث' : 'On-page SEO optimization',
        locale === 'ar' ? 'مدونة لزيادة الزيارات العضوية' : 'Blog for organic traffic',
      ],
      images: [
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
    };
  }

  if (slug === 'project-4') {
    return {
      title: locale === 'ar' ? 'منصة تعليمية' : 'Learning Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      description: locale === 'ar'
        ? 'منصة تعليمية تقدم دورات أونلاين مع نظام متابعة للتقدم وتقارير للطلاب.'
        : 'An online learning platform with courses, progress tracking, and student reports.',
      domain: locale === 'ar' ? 'التعليم والتدريب' : 'Education & Training',
      role: locale === 'ar' ? 'تطوير المنصة الكاملة' : 'Full platform development',
      technologies: ['React', 'Node.js', 'MongoDB'],
      duration: locale === 'ar' ? '5 أشهر' : '5 Months',
      challenge: locale === 'ar'
        ? 'المؤسسة كانت تستخدم أدوات متفرقة لإدارة الدورات مما سبب تشتتًا للطلاب.'
        : 'The organization used separate tools for courses, leading to a fragmented student experience.',
      solution: locale === 'ar'
        ? 'قمنا ببناء منصة موحدة لإدارة الدورات، تسجيل الطلاب، والمتابعة مع لوحة تقارير للإدارة.'
        : 'We built a unified platform for course delivery, enrollment, and reporting.',
      features: [
        locale === 'ar' ? 'نظام دورات مع وحدات ودروس' : 'Modular course system',
        locale === 'ar' ? 'متابعة تقدم الطالب' : 'Student progress tracking',
        locale === 'ar' ? 'اختبارات وتقارير أداء' : 'Quizzes and performance reports',
        locale === 'ar' ? 'دعم الدفع الإلكتروني للدورات' : 'Online payments for courses',
      ],
      images: [
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
    };
  }

  if (slug === 'project-5') {
    return {
      title: locale === 'ar' ? 'تطبيق توصيل' : 'Delivery App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      description: locale === 'ar'
        ? 'تطبيق توصيل يعتمد على تتبع الخرائط لتسليم الطلبات بسرعة ووضوح.'
        : 'A delivery app that uses live maps to ensure fast and transparent order delivery.',
      domain: locale === 'ar' ? 'الخدمات اللوجستية' : 'Logistics',
      role: locale === 'ar' ? 'تطوير واجهات وتجربة مستخدم' : 'Mobile UX & frontend',
      technologies: ['Flutter', 'Google Maps', 'Firebase'],
      duration: locale === 'ar' ? '4 أشهر' : '4 Months',
      challenge: locale === 'ar'
        ? 'شركة التوصيل لم يكن لديها نظام موحد لتتبع السائقين والطلبات.'
        : 'The delivery company lacked a unified system for tracking drivers and orders.',
      solution: locale === 'ar'
        ? 'صممنا تطبيقًا يربط بين العميل، السائق، ولوحة متابعة للمشرف مع خريطة مباشرة.'
        : 'We created an app connecting customers, drivers, and dispatch through a live map.',
      features: [
        locale === 'ar' ? 'تتبع مباشر لموقع السائق' : 'Driver live location tracking',
        locale === 'ar' ? 'إشعارات لحالة الطلب' : 'Status notifications',
        locale === 'ar' ? 'تقييم الخدمة بعد التسليم' : 'Post-delivery rating system',
        locale === 'ar' ? 'تحديد العنوان عبر الخرائط' : 'Address selection via maps',
      ],
      images: [
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
    };
  }

  if (slug === 'project-6') {
    return {
      title: locale === 'ar' ? 'مدونة شخصية' : 'Personal Blog',
      category: 'wordpress',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
      description: locale === 'ar'
        ? 'مدونة شخصية تركّز على كتابة المحتوى بسرعة مع تجربة قراءة مريحة.'
        : 'A personal blog optimized for fast publishing and a clean reading experience.',
      domain: locale === 'ar' ? 'المحتوى الشخصي' : 'Personal content',
      role: locale === 'ar' ? 'تخصيص قالب WordPress' : 'Custom WordPress theme',
      technologies: ['WordPress', 'Elementor', 'WooCommerce'],
      duration: locale === 'ar' ? 'شهر واحد' : '1 Month',
      challenge: locale === 'ar'
        ? 'الكاتب كان يعاني من بطء في لوحة التحكم وصعوبة في تنظيم المقالات.'
        : 'The writer struggled with a slow dashboard and poor article organization.',
      solution: locale === 'ar'
        ? 'قمنا ببناء قالب خفيف مع بنية تصنيفات ووسوم واضحة وتجربة كتابة مبسطة.'
        : 'We implemented a lightweight theme with clear taxonomies and a simple writing flow.',
      features: [
        locale === 'ar' ? 'قالب خفيف وسريع' : 'Fast, lightweight theme',
        locale === 'ar' ? 'نظام تصنيفات ووسوم منظم' : 'Organized categories and tags',
        locale === 'ar' ? 'تهيئة لمشاركة الروابط على السوشال ميديا' : 'Optimized social sharing',
        locale === 'ar' ? 'إمكانية إضافة صفحات بيع رقمية مستقبلًا' : 'Ready for future digital product sales',
      ],
      images: [
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
    };
  }

  return null;
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
                {project.title} - {locale} - {slug}
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

