const steps = [
  {
    title: 'Confidential consultation',
    body: 'You contact us and explain what happened. Everything you share stays between us.',
  },
  {
    title: 'Document review',
    body: 'We examine contracts, transfers, and correspondence and give you a clear view of your legal position.',
  },
  {
    title: 'Legal action',
    body: 'We prepare complaints, claims, and requests for precautionary attachment before the competent authorities.',
  },
  {
    title: 'Follow-through to recovery',
    body: 'We pursue the case and enforcement of the judgment, and keep you updated at every stage.',
  },
];

export default function Process() {
  return (
    <section className="process" id="process" aria-labelledby="process-title">
      <div className="container">
        <h2 id="process-title" className="section-title section-title--center">
          How we handle your case
        </h2>
        <p className="section-lead section-lead--center">
          A clear path from the first call to recovering your funds — with steps you know in advance.
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
