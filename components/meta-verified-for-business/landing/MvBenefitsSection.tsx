'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

export default function MvBenefitsSection() {
  const t = useLandingStrings()

  return (
    <>
      {t.benefits.items.map((item) => (
        <section key={item.title} className="mv-hc-section" aria-labelledby={`mv-benefit-${item.title}`}>
          <hr className="mv-hc-divider" aria-hidden="true" />
          <h2 id={`mv-benefit-${item.title}`} className="mv-hc-section-title">
            {item.title}
          </h2>
          {item.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mv-hc-prose">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </>
  )
}
