/**
 * Site Configuration
 * Centralized configuration for the Sirbit website
 */

export const siteConfig = {
    name: 'Sirbit',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sirbit.com',
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'ar',

    // Social Media
    social: {
        twitter: 'https://twitter.com/sirbit',
        facebook: 'https://facebook.com/sirbit',
        linkedin: 'https://linkedin.com/company/sirbit',
        instagram: 'https://instagram.com/sirbit',
    },

    // Contact Information
    contact: {
        email: 'info@sirbit.com',
        phone: '+966 XX XXX XXXX',
    },

    // EmailJS Configuration
    emailjs: {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE || '',
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE || '',
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC || '',
    },
};

/**
 * Get the full URL for a given path
 */
export function getFullUrl(path: string): string {
    const baseUrl = siteConfig.url.replace(/\/$/, '');
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${baseUrl}${cleanPath}`;
}

/**
 * Get environment variable with fallback
 */
export function getEnvVar(key: string, fallback: string = ''): string {
    return process.env[key] || fallback;
}
