import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HamburgerMenu from '@/components/HamburgerMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Burme TTS App',
  description: 'Text to Speech with Gemini AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <HamburgerMenu />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}