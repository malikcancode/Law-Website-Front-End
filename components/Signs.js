import { AlertTriangle } from 'lucide-react';

const signs = [
  'Unexplained transfers from the company’s accounts',
  'A partner, employee, or manager who used company funds without authority',
  'You paid for a deal, goods, or investment — then the other party disappeared',
  'Bounced cheques or promissory notes that were never paid',
  'Invoices or contracts that later proved fake or forged',
  'Outstanding amounts owed by a client or partner who keeps delaying payment',
];

export default function Signs() {
  return (
    <section className="signs" aria-labelledby="signs-title">
      <div className="container signs__inner">
        <div className="signs__head">
          <h2 id="signs-title" className="section-title section-title--light">
            Is your business facing any of these situations?
          </h2>
          <p className="section-lead section-lead--light">
            Acting early helps preserve evidence and take protective measures before the funds are
            moved further.
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
          <strong>Do not leave your rights without a legal claim.</strong>
          <a href="#contact" className="btn btn--gold">
            Start reviewing your case
          </a>
        </p>
      </div>
    </section>
  );
}
