'use client';

import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
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
            هل أنت صاحب شركة أو منشأة وتعرّضت للاحتيال أو الاختلاس؟
          </h1>

          <div className="hero__rule" aria-hidden="true" />

          <p className="hero__lead">
            عندما تُفقد أموال كبيرة بسبب احتيال تجاري أو خيانة أمانة، نسعى لاستردادها عبر القنوات
            القانونية الصحيحة — بسرية وعناية.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--gold btn--lg">
              احجز استشارة سرية
              <ArrowLeft size={18} strokeWidth={2.25} aria-hidden="true" />
            </a>
            <a href={site.waHref} className="btn btn--ghost btn--lg" target="_blank" rel="noopener noreferrer">
              واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
