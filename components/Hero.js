'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useSite } from './SiteProvider';

export default function Hero() {
  const site = useSite();

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <Image src="/images/hero.jpg" alt="" fill priority sizes="100vw" className="hero__img" />
      </div>
      <div className="hero__shade" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__kicker">{site.shortName}</p>

          <h1 id="hero-title" className="hero__title">
            Are you a company or business owner who has faced fraud or embezzlement?
          </h1>

          <div className="hero__rule" aria-hidden="true" />

          <p className="hero__lead">
            When significant funds are lost to commercial fraud or breach of trust, we pursue recovery
            through the proper legal channels — confidentially and with care.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--gold btn--lg">
              Book a confidential consultation
              <ArrowRight size={18} strokeWidth={2.25} aria-hidden="true" />
            </a>
            <a href={site.waHref} className="btn btn--ghost btn--lg" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
