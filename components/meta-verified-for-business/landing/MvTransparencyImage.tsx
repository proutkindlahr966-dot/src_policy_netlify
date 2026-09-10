'use client'

import React from 'react'

type MvTransparencyImageProps = {
  src: string
  alt?: string
  className?: string
}

/** Full-width illustration — matches Transparency Center GalaxyHTMLImg */
export default function MvTransparencyImage({
  src,
  alt = '',
  className = '',
}: MvTransparencyImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width="100%"
      loading="lazy"
      decoding="async"
      className={`mv-hc-media-img ${className}`.trim()}
    />
  )
}
