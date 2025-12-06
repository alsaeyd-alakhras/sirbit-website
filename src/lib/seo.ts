/**
 * SEO Helper Functions
 * Utilities for building SEO metadata across the site
 */

import { Metadata } from 'next';
import { siteConfig, getFullUrl } from '@/config/site';

interface BuildSeoParams {
    title: string;
    description: string;
    path: string;
    locale: string;
    image?: string;
    type?: 'website' | 'article';
}

/**
 * Build complete SEO metadata for a page
 */
export function buildSeo({
    title,
    description,
    path,
    locale,
    image,
    type = 'website',
}: BuildSeoParams): Metadata {
    const fullUrl = getFullUrl(path);
    const ogImage = image || getFullUrl('/og-image.png');

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: fullUrl,
            siteName: siteConfig.name,
            locale: locale === 'ar' ? 'ar_SA' : 'en_US',
            type,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
        alternates: {
            canonical: fullUrl,
            languages: {
                'ar': getFullUrl(`/ar${path.replace(/^\/(ar|en)/, '')}`),
                'en': getFullUrl(`/en${path.replace(/^\/(ar|en)/, '')}`),
            },
        },
        robots: {
            index: true,
            follow: true,
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

/**
 * Build metadata for home page
 */
export function buildHomeSeo(locale: string, t: any): Metadata {
    return buildSeo({
        title: t('seo.home.title'),
        description: t('seo.home.description'),
        path: `/${locale}`,
        locale,
    });
}

/**
 * Build metadata for services page
 */
export function buildServicesSeo(locale: string, t: any): Metadata {
    return buildSeo({
        title: t('seo.services.title'),
        description: t('seo.services.description'),
        path: `/${locale}/services`,
        locale,
    });
}

/**
 * Build metadata for portfolio page
 */
export function buildPortfolioSeo(locale: string, t: any): Metadata {
    return buildSeo({
        title: t('seo.portfolio.title'),
        description: t('seo.portfolio.description'),
        path: `/${locale}/portfolio`,
        locale,
    });
}

/**
 * Build metadata for about page
 */
export function buildAboutSeo(locale: string, t: any): Metadata {
    return buildSeo({
        title: t('seo.about.title'),
        description: t('seo.about.description'),
        path: `/${locale}/about`,
        locale,
    });
}

/**
 * Build metadata for contact page
 */
export function buildContactSeo(locale: string, t: any): Metadata {
    return buildSeo({
        title: t('seo.contact.title'),
        description: t('seo.contact.description'),
        path: `/${locale}/contact`,
        locale,
    });
}
