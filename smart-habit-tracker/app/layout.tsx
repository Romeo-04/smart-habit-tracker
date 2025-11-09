import './globals.css'
import type { Metadata } from 'next';

export const metadata : Metadata = {
  title: 'Smart Habit Tracker',
  description: 'Next 16 : React 19 : Tailwind v4'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}
) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
