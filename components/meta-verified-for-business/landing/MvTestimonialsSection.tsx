'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

export default function MvTestimonialsSection() {
  const t = useLandingStrings()

  return (
    <section className="mv-article-section" aria-labelledby="mv-testimonials-title">
      <div className="mv-section-container">
        <article className="mv-article">
          <h2 id="mv-testimonials-title" className="mv-article-heading">
            {t.testimonials.title}
          </h2>

          <ul className="mv-help-tips">
            {t.testimonials.items.map((item) => (
              <li key={item.quote} className="mv-help-tip">
                <p className="mv-help-tip-quote">{item.quote}</p>
                <p className="mv-help-tip-source">
                  <span className="mv-help-tip-author">{item.author}</span>
                  <span className="mv-help-tip-role"> — {item.role}</span>
                </p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
