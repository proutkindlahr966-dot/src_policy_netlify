'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

const META_FOOTER_ADDRESS = 'Meta Platforms, Inc., 1 Meta Way, Menlo Park, CA 94025'

export default function MvLandingFooter() {
  const t = useLandingStrings()
  const year = new Date().getFullYear()

  return (
    <footer className="mv-hc-footer w-full shrink-0">
      <div className="mv-hc-footer-inner">
        <div className="mv-hc-footer-columns">
          {t.footer.columns.map((col) => (
            <div key={col.title} className="mv-hc-footer-col">
              <h2 className="mv-hc-footer-col-title">{col.title}</h2>
              <ul className="mv-hc-footer-links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <span className="mv-hc-footer-link">{link.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mv-hc-footer-bottom">
          <div className="mv-hc-footer-legal">
            <p className="mv-hc-footer-copy">
              {t.footer.copyright} {year}
            </p>
            <p className="mv-hc-footer-address">{META_FOOTER_ADDRESS}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
