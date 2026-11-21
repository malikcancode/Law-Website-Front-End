'use client';

import { Scale } from 'lucide-react';
import { useSite } from './SiteProvider';

export default function Footer() {
  const site = useSite();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="brand__mark" aria-hidden="true">
            {site.logoSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={site.logoSrc} alt="" className="brand__logo" />
            ) : (
              <Scale size={20} strokeWidth={1.75} />
            )}
          </span>
          <div>
            <strong>{site.firmName}</strong>
            <small>{site.license}</small>
          </div>
        </div>

        <ul className="footer__contact">
          <li>
            الهاتف: <a href={site.telHref} dir="ltr">{site.phone}</a>
          </li>
          <li>البريد: {site.publicEmail}</li>
          <li>{site.address}</li>
        </ul>
      </div>
      <div className="container footer__legal">
        <p>
          المعلومات في هذه الصفحة توضّح خدماتنا وليست استشارة قانونية. تقديم الطلب لا يُنشئ علاقة
          توكيل إلا بعد الاتفاق مع المكتب.
        </p>
        <p>
          © {year} {site.shortName}. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
