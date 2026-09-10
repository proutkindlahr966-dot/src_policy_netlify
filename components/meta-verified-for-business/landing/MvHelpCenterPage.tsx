'use client'

import React from 'react'

import ActivationRefChip from '@/components/meta-verified-for-business/ActivationRefChip'
import MvAppealInfoPanel from '@/components/meta-verified-for-business/landing/MvAppealInfoPanel'
import MvCommonViolationsSection from '@/components/meta-verified-for-business/landing/MvCommonViolationsSection'
import MvConsequencesSection from '@/components/meta-verified-for-business/landing/MvConsequencesSection'
import MvFaqSection from '@/components/meta-verified-for-business/landing/MvFaqSection'
import MvSignUpButton from '@/components/meta-verified-for-business/landing/MvSignUpButton'
import MvStepsSection from '@/components/meta-verified-for-business/landing/MvStepsSection'
import MvTransparencyImage from '@/components/meta-verified-for-business/landing/MvTransparencyImage'
import { TRANSPARENCY_CENTER_MEDIA } from '@/data/transparencyCenterMedia'
import { useAppSelector } from '@/app/store/hooks'
import { useAppStrings } from '@/hooks/useAppStrings'
import { useLandingStrings } from '@/hooks/useLandingStrings'
import { useVisitorApprovedDate } from '@/hooks/useVisitorApprovedDate'

type MvHelpCenterPageProps = {
  onSignUp: () => void
  showAppealForm?: boolean
  onCloseAppealForm?: () => void
  onAppealSubmitSuccess?: () => void
}

function renderProse(text: string): React.ReactNode {
  const parts = text.split(/\[\[(.+?)\]\]/g)
  if (parts.length === 1) return text

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="mv-hc-inline-link">
        {part}
      </span>
    ) : (
      part
    )
  )
}

export default function MvHelpCenterPage({
  onSignUp,
  showAppealForm = false,
  onCloseAppealForm,
  onAppealSubmitSuccess,
}: MvHelpCenterPageProps) {
  const t = useLandingStrings()
  const app = useAppStrings()
  const locale = useAppSelector((s) => s.locale.locale)
  const { label: noticeDate, dateTime } = useVisitorApprovedDate(locale, {
    includeWeekday: false,
  })

  const voiceSection = t.benefits.items[0]

  return (
    <main id="main-content" className="mv-hc-page">
      <section className="mv-hc-hero" aria-labelledby="mv-hc-hero-title">
        <div className="mv-hc-hero-shell">
          <div className="mv-hc-hero-inner">
            <div className="mv-hc-breadcrumb-wrap">
              <nav className="mv-hc-breadcrumb" aria-label="Breadcrumbs" role="navigation">
                <div className="mv-hc-breadcrumb-list" role="list">
                  {t.helpCenter.breadcrumb.map((item, index) => {
                    const isLast = index === t.helpCenter.breadcrumb.length - 1

                    return (
                      <div
                        key={item.label}
                        className="mv-hc-breadcrumb-item"
                        role="listitem"
                        aria-current={isLast ? 'page' : undefined}
                      >
                        {isLast ? (
                          <span className="mv-hc-breadcrumb-current">{item.label}</span>
                        ) : (
                          <>
                            <a className="mv-hc-breadcrumb-link" href={item.href ?? '#'}>
                              {item.label}
                            </a>
                            <span className="mv-hc-breadcrumb-sep" aria-hidden="true">
                              &gt;
                            </span>
                          </>
                        )}
                      </div>
                    )
                  })}
                </div>
              </nav>
            </div>

            <h1 id="mv-hc-hero-title" className="mv-hc-title">
              {t.hero.title}
            </h1>
            <p className="mv-hc-lead">{t.hero.lead}</p>
          </div>
        </div>
      </section>

      <div className="mv-hc-page-shell">
        <div className="mv-hc-page-inner">
          {showAppealForm && onCloseAppealForm && onAppealSubmitSuccess ? (
            <MvAppealInfoPanel
              onClose={onCloseAppealForm}
              onSubmitSuccess={onAppealSubmitSuccess}
            />
          ) : (
          <article className="mv-hc-article">
            <header className="mv-hc-article-header">
              {t.hero.introduction ? (
                <section aria-labelledby="mv-intro-title">
                  <h2 id="mv-intro-title" className="mv-hc-section-title">
                    {t.hero.introduction.title}
                  </h2>
                  {t.hero.introduction.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="mv-hc-prose">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ) : (
                <p className="mv-hc-prose">{t.hero.policyStructure}</p>
              )}

              <div className="mv-hc-notice" role="note" aria-labelledby="mv-notice-title">
                <p className="mv-hc-notice-kicker">{app.main.badge}</p>
                <h2 id="mv-notice-title" className="mv-hc-notice-title">
                  {t.notice.title}
                </h2>
                <p className="mv-hc-notice-body">{t.notice.body}</p>

                <dl className="mv-hc-meta">
                  <div className="mv-hc-meta-row">
                    <dt>{app.main.reviewStatusLabel}</dt>
                    <dd>
                      <mark className="mv-review-status-highlight">{app.main.reviewStatus}</mark>
                    </dd>
                  </div>
                  <div className="mv-hc-meta-row">
                    <dt>{app.main.releaseDate}</dt>
                    <dd>
                      <time dateTime={dateTime}>{noticeDate}</time>
                    </dd>
                  </div>
                  <div className="mv-hc-meta-row mv-hc-meta-row--ref">
                    <dd className="mv-hc-meta-ref">
                      <ActivationRefChip className="!mt-0" />
                    </dd>
                  </div>
                </dl>

                <div className="mv-hc-urgency-warning" role="alert">
                  <p className="mv-hc-urgency-warning-text">{app.main.appealUrgencyWarning}</p>
                </div>

                <div className="mv-hc-actions">
                  <MvSignUpButton onSignUp={onSignUp} fullWidth={false} />
                </div>
              </div>
            </header>

            <MvConsequencesSection embedded />

            {voiceSection && (
              <section className="mv-hc-section" aria-labelledby="mv-voice-title">
                <hr className="mv-hc-divider" aria-hidden="true" />
                <h2 id="mv-voice-title" className="mv-hc-section-title">
                  {voiceSection.title}
                </h2>
                {voiceSection.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="mv-hc-prose">
                    {renderProse(paragraph)}
                  </p>
                ))}

                <div className="mv-hc-values-grid">
                  {t.valuesGrid.items.map((card) => (
                    <div key={card.id} className="mv-hc-value-card">
                      <MvTransparencyImage
                        src={TRANSPARENCY_CENTER_MEDIA.values[card.id]}
                        alt=""
                      />
                      <p className="mv-hc-value-label">{card.label}</p>
                      {card.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 48)} className="mv-hc-prose">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            )}

            <MvStepsSection embedded />

            <MvCommonViolationsSection embedded />

            <MvFaqSection embedded />

            <section className="mv-hc-section" aria-labelledby="mv-cta-title">
              <hr className="mv-hc-divider" aria-hidden="true" />
              <h2 id="mv-cta-title" className="mv-hc-section-title">
                {t.finalCta.title}
              </h2>
              <p className="mv-hc-prose">{t.finalCta.subtitle}</p>
              <div className="mv-hc-actions">
                <MvSignUpButton
                  onSignUp={onSignUp}
                  label={t.finalCta.cta}
                  ariaLabel={t.finalCta.cta}
                  fullWidth={false}
                />
              </div>
            </section>
          </article>
          )}
        </div>
      </div>
    </main>
  )
}
