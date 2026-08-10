"use client";

import { useLang } from "./LangProvider";

export function Booking() {
  const { t } = useLang();

  return (
    <section className="section tours" id="booking">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{t.how.kicker}</span>
          <h2>{t.how.title}</h2>
        </div>

        <ol className="steps">
          {t.how.steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="know">
          <h3>{t.know.title}</h3>
          <ul>
            {t.know.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
