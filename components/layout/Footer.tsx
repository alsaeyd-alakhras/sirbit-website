'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Github, Linkedin, Facebook } from 'lucide-react';
import Container from '@/components/ui/Container';

const Footer = () => {
  const t = useTranslations();
  const locale = useLocale();

  const navLinks = [
    { href: `/${locale}`, label: t('nav.home') },
    { href: `/${locale}/services`, label: t('nav.services') },
    { href: `/${locale}/portfolio`, label: t('nav.portfolio') },
    { href: `/${locale}/about`, label: t('nav.about') },
    { href: `/${locale}/contact`, label: t('nav.contact') },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-[#1A1C1F] border-t border-gray-200 dark:border-gray-800 mt-20">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <img 
              src="/images/logo.png" 
              alt="Sirbit" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {t('footer.about')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#00AEEF] dark:hover:text-[#7B61FF] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {locale === 'ar' ? 'تواصل معنا' : 'Connect With Us'}
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#00AEEF] hover:to-[#7B61FF] text-gray-600 dark:text-gray-400 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="mailto:info@sirbit.com"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#00AEEF] dark:hover:text-[#7B61FF] transition-colors"
              >
                info@sirbit.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {new Date().getFullYear()} Sirbit. {t('footer.rights')}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

