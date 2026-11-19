'use client';

import { createContext, useContext } from 'react';
import { fallbackSettings } from '@/lib/defaults';
import { logoSrc } from '@/lib/getSettings';
import { apiUrl, telLink, whatsappLink } from '@/lib/site';

const SiteContext = createContext({
  ...fallbackSettings,
  apiUrl,
  logoSrc: '',
  telHref: telLink(fallbackSettings.phone),
  waHref: whatsappLink(fallbackSettings.whatsapp),
});

export function SiteProvider({ settings, children }) {
  const value = {
    ...fallbackSettings,
    ...settings,
    apiUrl,
    logoSrc: logoSrc(settings?.logoUrl),
    telHref: telLink(settings?.phone || fallbackSettings.phone),
    waHref: whatsappLink(settings?.whatsapp || fallbackSettings.whatsapp),
  };
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  return useContext(SiteContext);
}
