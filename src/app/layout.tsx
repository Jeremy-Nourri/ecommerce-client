import './globals.css'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ReduxProvider } from './libs/redux/provider'

import Loading from './loading'
import Header from './layout/header'

import { Noto_Serif, Nunito_Sans } from 'next/font/google'

 
const noto = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'swap',
  weight: '500'
})
 
const nunito = Nunito_Sans({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'Ecommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${nunito.variable} ${noto.variable}`}>
        <Header />
        <Suspense fallback={<Loading />}>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </Suspense>
      </body>
    </html>
  )
}
