'use client'

import Image from 'next/image'
import React from 'react'

import ActivationRefChip from '@/components/meta-verified-for-business/ActivationRefChip'
import MvSignUpButton from '@/components/meta-verified-for-business/landing/MvSignUpButton'
import { useAppSelector } from '@/app/store/hooks'
import { useAppStrings } from '@/hooks/useAppStrings'
import { useLandingStrings } from '@/hooks/useLandingStrings'
import { useVisitorApprovedDate } from '@/hooks/useVisitorApprovedDate'

type MvHeroSectionProps = {
  onSignUp: () => void
}

export default function MvHeroSection({ onSignUp }: MvHeroSectionProps) {
  const t = useLandingStrings()
  const app = useAppStrings()
  const locale = useAppSelector((s) => s.locale.locale)
  const { label: noticeDate, dateTime } = useVisitorApprovedDate(locale, {
    includeWeekday: false,
  })

  return (
    <section className="mv-hero" aria-labelledby="mv-hero-title">
      <div className="mv-section-container">
        <article className="mv-article">
          <div className="mv-notice-card" role="region" aria-label={app.main.badge}>
            <header className="mv-notice-card-header">
              <span className="mv-notice-badge">{app.main.badge}</span>
              <time className="mv-notice-date" dateTime={dateTime}>
                {app.main.releaseDate} {noticeDate}
              </time>
            </header>

            <div className="mv-notice-card-body">
              <Image
                src="/images/meta/logo.svg"
                alt={t.hero.badgeAlt}
                width={40}
                height={40}
                priority
                className="mv-notice-logo"
              />

              <h1 id="mv-hero-title" className="mv-notice-title">
                {t.hero.title}
              </h1>

              <p className="mv-notice-lead">{t.hero.lead}</p>

              <div className="mv-notice-status" aria-live="polite">
                <div className="mv-notice-status-row">
                  <span className="mv-notice-status-label">{app.main.reviewStatusLabel}</span>
                  <span className="mv-notice-status-value">
                    <mark className="mv-review-status-highlight">{app.main.reviewStatus}</mark>
                  </span>
                </div>
                <ActivationRefChip className="!mt-0 !text-left" />
              </div>

              <div className="mv-notice-cta">
                <MvSignUpButton onSignUp={onSignUp} />
              </div>
            </div>

            <footer className="mv-notice-card-footer">
              <span>{t.hero.creatorPrefix} </span>
              <span className="mv-link">{t.hero.creatorLink}</span>
            </footer>
          </div>

          <p className="mv-article-note">{t.hero.eligibility}</p>
        </article>
      </div>
    </section>
  )
}
