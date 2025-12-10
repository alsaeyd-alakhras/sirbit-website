'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { Check } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface ServiceDetailBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  imagePosition?: 'left' | 'right';
  serviceType?: string; // Service type to pre-fill in contact form
}

const ServiceDetailBlock: React.FC<ServiceDetailBlockProps> = ({
  icon,
  title,
  description,
  features,
  buttonText,
  imagePosition = 'right',
  serviceType,
}) => {
  const locale = useLocale();

  // Build contact URL with service type as hash fragment (better for SEO)
  // Hash fragments don't create separate pages for search engines
  const contactUrl = serviceType
    ? `/${locale}/contact#service=${encodeURIComponent(serviceType)}`
    : `/${locale}/contact`;

  return (
    <section className="py-16 odd:bg-gray-50 odd:dark:bg-[#0E0F11]">
      <Container>
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === 'right' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={imagePosition === 'left' ? 'lg:order-2' : ''}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00AEEF] to-[#7B61FF] flex items-center justify-center text-white mb-6">
              {icon}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {title}
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {description}
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-[#00AEEF] dark:text-[#7B61FF] mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button href={contactUrl} variant="primary">
              {buttonText}
            </Button>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === 'right' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative ${imagePosition === 'left' ? 'lg:order-1' : ''}`}
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              {icon}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceDetailBlock;

