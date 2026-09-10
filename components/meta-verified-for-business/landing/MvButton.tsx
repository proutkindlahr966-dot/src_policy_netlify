'use client'

import React from 'react'

type MvButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: 'primary' | 'outline'
  className?: string
  ariaLabel?: string
  fullWidth?: boolean
}

export default function MvButton({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  ariaLabel,
  fullWidth = true,
}: MvButtonProps) {
  const base =
    'inline-flex min-h-[2.25rem] items-center justify-center px-4 py-2 text-[15px] transition duration-200 disabled:cursor-not-allowed disabled:opacity-60'
  const widthClass = fullWidth
    ? 'w-full max-w-[min(100%,22.5rem)] sm:min-h-[2.5rem] sm:px-5'
    : 'w-auto min-w-[8.5rem] sm:min-h-[2.375rem]'
  const variantClass = variant === 'primary' ? 'mv-btn-meta' : 'mv-btn-meta-outline'

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${widthClass} ${variantClass} ${className}`.trim()}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
