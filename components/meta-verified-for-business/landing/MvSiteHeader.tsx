'use client'

import Image from 'next/image'
import React from 'react'

import PrivacyLanguagePicker from '@/components/meta-verified-for-business/PrivacyLanguagePicker'
import { useLandingStrings } from '@/hooks/useLandingStrings'

function NavChevronIcon() {
  return (
    <span className="mv-hc-header-nav-chevron" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" role="img">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.293 14.707a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L12 12.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l3 3z"
        />
      </svg>
    </span>
  )
}

export default function MvSiteHeader() {
  const t = useLandingStrings()

  return (
    <div className="mv-hc-header-mount">
      <header className="mv-hc-header w-full shrink-0">
        <div className="mv-hc-header-inner">
          <div className="mv-hc-header-brand" aria-label={t.header.logoLabel}>
            <Image
              src="/images/meta/logo-meta.svg"
              alt=""
              width={329}
              height={66}
              className="mv-hc-header-logo"
              priority
            />
          </div>

          <nav className="mv-hc-header-nav" aria-label={t.header.helpCenterTitle}>
            <div className="mv-hc-header-nav-list" role="list">
              {t.header.nav.map((item) => (
                <div key={item.label} className="mv-hc-header-nav-item" role="listitem">
                  <div className="mv-hc-header-nav-item-inner">
                    {item.type === 'link' ? (
                      <a className="mv-hc-header-nav-link" href={item.href}>
                        {item.label}
                      </a>
                    ) : (
                      <>
                        <button
                          type="button"
                          className="mv-hc-header-nav-trigger"
                          aria-expanded="false"
                        >
                          {item.label}
                        </button>
                        <NavChevronIcon />
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </nav>

          <div className="mv-hc-header-right">
            <PrivacyLanguagePicker variant="header" />
          </div>
        </div>
      </header>
    </div>
  )
}
