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

        descriptionAr: `
نظام الإدارة المتقدم هو منصة شاملة طُوّرت خصيصًا للشركات المتوسطة التي تحتاج إلى تنظيم عملياتها اليومية من مبيعات، مشتريات، مخزون، فواتير، وتقارير تشغيلية. قبل تطوير النظام، كانت الشركة تعتمد على عدة برامج منفصلة بالإضافة إلى جداول Excel مما تسبب في تكرار البيانات وغياب المتابعة الدقيقة. النظام الجديد قدم بيئة موحدة وسهلة الاستخدام، مع واجهة تفاعلية تعمل على جميع الأجهزة وتُظهر المعلومات الضرورية بشكل فوري للمستخدم حسب صلاحياته. تم بناء المنصة باستخدام Laravel وVue.js لضمان أداء عالي واستقرار طويل المدى.  
يتيح النظام إدارة الصلاحيات، مراقبة الأنشطة، وإصدار تقارير تفصيلية تساعد الإدارة على اتخاذ قرارات مبنية على بيانات دقيقة. كما يدعم النظام التكامل مع أدوات الفوترة الإلكترونية وأنظمة الدفع، بالإضافة إلى لوحة مراقبة لحظية توضح مؤشرات الأداء. يعتبر المشروع نقلة نوعية للشركة من إدارة تقليدية مجزأة إلى نظام متكامل يوفر وقت الموظفين ويقلّل الأخطاء التشغيلية بنسبة كبيرة.
        `,

        descriptionEn: `
The Advanced Management System is a fully integrated platform designed for SMEs that require a unified environment to manage operations such as sales, purchasing, inventory, invoicing, and daily reporting. Prior to development, the company relied on multiple disconnected tools and spreadsheets, which led to duplicated records and poor visibility across departments.  
The new system delivers an interactive and responsive interface built with Laravel and Vue.js, offering real-time reports, permission-based dashboards, and a centralized workflow for all teams. By consolidating critical business functions into a single platform, the company gained full clarity over stock movement, financial activity, and staff performance. The system supports billing integration, activity monitoring, and automated report generation, enabling executives to make informed decisions with significantly less manual effort. The project transformed the company’s operational flow from a fragmented manual setup into a stable, data-driven management ecosystem.
        `,

        technologies: ['Laravel', 'Vue.js', 'MySQL'],
        domainAr: 'الشركات المتوسطة',
        domainEn: 'SMEs',
        roleAr: 'تطوير كامل للنظام',
        roleEn: 'Full system development',

        durationAr: '3 أشهر',
        durationEn: '3 Months',

        challengeAr: `
الشركة كانت تعتمد على أكثر من أداة لإدارة الطلبات والفواتير والمخزون، مما سبّب فوضى في البيانات وصعوبة في معرفة الوضع الحقيقي للمبيعات أو الكميات المتوفرة. كما أنّ غياب التقارير المركزية جعل من الصعب على الإدارة تتبع الأداء اليومي. كذلك واجه الموظفون صعوبة في التنقل بين الأدوات المختلفة، مما تسبب في ضياع الوقت وكثرة الأخطاء.
        `,

        challengeEn: `
The company operated using multiple disconnected tools and manual processes, making it nearly impossible to maintain accurate data across orders, inventory, and invoicing. Essential information was scattered across Excel sheets and outdated systems. Managers struggled to track real performance, and employees wasted valuable time switching between platforms. The lack of centralized reporting led to unclear decision-making and operational inefficiencies across departments.
        `,

        solutionAr: `
قمنا بتجميع جميع العمليات في نظام مركزي متكامل يوفر لوحة تحكم تفاعلية وتقارير لحظية توضح أداء المبيعات والمخزون، مع دعم كامل للصلاحيات. تم تصميم النظام ليكون سهل الاستخدام لجميع الأقسام، مع ربط مباشر للفواتير، تنبيهات ذكية، وأتمتة لعدد كبير من المهام التي كانت تُنفذ يدويًا. بفضل النظام الجديد، أصبحت الشركة قادرة على مراقبة مخزونها بدقة، معرفة الطلبات في كل مرحلة، وإصدار تقارير مالية وتشغيلية بنقرة واحدة.
        `,

        solutionEn: `
We unified all core operations into a centralized management system featuring real-time dashboards, automated reports, and permission-based workflows. The platform was tailored to the company’s internal processes and included direct billing integration, notification systems, and automated routines that replaced repetitive manual tasks. With the new platform in place, managers gained full transparency over stock, daily sales, and employee actions. The company now operates in a fully synchronized environment where decisions are supported by accurate, up-to-date data.
        `,

        featuresAr: ['لوحة تحكم تفاعلية للإدارة', 'تقارير لحظية للمبيعات والمخزون', 'صلاحيات متعددة للمستخدمين', 'تكامل مع نظام الفوترة'],
        featuresEn: ['Interactive admin dashboard', 'Real-time sales and inventory reports', 'Role-based user permissions', 'Integration with billing system'],

        images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'],
        liveUrl: '#',
    },

    /* ---------------------------------------------------------
       PROJECT 2 – Updated Content (300–350 words)
    --------------------------------------------------------- */

    {
        slug: 'project-2',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
        titleAr: 'تطبيق موبايل تجاري',
        titleEn: 'E-Commerce Mobile App',
        category: 'mobile',

        descriptionAr: `
تطبيق التجارة الإلكترونية الذي قمنا بتطويره يهدف إلى منح العملاء تجربة شراء سلسة وسريعة عبر الهاتف، خصوصًا بعدما لاحظ العميل أن متجره الإلكتروني التقليدي لا يحقق معدلات تحويل جيدة وكان بطيئًا في الاستجابة. من خلال دراسة رحلة المستخدم الحالية، قمنا بإعادة تصميم كامل لتجربة التسوق، بدءًا من تصفح المنتجات وحتى إتمام الدفع وتتبع حالة الطلب.  
التطبيق مبني باستخدام Flutter لتوفير أداء ثابت على Android وiOS مع واجهة حديثة وسهلة الاستخدام. كما تم بناء API آمن لربط النظام بقاعدة بيانات Firebase وإدارة المستخدمين، الطلبات، والمدفوعات. دعمنا التطبيق بنظام إشعارات فورية يرسل تنبيهات للعروض الجديدة أو تغيرات حالة الطلب، مما يحسن تجربة المستخدم ويزيد من معدل العودة للشراء.  
ساعد التطبيق الشركة في رفع نسبة المبيعات وتقليل مشاكل التأخير في متابعة الطلبات عبر دمج كل الإجراءات في تطبيق واحد. كما تم إضافة دعم متعدد اللغات ليتناسب مع الأسواق المستهدفة ويوفر تجربة مخصصة للمستخدمين.
        `,

        descriptionEn: `
The e-commerce mobile app was designed to give customers a fast and intuitive shopping experience, especially after the client observed low conversion rates on their traditional web store. We analyzed the existing user journey and redesigned the full purchase flow for mobile responsiveness and convenience—covering browsing, checkout, payment, and order tracking.  
Built with Flutter, the app delivers consistent performance on both Android and iOS with a modern interface that feels natural and easy to navigate. The backend integrates securely with Firebase to manage authentication, inventory, customer profiles, payments, and notifications.  
We implemented real-time push notifications for promotions and order status updates, significantly improving customer engagement and reducing abandoned carts. With multi-language support and a streamlined checkout process, the app helped the brand increase sales and adopt a highly efficient digital order management process.
        `,

        technologies: ['Flutter', 'Firebase', 'REST API'],
        domainAr: 'التجارة الإلكترونية',
        domainEn: 'E-commerce',
        roleAr: 'تطوير تطبيقات موبايل',
        roleEn: 'Mobile app development',

        durationAr: '4 أشهر',
        durationEn: '4 Months',

        challengeAr: `
المتجر الإلكتروني لم يكن يوفر تجربة تسوق مناسبة على الهواتف، وكانت معدلات التحويل منخفضة لعدم وجود تطبيق مخصص. كما أن العميل لم يكن قادرًا على إدارة حالة الطلبات بوضوح بسبب غياب الإشعارات الفورية ونظام تتبع الطلب. هذا الأمر تسبب في تأخير في عمليات التجهيز والتوصيل.
        `,

        challengeEn: `
The web store lacked an optimized mobile experience, leading to low conversions and frequent drop-offs during checkout. Without a dedicated app, customers had no clear way to track their orders, and the business had no mechanism to send real-time updates, resulting in confusion and delays across the fulfillment process.
        `,

        solutionAr: `
قمنا بتطوير تطبيق عالي الأداء باستخدام Flutter، مع واجهة شراء سهلة وسريعة، ودعم لتتبع الطلب بشكل لحظي. تم ربط التطبيق ببوابة دفع آمنة وFirebase لإدارة الحسابات، الطلبات، وتنبيهات العروض. بفضل هذا الحل، تمكن العميل من تحسين تجربة المستخدم وزيادة المبيعات بشكل ملحوظ.
        `,

        solutionEn: `
We built a high-performance Flutter application connected to a secure backend and payment gateway. The solution included real-time order tracking, instant push notifications, and a simplified checkout experience. The new system significantly improved the customer journey and enabled the business to scale its online sales more efficiently.
        `,

        featuresAr: ['تتبع مباشر لحالة الطلب', 'دفع إلكتروني آمن', 'تنبيهات فورية للعروض والطلبات', 'دعم متعدد اللغات'],
        featuresEn: ['Live order tracking', 'Secure online payments', 'Instant offers and order alerts', 'Multi-language support'],

        images: ['https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'],
        liveUrl: '#',
    },

    /* ---------------------------------------------------------
       PROJECT 3 – (Optimized With 300–350 words)
    --------------------------------------------------------- */

    {
        slug: 'project-3',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
        titleAr: 'موقع شركة احترافي',
        titleEn: 'Professional Corporate Website',
        category: 'wordpress',

        descriptionAr: `
تم تطوير هذا الموقع لأحدى الشركات التي كانت تعتمد على موقع قديم بطيء وغير متوافق مع الجوال، مما أثر على حضورها الرقمي وثقة العملاء. بدأ المشروع بتحليل كامل لهيكلة المحتوى الحالية وفهم الخدمات التي تقدمها الشركة، ومن ثم إعادة بناء الموقع باستخدام WordPress ليوفر مرونة كاملة في إدارة المحتوى.  
ركزنا في التصميم على البساطة والوضوح، مع إبراز هوية الشركة وتقديم معلوماتها بطريقة منظمة. تم تحسين سرعة الموقع بشكل كبير عبر إزالة الإضافات غير الضرورية واستخدام قالب مخصص خفيف. كما تم تفعيل أفضل ممارسات الـSEO، بما يشمل تحسين العناوين والوصف، تنظيم الروابط، وإنشاء صفحات خدمات مهيكلة تساعد محركات البحث على فهم نشاط الشركة بسهولة.  
أضفنا كذلك قسم المدونة لزيادة الزيارات العضوية من خلال نشر مقالات مفيدة مرتبطة بمجال الشركة، مما يعزز ثقة العملاء المحتملين ويقوي العلامة التجارية.
        `,

        descriptionEn: `
This corporate website was built for a company that previously relied on an outdated and slow site that performed poorly on mobile devices. We began by analyzing their existing content structure and understanding their core services, then rebuilt the entire site using WordPress with a lightweight custom theme.  
The design emphasizes clarity, simplicity, and a strong brand presence. We optimized the site for speed by removing unnecessary plugins and implementing clean, efficient templates. A full set of SEO improvements was applied, including optimized metadata, structured service pages, improved internal linking, and a blog hub designed to attract organic traffic.  
With its new responsive layout and optimized performance, the company now enjoys stronger online visibility, higher engagement, and a website that properly reflects its professionalism.
        `,

        technologies: ['WordPress', 'PHP', 'MySQL'],
        domainAr: 'الشركات والخدمات',
        domainEn: 'Corporate services',
        roleAr: 'تطوير واجهات وإدارة محتوى',
        roleEn: 'Frontend & CMS implementation',
        durationAr: '2 شهرين',
        durationEn: '2 Months',

        challengeAr: `
الموقع القديم لم يكن متوافقًا مع الهواتف وكان بطيئًا للغاية، مما أثر على تجربة المستخدم وأدى إلى فقدان العملاء المحتملين. كما لم يكن يحتوي على صفحات خدمات واضحة أو بنية محتوى منظمة تساعد في تحسين الظهور في محركات البحث.
        `,

        challengeEn: `
The previous website was slow, outdated, and not mobile-friendly, leading to poor user experience and low search visibility. It lacked structured service pages, proper metadata, and a coherent content architecture.
        `,

        solutionAr: `
قمنا بإعادة بناء الموقع بالكامل، مع قالب سريع ومتجاوب وهيكلة صفحات واضحة، بالإضافة إلى تحسين شامل للـSEO. تم تفعيل قسم المدونة وإضافة نظام تصنيفات ووسوم منظم، مما ساعد الشركة في الحصول على زيارات عضوية أفضل.
        `,

        solutionEn: `
We redesigned the entire site, implemented a lightweight responsive theme, and integrated full on-page SEO improvements. We added a structured blog system to support organic growth and positioned the site as a professional digital presence for the client.
        `,

        featuresAr: ['تصميم متجاوب مع جميع الأجهزة', 'لوحة تحكم سهلة للمحتوى', 'تحسين لمحركات البحث', 'مدونة لزيادة الزيارات العضوية'],
        featuresEn: ['Fully responsive design', 'Easy-to-use content CMS', 'On-page SEO optimization', 'Blog for organic traffic'],

        images: ['https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop'],
        liveUrl: '#',
    },

    /* ---------------------------------------------------------
       PROJECT 4 – (SEO Rich 300+ Words)
    --------------------------------------------------------- */

    {
        slug: 'project-4',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
        titleAr: 'منصة تعليمية',
        titleEn: 'Learning Platform',
        category: 'web',

        descriptionAr: `
تم تطوير هذه المنصة التعليمية لتزويد المؤسسات التعليمية والطلاب ببيئة متكاملة تسهل عملية التعلم والتدريب. قبل بناء النظام، كانت المؤسسة تستخدم أدوات مختلفة لإرسال المواد، تسليم الواجبات، متابعة الحضور، وعرض النتائج، مما أدى إلى تشتت المعلومات وصعوبة التواصل بين الطلاب والمحاضرين.  
تعتمد المنصة الجديدة على نظام دورات منظم يحتوي على وحدات ودروس، مع إمكانية رفع الفيديوهات، تقديم الامتحانات، وتتبع تقدم الطالب بشكل تفاعلي. تم بناء النظام باستخدام React وNode.js لتوفير أداء عالي وتجربة مستخدم سلسة سواء على الهاتف أو الكمبيوتر.  
تحتوي المنصة على لوحة إدارة قوية توفر تقارير عن تقدم الطلاب، نسب الحضور، درجات الامتحانات، والمحتوى الأكثر تفاعلًا. كما تدعم الدفع الإلكتروني لتسجيل الطلاب مباشرة في الدورات المناسبة.  
ساهمت المنصة في تحسين التواصل بين الأطراف، وتوفير تجربة تعليمية أكثر احترافية وحداثة مقارنة بالطرق التقليدية.
        `,

        descriptionEn: `
This modern learning platform was built to give educational institutions a unified environment for managing courses, students, instructors, and digital learning content. Previously, the organization relied on multiple disconnected services for hosting videos, sharing files, collecting assignments, and tracking progress, leading to fragmented data and poor user experience.  
The platform features a modular course system with lessons, quizzes, and progress tracking. Built on React and Node.js, it delivers a smooth and responsive experience across devices. Administrators gain access to rich reporting tools that show student engagement, performance metrics, attendance levels, and course activity.  
With integrated online payments, students can enroll directly into courses. The system greatly improved the institution’s operational efficiency, centralized communication, and elevated the learning experience to a modern, scalable digital format.
        `,

        technologies: ['React', 'Node.js', 'MongoDB'],
        domainAr: 'التعليم والتدريب',
        domainEn: 'Education & Training',
        roleAr: 'تطوير المنصة الكاملة',
        roleEn: 'Full platform development',
        durationAr: '5 أشهر',
        durationEn: '5 Months',

        challengeAr: `
المؤسسة كانت تعتمد على مجموعة أدوات منفصلة لإدارة الدورات، مما تسبب في ضياع المعلومات وصعوبة على الطلاب متابعة تقدمهم بشكل واضح. كما كان المحاضرون يواجهون تحديات في رفع المواد وتنظيم الاختبارات وعدم توفر تقارير دقيقة.
        `,

        challengeEn: `
The organization previously used uncoordinated tools for video hosting, file sharing, assignments, and exams, resulting in scattered workflows and limited visibility over student performance. Instructors lacked a structured system for managing lessons and assessments.
        `,

        solutionAr: `
قمنا ببناء منصة موحدة تضم نظام دورات، دروس، اختبارات، ولوحة تقارير للإدارة. تم تصميم الواجهة لتكون سهلة الاستخدام وتحفّز التفاعل. كما تمت إضافة الدفع الإلكتروني والربط مع أنظمة خارجية عند الحاجة.
        `,

        solutionEn: `
We built an all-in-one learning platform with structured courses, quizzes, reports, payments, and communication tools. The modern UI and efficient backend architecture enabled the institution to streamline all educational processes in one place.
        `,

        featuresAr: ['نظام دورات مع وحدات ودروس', 'متابعة تقدم الطالب', 'اختبارات وتقارير أداء', 'دعم الدفع الإلكتروني للدورات'],
        featuresEn: ['Modular course system', 'Student progress tracking', 'Quizzes and performance reports', 'Online payments for courses'],

        images: ['https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'],
        liveUrl: '#',
    },

    /* ---------------------------------------------------------
       PROJECT 5 – (Delivery App - SEO Expanded)
    --------------------------------------------------------- */

    {
        slug: 'project-5',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
        titleAr: 'تطبيق توصيل',
        titleEn: 'Delivery App',
        category: 'mobile',

        descriptionAr: `
تطبيق التوصيل الذي تم تطويره يهدف إلى حل مشكلة غياب نظام تتبع موحد للسائقين والطلبات، وهو تحدٍ شائع لدى شركات الخدمات اللوجستية. قبل المشروع، كانت الشركة تواجه صعوبة في معرفة موقع السائقين، مدة التوصيل، وحالة الطلبات في الوقت الفعلي.  
باستخدام Flutter، قمنا ببناء تطبيق سريع يربط بين العميل، السائق، والمشرف عبر خريطة تفاعلية في الزمن الحقيقي. يستطيع العميل متابعة تقدم الطلب لحظة بلحظة، بينما يحصل السائق على مسار واضح للتوصيل. أما المشرف، فتم تزويده بلوحة متابعة تحتوي على جميع الطلبات النشطة، إضافة إلى إمكانية مراقبة الأداء العام.  
التطبيق يدعم الإشعارات الفورية، الدفع الإلكتروني، وتقييم الخدمة بعد التوصيل. كما تم توفير نظام تسجيل سهل يعتمد على Firebase لضمان أمان البيانات وسلاسة المستخدم. بفضل التطبيق، تمكنت الشركة من تحسين مستوى الخدمة، تقليل التأخير، وتوفير تجربة احترافية للمستخدمين.
        `,

        descriptionEn: `
The delivery app was created to provide a unified real-time tracking system for customers, drivers, and dispatch supervisors. Prior to the project, the company lacked visibility over active orders, driver locations, and delivery timing, resulting in operational inefficiencies.  
Built with Flutter, the app provides a seamless cross-platform experience with an integrated live map that synchronizes all parties. Customers can track their order step-by-step, drivers receive optimized delivery routes, and supervisors gain access to a full monitoring dashboard.  
The platform includes real-time notifications, secure payments, post-delivery ratings, and Firebase-based authentication for a streamlined onboarding process. The app significantly improved delivery reliability and customer satisfaction.
        `,

        technologies: ['Flutter', 'Google Maps', 'Firebase'],
        domainAr: 'الخدمات اللوجستية',
        domainEn: 'Logistics',
        roleAr: 'تطوير واجهات وتجربة مستخدم',
        roleEn: 'Mobile UX & frontend',

        durationAr: '4 أشهر',
        durationEn: '4 Months',

        challengeAr: `
لم يكن لدى الشركة آلية لمعرفة مواقع السائقين أو متابعة الطلبات بدقة، مما أدى لتأخر عمليات التوصيل وعدم رضا العملاء. كما لم يكن هناك نظام إشعارات أو تقارير تفاعلية تساعد الإدارة في المتابعة.
        `,

        challengeEn: `
The company lacked a system to monitor drivers or track orders accurately. Delivery delays were frequent, and customers had no visibility on their orders. The absence of real-time notifications limited communication and efficiency.
        `,

        solutionAr: `
قمنا بإنشاء تطبيق متكامل يربط جميع الأطراف بخريطة مباشرة وإشعارات فورية. تم تصميم الواجهات لتكون بسيطة وسهلة، مع توفير تحكم كامل للمشرفين ومعلومات دقيقة للعملاء.
        `,

        solutionEn: `
We built an integrated Flutter application featuring a live interactive map, instant notifications, secure payments, and a monitoring panel. The result was a streamlined and highly efficient delivery workflow.
        `,

        featuresAr: ['تتبع مباشر لموقع السائق', 'إشعارات لحالة الطلب', 'تقييم الخدمة بعد التسليم', 'تحديد العنوان عبر الخرائط'],
        featuresEn: ['Driver live location tracking', 'Status notifications', 'Post-delivery rating system', 'Address selection via maps'],

        images: ['https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop'],
        liveUrl: '#',
    },

    /* ---------------------------------------------------------
       PROJECT 6 – (Personal Blog – SEO Improved)
    --------------------------------------------------------- */

    {
        slug: 'project-6',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
        titleAr: 'مدونة شخصية',
        titleEn: 'Personal Blog',
        category: 'wordpress',

        descriptionAr: `
المدونة الشخصية تم تطويرها لكاتب يرغب في منصة سريعة وعصرية تساعده في نشر مقالاته وتنظيم المحتوى بسهولة. كان الموقع القديم يعاني من بطء شديد بسبب كثرة الإضافات وثقل القالب المستخدم، مما أثر على تجربة الكتابة والنشر.  
قمنا بتطوير قالب مخصص خفيف يعتمد على أفضل ممارسات الأداء. تم تنظيم التصنيفات والوسوم بطريقة واضحة لتسهيل إدارة المقالات وزيادة فرص الظهور في محركات البحث. كما تم إضافة تحسينات لمشاركة الروابط على السوشال ميديا وصور الغلاف لتوفير مظهر احترافي عند مشاركة المقالات.  
تم تصميم لوحة كتابة بسيطة وسريعة، مع دعم كامل للخطوط العربية والإنجليزية. بفضل هذا النظام، أصبح الكاتب قادرًا على نشر المحتوى بسهولة، مع أداء مرتفع وسرعة في تحميل الصفحات، مما رفع عدد الزيارات بنسبة ملحوظة.
        `,

        descriptionEn: `
This personal blog was developed for a writer seeking a fast, modern, and well-structured platform for publishing articles. The previous site suffered from slow performance due to bloated plugins and a heavy theme.  
We created a lightweight custom WordPress theme focused on performance, clarity, and readability. Categories and tags were reorganized to improve SEO and make content easier to manage. Social sharing previews and optimized cover images were added to strengthen the blog’s appearance across platforms.  
A simplified writing interface was designed to help the author publish content quickly. With improved loading speed and optimized structure, the blog now delivers a smooth reading experience and supports future expansion into selling digital products.
        `,

        technologies: ['WordPress', 'Elementor', 'WooCommerce'],
        domainAr: 'المحتوى الشخصي',
        domainEn: 'Personal content',
        roleAr: 'تخصيص قالب WordPress',
        roleEn: 'Custom WordPress theme',
        durationAr: 'شهر واحد',
        durationEn: '1 Month',

        challengeAr: `
واجه الكاتب صعوبة في تنظيم المقالات وتأخرًا في تحميل الصفحات بسبب كثرة الإضافات غير الضرورية، مما أثر على ترتيب الموقع وتجربة المستخدم.
        `,

        challengeEn: `
The writer struggled with slow page loading, poor content organization, and an overloaded theme that complicated the publishing process and negatively affected search ranking.
        `,

        solutionAr: `
قمنا ببناء قالب مخصص خفيف مع نظام تصنيفات واضح وتجربة كتابة سلسة، بالإضافة إلى تحسينات للـSEO ومشاركة الروابط. أصبح الموقع أسرع وأكثر تنظيمًا وملائمة للتوسع.
        `,

        solutionEn: `
We developed a lightweight custom theme with a clear taxonomy structure, optimized SEO, and a streamlined writing interface. The result was a faster, cleaner, and more scalable blogging platform.
        `,

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

