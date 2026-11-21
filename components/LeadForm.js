'use client';

import { useState } from 'react';
import { Lock, Loader2, CheckCircle2 } from 'lucide-react';
import { amountRanges, cities, localizeCaseType } from '@/lib/defaults';
import { useSite } from './SiteProvider';

const initial = {
  fullName: '',
  phone: '',
  email: '',
  companyName: '',
  city: '',
  caseType: '',
  amountRange: 'unspecified',
  preferredContact: 'call',
  message: '',
  consent: false,
  website: '',
};

const toLatin = (v) =>
  v
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06f0));

const validate = (v, caseTypes) => {
  const e = {};
  if (v.fullName.trim().length < 3) e.fullName = 'يرجى إدخال الاسم الكامل';
  const phone = toLatin(v.phone).replace(/[\s\-()]/g, '');
  if (!/^(?:\+?966|00966|0)?5\d{8}$/.test(phone)) {
    e.phone = 'أدخل رقم جوال سعودي صحيح، مثل 05xxxxxxxx';
  }
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
    e.email = 'صيغة البريد الإلكتروني غير صحيحة';
  }
  if (!v.caseType || !caseTypes.some((c) => c.value === v.caseType)) {
    e.caseType = 'يرجى اختيار نوع القضية';
  }
  if (!v.consent) e.consent = 'يرجى الموافقة على التواصل بشأن هذا الطلب';
  return e;
};

const readSource = () => {
  if (typeof window === 'undefined') return {};
  const p = new URLSearchParams(window.location.search);
  return {
    page: window.location.href,
    referrer: document.referrer,
    utmSource: p.get('utm_source') || undefined,
    utmMedium: p.get('utm_medium') || undefined,
    utmCampaign: p.get('utm_campaign') || undefined,
  };
};

export default function LeadForm() {
  const site = useSite();
  const caseTypes = (site.caseTypes || []).map(localizeCaseType);
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [serverMessage, setServerMessage] = useState('');

  const set = (name) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values, caseTypes);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`lf-${Object.keys(found)[0]}`)?.focus();
      return;
    }

    setStatus('submitting');
    setServerMessage('');
    try {
      const res = await fetch(`${site.apiUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, phone: toLatin(values.phone), source: readSource() }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setServerMessage(data.message || 'تعذّر إرسال طلبك. يرجى المحاولة مرة أخرى.');
        setStatus('error');
        return;
      }
      setStatus('success');
      setServerMessage(
        data.message ||
          'تم استلام طلبك. سيتواصل معك أحد مستشارينا قريبًا لجدولة الاستشارة.'
      );
      setValues(initial);
    } catch {
      setServerMessage('تعذّر الوصول إلى الخادم. تحقق من اتصالك أو اتصل بنا مباشرة.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="lead-form lead-form--done" role="status">
        <CheckCircle2 size={56} strokeWidth={1.5} aria-hidden="true" />
        <h3>تم استلام الطلب</h3>
        <p>{serverMessage}</p>
        <p className="lead-form__note">
          للأمور العاجلة، اتصل بنا على <a href={site.telHref} dir="ltr">{site.phone}</a>
        </p>
        <button type="button" className="btn btn--ghost-dark" onClick={() => setStatus('idle')}>
          إرسال طلب آخر
        </button>
      </div>
    );
  }

  const fieldProps = (name) => ({
    id: `lf-${name}`,
    name,
    value: values[name],
    onChange: set(name),
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `lf-${name}-err` : undefined,
  });

  const Err = ({ name }) =>
    errors[name] ? (
      <span className="field__error" id={`lf-${name}-err`}>
        {errors[name]}
      </span>
    ) : null;

  return (
    <form className="lead-form" onSubmit={onSubmit} noValidate>
      <div className="lead-form__head">
        <h3>احجز استشارتك القانونية</h3>
        <p>
          <Lock size={15} strokeWidth={2} aria-hidden="true" /> بياناتك سرية ويطّلع عليها المحامي
          المختص فقط
        </p>
      </div>

      <div className="lead-form__grid">
        <div className="field">
          <label htmlFor="lf-fullName">الاسم الكامل *</label>
          <input type="text" autoComplete="name" placeholder="مثال: عبدالله محمد" {...fieldProps('fullName')} />
          <Err name="fullName" />
        </div>

        <div className="field">
          <label htmlFor="lf-phone">رقم الجوال *</label>
          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            dir="ltr"
            placeholder="05xxxxxxxx"
            {...fieldProps('phone')}
          />
          <Err name="phone" />
        </div>

        <div className="field">
          <label htmlFor="lf-companyName">الشركة / المنشأة</label>
          <input type="text" autoComplete="organization" {...fieldProps('companyName')} />
        </div>

        <div className="field">
          <label htmlFor="lf-city">المدينة</label>
          <select {...fieldProps('city')}>
            <option value="">اختر المدينة</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="field field--full">
          <label htmlFor="lf-caseType">نوع القضية *</label>
          <select {...fieldProps('caseType')}>
            <option value="">اختر نوع القضية</option>
            {caseTypes.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
          <Err name="caseType" />
        </div>

        <div className="field">
          <label htmlFor="lf-amountRange">المبلغ التقريبي محل النزاع</label>
          <select {...fieldProps('amountRange')}>
            {amountRanges.map((a) => (
              <option key={a.value} value={a.value}>
                {a.label}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="lf-email">البريد الإلكتروني (اختياري)</label>
          <input type="email" autoComplete="email" dir="ltr" {...fieldProps('email')} />
          <Err name="email" />
        </div>

        <fieldset className="field field--full choice">
          <legend>طريقة التواصل المفضلة</legend>
          <div className="choice__options">
            {[
              ['call', 'اتصال هاتفي'],
              ['whatsapp', 'واتساب'],
              ['email', 'بريد إلكتروني'],
            ].map(([val, label]) => (
              <label key={val} className="choice__option">
                <input
                  type="radio"
                  name="preferredContact"
                  value={val}
                  checked={values.preferredContact === val}
                  onChange={set('preferredContact')}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="field field--full">
          <label htmlFor="lf-message">ملخص موجز عن قضيتك</label>
          <textarea
            rows={4}
            placeholder="متى حدث الأمر؟ من الطرف الآخر؟ هل لديك مستندات أو تحويلات بنكية؟"
            {...fieldProps('message')}
          />
        </div>

        <div className="hp" aria-hidden="true">
          <label htmlFor="lf-website">Website</label>
          <input
            id="lf-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={set('website')}
          />
        </div>

        <div className="field field--full">
          <label className="consent">
            <input
              type="checkbox"
              id="lf-consent"
              checked={values.consent}
              onChange={set('consent')}
              aria-invalid={errors.consent ? 'true' : undefined}
              aria-describedby={errors.consent ? 'lf-consent-err' : undefined}
            />
            <span>
              أوافق على التواصل معي بشأن هذا الطلب، وأفهم أن معلوماتي ستُعامل بسرية.
            </span>
          </label>
          <Err name="consent" />
        </div>
      </div>

      {status === 'error' && serverMessage && (
        <p className="lead-form__alert" role="alert">
          {serverMessage}
        </p>
      )}

      <button type="submit" className="btn btn--gold btn--lg btn--block" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 className="spin" size={20} aria-hidden="true" /> جارٍ الإرسال…
          </>
        ) : (
          'إرسال طلب الاستشارة'
        )}
      </button>
    </form>
  );
}
