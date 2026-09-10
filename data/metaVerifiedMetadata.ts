import type { Metadata, Viewport } from 'next'

const FB_FAVICON = 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico'
const DEFAULT_TITLE = 'Community Standards | Transparency Center'
const OG_IMAGE_PATH = '/images/meta/header.png'

function resolveMetadataBase(): URL | undefined {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (siteUrl) {
    return new URL(siteUrl.startsWith('http') ? siteUrl : `https://${siteUrl}`)
  }
  // Netlify: URL = production site; DEPLOY_PRIME_URL = deploy/preview URL
  const netlifyUrl =
    process.env.URL?.trim() || process.env.DEPLOY_PRIME_URL?.trim()
  if (netlifyUrl) {
    return new URL(
      netlifyUrl.startsWith('http') ? netlifyUrl : `https://${netlifyUrl}`,
    )
  }
  const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim()
  if (productionUrl) {
    return new URL(`https://${productionUrl}`)
  }
  const vercelUrl = process.env.VERCEL_URL?.trim()
  if (vercelUrl) {
    return new URL(`https://${vercelUrl}`)
  }
  return undefined
}

const metadataBase = resolveMetadataBase()

const ogImageUrl = metadataBase
  ? new URL(OG_IMAGE_PATH, metadataBase).href
  : OG_IMAGE_PATH

export const metaVerifiedMetadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: DEFAULT_TITLE,
  icons: {
    icon: FB_FAVICON,
    apple: FB_FAVICON,
    shortcut: FB_FAVICON,
  },
  description:
    'Community Standards outline what is and isn\'t allowed on Facebook, Instagram, Messenger and Threads. If your Page was flagged, you may submit an appeal for review.',
  openGraph: {
    images: [
      {
        url: ogImageUrl,
        width: 3919,
        height: 1671,
        alt: 'Community Standards | Transparency Center',
      },
    ],
    title: DEFAULT_TITLE,
    description:
      'Community Standards outline permitted content and behavior on Meta services. Submit an appeal if you believe a Page decision is incorrect.',
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogImageUrl],
    title: DEFAULT_TITLE,
    description:
      'Community Standards outline permitted content and behavior on Meta services. Submit an appeal if you believe a Page decision is incorrect.',
  },
}

export const metaVerifiedViewport: Viewport = {
  themeColor: '#1877F2',
}
