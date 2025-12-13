import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';

export async function generateMetadata(
  props: {
    params: Promise<{ locale: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'contactPage' });
  const service = searchParams.service as string | undefined;

  // Map service codes to readable titles if needed, or use translation
  // For now using the service code or a simple mapping could be better
  let serviceTitle = '';
  if (service) {
    if (service === 'web') serviceTitle = locale === 'ar' ? 'تطوير مواقع' : 'Web Dev';
    else if (service === 'mobile') serviceTitle = locale === 'ar' ? 'تطبيقات موبايل' : 'Mobile Apps';
    else if (service === 'wordpress') serviceTitle = locale === 'ar' ? 'ووردبريس' : 'WordPress';
    else serviceTitle = service;
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sirbit-website.vercel.app";
  const path = "/contact";
  const canonicalUrl = `${siteUrl}/${locale}${path}`;

  return {
    title: t('title') + (serviceTitle ? ` - ${serviceTitle}` : ''),
    description: t('description') + (serviceTitle ? ` - ${serviceTitle}` : ''),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'ar': `${siteUrl}/ar${path}`,
        'en': `${siteUrl}/en${path}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      // Don't index URLs with query parameters to avoid duplicate content
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function ContactPage(
  props: {
    params: Promise<{ locale: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'contactPage' });

  const service = searchParams.service as string | undefined;
  let serviceTitle = '';
  if (service) {
    if (service === 'web') serviceTitle = locale === 'ar' ? 'تطوير مواقع' : 'Web Dev';
    else if (service === 'mobile') serviceTitle = locale === 'ar' ? 'تطبيقات موبايل' : 'Mobile Apps';
    else if (service === 'wordpress') serviceTitle = locale === 'ar' ? 'ووردبريس' : 'WordPress';
    else serviceTitle = service;
  }

  return (
    <>
      <section className="pt-32 pb-12">
        <Container>
          <SectionHeader title={t('title') + (serviceTitle ? ` - ${serviceTitle}` : '')} subtitle={t('description') + (serviceTitle ? ` - ${serviceTitle}` : '')} as="h1" />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>

      {/* SEO text section to avoid thin content */}
      <section className="pb-16">
        <Container>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
            {t('seoBody')}
          </p>
        </Container>
      </section>
    </>
  );
}

