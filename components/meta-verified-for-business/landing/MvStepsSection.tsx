'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvStepsSectionProps = {
  embedded?: boolean
}

export default function MvStepsSection({ embedded = false }: MvStepsSectionProps) {
  const t = useLandingStrings()

  const stepsList = (
    <ol className="mv-help-steps">
      {t.steps.items.map((step) => (
        <li key={step.title} className="mv-help-step">
          <h3 className="mv-article-subheading">{step.title}</h3>
          <p className="mv-article-body">{step.description}</p>
        </li>
      ))}
    </ol>
  )

  if (embedded) {
    return (
      <section className="mv-hc-section" aria-labelledby="mv-steps-title">
        <hr className="mv-hc-divider" aria-hidden="true" />
        <h2 id="mv-steps-title" className="mv-hc-section-title">
          {t.steps.title}
        </h2>
        <p className="mv-hc-prose">{t.steps.subtitle}</p>
        {stepsList}
      </section>
    )
  }

  return (
    <section className="mv-article-section" aria-labelledby="mv-steps-title">
      <div className="mv-section-container">
        <article className="mv-article">
          <h2 id="mv-steps-title" className="mv-article-heading">
            {t.steps.title}
          </h2>
          <p className="mv-article-lead">{t.steps.subtitle}</p>
          {stepsList}
        </article>
      </div>
    </section>
  )
}
