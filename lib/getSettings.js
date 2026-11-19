import { fallbackSettings } from './defaults';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export function logoSrc(logoUrl) {
  if (!logoUrl) return '';
  if (/^https?:\/\//i.test(logoUrl)) return logoUrl;
  return `${API_URL}${logoUrl}`;
}

export async function getSiteSettings() {
  try {
    const res = await fetch(`${API_URL}/api/settings`, {
      next: { revalidate: 20 },
    });
    if (!res.ok) return fallbackSettings;
    const json = await res.json();
    return { ...fallbackSettings, ...json.data };
  } catch {
    return fallbackSettings;
  }
}
