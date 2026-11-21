const steps = [
  {
    title: 'استشارة سرية',
    body: 'تتواصل معنا وتشرح ما حدث. كل ما تشاركه يبقى بيننا.',
  },
  {
    title: 'مراجعة المستندات',
    body: 'ندرس العقود والتحويلات والمراسلات، ونعطيك صورة واضحة عن موقفك القانوني.',
  },
  {
    title: 'الإجراء القانوني',
    body: 'نُعد الشكاوى والمطالبات وطلبات الحجز التحفظي أمام الجهات المختصة.',
  },
  {
    title: 'المتابعة حتى الاسترداد',
    body: 'نتابع القضية وتنفيذ الحكم، ونبقيك على اطلاع في كل مرحلة.',
  },
];

export default function Process() {
  return (
    <section className="process" id="process" aria-labelledby="process-title">
      <div className="container">
        <h2 id="process-title" className="section-title section-title--center">
          كيف نتعامل مع قضيتك
        </h2>
        <p className="section-lead section-lead--center">
          مسار واضح من أول اتصال حتى استرداد أموالك — بخطوات تعرفها مسبقًا.
        </p>

        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="steps__item">
              <span className="steps__num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
