/**
 * Schema.org Structured Data
 * JSON-LD generators for rich search results
 */

import { siteConfig, getFullUrl } from '@/config/site';

/**
 * Organization Schema
 * Used in the main layout
 */
export function getOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
        logo: getFullUrl('/images/logo.png'),
        description: 'Sirbit - Professional Web and Mobile Development Services',
        contactPoint: {
            '@type': 'ContactPoint',
            email: siteConfig.contact.email,
            contactType: 'Customer Service',
            availableLanguage: ['Arabic', 'English'],
        },
        sameAs: [
            siteConfig.social.twitter,
            siteConfig.social.facebook,
            siteConfig.social.linkedin,
            siteConfig.social.instagram,
        ],
    };
}

/**
 * WebSite Schema
 * Used in the main layout
 */
export function getWebSiteSchema(locale: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        description: 'Professional Web and Mobile Development Services',
        inLanguage: locale === 'ar' ? 'ar-SA' : 'en-US',
        publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
        },
    };
}

/**
 * Breadcrumb Schema
 * Used on internal pages
 */
export interface BreadcrumbItem {
    name: string;
    url: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: getFullUrl(item.url),
        })),
    };
}

/**
 * Service Schema
 * Used on services page
 */
export function getServiceSchema(
    name: string,
    description: string,
    locale: string
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        provider: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
        },
        areaServed: {
            '@type': 'Country',
            name: locale === 'ar' ? 'Saudi Arabia' : 'Saudi Arabia',
        },
    };
}

/**
 * Article Schema
 * Can be used for portfolio items or blog posts
 */
export function getArticleSchema(
    title: string,
    description: string,
    image: string,
    datePublished: string,
    dateModified: string
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image: getFullUrl(image),
        datePublished,
        dateModified,
        author: {
            '@type': 'Organization',
            name: siteConfig.name,
        },
        publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
                '@type': 'ImageObject',
                url: getFullUrl('/images/logo.png'),
            },
        },
    };
}

/**
 * Helper to render JSON-LD script tag
 */
export function renderJsonLd(data: any) {
    return {
        __html: JSON.stringify(data),
    };
}
