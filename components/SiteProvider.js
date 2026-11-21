'use client';

import { createContext, useContext } from 'react';
import { fallbackSettings, localizeHours } from '@/lib/defaults';
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
  const merged = { ...fallbackSettings, ...settings };
  const value = {
    ...merged,
    hours: localizeHours(merged.hours),
    apiUrl,
    logoSrc: logoSrc(settings?.logoUrl),
    telHref: telLink(merged.phone),
    waHref: whatsappLink(merged.whatsapp),
  };
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  return useContext(SiteContext);
}
