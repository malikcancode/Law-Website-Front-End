'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { useSite } from './SiteProvider';

export default function MobileBar() {
  const site = useSite();

  return (
    <div className="mobile-bar" role="navigation" aria-label="Quick contact">
      <a href={site.telHref} className="mobile-bar__btn">
        <Phone size={18} strokeWidth={2} aria-hidden="true" /> Call
      </a>
      <a href={site.waHref} className="mobile-bar__btn" target="_blank" rel="noopener noreferrer">
        <MessageCircle size={18} strokeWidth={2} aria-hidden="true" /> WhatsApp
      </a>
      <a href="#contact" className="mobile-bar__btn mobile-bar__btn--gold">
        Book consultation
      </a>
    </div>
  );
}
