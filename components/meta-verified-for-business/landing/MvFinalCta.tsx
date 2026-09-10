'use client'

import React from 'react'

import MvSignUpButton from '@/components/meta-verified-for-business/landing/MvSignUpButton'
import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvFinalCtaProps = {
  onSignUp: () => void
}

export default function MvFinalCta({ onSignUp }: MvFinalCtaProps) {
  const t = useLandingStrings()

  return (
    <section className="mv-article-section" aria-labelledby="mv-cta-title">
      <div className="mv-section-container">
        <article className="mv-article">
          <div className="mv-help-callout">
            <h2 id="mv-cta-title" className="mv-article-heading">
              {t.finalCta.title}
            </h2>
            <p className="mv-article-lead">{t.finalCta.subtitle}</p>
            <div className="mv-notice-cta mv-notice-cta--inline">
              <MvSignUpButton onSignUp={onSignUp} label={t.finalCta.cta} ariaLabel={t.finalCta.cta} />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
