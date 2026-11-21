'use client';

import { Phone } from 'lucide-react';
import { useSite } from './SiteProvider';

export default function FinalCta() {
  const site = useSite();

  return (
    <section className="final-cta" aria-labelledby="final-title">
      <div className="container final-cta__inner">
        <h2 id="final-title">
          لا تترك حقك بلا <span>مطالبة قانونية.</span>
        </h2>
        <p>استرد ما لك عبر القنوات القانونية الصحيحة.</p>
        <div className="final-cta__actions">
          <a href="#contact" className="btn btn--navy btn--lg">
            احجز استشارتك الآن
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
