import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sirbit-website.vercel.app";

  
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'servicesPage' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: siteUrl + `/${locale}/services`,
    },
  };
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

