/** @type {import('next-sitemap').IConfig} */
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  output: 'public',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 5000,

  // مهم جدًا للغات
  transform: async (config, path) => {
    return {
      loc: `${process.env.NEXT_PUBLIC_SITE_URL}${path}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `${process.env.NEXT_PUBLIC_SITE_URL}/en`,
          hreflang: 'en',
        },
        {
          href: `${process.env.NEXT_PUBLIC_SITE_URL}/ar`,
          hreflang: 'ar',
        },
      ],
    };
  },

  // الصفحات التي تريد تضمينها يدويًا
  additionalPaths: async (config) => {
    return [
      { loc: '/ar', changefreq: 'monthly', priority: 1.0 },
      { loc: '/en', changefreq: 'monthly', priority: 1.0 },

      { loc: '/ar/services', changefreq: 'monthly', priority: 0.9 },
      { loc: '/en/services', changefreq: 'monthly', priority: 0.9 },

      { loc: '/ar/about', changefreq: 'monthly', priority: 0.9 },
      { loc: '/en/about', changefreq: 'monthly', priority: 0.9 },

      { loc: '/ar/contact', changefreq: 'monthly', priority: 0.9 },
      { loc: '/en/contact', changefreq: 'monthly', priority: 0.9 },

      { loc: '/ar/portfolio', changefreq: 'monthly', priority: 0.9 },
      { loc: '/en/portfolio', changefreq: 'monthly', priority: 0.9 },
    ];
  },
  async redirects() {
    return [
      {
        source: '/sitemap.xml',
        has: [{ type: 'host', value: '(.*)' }],
        destination: 'https://sirbit-website.vercel.app/sitemap.xml',
        permanent: true,
      },
    ];
  },
};
