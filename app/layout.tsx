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
      <body>{children}</body>
    </html>
  )
}