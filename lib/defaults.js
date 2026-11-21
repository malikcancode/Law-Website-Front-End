export const fallbackSettings = {
  firmName: '[اسم المحامي] مكتب محاماة واستشارات قانونية',
  shortName: '[اسم المكتب]',
  license: 'ترخيص رقم [———]',
  phone: process.env.NEXT_PUBLIC_PHONE || '0500000000',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '966500000000',
  publicEmail: 'info@yourfirm.sa',
  address: '[الحي، الشارع]، الرياض، المملكة العربية السعودية',
  hours: 'الأحد – الخميس، 9:00 ص – 6:00 م',
  logoUrl: '',
  services: [
    {
      id: '1',
      title: 'الاحتيال المالي والتجاري',
      body: 'عمليات النصب، العقود والصفقات الوهمية، الشيكات المرتجعة، والتلاعب بالبيانات المالية أو التجارية.',
    },
    {
      id: '2',
      title: 'اختلاس أموال الشركات',
      body: 'استيلاء موظف أو شريك أو مدير على أموال أو أصول الشركة، وقضايا خيانة الأمانة.',
    },
    {
      id: '3',
      title: 'استرداد الأموال المستحقة',
      body: 'رفع المطالبات، وطلب الحجز التحفظي، ومتابعة تنفيذ الأحكام حتى استرداد الأموال.',
    },
    {
      id: '4',
      title: 'النزاعات والمطالبات المالية الكبيرة',
      body: 'إدارة النزاع من التفاوض والصلح إلى الترافع أمام المحاكم واللجان المختصة.',
    },
  ],
  caseTypes: [
    { value: 'financial_fraud', label: 'الاحتيال المالي والتجاري' },
    { value: 'embezzlement', label: 'اختلاس أموال الشركات' },
    { value: 'funds_recovery', label: 'استرداد الأموال المستحقة' },
    { value: 'financial_disputes', label: 'النزاعات والمطالبات المالية الكبيرة' },
    { value: 'other', label: 'أمر آخر' },
  ],
};

/** Arabic labels for known case-type values from the API */
export const caseTypeLabelsAr = {
  financial_fraud: 'الاحتيال المالي والتجاري',
  embezzlement: 'اختلاس أموال الشركات',
  funds_recovery: 'استرداد الأموال المستحقة',
  financial_disputes: 'النزاعات والمطالبات المالية الكبيرة',
  other: 'أمر آخر',
};

/** Map common English service copy from admin to Arabic */
export const serviceCopyAr = {
  'Financial & commercial fraud': {
    title: 'الاحتيال المالي والتجاري',
    body: 'عمليات النصب، العقود والصفقات الوهمية، الشيكات المرتجعة، والتلاعب بالبيانات المالية أو التجارية.',
  },
  'Embezzlement of company funds': {
    title: 'اختلاس أموال الشركات',
    body: 'استيلاء موظف أو شريك أو مدير على أموال أو أصول الشركة، وقضايا خيانة الأمانة.',
  },
  'Recovery of owed funds': {
    title: 'استرداد الأموال المستحقة',
    body: 'رفع المطالبات، وطلب الحجز التحفظي، ومتابعة تنفيذ الأحكام حتى استرداد الأموال.',
  },
  'Large financial disputes & claims': {
    title: 'النزاعات والمطالبات المالية الكبيرة',
    body: 'إدارة النزاع من التفاوض والصلح إلى الترافع أمام المحاكم واللجان المختصة.',
  },
};

export const localizeCaseType = (c) => ({
  ...c,
  label: caseTypeLabelsAr[c.value] || c.label,
});

export const localizeService = (s) => {
  const mapped = serviceCopyAr[s.title];
  return mapped ? { ...s, title: mapped.title, body: mapped.body } : s;
};

const hoursAr = {
  'Sunday – Thursday, 9:00 AM – 6:00 PM': 'الأحد – الخميس، 9:00 ص – 6:00 م',
  'Sunday - Thursday, 9:00 AM - 6:00 PM': 'الأحد – الخميس، 9:00 ص – 6:00 م',
};

export const localizeHours = (hours) => hoursAr[hours] || hours;

export const amountRanges = [
  { value: 'unspecified', label: 'أفضل عدم الإفصاح' },
  { value: 'under_100k', label: 'أقل من 100,000 ريال' },
  { value: '100k_500k', label: '100,000 – 500,000 ريال' },
  { value: '500k_1m', label: '500,000 – 1 مليون ريال' },
  { value: 'over_1m', label: 'أكثر من مليون ريال' },
];

export const cities = [
  'الرياض',
  'جدة',
  'مكة المكرمة',
  'المدينة المنورة',
  'الدمام',
  'الخبر',
  'الظهران',
  'الطائف',
  'بريدة',
  'تبوك',
  'أبها',
  'خميس مشيط',
  'حائل',
  'جازان',
  'نجران',
  'الأحساء',
  'ينبع',
  'أخرى',
];
