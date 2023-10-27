import './globals.css'
import type { Metadata } from 'next'
import { Lobster } from 'next/font/google'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import "slick-carousel/slick/slick.css";
import Footer from '@/components/Footer'
import ActiveSectionContextProvider from '@/context/active-section-context'

const lobster = Lobster({ subsets: ['latin'], weight: '400',})

export const metadata: Metadata = {
  title: 'Restaurant App',
  description: 'Une app restaurant crée avec next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className='!scroll-smooth'>
      <body className={`${lobster.className} w-full bg-black-bg text-darkText`}>
        <ActiveSectionContextProvider>
          <Layout>
            <Header />
            {children}
            <Footer />
          </Layout>
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
