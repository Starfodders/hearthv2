import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'HeartDBT',
  description: 'Mental Health Education Progressive Web Application to teach Dialectical Behaviour Therapy',
  keywords: 'dialectical, behaviour, therapy, mental, health, mental health, counselling, education, self-guided, learning, DBT, CBT'
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
