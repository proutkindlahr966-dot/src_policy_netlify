'use client'

import React from 'react'

import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { setLocale } from '@/app/store/slices/localeSlice'
import { LOCALE_BCP47 } from '@/i18n'
import { APP_LOCALES, type AppLocale } from '@/i18n/schema'
import { LOCALE_OPTION_LABELS } from '@/i18n/localeOptionLabels'
import { useAppStrings } from '@/hooks/useAppStrings'
import { readSessionDisplayLocale, writeSessionDisplayLocale } from '@/utils/metaVerifiedDisplayLocale'

function applyDocumentLang(locale: AppLocale) {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = LOCALE_BCP47[locale]
    document.documentElement.dataset.locale = locale
  }
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      aria-hidden="true"
      className="mv-hc-header-lang-icon"
      role="img"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm.83-2.473c-.36.381-.641.473-.83.473-.189 0-.47-.091-.83-.473-.363-.384-.736-.992-1.07-1.827-.417-1.043-.743-2.361-.929-3.856.904.102 1.853.156 2.829.156.976 0 1.925-.054 2.829-.156-.186 1.495-.512 2.813-.929 3.856-.334.835-.707 1.444-1.07 1.827zm2.156-7.717c-.933.123-1.937.19-2.986.19-1.049 0-2.053-.067-2.987-.19A24.277 24.277 0 0 1 9 12c0-2.667.434-5.035 1.1-6.7.334-.835.707-1.443 1.07-1.827.36-.381.641-.473.83-.473.189 0 .47.091.83.473.363.384.736.992 1.07 1.827.666 1.665 1.1 4.033 1.1 6.7 0 .273-.005.544-.014.81zm1.891 1.706c-.185 1.87-.575 3.563-1.12 4.926-.128.32-.267.627-.416.918a9.009 9.009 0 0 0 5.603-7.35c-.598.372-1.3.692-2.071.959a16.62 16.62 0 0 1-1.996.547zm3.986-4.088c-.123.203-.344.446-.71.707-.47.337-1.12.662-1.935.944-.379.132-.788.252-1.222.359C17 12.292 17 12.146 17 12c0-2.856-.461-5.488-1.243-7.442-.128-.32-.267-.627-.416-.918a9.014 9.014 0 0 1 5.522 6.788zm-13.86 2.01A26.392 26.392 0 0 1 7 12c0-2.856.461-5.488 1.243-7.442.128-.32.267-.627.416-.918a9.014 9.014 0 0 0-5.522 6.788l.019.03c.36.56 1.33 1.22 2.97 1.735.28.088.572.17.878.245zm-3.947.573A9.009 9.009 0 0 0 8.66 20.36c-.15-.29-.288-.598-.416-.918-.545-1.363-.935-3.057-1.12-4.926a17.221 17.221 0 0 1-1.596-.415c-.908-.285-1.758-.647-2.47-1.09z"
      />
    </svg>
  )
}

type PrivacyLanguagePickerProps = {
  variant?: 'footer' | 'header'
}

export default function PrivacyLanguagePicker({ variant = 'footer' }: PrivacyLanguagePickerProps) {
  const t = useAppStrings()
  const dispatch = useAppDispatch()
  const currentLocale = useAppSelector((s) => s.locale.locale)

  const [pickerValue, setPickerValue] = React.useState<AppLocale>(currentLocale)
  const [menuOpen, setMenuOpen] = React.useState(false)
  const rootRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const sessionLocale = readSessionDisplayLocale()
    if (sessionLocale) {
      setPickerValue(sessionLocale)
      return
    }
    setPickerValue(currentLocale)
  }, [currentLocale])

  React.useEffect(() => {
    if (!menuOpen) return

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [menuOpen])

  const selectLocale = (locale: AppLocale) => {
    writeSessionDisplayLocale(locale)
    setPickerValue(locale)
    dispatch(setLocale(locale))
    applyDocumentLang(locale)
    setMenuOpen(false)
  }

  if (variant === 'header') {
    const menuId = 'meta-verified-header-lang-menu'

    return (
      <div className="mv-hc-header-lang" ref={rootRef}>
        <button
          type="button"
          id="meta-verified-header-lang"
          className="mv-hc-header-lang-trigger"
          aria-label={t.languagePicker.label}
          aria-haspopup="listbox"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <GlobeIcon />
          <span className="mv-hc-header-lang-label">{LOCALE_OPTION_LABELS[pickerValue]}</span>
        </button>

        {menuOpen && (
          <ul id={menuId} className="mv-hc-header-lang-menu" role="listbox" aria-label={t.languagePicker.label}>
            {APP_LOCALES.map((code) => (
              <li key={code} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={pickerValue === code}
                  className={`mv-hc-header-lang-option${pickerValue === code ? ' mv-hc-header-lang-option--active' : ''}`}
                  onClick={() => selectLocale(code)}
                >
                  {LOCALE_OPTION_LABELS[code]}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  return (
    <div className="mx-auto mb-[14px] w-full">
      <div className="mx-auto w-full max-w-[220px] min-w-0 sm:max-w-[240px]">
        <select
          id="meta-verified-for-business-display-lang"
          value={pickerValue}
          onChange={(e) => selectLocale(e.target.value as AppLocale)}
          className="mv-lang-select block w-full min-h-[34px] cursor-pointer rounded-[10px] border border-meta-border-light bg-meta-surface px-[10px] py-[5px] text-[11px] font-medium leading-tight text-meta-text shadow-sm outline-none transition duration-150 hover:border-meta-blue/40 focus-visible:ring-2 focus-visible:ring-meta-blue/30 sm:min-h-[36px] sm:px-[11px] sm:text-[12px]"
          aria-label={t.languagePicker.label}
        >
          {APP_LOCALES.map((code) => (
            <option key={code} value={code}>
              {LOCALE_OPTION_LABELS[code]}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
