'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvConsequencesSectionProps = {
  embedded?: boolean
}

export default function MvConsequencesSection({
  embedded = false,
}: MvConsequencesSectionProps) {
  const t = useLandingStrings()

  const content = (
    <>
      <p className="mv-hc-prose">{t.consequences.description}</p>

      <ul className="mv-hc-consequences-grid" role="list">
        {t.consequences.items.map((item) => (
          <li key={item.title} className="mv-hc-consequence-card">
            <h3 className="mv-hc-consequence-title">{item.title}</h3>
            <p className="mv-hc-consequence-desc">{item.description}</p>
          </li>
        ))}
      </ul>

      <div className="mv-hc-consequence-info" role="note">
        <p className="mv-hc-consequence-info-text">{t.consequences.infoBox}</p>
      </div>
    </>
  )

  if (embedded) {
    return (
      <section className="mv-hc-section" aria-labelledby="mv-consequences-title">
        <hr className="mv-hc-divider" aria-hidden="true" />
        <h2 id="mv-consequences-title" className="mv-hc-section-title">
          {t.consequences.title}
        </h2>
        {content}
      </section>
    )
  }

  return (
    <section className="mv-article-section" aria-labelledby="mv-consequences-title">
      <div className="mv-section-container">
        <article className="mv-article">
          <h2 id="mv-consequences-title" className="mv-article-heading">
            {t.consequences.title}
          </h2>
          {content}
        </article>
      </div>
    </section>
  )
}
