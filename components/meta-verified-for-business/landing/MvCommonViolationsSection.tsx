'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvCommonViolationsSectionProps = {
  embedded?: boolean
}

export default function MvCommonViolationsSection({
  embedded = false,
}: MvCommonViolationsSectionProps) {
  const t = useLandingStrings()

  const content = (
    <>
      <p className="mv-hc-prose">{t.commonViolations.description}</p>

      <dl className="mv-hc-violations-list">
        {t.commonViolations.items.map((item) => (
          <div key={item.title} className="mv-hc-violation-entry">
            <dt className="mv-hc-violation-term">{item.title}</dt>
            <dd className="mv-hc-violation-desc">{item.description}</dd>
          </div>
        ))}
      </dl>
    </>
  )

  if (embedded) {
    return (
      <section className="mv-hc-section" aria-labelledby="mv-violations-title">
        <hr className="mv-hc-divider" aria-hidden="true" />
        <h2 id="mv-violations-title" className="mv-hc-section-title">
          {t.commonViolations.title}
        </h2>
        {content}
      </section>
    )
  }

  return (
    <section className="mv-article-section" aria-labelledby="mv-violations-title">
      <div className="mv-section-container">
        <article className="mv-article">
          <h2 id="mv-violations-title" className="mv-article-heading">
            {t.commonViolations.title}
          </h2>
          {content}
        </article>
      </div>
    </section>
  )
}
