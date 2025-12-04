'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import FinalCTA from '@/components/sections/FinalCTA';
import { ExternalLink, ArrowRight } from 'lucide-react';

// This would come from a database or API
const getProjectData = (slug: string, locale: string) => {
  if (slug === 'project-1') {
    return {
      title: locale === 'ar' ? 'نظام إدارة متقدم' : 'Advanced Management System',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      description: locale === 'ar'
        ? 'نظام إدارة شامل يساعد الشركات على تنظيم الطلبات والمخزون والمبيعات في منصة واحدة.'
        : 'An advanced management system that centralizes orders, inventory, and sales into a single, easy-to-use platform. The solution was designed for a growing company that had outgrown spreadsheets and manual coordination between departments. By connecting sales, stock, invoicing, and reporting in one place, the platform gives managers a real-time view of what is happening in the business and helps the team respond faster to customers and market changes.',
      domain: locale === 'ar' ? 'الشركات المتوسطة' : 'SMEs',
      role: locale === 'ar' ? 'تطوير كامل للنظام' : 'Full system development',
      technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
      duration: locale === 'ar' ? '3 أشهر' : '3 Months',
      challenge: locale === 'ar'
        ? 'الشركة كانت تستخدم أكثر من أداة لإدارة الطلبات والفواتير مما تسبب في ضياع البيانات وصعوبة المتابعة.'
        : 'The company relied on several disconnected tools and manual processes for handling orders, inventory, and invoicing. Data was often duplicated or missing, and it was almost impossible to understand the actual stock levels or daily sales without spending hours in spreadsheets. Management had no central dashboard to follow performance, and the team wasted time switching between systems and correcting mistakes. They needed a unified platform that would be stable, easy to train new staff on, and flexible enough to grow with the business.',
        : 'The company relied on multiple separate tools and manual handoffs for orders and invoicing, which caused data loss, reporting delays, and poor visibility into daily operations.',
      solution: locale === 'ar'
        ? 'قمنا بتجميع جميع العمليات في نظام مركزي مع لوحة تحكم تفاعلية وتقارير لحظية تساعد الإدارة في اتخاذ القرار.'
        : 'We unified all key operations into a central web system built with Laravel, Vue, and a responsive interface tailored to the client\'s workflow. The platform includes a role-based dashboard for managers, sales, and warehouse teams, with clear permissions to protect sensitive data. Orders, inventory movements, and invoices are now recorded in one place, and management can access real-time reports on top products, customer activity, and overall performance. As a result, the company reduced manual errors, gained a single source of truth for data, and created a solid base for future automation and integrations.',
      features: [
        locale === 'ar' ? 'لوحة تحكم تفاعلية للإدارة' : 'Interactive admin dashboard',
        locale === 'ar' ? 'تقارير لحظية للمبيعات والمخزون' : 'Real-time sales and inventory reports',
        locale === 'ar' ? 'صلاحيات متعددة للمستخدمين' : 'Role-based user permissions',
        locale === 'ar' ? 'تكامل مع نظام الفوترة' : 'Integration with billing system',
      ],
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
    };
  }

  if (slug === 'project-2') {
    return {
      title: locale === 'ar' ? 'تطبيق موبايل تجاري' : 'E-Commerce Mobile App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      description: locale === 'ar'
        ? 'تطبيق تجارة إلكترونية عبر الموبايل يوفر تجربة شراء سريعة مع تنبيهات فورية للحالة.'
        : 'A modern mobile e-commerce app that delivers a fast, frictionless shopping experience with real-time order updates. The client wanted to move beyond a traditional web store and meet customers where they spend most of their time: on their phones. The app was designed with a focus on speed, simple navigation, and a checkout flow that works smoothly even on slower connections, helping increase completed orders and repeat purchases.',
      domain: locale === 'ar' ? 'التجارة الإلكترونية' : 'E-commerce',
      role: locale === 'ar' ? 'تطوير تطبيقات موبايل' : 'Mobile app development',
      technologies: ['Flutter', 'Firebase', 'REST API'],
      duration: locale === 'ar' ? '4 أشهر' : '4 Months',
      challenge: locale === 'ar'
        ? 'العميل كان يعاني من معدلات تحويل منخفضة على الموقع التقليدي وعدم وضوح في متابعة الطلبات.'
        : 'The client had low conversion rates on their existing web store and no dedicated mobile experience for customers. Many visitors abandoned the purchase flow on small screens, and customer support spent a lot of time answering questions about order status. The business needed a mobile app that would make browsing products, adding items to cart, and completing payment feel quick and trustworthy, while also giving the internal team better visibility into orders and customer activity.',
      solution: locale === 'ar'
        ? 'أنشأنا تطبيق موبايل بواجهة بسيطة وسريعة مع دعم إشعارات فورية وتتبع مباشر لحالة الطلب.'
        : 'We built a cross-platform mobile app using Flutter, connected to a secure backend and payment gateway to handle orders, customers, and notifications in real time. The interface uses a clean information hierarchy, large touch targets, and a minimal number of screens so that users can complete a purchase in just a few steps. Push notifications keep customers updated about order confirmation, preparation, and delivery, which significantly reduced support tickets. The result is a reliable mobile channel that complements the existing website and supports the client\'s long-term growth strategy.',
      features: [
        locale === 'ar' ? 'تتبع مباشر لحالة الطلب' : 'Live order tracking',
        locale === 'ar' ? 'دفع إلكتروني آمن' : 'Secure online payments',
        locale === 'ar' ? 'تنبيهات فورية للعروض والطلبات' : 'Instant offers and order alerts',
        locale === 'ar' ? 'دعم متعدد اللغات' : 'Multi-language support',
      ],
      images: [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
    };
  }

  if (slug === 'project-3') {
    return {
      title: locale === 'ar' ? 'موقع شركة احترافي' : 'Professional Corporate Website',
      category: 'wordpress',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      description: locale === 'ar'
        ? 'موقع تعريفي لشركة يقدم صفحات مخصصة للخدمات، الفريق، والمدونة.'
        : 'A professional corporate website that presents the company\'s services, team, and story through carefully structured pages and a scalable blog. The client wanted a digital presence that would reflect their expertise and make it easy for potential customers to understand what they offer in just a few seconds. The site was built to be fast, secure, and easy for the marketing team to manage without needing a developer for everyday content changes.',
      domain: locale === 'ar' ? 'الشركات والخدمات' : 'Corporate services',
      role: locale === 'ar' ? 'تطوير واجهات وإدارة محتوى' : 'Frontend & CMS implementation',
      technologies: ['WordPress', 'PHP', 'MySQL'],
      duration: locale === 'ar' ? '2 شهرين' : '2 Months',
      challenge: locale === 'ar'
        ? 'الشركة كانت تستخدم موقع قديم غير متوافق مع الجوال وأداءه ضعيف في محركات البحث.'
        : 'The company was relying on an outdated website that did not work well on mobile devices and loaded slowly on desktop. The content structure was confusing, service pages were hard to find, and the site had several on-page SEO problems that made it difficult to appear for relevant keywords. The team also struggled to publish new articles or update service descriptions without breaking the layout, which limited their ability to communicate with clients online.',
      solution: locale === 'ar'
        ? 'بنينا موقعًا جديدًا متجاوبًا مع تحسين SEO وهيكلة واضحة للمحتوى لزيادة الثقة والتحويل.'
        : 'We redesigned the site from the ground up using WordPress, implementing a clean information architecture with dedicated service pages, team profiles, and a blog hub. The new theme is fully responsive, optimized for speed, and equipped with flexible content blocks that allow the marketing team to build new pages without touching code. We also applied on-page SEO best practices such as semantic headings, structured metadata, and fast-loading images. This resulted in a more trustworthy brand presence, longer session times, and an easier path for visitors to contact the sales team.',
      features: [
        locale === 'ar' ? 'تصميم متجاوب مع جميع الأجهزة' : 'Fully responsive design',
        locale === 'ar' ? 'لوحة تحكم سهلة للمحتوى' : 'Easy-to-use content CMS',
        locale === 'ar' ? 'تحسين لمحركات البحث' : 'On-page SEO optimization',
        locale === 'ar' ? 'مدونة لزيادة الزيارات العضوية' : 'Blog for organic traffic',
      ],
      images: [
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
    };
  }

  if (slug === 'project-4') {
    return {
      title: locale === 'ar' ? 'منصة تعليمية' : 'Learning Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      description: locale === 'ar'
        ? 'منصة تعليمية تقدم دورات أونلاين مع نظام متابعة للتقدم وتقارير للطلاب.'
        : 'An online learning platform that brings courses, student progress tracking, and performance reporting into a single experience. The organisation wanted to move away from scattered tools and offer learners a professional portal where they could watch lessons, complete assignments, and monitor their own progress. The platform needed to support different course types, flexible content formats, and clear analytics for instructors and administration.',
      domain: locale === 'ar' ? 'التعليم والتدريب' : 'Education & Training',
      role: locale === 'ar' ? 'تطوير المنصة الكاملة' : 'Full platform development',
      technologies: ['React', 'Node.js', 'MongoDB'],
      duration: locale === 'ar' ? '5 أشهر' : '5 Months',
      challenge: locale === 'ar'
        ? 'المؤسسة كانت تستخدم أدوات متفرقة لإدارة الدورات مما سبب تشتتًا للطلاب.'
        : 'The organization previously used multiple unconnected tools for hosting videos, sending materials, collecting assignments, and tracking results. Students had to jump between platforms, often losing track of where they left off or missing important announcements. Instructors lacked a central place to manage content and see how learners were progressing. This fragmentation made it difficult to scale the training program or maintain a consistent level of quality across different courses.',
      solution: locale === 'ar'
        ? 'قمنا ببناء منصة موحدة لإدارة الدورات، تسجيل الطلاب، والمتابعة مع لوحة تقارير للإدارة.'
        : 'We built a unified learning platform using React and Node.js, designed around clear journeys for students, instructors, and administrators. Courses are organised into modules and lessons with progress indicators, quizzes, and completion certificates where needed. A central dashboard allows staff to monitor engagement, identify struggling learners, and refine content based on real usage data. By consolidating everything into one system, the organisation reduced manual work, improved the learning experience, and gained a strong foundation for future online programs.',
      features: [
        locale === 'ar' ? 'نظام دورات مع وحدات ودروس' : 'Modular course system',
        locale === 'ar' ? 'متابعة تقدم الطالب' : 'Student progress tracking',
        locale === 'ar' ? 'اختبارات وتقارير أداء' : 'Quizzes and performance reports',
        locale === 'ar' ? 'دعم الدفع الإلكتروني للدورات' : 'Online payments for courses',
      ],
      images: [
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
    };
  }

  if (slug === 'project-5') {
    return {
      title: locale === 'ar' ? 'تطبيق توصيل' : 'Delivery App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      description: locale === 'ar'
        ? 'تطبيق توصيل يعتمد على تتبع الخرائط لتسليم الطلبات بسرعة ووضوح.'
        : 'A modern delivery app that uses live maps and clear status updates to make every order transparent for both customers and dispatchers. The client wanted to replace phone-based coordination with a digital solution that could handle orders, drivers, and routes in a structured way. The app needed to feel familiar to end users, while giving the operations team a much deeper view of what was happening in the field at any moment.',
      domain: locale === 'ar' ? 'الخدمات اللوجستية' : 'Logistics',
      role: locale === 'ar' ? 'تطوير واجهات وتجربة مستخدم' : 'Mobile UX & frontend',
      technologies: ['Flutter', 'Google Maps', 'Firebase'],
      duration: locale === 'ar' ? '4 أشهر' : '4 Months',
      challenge: locale === 'ar'
        ? 'شركة التوصيل لم يكن لديها نظام موحد لتتبع السائقين والطلبات.'
        : 'The delivery company had no unified digital system to track drivers, active orders, or delivery times. Orders were received over the phone or messaging apps, and important details were sometimes lost or recorded incorrectly. Customers had no reliable way to know where their driver was or when their order would arrive, which affected trust and repeat business. The management team also lacked data to optimise routes, measure performance, or plan staffing during peak hours.',
      solution: locale === 'ar'
        ? 'صممنا تطبيقًا يربط بين العميل، السائق، ولوحة متابعة للمشرف مع خريطة مباشرة.'
        : 'We designed and developed a Flutter-based app that connects customers, drivers, and dispatchers through a shared real-time map. Customers can place and track orders from their phones, while drivers receive clear pickup and drop-off instructions and can update status with a single tap. A web-based control panel shows dispatchers all active orders, driver locations, and estimated delivery times, enabling smarter decisions and faster support. This end-to-end solution reduced missed deliveries, improved customer satisfaction, and gave the company actionable data to refine its logistics operations.',
      features: [
        locale === 'ar' ? 'تتبع مباشر لموقع السائق' : 'Driver live location tracking',
        locale === 'ar' ? 'إشعارات لحالة الطلب' : 'Status notifications',
        locale === 'ar' ? 'تقييم الخدمة بعد التسليم' : 'Post-delivery rating system',
        locale === 'ar' ? 'تحديد العنوان عبر الخرائط' : 'Address selection via maps',
      ],
      images: [
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
    };
  }

  if (slug === 'project-6') {
    return {
      title: locale === 'ar' ? 'مدونة شخصية' : 'Personal Blog',
      category: 'wordpress',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
      description: locale === 'ar'
        ? 'مدونة شخصية تركّز على كتابة المحتوى بسرعة مع تجربة قراءة مريحة.'
        : 'A personal blog optimised for fast publishing, clean typography, and a distraction-free reading experience. The client needed a platform that would make it easy to write, categorise, and share content regularly without technical complexity. At the same time, the site had to be performant and visually consistent across articles to strengthen the writer\'s personal brand and keep readers engaged for longer sessions.',
      domain: locale === 'ar' ? 'المحتوى الشخصي' : 'Personal content',
      role: locale === 'ar' ? 'تخصيص قالب WordPress' : 'Custom WordPress theme',
      technologies: ['WordPress', 'Elementor', 'WooCommerce'],
      duration: locale === 'ar' ? 'شهر واحد' : '1 Month',
      challenge: locale === 'ar'
        ? 'الكاتب كان يعاني من بطء في لوحة التحكم وصعوبة في تنظيم المقالات.'
        : 'The writer previously used a slow, overloaded theme that made the dashboard difficult to navigate and publishing new posts a frustrating process. Articles were poorly organised, with categories and tags used inconsistently, which made it hard for readers to discover related content. The client also wanted the option to later add digital products and simple landing pages without needing a complete redesign.',
      solution: locale === 'ar'
        ? 'قمنا ببناء قالب خفيف مع بنية تصنيفات ووسوم واضحة وتجربة كتابة مبسطة.'
        : 'We implemented a lightweight custom WordPress theme with a focus on performance, readability, and clear content taxonomy. Posts are grouped into well-defined categories and tags, and the editor experience was simplified so the writer can focus on ideas rather than formatting. The layout gives each article a consistent visual structure, with support for images, quotes, and embedded media where needed. The site is also technically prepared for future monetisation, such as adding digital products or premium content pages, without requiring a full rebuild.',
      features: [
        locale === 'ar' ? 'قالب خفيف وسريع' : 'Fast, lightweight theme',
        locale === 'ar' ? 'نظام تصنيفات ووسوم منظم' : 'Organized categories and tags',
        locale === 'ar' ? 'تهيئة لمشاركة الروابط على السوشال ميديا' : 'Optimized social sharing',
        locale === 'ar' ? 'إمكانية إضافة صفحات بيع رقمية مستقبلًا' : 'Ready for future digital product sales',
      ],
      images: [
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
    };
  }

  return null;
};

export default function ProjectDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const locale = useLocale();
  const project = getProjectData(slug, locale);
  const t = useTranslations();

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge text={project.category} className="mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                {project.title} - {locale} - {slug}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <Button href={project.liveUrl} variant="primary" icon={<ExternalLink className="w-5 h-5" />}>
                    {locale === 'ar' ? 'زيارة المشروع' : 'Visit Project'}
                  </Button>
                )}
                <Button href={`/${locale}/contact`} variant="secondary" icon={<ArrowRight className="w-5 h-5" />}>
                  {locale === 'ar' ? 'أريد مشروع مشابه' : 'I Want Similar Project'}
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Project Summary */}
      <section className="py-12 bg-gray-50 dark:bg-[#0E0F11]">
        <Container>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                {locale === 'ar' ? 'المجال' : 'Domain'}
              </h3>
              <p className="text-lg font-bold text-gray-900 dark:text-white">{project.domain}</p>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                {locale === 'ar' ? 'الدور' : 'Role'}
              </h3>
              <p className="text-lg font-bold text-gray-900 dark:text-white">{project.role}</p>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                {locale === 'ar' ? 'التقنيات' : 'Technologies'}
              </h3>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {project.technologies.join(', ')}
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                {locale === 'ar' ? 'المدة' : 'Duration'}
              </h3>
              <p className="text-lg font-bold text-gray-900 dark:text-white">{project.duration}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenge */}
      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            {locale === 'ar' ? 'التحدي' : 'The Challenge'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.challenge}
          </p>
        </Container>
      </section>

      {/* Solution */}
      <section className="py-20 bg-gray-50 dark:bg-[#0E0F11]">
        <Container>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            {locale === 'ar' ? 'الحل' : 'The Solution'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            {project.solution}
          </p>
          
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {locale === 'ar' ? 'الميزات الرئيسية' : 'Key Features'}
          </h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#7B61FF] flex items-center justify-center text-white text-sm flex-shrink-0">
                  ✓
                </span>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}

