# 🧩 Sirbit – Component-Level Specification  
**Ready for Cursor / Frontend Developer – Zero Questions Required**  
**(v1 – Final)**

> هذا الملف هو المرجع النهائي للمحرر، يشرح جميع الـ Components المطلوبة في مشروع Sirbit بدقة.  
> كل Component يحتوي:  
> - الاسم  
> - مكان الاستخدام  
> - العناصر داخله  
> - الـ States  
> - الـ Props (لو مطلوبة)  
> - الـ Responsive Behavior  
> - دعم RTL/LTR  
> - دعم Dark/Light  
> - الAnimations  

---

# ===============================
# 0. GLOBAL COMPONENT RULES
# ===============================

## 0.1 Folder Structure Suggestion
```

/components  
/ui  
/layout  
/sections  
/cards  
/shared

```

## 0.2 Common Props
لجميع Components:
- `className` ← للإضافات
- دعم اللغات عبر `useTranslations()`
- اتجاه الصفحة عبر `<html dir="rtl" />` أو `ltr`

## 0.3 RTL/LTR Behavior
- جميع الpadding والmargin والtext-align تكون عبر:
  - `text-start` بدل `text-left`
  - `text-end` بدل `text-right`
  - Flex reverse للـ RTL:
    ```jsx
    <div className="flex flex-row-reverse rtl:flex-row">
    ```

## 0.4 Dark/Light Mode
- كل Component يستخدم:
  ```html
  className="bg-white dark:bg-[#0E0F11] text-[#1E1E1E] dark:text-[#F5F6FA]"
```

- أي ظلال:
    
    - Light Mode: `shadow-gray-200`
        
    - Dark Mode: `shadow-black/40`
        

## 0.5 Animations

- Framer Motion أو AOS
    
- القاعدة العامة:
    
    - Sections: FadeUp 0.5s
        
    - Cards: Hover Lift (translateY(-4px))
        
    - Buttons: scale(1.03) on hover
        
    - Hero: Title SlideLeft / Image SlideRight
        
    - Navbar: FadeDown + shrink on scroll
        

---

# ===============================

# 1. LAYOUT COMPONENTS

# ===============================

# 1.1

## الاستخدام:

يظهر في كل الصفحات (layout.tsx)

## العناصر:

- Logo
    
- Links (Home, Services, Portfolio, About, Contact)
    
- Theme Switch (Dark/Light)
    
- Language Switch (AR/EN)
    

## التصميم:

- Floating capsule
    
- width: 80% centered
    
- height: 70px
    
- radius: 40px
    
- backdrop blur
    
- white/black transparency
    

## responsive:

- في الموبايل → يتحول إلى Hamburger menu
    

## states:

- default
    
- scroll-shrink
    

## interactions:

- Hover on links: underline + color change
    
- Theme switch: toggle instantly
    

---

# 1.2

## العناصر:

- Logo small
    
- Text about Sirbit
    
- Quick Links
    
- Social Links bar
    

## layout:

- 3 columns (desktop)
    
- 1 column stack (mobile)
    

---

# 1.3

## wrapper عام

Props:

- children
    
- className
    

يطبق:

- max-width
    
- padding x
    
- responsive settings
    

---

# 1.4

## الاستخدام:

صفحات: Services – Portfolio – About – Contact

## العناصر:

- Title
    
- Paragraph (optional)
    

## animations:

FadeDown

---

# ===============================

# 2. SHARED UI COMPONENTS

# ===============================

# 2.1

## props:

- text
    
- icon (optional)
    
- link/href
    

## style:

- gradient (blue → purple)
    
- radius 10px
    
- padding 14px 26px
    

## hover:

- scale(1.03)
    
- shadow
    

---

# 2.2

## style:

- border + subtle gradient text
    
- transparent background
    

---

# 2.3

## props:

- title
    
- subtitle (optional)
    

## style:

- centered
    
- margin-bottom 50px
    

---

# 2.4

## تستخدم في: من نحن، لماذا Sirbit، الخدمات

## structure:

- Icon circle
    
- Title
    
- Paragraph
    

## hover:

Lift small

---

# 2.5

- SVG أو image
    
- حجم ثابت
    
- opacity hover effect
    

---

# 2.6

## props:

- text (Web / Mobile / WordPress)
    
- color based on category
    

---

# ===============================

# 3. HOMEPAGE SECTIONS

# ===============================

# 3.1

## structure:

```
<div class="grid lg:grid-cols-2">
  left: text + buttons
  right: illustration/image
</div>
```

## elements:

- H1
    
- Paragraph
    
- CTA buttons
    
- Hero Illustration
    

## behavior:

- RTL: النص في اليمين، الصورة في اليسار
    
- LTR: عكس
    

## animations:

- H1: slide-left
    
- Image: slide-right
    
- Buttons: fade-up
    

---

# 3.2

## contents:

- Title: من هو Sirbit؟
    
- Paragraph 3–4 أسطر
    
- 3 IconCards
    

## animations:

Stagger Fade

---

# 3.3

## grid:

3 cards

## each card:

- Icon
    
- Title
    
- text
    
- link
    

## hover:

- raise
    
- shadow
    
- border gradient subtle
    

---

# 3.4

## grid:

4 cards

## each:

- Icon
    
- Title
    
- Text short
    

## design:

- small rectangular cards
    
- light shadow
    

---

# 3.5

## grid:

3–6 projects

## each card:

- image inside mockup
    
- badge
    
- title
    
- short text
    
- details button on hover
    

## hover overlay:

- dark transparent layer
    
- “عرض التفاصيل” button appears
    

---

# 3.6

## grid:

icons for:

- Laravel
    
- Vue
    
- React
    
- Tailwind
    
- Flutter
    
- WordPress
    
- MySQL
    
- REST API
    

animation:  
stagger fade-up

---

# 3.7 (optional)

## types:

- logo grid  
    or
    
- text testimonial cards
    

---

# 3.8

## elements:

- title
    
- paragraph
    
- button
    

## style:

- full-width gradient
    
- centered text
    

---

# ===============================

# 4. SERVICES PAGE COMPONENTS

# ===============================

# 4.1

## props:

- title
    
- description
    
- features (array)
    
- image
    

## layout:

2 columns:

- left text
    
- right image
    

## alternating sections:

odd → text left  
even → text right

---

# 4.2

## contains:

Series of

---

# ===============================

# 5. PORTFOLIO PAGE COMPONENTS

# ===============================

# 5.1

## elements:

- Tabs: All – Web – Mobile – WP
    

## states:

- active tab
    
- hover
    

---

# 5.2

## props:

- projects array
    

## grid:

3 columns (desktop), 1 column (mobile)

---

# 5.3

## elements:

- image
    
- badge
    
- title
    
- category
    
- short description
    

## hover:

- scale
    
- overlay button
    

---

# ===============================

# 6. PROJECT DETAILS PAGE COMPONENTS

# ===============================

# 6.1

## elements:

- big mockup image
    
- title
    
- type badge
    
- two buttons
    

---

# 6.2

## grid with:

- المجال
    
- الدور
    
- التقنيات
    
- المدة
    

---

# 6.3

- title
    
- paragraph
    

---

# 6.4

- title
    
- paragraph(s)
    

---

# 6.5

- list 6–10 نقاط
    

---

# 6.6

## elements:

- array of images
    
- slider dots/arrows
    

---

# 6.7

- same as final CTA
    

---

# ===============================

# 7. ABOUT PAGE COMPONENTS

# ===============================

# 7.1

- title
    
- paragraph
    

---

# 7.2

## grid:

3 cards:

- Vision
    
- Mission
    
- Values
    

---

# 7.3

## structure:

- circular image
    
- name
    
- role
    
- short bio line
    

## responsive:

2–3 columns desktop  
1 column mobile

---

# 7.4

## steps:

1. Discovery
    
2. Analysis
    
3. UX/UI
    
4. Development
    
5. Testing
    
6. Delivery
    

## layout:

horizontal (desktop)  
vertical (mobile)

---

# ===============================

# 8. CONTACT PAGE COMPONENTS

# ===============================

# 8.1

- title
    
- paragraph (“نرد خلال 24 ساعة”)
    

---

# 8.2

## fields:

- name
    
- email
    
- phone
    
- service type dropdown
    
- budget range
    
- project description box
    
- file upload
    

## button:

primary

---

# 8.3

- email
    
- whatsapp
    
- location text
    

---

# ===============================

# 9. ADDITIONAL SYSTEM COMPONENTS

# ===============================

# 9.1

## behavior:

- toggle between AR/EN
    
- reload with same page path
    
- apply direction change
    

---

# 9.2

## behavior:

- toggle dark/light
    
- icon swap (sun/moon)
    
- smooth transition
    

---

# 9.3

## triggered by hamburger menu

## elements:

- Fullscreen panel
    
- List of links
    
- Theme/Language toggles
    

---

# ===============================

# 10. FINAL NOTES FOR THE DEVELOPER

# ===============================

- استخدم TailwindCSS بشكل كامل
    
- التزم بثيم الألوان و dark/light
    
- استخدم Next.js App Router
    
- كل Section يكون Component مستقل
    
- ترتيب الصفحات مطابق للـ Wireframe
    
- كل نصوص الموقع يجب أن تأتي من ملفات ترجمة:
    
    ```
    /locales/ar.json
    /locales/en.json
    ```
    
- ممنوع كتابة نص مباشرة داخل Components
    
- الصور تكون WebP
    
- الانيميشن خفيفة بدون مبالغة
    
- الأداء مهم جدًا (use Image, use optimized fonts)
    

---
