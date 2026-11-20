import Script from 'next/script';
import { Libre_Baskerville, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const GTM_ID = 'GTM-M8V227DG';

const display = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Financial Fraud & Embezzlement Lawyer | Confidential Legal Consultation',
  description:
    'Specialized legal services for company and business owners in Saudi Arabia: financial and commercial fraud, embezzlement, recovery of owed funds, and large financial disputes. Book a confidential consultation.',
  openGraph: {
    title: 'Has your company been a victim of fraud or embezzlement?',
    description: 'Book a legal consultation. We review your case with confidentiality and care.',
    images: ['/images/hero.jpg'],
    locale: 'en_SA',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#0b1a33',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={`${display.variable} ${body.variable}`}>
      <body>
        <Script id="gtm-datalayer" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
        <Script
          id="gtm-script"
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          strategy="afterInteractive"
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
