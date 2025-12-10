'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

const ContactForm = () => {
  const t = useTranslations('contactPage.form');
  const locale = useLocale();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Pre-fill service type from URL (hash fragment or query parameter for backward compatibility)
  // Then remove query parameter to avoid SEO issues
  useEffect(() => {
    // First check hash fragment (preferred method)
    const hash = window.location.hash;
    let service: string | null = null;
    
    if (hash && hash.startsWith('#service=')) {
      service = hash.replace('#service=', '');
    } else {
      // Fallback to query parameter for backward compatibility
      service = searchParams.get('service');
      // Remove query parameter from URL to avoid SEO issues
      // Keep hash fragment if it exists
      if (service) {
        const url = new URL(window.location.href);
        url.searchParams.delete('service');
        const newUrl = url.pathname + url.search + (url.hash || '');
        router.replace(newUrl, { scroll: false });
      }
    }
    
    if (service) {
      setFormData(prev => ({ ...prev, serviceType: service }));
    }
  }, [searchParams, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // إنشاء الرسالة الكاملة مع جميع التفاصيل
      const fullMessage = `
📧 رسالة جديدة من موقع Sirbit

👤 الاسم: ${formData.name}
📧 البريد الإلكتروني: ${formData.email}
📱 رقم الجوال: ${formData.phone}
💼 نوع الخدمة: ${formData.serviceType}
💰 الميزانية: ${formData.budget || 'غير محدد'}

📝 الرسالة:
${formData.message}

---
تم الإرسال من: موقع Sirbit
اللغة: ${locale === 'ar' ? 'العربية' : 'English'}
      `;

      // إرسال البريد عبر EmailJS
      await emailjs.send(
        siteConfig.emailjs.serviceId,
        siteConfig.emailjs.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_name: 'Sirbit Team',
          message: fullMessage,
        },
        siteConfig.emailjs.publicKey
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        budget: '',
        message: '',
      });

      // إخفاء رسالة النجاح بعد 5 ثواني
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');

      // إخفاء رسالة الخطأ بعد 5 ثواني
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 rounded-2xl bg-white dark:bg-[#1A1C1F] shadow-lg"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0E0F11] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0E0F11] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0E0F11] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent transition-all"
          />
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('serviceType')}
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0E0F11] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent transition-all"
          >
            <option value="">
              {locale === 'ar' ? 'اختر نوع الخدمة' : 'Select a service'}
            </option>
            <option value="web">
              {locale === 'ar' ? 'تطوير مواقع ويب' : 'Web Development'}
            </option>
            <option value="mobile">
              {locale === 'ar' ? 'تطبيقات موبايل' : 'Mobile Apps'}
            </option>
            <option value="wordpress">
              {locale === 'ar' ? 'مواقع WordPress' : 'WordPress Sites'}
            </option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('budget')}
          </label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0E0F11] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent transition-all"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0E0F11] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent transition-all resize-none"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          icon={isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? (locale === 'ar' ? 'جاري الإرسال...' : 'Sending...')
            : t('submit')
          }
        </Button>

        {/* رسالة النجاح */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-500 dark:border-green-500"
          >
            <p className="text-green-800 dark:text-green-300 text-center font-medium">
              {locale === 'ar'
                ? '✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'
                : '✅ Message sent successfully! We will contact you soon.'
              }
            </p>
          </motion.div>
        )}

        {/* رسالة الخطأ */}
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-lg bg-red-100 dark:bg-red-900/30 border border-red-500 dark:border-red-500"
          >
            <p className="text-red-800 dark:text-red-300 text-center font-medium">
              {locale === 'ar'
                ? '❌ فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.'
                : '❌ Failed to send message. Please try again.'
              }
            </p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;

