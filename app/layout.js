import Script from 'next/script';
import { Noto_Naskh_Arabic, Noto_Sans_Arabic } from 'next/font/google';
import './globals.css';

const GTM_ID = 'GTM-M8V227DG';

const display = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'محامي الاحتيال المالي والاختلاس | استشارة قانونية سرية',
  description:
    'خدمات قانونية متخصصة لأصحاب الشركات والمنشآت في المملكة العربية السعودية: الاحتيال المالي والتجاري، اختلاس الأموال، استرداد المستحقات، والنزاعات المالية الكبيرة. احجز استشارة سرية.',
  openGraph: {
    title: 'هل تعرضت شركتك للاحتيال أو الاختلاس؟',
    description: 'احجز استشارة قانونية. نراجع قضيتك بسرية وعناية.',
    images: ['/images/hero.jpg'],
    locale: 'ar_SA',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#0b1a33',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${display.variable} ${body.variable}`}>
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
