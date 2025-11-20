# 🧩 Sirbit – Full Text Wireframe (Ready for Developer / Editor)

> هذا الملف هو **النسخة النهائية** للـ Wireframe النصي الكامل لموقع Sirbit بجميع الصفحات والمكونات.  
> مكتوب بشكل واضح جدًا؛ حتى يستطيع أي محرّر/مطور مثل Cursor أو أي FE Dev تنفيذ الموقع مباشرة بدون الرجوع بأي سؤال.

---

# ===============================
# 1. GLOBAL STRUCTURE (العناصر العامة)
# ===============================

## 1.1 Floating Navbar (عائم – Capsule Style)
- **Position:**  
  - أعلى الصفحة  
  - ثابت Fixed  
  - مسافة 20px من الأعلى  
  - لا يصل للحواف (Margin X كبير)  
  - خلفية زجاجية Glassmorphism  
  - Border-radius 40px  
  - Padding داخلي 20px  
  - ارتفاع ثابت 70px  

- **Content Layout:**  
  يسار (AR): Logo  
  وسط: الروابط  
  يمين: Theme Switch + Language Switch  

- **Links:**  
  - الرئيسية  
  - الخدمات  
  - الأعمال  
  - من نحن  
  - تواصل معنا  

- **Buttons:**  
  - Dark/Light toggle  
  - AR / EN toggle  

- **Animations:**  
  - دخول: FadeDown(0.5s)  
  - عند التمرير Scroll:  
    - Scale 0.98  
    - تقليل بعض الشفافية  

---

## 1.2 Footer
- خلفية داكنة في الـ Dark Mode وخفيفة في الـ Light Mode  
- 3 أعمدة:  
  1. Logo صغير + نص تعريفي عن Sirbit  
  2. روابط سريعة (Home – Services – Portfolio – About – Contact)  
  3. أيقونات التواصل (LinkedIn – GitHub – Facebook)  
- ختام:  
  - نص © حقوق النشر  
  - Email للتواصل  

---

## 1.3 Theme System (Dark/Light)
- باستخدام: next-themes  
- الـ class على `<html>`:  
  - `class="dark"`  
  - transitions: 0.25s fade  

---

## 1.4 Language System (AR/EN)
- using next-intl  
- نفس الصفحة تتبدل  
- اتجاه:  
  - `dir="rtl"` العربية  
  - `dir="ltr"` الإنجليزية  

---

# ===============================
# 2. PAGE: HOME (الصفحة الرئيسية)
# ===============================

# Section 1: Hero
## Layout:
- يسار: نصوص  
- يمين: صورة/هوية  

## Elements:
- Title:  
  "نحو تجارب رقمية أسرع، أذكى، وأبسط."
- Paragraph:  
  "نطوّر مواقع، تطبيقات موبايل، وأنظمة متقدمة باستخدام أحدث التقنيات."
- Buttons:  
  - Primary: "ابدأ مشروعك" → /contact  
  - Secondary: "شاهد أعمالنا" → scroll to portfolio section  

## Visual:
- خلفية gradient خفيف  
- صورة شعارات التقنية/أشكال هندسية  

## Animation:
- Title: Slide left  
- Image: Slide right  
- Buttons: FadeUp  

---

# Section 2: Who is Sirbit? (Mini Intro)
## Elements:
- Title: "من هو Sirbit؟"
- Text: فقرة قصيرة من 3–4 أسطر  
- 3 Icons:  
  - جودة  
  - تقنية  
  - ثقة  

## Animation:
- Stagger Fade (كل أيقونة تظهر تدريجيًا)

---

# Section 3: Services (Preview)
## Layout:
3 Cards

### Card 1:
- Icon: Web  
- Title: تطوير مواقع ويب  
- Text: بناء مواقع وأنظمة سريعة وأمنة  
- Link: "اعرف المزيد" → /services

### Card 2:
- Icon: Mobile  
- Title: تطبيقات موبايل Flutter  
- Text: تطبيقات iOS/Android بأداء عالي  
- Link

### Card 3:
- Icon: WordPress  
- Title: مواقع WordPress  
- Text: مواقع تعريفية وصفحات هبوط  
- Link

## Hover:
- رفع 4px  
- ظل لطيف  
- Border Gradient  

---

# Section 4: Why Sirbit?
## Elements:
4 كروت صغيرة تحتوي:

1. كود نظيف وقابل للتطوير  
2. أداء عالي  
3. واجهات بسيطة وحديثة  
4. تجربة كاملة من الفكرة إلى التسليم  

## Animations:
- Zoom subtle on appear  

---

# Section 5: Featured Works
## Layout:
Grid 3–6 Projects

### Each Project Card:
- Mockup (Laptop/Mobile)  
- Badge: Web / Mobile / WP  
- Project Name  
- Short Text  
- Button: "عرض التفاصيل"  

## Hover:
- Scale 1.03  
- Overlay شفاف يظهر الزر  

---

# Section 6: Tech Stack
## Elements:
Grid أيقونات لتقنيات:
- Laravel  
- Vue  
- React  
- Tailwind  
- Flutter  
- WordPress  
- MySQL  
- REST API  

## Animation:
Fade + Stagger

---

# Section 7: Testimonials / Clients
- Either logos OR text quotes  
- 2–4 عناصر فقط  

---

# Section 8: Final CTA
- خلفية Gradient  
- Title: "جاهز يبدأ مشروعك معنا؟"  
- Text: سطر بسيط  
- Button: "تواصل معنا"  

---

# ===============================
# 3. PAGE: SERVICES
# ===============================

## Header:
- Title: "خدماتنا"
- Paragraph: مقدمة بسيطة

---

## Service Block 1: Web Development
### Elements:
- Title  
- Paragraph  
- Bullet Points:
  - مواقع شركات  
  - أنظمة ويب  
  - Dashboards  
  - APIs  
- Image/Icon  
- Button: "ابدأ هذه الخدمة"

---

## Service Block 2: Mobile Apps (Flutter)
- نفس الأسلوب  
- نقاط:
  - Cross Platform  
  - Notifications  
  - Auth  
  - لوحة تحكم خلفية  

---

## Service Block 3: WordPress
- مواقع شركات  
- صفحات هبوط Landing  
- تحكم كامل بالمحتوى  
- Performance Optimized  

---

## Additional Services (optional)
- تحسين الأداء  
- صيانة مواقع  
- استشارات تقنية  

---

# ===============================
# 4. PAGE: PORTFOLIO (الأعمال)
# ===============================

## Header:
- Title: "أعمال Sirbit"
- Paragraph: مقدمة

---

## Filters Bar:
- Tabs:
  - الكل  
  - مواقع ويب  
  - موبايل  
  - WordPress  

---

## Projects Grid:
### For each Project:
- Mockup Image  
- Badge  
- Name  
- Category  
- Short Desc  
- On Hover: Button "عرض التفاصيل"  

---

# ===============================
# 5. PAGE: PROJECT DETAILS
# ===============================

## Section 1: Hero
- Large Image (Mockup)  
- Project Title  
- Type: Web/Mobile/WP  
- Buttons:
  - "زيارة المشروع" (إذا متوفر)  
  - "أريد مشروع مشابه" → contact  

---

## Section 2: Summary
- 4 Elements:
  - المجال  
  - دور Sirbit  
  - التقنيات  
  - مدة التنفيذ  

---

## Section 3: The Challenge
- Title: "التحدي"  
- 2–3 فقرات  

---

## Section 4: The Solution
- Title: "الحل الذي قدمناه"  
- فقرات  
- نقاط توضيحية  

---

## Section 5: Key Features
- List of features (5–10 نقاط)  

---

## Section 6: Gallery Slider
- 4–6 صور  
- Slide Animation  

---

## Section 7: CTA
Same as global CTA.

---

# ===============================
# 6. PAGE: ABOUT US
# ===============================

## Section 1: Intro
- Title: “من نحن”  
- Paragraph عن Sirbit  

---

## Section 2: Vision & Mission
### 3 Cards:
- رؤيتنا  
- رسالتنا  
- قيمنا  

---

## Section 3: Team
Grid يحتوي:

Each Member:
- Circular Image  
- Name  
- Role  
- Short line  

---

## Section 4: How We Work (Timeline)
6 مراحل:
1. Discovery  
2. Analysis  
3. UX/UI  
4. Development  
5. Testing  
6. Delivery + Support  

---

# ===============================
# 7. PAGE: CONTACT
# ===============================

## Section 1: Hero
- Title: "دعنا نبدأ في مشروعك القادم"  
- Text: “نرد خلال 24 ساعة”  

---

## Section 2: Contact Form
### Fields:
- الاسم  
- البريد  
- رقم الجوال  
- نوع الخدمة  
- الميزانية (اختياري)  
- وصف المشروع  
- File Attachment (اختياري)  

Button: **إرسال**

---

## Section 3: Contact Info
- Email  
- WhatsApp (اختياري)  
- Locations (مثلاً: فلسطين – نعمل عن بعد عالميًا)

---

# ===============================
# 8. ANIMATIONS LIST
# ===============================

## 8.1 Page-Level:
- Fade transition عند التبديل بين الصفحات

## 8.2 Elements:
- Sections: FadeUp / FadeIn  
- Cards: Hover Lift  
- Buttons: Pulse light  
- Hero Text: Slide Left  
- Hero Image: Slide Right  
- Navbar: FadeDown + micro shrink  

## 8.3 Duration:
- 350–500ms  
- Delay بين العناصر (Stagger): 80–120ms  

---

# ===============================
# 9. FINAL NOTES
# ===============================

- الموقع بالكامل **بسيط، نظيف، Corporate، سريع**  
- استخدام المساحات البيضاء بشكل كبير  
- كل Page مكتوبة بحيث محرّر Cursor يستطيع تنفيذها 1:1  
- متوافقة 100% مع Multi-Language + Dark/Light  
- الأنيميشن محددة بدقة  
- الواجهات واضحة ومحددة

---