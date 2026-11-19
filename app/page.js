import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Signs from '@/components/Signs';
import Process from '@/components/Process';
import ContactSection from '@/components/ContactSection';
import Faq from '@/components/Faq';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import MobileBar from '@/components/MobileBar';
import { SiteProvider } from '@/components/SiteProvider';
import { getSiteSettings } from '@/lib/getSettings';

export default async function Home() {
  const settings = await getSiteSettings();

  return (
    <SiteProvider settings={settings}>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Signs />
        <Process />
        <ContactSection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
    </SiteProvider>
  );
}
