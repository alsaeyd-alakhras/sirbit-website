import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const { locale, slug } = params;

  const baseTitle =
    slug === 'project-1'
      ? 'Advanced Management System'
      : slug === 'project-2'
      ? 'E-Commerce Mobile App'
      : slug === 'project-3'
      ? 'Corporate Website Project'
      : slug === 'project-4'
      ? 'Learning Platform'
      : slug === 'project-5'
      ? 'Delivery Application'
      : slug === 'project-6'
      ? 'Personal Blog'
      : 'Project';

  const title = locale === 'ar' ? `${baseTitle} | Case Study`.replace(
    'Advanced Management System',
    'دراسة حالة: نظام إدارة متقدم'
  ) : `${baseTitle} | Case Study`;

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

  return {
    title,
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

