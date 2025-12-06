/**
 * Application Constants
 * Global constants used throughout the application
 */

// Supported Locales
export const LOCALES = ['ar', 'en'] as const;
export type Locale = typeof LOCALES[number];

// Default Theme
export const DEFAULT_THEME = 'dark';

// Animation Durations (in milliseconds)
export const ANIMATION_DURATION = {
    fast: 200,
    normal: 300,
    slow: 500,
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
} as const;

// Image Sizes
export const IMAGE_SIZES = {
    thumbnail: { width: 400, height: 300 },
    card: { width: 800, height: 600 },
    hero: { width: 1920, height: 1080 },
    og: { width: 1200, height: 630 },
} as const;
