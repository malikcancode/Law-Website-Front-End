'use client';

import Image from 'next/image';
import { CircleCheck } from 'lucide-react';
import { localizeService } from '@/lib/defaults';
import { useSite } from './SiteProvider';

export default function Services() {
  const site = useSite();
  const services = (site.services || []).map(localizeService);

  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="container services__grid">
        <div className="services__content">
          <h2 id="services-title" className="section-title">
            خدمات قانونية متخصصة في قضايا:
          </h2>
          <p className="section-lead">
            نعمل مع أصحاب الشركات والمنشآت في أنحاء المملكة على المسائل المالية التي تمس أموال
            المنشأة وسمعتها.
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
            اعرض قضيتك على المحامي
          </a>
        </div>

        <div className="services__visual">
          <Image
            src="/images/justice.jpg"
            alt="ميزان العدالة ومطرقة القاضي على مكتب محامٍ"
            width={1024}
            height={768}
            sizes="(max-width: 960px) 100vw, 45vw"
            loading="eager"
            className="services__img"
          />
          <p className="services__caption">
            كل قضية تبدأ بالوثائق الصحيحة. نراجع مستنداتك ونحدد المسار القانوني الأنسب لاسترداد
            ما لك من حقوق.
          </p>
        </div>
      </div>
    </section>
  );
}
