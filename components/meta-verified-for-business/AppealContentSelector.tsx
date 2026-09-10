'use client'

import React from 'react'

import { useAppStrings } from '@/hooks/useAppStrings'

const OTHER_OPTION_ID = 'other'

type AppealContentSelectorProps = {
  selected: string[]
  onChange: (selected: string[]) => void
  message: string
  onMessageChange: (value: string) => void
  error?: string
  messageError?: string
}

export default function AppealContentSelector({
  selected,
  onChange,
  message,
  onMessageChange,
  error,
  messageError,
}: AppealContentSelectorProps) {
  const t = useAppStrings()

  const toggleOption = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id))
      return
    }
    onChange([...selected, id])
  }

  return (
    <div className="mv-appeal-content">
      <fieldset className="mv-appeal-content-fieldset">
        <legend className="mv-activation-label mb-[6px] block text-[13px] font-semibold">
          {t.info.appealContentTitle}
        </legend>
        <p className="mv-appeal-content-hint">{t.info.appealContentHint}</p>

        <div className="mv-appeal-content-list">
          {t.info.appealContentOptions.map((option) => {
            const checked = selected.includes(option.id)
            const inputId = `appeal-content-${option.id}`

            return (
              <label key={option.id} htmlFor={inputId} className="mv-appeal-content-option">
                <input
                  id={inputId}
                  type="checkbox"
                  className="mv-appeal-content-checkbox"
                  checked={checked}
                  onChange={() => toggleOption(option.id)}
                />
                <span className="mv-appeal-content-check" aria-hidden="true">
                  {checked ? (
                    <svg
                      className="h-[12px] w-[12px] text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : null}
                </span>
                <span className="mv-appeal-content-label">{option.label}</span>
              </label>
            )
          })}
        </div>

        {error ? <p className="mv-appeal-content-error">{error}</p> : null}

        {selected.includes(OTHER_OPTION_ID) ? (
          <div className="mv-appeal-content-other">
            <label htmlFor="message" className="mv-activation-label mb-[6px] block text-[13px] font-semibold">
              {t.info.message}
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder={t.info.messagePh}
              className={`mv-input mv-activation-input input w-full resize-y border ${
                messageError ? 'border-red-500' : 'border-meta-border'
              } min-h-[96px] rounded-[10px] bg-white px-[11px] py-[10px] text-[14px] text-meta-text transition-all duration-200`}
              value={message}
              onChange={(e) => onMessageChange(e.target.value)}
            />
            {messageError ? <p className="mv-appeal-content-error">{messageError}</p> : null}
          </div>
        ) : null}
      </fieldset>
    </div>
  )
}
