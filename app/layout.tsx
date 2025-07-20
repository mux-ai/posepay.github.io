import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PosePay - AI-Powered Pose Recognition for Your Camera',
  description: 'Revolutionary camera system using pose recognition technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LTM0SLYWG9"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LTM0SLYWG9');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}