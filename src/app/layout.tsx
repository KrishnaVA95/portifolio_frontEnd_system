import HexGridBackGround from '@/components/backgroundGrid/backGroundGrid'
import type { Metadata } from 'next'
import '@/scss/main.scss'
import { Inter } from 'next/font/google'
import NavBar from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Krishna Varela | Portifólio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <HexGridBackGround>
          <NavBar/>
          {children}
        </HexGridBackGround>
      </body>
    </html>
  )
}
