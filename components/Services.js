'use client';

import Image from 'next/image';
import { CircleCheck } from 'lucide-react';
import { useSite } from './SiteProvider';

export default function Services() {
  const site = useSite();
  const services = site.services || [];

  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="container services__grid">
        <div className="services__content">
          <h2 id="services-title" className="section-title">
            Specialized legal services for cases of:
          </h2>
          <p className="section-lead">
            We work with company and business owners across Saudi Arabia on financial matters that
            affect the funds and reputation of the enterprise.
          </p>

          <ul className="service-list">
            {services.map((s) => (
              <li key={s.id || s.title} className="service-list__item">
                <CircleCheck className="service-list__icon" size={28} strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn--navy">
            Present your case to the lawyer
          </a>
        </div>

        <div className="services__visual">
          <Image
            src="/images/justice.jpg"
            alt="Scales of justice and a judge’s gavel on a lawyer’s desk"
            width={1024}
            height={768}
            sizes="(max-width: 960px) 100vw, 45vw"
            loading="eager"
            className="services__img"
          />
          <p className="services__caption">
            Every case starts with the right documents. We review yours and map the most suitable
            legal path to recover what you are owed.
          </p>
        </div>
      </div>
    </section>
  );
}
