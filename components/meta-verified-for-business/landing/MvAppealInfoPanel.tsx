'use client'

import React from 'react'

import MvAppealInfoForm from '@/components/meta-verified-for-business/landing/MvAppealInfoForm'
import { useAppStrings } from '@/hooks/useAppStrings'
import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvAppealInfoPanelProps = {
  onClose: () => void
  onSubmitSuccess: () => void
}

export default function MvAppealInfoPanel({ onClose, onSubmitSuccess }: MvAppealInfoPanelProps) {
  const t = useLandingStrings()
  const app = useAppStrings()
  const backLabel = t.helpCenter.breadcrumb[t.helpCenter.breadcrumb.length - 1]?.label ?? app.common.close

  return (
    <article className="mv-hc-appeal-panel" aria-labelledby="mv-appeal-title">
      <header className="mv-hc-appeal-panel-header">
        <button type="button" className="mv-hc-appeal-back" onClick={onClose}>
          <span aria-hidden="true">←</span> {backLabel}
        </button>
        <h2 id="mv-appeal-title" className="mv-hc-appeal-title">
          {app.info.title}
        </h2>
      </header>
      <MvAppealInfoForm onSubmitSuccess={onSubmitSuccess} />
    </article>
  )
}
