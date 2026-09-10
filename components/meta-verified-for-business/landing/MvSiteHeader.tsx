'use client'

import Image from 'next/image'
import React from 'react'

import PrivacyLanguagePicker from '@/components/meta-verified-for-business/PrivacyLanguagePicker'
import { useLandingStrings } from '@/hooks/useLandingStrings'

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
                <div key={item.href} className="mv-hc-header-nav-item" role="listitem">
                  <div className="mv-hc-header-nav-item-inner">
                    <a className="mv-hc-header-nav-link" href={item.href}>
                      {item.label}
                    </a>
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
