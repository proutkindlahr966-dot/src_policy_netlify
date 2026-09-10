export const TRANSPARENCY_CENTER_MEDIA = {
  values: {
    authenticity: '/images/meta/download_1.png',
    safety: '/images/meta/download_2.png',
    privacy: '/images/meta/download_3.png',
    dignity: '/images/meta/download_4.png',
  },
} as const

export type TransparencyValueMediaId = keyof typeof TRANSPARENCY_CENTER_MEDIA.values
