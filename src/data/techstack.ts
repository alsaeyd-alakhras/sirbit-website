/**
 * Technology Stack Data
 * Centralized data for technologies used by Sirbit
 */

import { ReactNode } from 'react';

export interface Technology {
    name: string;
    icon: ReactNode;
}

// Note: Icons will be rendered as JSX in the component
// This file exports the technology names and structure
export const techStackNames = [
    'Laravel',
    'Vue.js',
    'React',
    'Tailwind',
    'Flutter',
    'WordPress',
    'MySQL',
    'REST API',
] as const;

export type TechName = typeof techStackNames[number];
