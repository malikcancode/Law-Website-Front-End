export const fallbackSettings = {
  firmName: '[Lawyer Name] Law Firm & Legal Consultations',
  shortName: '[Firm Name]',
  license: 'License No. [———]',
  phone: process.env.NEXT_PUBLIC_PHONE || '0500000000',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '966500000000',
  publicEmail: 'info@yourfirm.sa',
  address: '[District, Street], Riyadh, Kingdom of Saudi Arabia',
  hours: 'Sunday – Thursday, 9:00 AM – 6:00 PM',
  logoUrl: '',
  services: [
    {
      id: '1',
      title: 'Financial & commercial fraud',
      body: 'Scams, fictitious contracts and deals, bounced cheques, and manipulation of financial or commercial data.',
    },
    {
      id: '2',
      title: 'Embezzlement of company funds',
      body: 'Misappropriation by an employee, partner, or manager of company money or assets, and breach-of-trust cases.',
    },
    {
      id: '3',
      title: 'Recovery of owed funds',
      body: 'Filing claims, requesting precautionary attachment, and following through on judgment enforcement until funds are recovered.',
    },
    {
      id: '4',
      title: 'Large financial disputes & claims',
      body: 'Managing the dispute from negotiation and settlement through litigation before the competent courts and committees.',
    },
  ],
  caseTypes: [
    { value: 'financial_fraud', label: 'Financial & commercial fraud' },
    { value: 'embezzlement', label: 'Embezzlement of company funds' },
    { value: 'funds_recovery', label: 'Recovery of owed funds' },
    { value: 'financial_disputes', label: 'Large financial disputes & claims' },
    { value: 'other', label: 'Other matter' },
  ],
};

export const amountRanges = [
  { value: 'unspecified', label: 'Prefer not to say' },
  { value: 'under_100k', label: 'Under SAR 100,000' },
  { value: '100k_500k', label: 'SAR 100,000 – 500,000' },
  { value: '500k_1m', label: 'SAR 500,000 – 1 million' },
  { value: 'over_1m', label: 'Over SAR 1 million' },
];

export const cities = [
  'Riyadh',
  'Jeddah',
  'Makkah',
  'Madinah',
  'Dammam',
  'Khobar',
  'Dhahran',
  'Taif',
  'Buraidah',
  'Tabuk',
  'Abha',
  'Khamis Mushait',
  'Hail',
  'Jazan',
  'Najran',
  'Al-Ahsa',
  'Yanbu',
  'Other',
];
