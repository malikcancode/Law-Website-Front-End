import { AlertTriangle } from 'lucide-react';

const signs = [
  'تحويلات غير مبررة من حسابات الشركة',
  'شريك أو موظف أو مدير استخدم أموال الشركة دون صلاحية',
  'دفعت مقابل صفقة أو بضاعة أو استثمار ثم اختفى الطرف الآخر',
  'شيكات مرتجعة أو سندات لأمر لم تُسدَّد',
  'فواتير أو عقود تبيّن لاحقًا أنها مزوّرة أو وهمية',
  'مبالغ مستحقة على عميل أو شريك يماطل في السداد',
];

export default function Signs() {
  return (
    <section className="signs" aria-labelledby="signs-title">
      <div className="container signs__inner">
        <div className="signs__head">
          <h2 id="signs-title" className="section-title section-title--light">
            هل تواجه منشأتك أيًا من هذه الحالات؟
          </h2>
          <p className="section-lead section-lead--light">
            التحرّك المبكر يساعد على حفظ الأدلة واتخاذ إجراءات وقائية قبل نقل الأموال إلى أماكن
            أبعد.
          </p>
        </div>

        <ul className="signs__list">
          {signs.map((s) => (
            <li key={s}>
              <AlertTriangle size={20} strokeWidth={1.75} aria-hidden="true" />
              <span>{s}</span>
            </li>
          ))}
        </ul>

        <p className="signs__cta">
          <strong>لا تترك حقك بلا مطالبة قانونية.</strong>
          <a href="#contact" className="btn btn--gold">
            ابدأ بمراجعة قضيتك
          </a>
        </p>
      </div>
    </section>
  );
}
