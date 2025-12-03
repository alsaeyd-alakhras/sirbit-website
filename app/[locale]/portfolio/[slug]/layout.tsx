import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const { locale, slug } = params;

  const titles: Record<
    string,
    { en: string; ar: string }
  > = {
    'project-1': {
      en: 'Advanced Management System | Case Study',
      ar: 'دراسة حالة: نظام إدارة متقدم',
    },
    'project-2': {
      en: 'E-Commerce Mobile App | Case Study',
      ar: 'دراسة حالة: تطبيق موبايل تجاري',
    },
    'project-3': {
      en: 'Corporate Website Project | Case Study',
      ar: 'دراسة حالة: موقع شركة احترافي',
    },
    'project-4': {
      en: 'Learning Platform | Case Study',
      ar: 'دراسة حالة: منصة تعليمية',
    },
    'project-5': {
      en: 'Delivery Application | Case Study',
      ar: 'دراسة حالة: تطبيق توصيل',
    },
    'project-6': {
      en: 'Personal Blog | Case Study',
      ar: 'دراسة حالة: مدونة شخصية',
    },
  };

  const description =
    slug === 'project-1'
      ? 'Case study for an advanced management system that helps companies organize operations, inventory, and sales in one dashboard.'
      : slug === 'project-2'
      ? 'Case study for an e-commerce mobile app built with Flutter, focused on fast checkout and real-time order tracking.'
      : slug === 'project-3'
      ? 'Case study for a corporate website with a custom CMS and SEO-friendly architecture.'
      : slug === 'project-4'
      ? 'Case study for an online learning platform with courses, progress tracking, and interactive content.'
      : slug === 'project-5'
      ? 'Case study for a delivery app that offers live tracking, smart routing, and push notifications.'
      : slug === 'project-6'
      ? 'Case study for a fast personal blog built with WordPress and optimized for content creators.'
      : 'Case study by Sirbit for a custom digital project.';

  const localizedTitle = titles[slug]
    ? locale === 'ar'
      ? titles[slug].ar
      : titles[slug].en
    : locale === 'ar'
    ? 'دراسة حالة: مشروع'
    : 'Project | Case Study';

  return {
    title: localizedTitle,
    description,
    alternates: {
      canonical: `/${locale}/portfolio/${slug}`,
    },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

