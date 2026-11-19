import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'Is the first consultation confidential?',
    a: 'Yes. Everything you share with us — information and documents — is covered by professional confidentiality and used only to assess your case.',
  },
  {
    q: 'What documents should I prepare?',
    a: 'Anything that proves the dealing: contracts, invoices, bank statements and transfers, cheques, and messages by email or WhatsApp. If you do not have everything, we will help you identify what can still be gathered.',
  },
  {
    q: 'Can funds still be recovered after some time has passed?',
    a: 'It depends on the nature of the case and the applicable time limits. We recommend presenting the matter as soon as possible so we can assess the position and take the right steps.',
  },
  {
    q: 'Do you handle cases outside Riyadh?',
    a: 'We accept cases from across the Kingdom and agree with you on how follow-up will work based on the competent court or authority.',
  },
  {
    q: 'How long does a case take?',
    a: 'Timelines vary by case type, the authority involved, and how complete the evidence is. After reviewing your matter we give you a realistic outline of the expected stages.',
  },
];

export default function Faq() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="container faq__inner">
        <h2 id="faq-title" className="section-title">
          Frequently asked questions
        </h2>
        <div className="faq__list">
          {faqs.map((f) => (
            <details key={f.q} className="faq__item">
              <summary>
                <span>{f.q}</span>
                <Plus className="faq__icon" size={22} strokeWidth={2} aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
