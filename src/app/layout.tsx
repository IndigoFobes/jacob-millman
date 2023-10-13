import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from './components/header'

const poppins = Poppins({ 
  weight: "600",
  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jacob A. Millman',
  description: 'NYC based actor.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[var(--base-bg-color)]`}>
        <Header/>
        {children}</body>
    </html>
  )
}
