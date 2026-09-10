'use client'

import React from 'react'

import { useAppStrings } from '@/hooks/useAppStrings'
import { getOrCreateActivationRef } from '@/utils/metaVerifiedActivation'

type ActivationRefChipProps = {
  className?: string
  /** Căn giữa trong modal — trang chính để mặc định (trái/center theo layout cha) */
  centered?: boolean
  /** Chỉ hiện mã (không kèm nhãn) — dùng khi label đã có ở ngoài */
  codeOnly?: boolean
}

export default function ActivationRefChip({
  className = '',
  centered = false,
  codeOnly = false,
}: ActivationRefChipProps) {
  const t = useAppStrings()
  const [ticketId, setTicketId] = React.useState('')

  React.useEffect(() => {
    setTicketId(getOrCreateActivationRef().ticketId)
  }, [])

  const code = `#${ticketId || '…'}`

  return (
    <p
      className={`mv-ref-chip ${centered ? 'mv-ref-chip-modal' : ''} ${className}`.trim()}
      aria-live="polite"
    >
      {codeOnly ? code : `${t.main.caseId} ${code}`}
    </p>
  )
}
