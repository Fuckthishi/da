import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BodyBuilding AI',
  description: 'Transform your body with smart training and tracking.'
}

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
