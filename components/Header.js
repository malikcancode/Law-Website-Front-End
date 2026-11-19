'use client';

import { Phone, Scale } from 'lucide-react';
import { useSite } from './SiteProvider';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'How we work' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const site = useSite();

  return (
    <header className="header">
      <a className="skip-link" href="#main">
        Skip to content
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
            <small>Law Firm & Legal Consultations</small>
          </span>
        </a>

        <nav className="nav" aria-label="Main">
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
