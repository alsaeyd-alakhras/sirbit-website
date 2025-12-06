/**
 * Portfolio/Projects Data
 * Centralized data for all portfolio projects
 */

export interface Project {
    slug: string;
    image: string;
    titleAr: string;
    titleEn: string;
    category: 'web' | 'mobile' | 'wordpress';
    descriptionAr: string;
    descriptionEn: string;
    technologies: string[];
    // Detailed project information
    domainAr?: string;
    domainEn?: string;
    roleAr?: string;
    roleEn?: string;
    durationAr?: string;
    durationEn?: string;
    challengeAr?: string;
    challengeEn?: string;
    solutionAr?: string;
    solutionEn?: string;
    featuresAr?: string[];
    featuresEn?: string[];
    images?: string[];
    liveUrl?: string;
}

export const projects: Project[] = [
    {
        slug: 'project-1',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        titleAr: 'نظام إدارة متقدم',
        titleEn: 'Advanced Management System',
        category: 'web',
        descriptionAr: 'نظام إدارة شامل للشركات مع لوحة تحكم تفاعلية',
        descriptionEn: 'Comprehensive management system with interactive dashboard',
        technologies: ['Laravel', 'Vue.js', 'MySQL'],
        domainAr: 'الشركات المتوسطة',
        domainEn: 'SMEs',
        roleAr: 'تطوير كامل للنظام',
        roleEn: 'Full system development',
        durationAr: '3 أشهر',
        durationEn: '3 Months',
        challengeAr: 'الشركة كانت تستخدم أكثر من أداة لإدارة الطلبات والفواتير مما تسبب في ضياع البيانات وصعوبة المتابعة.',
        challengeEn: 'The company relied on several disconnected tools and manual processes for handling orders, inventory, and invoicing. Data was often duplicated or missing, and it was almost impossible to understand the actual stock levels or daily sales without spending hours in spreadsheets.',
        solutionAr: 'قمنا بتجميع جميع العمليات في نظام مركزي مع لوحة تحكم تفاعلية وتقارير لحظية تساعد الإدارة في اتخاذ القرار.',
        solutionEn: 'We unified all key operations into a central web system built with Laravel, Vue, and a responsive interface tailored to the client\'s workflow. The platform includes a role-based dashboard for managers, sales, and warehouse teams.',
        featuresAr: ['لوحة تحكم تفاعلية للإدارة', 'تقارير لحظية للمبيعات والمخزون', 'صلاحيات متعددة للمستخدمين', 'تكامل مع نظام الفوترة'],
        featuresEn: ['Interactive admin dashboard', 'Real-time sales and inventory reports', 'Role-based user permissions', 'Integration with billing system'],
        images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'],
        liveUrl: '#',
    },
    {
        slug: 'project-2',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
        titleAr: 'تطبيق موبايل تجاري',
        titleEn: 'E-Commerce Mobile App',
        category: 'mobile',
        descriptionAr: 'تطبيق موبايل بأداء عالي للتجارة الإلكترونية',
        descriptionEn: 'High-performance mobile app for e-commerce',
        technologies: ['Flutter', 'Firebase', 'REST API'],
        domainAr: 'التجارة الإلكترونية',
        domainEn: 'E-commerce',
        roleAr: 'تطوير تطبيقات موبايل',
        roleEn: 'Mobile app development',
        durationAr: '4 أشهر',
        durationEn: '4 Months',
        challengeAr: 'العميل كان يعاني من معدلات تحويل منخفضة على الموقع التقليدي وعدم وضوح في متابعة الطلبات.',
        challengeEn: 'The client had low conversion rates on their existing web store and no dedicated mobile experience for customers.',
        solutionAr: 'أنشأنا تطبيق موبايل بواجهة بسيطة وسريعة مع دعم إشعارات فورية وتتبع مباشر لحالة الطلب.',
        solutionEn: 'We built a cross-platform mobile app using Flutter, connected to a secure backend and payment gateway to handle orders, customers, and notifications in real time.',
        featuresAr: ['تتبع مباشر لحالة الطلب', 'دفع إلكتروني آمن', 'تنبيهات فورية للعروض والطلبات', 'دعم متعدد اللغات'],
        featuresEn: ['Live order tracking', 'Secure online payments', 'Instant offers and order alerts', 'Multi-language support'],
        images: ['https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'],
        liveUrl: '#',
    },
    {
        slug: 'project-3',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
        titleAr: 'موقع شركة احترافي',
        titleEn: 'Professional Corporate Website',
        category: 'wordpress',
        descriptionAr: 'موقع شركة احترافي مع نظام إدارة محتوى',
        descriptionEn: 'Professional corporate website with CMS',
        technologies: ['WordPress', 'PHP', 'MySQL'],
        domainAr: 'الشركات والخدمات',
        domainEn: 'Corporate services',
        roleAr: 'تطوير واجهات وإدارة محتوى',
        roleEn: 'Frontend & CMS implementation',
        durationAr: '2 شهرين',
        durationEn: '2 Months',
        challengeAr: 'الشركة كانت تستخدم موقع قديم غير متوافق مع الجوال وأداءه ضعيف في محركات البحث.',
        challengeEn: 'The company was relying on an outdated website that did not work well on mobile devices and loaded slowly on desktop.',
        solutionAr: 'بنينا موقعًا جديدًا متجاوبًا مع تحسين SEO وهيكلة واضحة للمحتوى لزيادة الثقة والتحويل.',
        solutionEn: 'We redesigned the site from the ground up using WordPress, implementing a clean information architecture with dedicated service pages, team profiles, and a blog hub.',
        featuresAr: ['تصميم متجاوب مع جميع الأجهزة', 'لوحة تحكم سهلة للمحتوى', 'تحسين لمحركات البحث', 'مدونة لزيادة الزيارات العضوية'],
        featuresEn: ['Fully responsive design', 'Easy-to-use content CMS', 'On-page SEO optimization', 'Blog for organic traffic'],
        images: ['https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop'],
        liveUrl: '#',
    },
    {
        slug: 'project-4',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
        titleAr: 'منصة تعليمية',
        titleEn: 'Learning Platform',
        category: 'web',
        descriptionAr: 'منصة تعليمية متكاملة مع نظام دورات',
        descriptionEn: 'Complete learning platform with course system',
        technologies: ['React', 'Node.js', 'MongoDB'],
        domainAr: 'التعليم والتدريب',
        domainEn: 'Education & Training',
        roleAr: 'تطوير المنصة الكاملة',
        roleEn: 'Full platform development',
        durationAr: '5 أشهر',
        durationEn: '5 Months',
        challengeAr: 'المؤسسة كانت تستخدم أدوات متفرقة لإدارة الدورات مما سبب تشتتًا للطلاب.',
        challengeEn: 'The organization previously used multiple unconnected tools for hosting videos, sending materials, collecting assignments, and tracking results.',
        solutionAr: 'قمنا ببناء منصة موحدة لإدارة الدورات، تسجيل الطلاب، والمتابعة مع لوحة تقارير للإدارة.',
        solutionEn: 'We built a unified learning platform using React and Node.js, designed around clear journeys for students, instructors, and administrators.',
        featuresAr: ['نظام دورات مع وحدات ودروس', 'متابعة تقدم الطالب', 'اختبارات وتقارير أداء', 'دعم الدفع الإلكتروني للدورات'],
        featuresEn: ['Modular course system', 'Student progress tracking', 'Quizzes and performance reports', 'Online payments for courses'],
        images: ['https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'],
        liveUrl: '#',
    },
    {
        slug: 'project-5',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
        titleAr: 'تطبيق توصيل',
        titleEn: 'Delivery App',
        category: 'mobile',
        descriptionAr: 'تطبيق توصيل سريع مع تتبع فوري',
        descriptionEn: 'Fast delivery app with real-time tracking',
        technologies: ['Flutter', 'Google Maps', 'Firebase'],
        domainAr: 'الخدمات اللوجستية',
        domainEn: 'Logistics',
        roleAr: 'تطوير واجهات وتجربة مستخدم',
        roleEn: 'Mobile UX & frontend',
        durationAr: '4 أشهر',
        durationEn: '4 Months',
        challengeAr: 'شركة التوصيل لم يكن لديها نظام موحد لتتبع السائقين والطلبات.',
        challengeEn: 'The delivery company had no unified digital system to track drivers, active orders, or delivery times.',
        solutionAr: 'صممنا تطبيقًا يربط بين العميل، السائق، ولوحة متابعة للمشرف مع خريطة مباشرة.',
        solutionEn: 'We designed and developed a Flutter-based app that connects customers, drivers, and dispatchers through a shared real-time map.',
        featuresAr: ['تتبع مباشر لموقع السائق', 'إشعارات لحالة الطلب', 'تقييم الخدمة بعد التسليم', 'تحديد العنوان عبر الخرائط'],
        featuresEn: ['Driver live location tracking', 'Status notifications', 'Post-delivery rating system', 'Address selection via maps'],
        images: ['https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop'],
        liveUrl: '#',
    },
    {
        slug: 'project-6',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
        titleAr: 'مدونة شخصية',
        titleEn: 'Personal Blog',
        category: 'wordpress',
        descriptionAr: 'مدونة شخصية عصرية وسريعة',
        descriptionEn: 'Modern and fast personal blog',
        technologies: ['WordPress', 'Elementor', 'WooCommerce'],
        domainAr: 'المحتوى الشخصي',
        domainEn: 'Personal content',
        roleAr: 'تخصيص قالب WordPress',
        roleEn: 'Custom WordPress theme',
        durationAr: 'شهر واحد',
        durationEn: '1 Month',
        challengeAr: 'الكاتب كان يعاني من بطء في لوحة التحكم وصعوبة في تنظيم المقالات.',
        challengeEn: 'The writer previously used a slow, overloaded theme that made the dashboard difficult to navigate and publishing new posts a frustrating process.',
        solutionAr: 'قمنا ببناء قالب خفيف مع بنية تصنيفات ووسوم واضحة وتجربة كتابة مبسطة.',
        solutionEn: 'We implemented a lightweight custom WordPress theme with a focus on performance, readability, and clear content taxonomy.',
        featuresAr: ['قالب خفيف وسريع', 'نظام تصنيفات ووسوم منظم', 'تهيئة لمشاركة الروابط على السوشال ميديا', 'إمكانية إضافة صفحات بيع رقمية مستقبلًا'],
        featuresEn: ['Fast, lightweight theme', 'Organized categories and tags', 'Optimized social sharing', 'Ready for future digital product sales'],
        images: ['https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop'],
        liveUrl: '#',
    },
];

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
    if (category === 'all') return projects;
    return projects.filter(p => p.category === category);
}

