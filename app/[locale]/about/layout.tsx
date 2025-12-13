import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sirbit-website.vercel.app";

  
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aboutPage' });
  const path = "/about";
  const canonicalUrl = `${siteUrl}/${locale}${path}`;

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'ar': `${siteUrl}/ar${path}`,
        'en': `${siteUrl}/en${path}`,
      },
    },
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

