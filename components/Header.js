'use client';

import { Phone, Scale } from 'lucide-react';
import { useSite } from './SiteProvider';

const links = [
  { href: '#services', label: 'الخدمات' },
  { href: '#process', label: 'آلية العمل' },
  { href: '#faq', label: 'الأسئلة الشائعة' },
  { href: '#contact', label: 'تواصل معنا' },
];

export default function Header() {
  const site = useSite();

  return (
    <header className="header">
      <a className="skip-link" href="#main">
        تخطّي إلى المحتوى
      </a>
      <div className="container header__inner">
        <a href="#top" className="brand" aria-label={site.firmName}>
          <span className="brand__mark" aria-hidden="true">
            {site.logoSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={site.logoSrc} alt="" className="brand__logo" />
            ) : (
              <Scale size={22} strokeWidth={1.75} />
            )}
          </span>
          <span className="brand__text">
            <strong>{site.shortName}</strong>
            <small>مكتب محاماة واستشارات قانونية</small>
          </span>
        </a>

        <nav className="nav" aria-label="القائمة الرئيسية">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href={site.telHref} className="header__phone">
          <Phone size={18} strokeWidth={2} aria-hidden="true" />
          <span dir="ltr">{site.phone}</span>
        </a>
      </div>
    </header>
  );
}
