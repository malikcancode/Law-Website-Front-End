'use client';

import { Phone } from 'lucide-react';
import { useSite } from './SiteProvider';

export default function FinalCta() {
  const site = useSite();

  return (
    <section className="final-cta" aria-labelledby="final-title">
      <div className="container final-cta__inner">
        <h2 id="final-title">
          Do not leave your rights without a <span>legal claim.</span>
        </h2>
        <p>Recover what is yours through the proper legal channels.</p>
        <div className="final-cta__actions">
          <a href="#contact" className="btn btn--navy btn--lg">
            Book your consultation now
          </a>
          <a href={site.telHref} className="btn btn--outline-navy btn--lg">
            <Phone size={20} strokeWidth={2} aria-hidden="true" />
            <span dir="ltr">{site.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
