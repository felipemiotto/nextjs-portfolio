import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/navbar/Navbar'
import LocaleSwitcher from '@/components/locale-switcher/LocaleSwitcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Felipe',
  description: 'Felipe Antonio Miotto portfilio created with Nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <LocaleSwitcher />
        {children}
      </body>
    </html>
  )
}
