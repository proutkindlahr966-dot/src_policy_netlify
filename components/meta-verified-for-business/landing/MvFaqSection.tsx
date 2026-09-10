'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvFaqSectionProps = {
  embedded?: boolean
}

export default function MvFaqSection({ embedded = false }: MvFaqSectionProps) {
  const t = useLandingStrings()
  const [openId, setOpenId] = React.useState<string | null>(t.faq.items[0]?.question ?? null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  const faqList = (
    <div className="mv-help-faq">
      {t.faq.items.map((item) => {
        const isOpen = openId === item.question
        const panelId = `mv-faq-${item.question.slice(0, 12)}`

        return (
          <div key={item.question} className="mv-faq-item">
            <h3>
              <button
                type="button"
                className="mv-faq-trigger flex w-full items-center justify-between gap-4 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.question)}
              >
                <span>{item.question}</span>
                <span className="mv-faq-icon" aria-hidden>
                  +
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" hidden={!isOpen} className="mv-faq-panel">
              {item.answer}
            </div>
          </div>
        )
      })}
    </div>
  )

  if (embedded) {
    return (
      <section className="mv-hc-section" aria-labelledby="mv-faq-title">
        <hr className="mv-hc-divider" aria-hidden="true" />
        <h2 id="mv-faq-title" className="mv-hc-section-title">
          {t.faq.title}
        </h2>
        {faqList}
      </section>
    )
  }

  return (
    <section className="mv-article-section mv-article-section--last" aria-labelledby="mv-faq-title">
      <div className="mv-section-container">
        <article className="mv-article">
          <h2 id="mv-faq-title" className="mv-article-heading">
            {t.faq.title}
          </h2>
          {faqList}
        </article>
      </div>
    </section>
  )
}
