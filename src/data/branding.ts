/**
 * Site Branding Data
 * Logo, description, and branding information
 */

export interface SiteBranding {
    name: string;
    logo: string;
    description: {
        ar: string;
        en: string;
    };
    tagline: {
        ar: string;
        en: string;
    };
}

export const siteBranding: SiteBranding = {
    name: 'Sirbit',
    logo: '/images/logo.png',
    description: {
        ar: 'Sirbit فريق تقني متخصص في بناء الحلول الرقمية المتكاملة',
        en: 'Sirbit is a technical team specialized in building integrated digital solutions',
    },
    tagline: {
        ar: 'نحو تجارب رقمية أسرع، أذكى، وأبسط',
        en: 'Towards Faster, Smarter, and Simpler Digital Experiences',
    },
};
