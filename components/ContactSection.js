'use client';

import Image from 'next/image';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import LeadForm from './LeadForm';
import { useSite } from './SiteProvider';

export default function ContactSection() {
  const site = useSite();

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__bg" aria-hidden="true">
        <Image src="/images/riyadh-skyline.jpg" alt="" fill sizes="100vw" className="contact__img" />
      </div>

      <div className="container contact__grid">
        <div className="contact__copy">
          <h2 id="contact-title" className="contact__title">
            تواصل معنا الآن
          </h2>
          <p className="contact__lead">
            احجز استشارة قانونية. نراجع قضيتك بسرية وعناية.
          </p>

          <ul className="contact__channels">
            <li>
              <a href={site.telHref}>
                <Phone size={22} strokeWidth={1.75} aria-hidden="true" />
                <span>
                  <small>اتصل بنا</small>
                  <strong dir="ltr">{site.phone}</strong>
                </span>
              </a>
            </li>
            <li>
              <a href={site.waHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={22} strokeWidth={1.75} aria-hidden="true" />
                <span>
                  <small>واتساب</small>
                  <strong>راسلنا مباشرة</strong>
                </span>
              </a>
            </li>
            <li>
              <Clock size={22} strokeWidth={1.75} aria-hidden="true" />
              <span>
                <small>ساعات العمل</small>
                <strong>{site.hours}</strong>
              </span>
            </li>
            <li>
              <MapPin size={22} strokeWidth={1.75} aria-hidden="true" />
              <span>
                <small>العنوان</small>
                <strong>{site.address}</strong>
              </span>
            </li>
          </ul>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
