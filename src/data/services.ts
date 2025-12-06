/**
 * Services Data
 * Centralized data for all services offered by Sirbit
 */

export interface Service {
    id: string;
    slug: string;
    titleKey: string;
    descriptionKey: string;
    image: string;
    featuresKeys: string[];
    buttonKey: string;
}

export const services: Service[] = [
    {
        id: 'web-development',
        slug: 'web-development',
        titleKey: 'servicesPage.webDevelopment.title',
        descriptionKey: 'servicesPage.webDevelopment.description',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop',
        featuresKeys: [
            'servicesPage.webDevelopment.features.0',
            'servicesPage.webDevelopment.features.1',
            'servicesPage.webDevelopment.features.2',
            'servicesPage.webDevelopment.features.3',
        ],
        buttonKey: 'servicesPage.webDevelopment.button',
    },
    {
        id: 'mobile-development',
        slug: 'mobile-development',
        titleKey: 'servicesPage.mobileDevelopment.title',
        descriptionKey: 'servicesPage.mobileDevelopment.description',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=800&fit=crop',
        featuresKeys: [
            'servicesPage.mobileDevelopment.features.0',
            'servicesPage.mobileDevelopment.features.1',
            'servicesPage.mobileDevelopment.features.2',
            'servicesPage.mobileDevelopment.features.3',
        ],
        buttonKey: 'servicesPage.mobileDevelopment.button',
    },
    {
        id: 'wordpress-development',
        slug: 'wordpress-development',
        titleKey: 'servicesPage.wordpressDevelopment.title',
        descriptionKey: 'servicesPage.wordpressDevelopment.description',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=800&fit=crop',
        featuresKeys: [
            'servicesPage.wordpressDevelopment.features.0',
            'servicesPage.wordpressDevelopment.features.1',
            'servicesPage.wordpressDevelopment.features.2',
            'servicesPage.wordpressDevelopment.features.3',
        ],
        buttonKey: 'servicesPage.wordpressDevelopment.button',
    },
];

// Services Preview (for home page)
export const servicesPreview = [
    {
        id: 'web',
        titleKey: 'services.web.title',
        descriptionKey: 'services.web.description',
        linkTextKey: 'services.web.learnMore',
        href: '/services#web-development',
    },
    {
        id: 'mobile',
        titleKey: 'services.mobile.title',
        descriptionKey: 'services.mobile.description',
        linkTextKey: 'services.mobile.learnMore',
        href: '/services#mobile-development',
    },
    {
        id: 'wordpress',
        titleKey: 'services.wordpress.title',
        descriptionKey: 'services.wordpress.description',
        linkTextKey: 'services.wordpress.learnMore',
        href: '/services#wordpress-development',
    },
];
