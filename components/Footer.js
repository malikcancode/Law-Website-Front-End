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
            Phone: <a href={site.telHref} dir="ltr">{site.phone}</a>
          </li>
          <li>Email: {site.publicEmail}</li>
          <li>{site.address}</li>
        </ul>
      </div>
      <div className="container footer__legal">
        <p>
          The information on this page describes our services and is not legal advice. Submitting a
          request does not create a retainer until an engagement is agreed with the firm.
        </p>
        <p>
          © {year} {site.shortName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
