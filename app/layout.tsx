import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'hoom - Find Your Dream Dormitory Effortlessly',
  description: 'Browse verified listings for students, with no hidden fees. Your perfect space in Cebu is just a click away.',
  keywords: 'student housing, dormitory, rental, Cebu, Philippines, real estate',
  authors: [{ name: 'hoom' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'hoom - Find Your Dream Dormitory Effortlessly',
    description: 'Browse verified listings for students, with no hidden fees. Your perfect space in Cebu is just a click away.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
