'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const t = useTranslations('contactPage.info');
  const locale = useLocale();

  const contactItems = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('email'),
      value: 'info@sirbit.com',
      href: 'mailto:info@sirbit.com',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: t('whatsapp'),
      value: '+970 59 123 4567',
      href: 'https://wa.me/970591234567',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('location'),
      value: locale === 'ar' ? 'فلسطين - نعمل عن بعد عالميًا' : 'Palestine - Working Remotely Worldwide',
      href: null,
    },
  ];

  return (
    <div className="space-y-6">
      {contactItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="p-6 rounded-xl bg-white dark:bg-[#1A1C1F] shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00AEEF] to-[#7B61FF] flex items-center justify-center text-white flex-shrink-0">
              {item.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {item.title}
              </h3>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00AEEF] dark:text-[#7B61FF] hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">
                  {item.value}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;

