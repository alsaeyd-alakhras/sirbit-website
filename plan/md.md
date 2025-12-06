# تحسينات مشروع Sirbit على Next.js – النسخة النهائية

> **هذا الملف مخصص لتحسين مشروع Sirbit على Next.js، اعتمادًا على التطويرات التي تمت في نسخة Vue، لكن مطبّق الآن بشكل كامل وصحيح على مشروع Next.js الأصلي.**
>
> ركّز هذا الملف على: SEO، تنظيم البيانات، بنية .env، هيكلة الكود، تحسين الأداء، وتوحيد الداتا، بدون أي تغيير في التصميم.
>
> **هذا الملف هو النسخة الرسمية التي يجب تطبيقها على كود Next.js.**

---

# 1. الأهداف الأساسية

## الهدف الآن:

تحسين مشروع Sirbit (Next.js + App Router + next-intl + Tailwind) عبر:

### ✔ تحسين SEO بالكامل

* Titles & Descriptions
* Canonical
* Open Graph & Twitter
* Structured Data / Schema
* Robots.txt + Sitemap
* تحسين الصور
* Headings
* Accessibility

### ✔ تنظيم البيانات في مكان واحد

* Extract services
* Extract portfolio
* Extract nav links
* Extract tech stack
* Extract hero/home sections

> الهدف: لا يجوز ترك أي بيانات داخل الصفحات.

### ✔ تحسين .env

* SITE_URL
* EmailJS
* Default Locale

### ✔ تحسين البنية

* إضافة ملف config عام
* إضافة ملف constants
* وضع store بسيط (config-based) أو استخدام Context API
* جعل الصفحات نظيفة وخفيفة

---

# 2. تنظيم ملف `.env`

## يجب إضافة هذه المتغيرات:

```env
NEXT_PUBLIC_SITE_URL="https://sirbit.com"
NEXT_PUBLIC_DEFAULT_LOCALE="ar"
NEXT_PUBLIC_EMAILJS_SERVICE=""
NEXT_PUBLIC_EMAILJS_TEMPLATE=""
NEXT_PUBLIC_EMAILJS_PUBLIC=""
```

### تعليمات مهمة:

1. إزالة أي URL مكتوب داخل الملفات واستبداله بـ `process.env.NEXT_PUBLIC_SITE_URL`.
2. Contact Form يجب أن يقرأ EmailJS فقط من .env.
3. canonical + OG + Schema كلها تعتمد على SITE_URL.

---

# 3. تنظيم البيانات في مكان واحد – Store/Config

Next.js لا يحتاج Pinia أو Redux هنا. الأفضل:

## 📁 أنشئ مجلد:

```
src/data/
```

## يحتوي على الملفات التالية:

```
services.ts
portfolio.ts
nav.ts
techstack.ts
home.ts
filters.ts
```

مثال:

```ts
// src/data/services.ts
export const services = [
  {
    id: 'web-dev',
    slug: 'web-development',
    titleKey: 'servicesPage.webDevelopment.title',
    descriptionKey: 'servicesPage.webDevelopment.description',
    image: '/images/...',
    featuresKeys: [...],
  },
];
```

## ثم داخل الصفحات:

```ts
import { services } from '@/data/services';
```

### ممنوع ترك أي بيانات داخل pages إليك أمثلة يجب تنظيفها:

* `/services/page.tsx` يحتوي Arrays → **انقلها لـ services.ts**
* `/portfolio/page.tsx` يحتوي مشاريع → **انقلها لـ portfolio.ts**
* `/portfolio/[slug]/page.tsx` يحتوي مشاريع → **استخدم نفس الملف وليس دالة منفصلة**
* Navbar / Footer → **nav.ts**
* TechStack → **techstack.ts**

---

# 4. SEO – التحسين الكامل

## 4.1 إضافة ملف Helper للـ SEO

أنشئ:

```
src/lib/seo.ts
```

يحتوي:

```ts
export function buildSeo({ title, description, url, locale }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const fullUrl = `${siteUrl}${url}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}
```

## 4.2 كل صفحة يجب أن تستدعي SEO خاص بها

مثال:

```ts
export const metadata = buildSeo({
  title: t('seo.home.title'),
  description: t('seo.home.description'),
  url: `/${locale}`,
  locale,
});
```

---

# 5. Schema JSON-LD

## أنشئ ملف:

```
src/lib/schema.ts
```

## ويحتوي:

```ts
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sirbit",
  "url": process.env.NEXT_PUBLIC_SITE_URL,
  "logo": `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`
};
```

## للصفحات الداخلية – Breadcrumbs

```ts
export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      name: item.name,
      item: `${process.env.NEXT_PUBLIC_SITE_URL}${item.url}`
    }))
  };
}
```

### في كل صفحة:

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject) }} />
```

---

# 6. Sitemap + Robots

## Robots.txt

ضع داخل public:

```
User-agent: *
Allow: /
Sitemap: https://sirbit.com/sitemap.xml
```

## Sitemap

استخدم next-sitemap:

```
npm install next-sitemap
```

إنشاء:

```
next-sitemap.config.js
```

```js
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
};
```

ثم:

```
npm run postbuild
```

(Vercel يعملها تلقائيًا لو أضفت script في package.json)

---

# 7. Headings & Accessibility

## المطلوب من الـ Agent:

### ✔ صفحات رئيسية

* Home → H1 في Hero فقط
* Services / Portfolio / About / Contact → أول SectionHeader = H1

### ✔ alt لكل الصور

### ✔ aria-label للأزرار

### ✔ lang و dir في layout

---

# 8. Contact Form على Next.js

يجب أن يقرأ EmailJS من env:

```ts
emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
  formData,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC
);
```

### رسائل النجاح والفشل تُسحب من الترجمة i18n

---

# 9. Performance Improvements

### ✔ استخدام next/image في كل الصور

### ✔ إضافة lazy loading للصور غير الأساسية

### ✔ تحويل Hero image إلى WebP

### ✔ استخدام dynamic import في الأقسام الثقيلة

---

# 10. Checklist نهائي للـ Agent

## يجب تنفيذ كل ما يلي:

### 🔹 .env

* [ ] إضافة SITE_URL + EmailJS
* [ ] إزالة أي URL ثابت

### 🔹 SEO

* [ ] buildSeo helper
* [ ] Titles/Descriptions من i18n
* [ ] canonical dynamic
* [ ] OG + Twitter
* [ ] Schema

### 🔹 Data Organization

* [ ] نقل كل البيانات من الصفحات إلى src/data
* [ ] استخدام imports ثابتة

### 🔹 Contact

* [ ] EmailJS عبر env
* [ ] رسائل من i18n

### 🔹 Accessibility

* [ ] alt
* [ ] aria-label
* [ ] heading structure

### 🔹 Performance

* [ ] next/image
* [ ] dynamic import لبعض الأقسام

---

# 11. ملاحظات أخيرة

* **ممنوع تغيير التصميم.**
* **ممنوع تعديل الترجمة.**
* كل التعديلات داخل المنطق، الملفات، SEO، الهيكلة، الأداء.
* الهدف أن يصبح Next.js قوي مثل Vue بل أقوى.

---

# نهاية ملف التحسينات – Sirbit Next.js Version

> هذا الملف جاهز لتسليمه للـ Agent أو مبرمج يعمل على تحسين النسخة النهائية من موقع Sirbit Next.js.
