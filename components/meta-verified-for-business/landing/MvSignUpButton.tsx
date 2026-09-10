'use client'

import React from 'react'

import MvButton from '@/components/meta-verified-for-business/landing/MvButton'
import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvSignUpButtonProps = {
  onSignUp: () => void
  label?: string
  ariaLabel?: string
  className?: string
  fullWidth?: boolean
}

/** Nút mở biểu mẫu kháng nghị — nhãn mặc định từ hero.cta */
export default function MvSignUpButton({
  onSignUp,
  label,
  ariaLabel,
  className = '',
  fullWidth = true,
}: MvSignUpButtonProps) {
  const t = useLandingStrings()
  const text = label ?? t.hero.cta
  const a11y = ariaLabel ?? text

  return (
    <MvButton
      onClick={onSignUp}
      ariaLabel={a11y}
      fullWidth={fullWidth}
      className={className}
    >
      {text}
    </MvButton>
  )
}
