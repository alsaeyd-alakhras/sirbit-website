/**
 * Navigation Data
 * Centralized navigation structure for the website
 */

export interface NavLink {
    href: string;
    labelKey: string;
}

/**
 * Main navigation links
 * Used in Navbar and mobile menu
 */
export const mainNavLinks: NavLink[] = [
    { href: '/', labelKey: 'nav.home' },
    { href: '/services', labelKey: 'nav.services' },
    { href: '/portfolio', labelKey: 'nav.portfolio' },
    { href: '/about', labelKey: 'nav.about' },
    { href: '/contact', labelKey: 'nav.contact' },
];

/**
 * Footer navigation links
 */
export const footerLinks = {
    services: [
        { href: '/services#web-development', labelKey: 'services.web.title' },
        { href: '/services#mobile-development', labelKey: 'services.mobile.title' },
        { href: '/services#wordpress-development', labelKey: 'services.wordpress.title' },
    ],
    company: [
        { href: '/about', labelKey: 'nav.about' },
        { href: '/portfolio', labelKey: 'nav.portfolio' },
        { href: '/contact', labelKey: 'nav.contact' },
    ],
};

/**
 * Get navigation links with locale prefix
 */
export function getNavLinks(locale: string): Array<{ href: string; labelKey: string }> {
    return mainNavLinks.map(link => ({
        ...link,
        href: `/${locale}${link.href}`,
    }));
}
