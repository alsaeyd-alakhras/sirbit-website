/**
 * Filter Data
 * Centralized filter configurations for portfolio page
 */

export interface Filter {
    id: string;
    labelKey: string;
}

export const portfolioFilters: Filter[] = [
    { id: 'all', labelKey: 'portfolioPage.filters.all' },
    { id: 'web', labelKey: 'portfolioPage.filters.web' },
    { id: 'mobile', labelKey: 'portfolioPage.filters.mobile' },
    { id: 'wordpress', labelKey: 'portfolioPage.filters.wordpress' },
];
