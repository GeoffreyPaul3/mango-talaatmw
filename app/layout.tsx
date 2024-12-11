import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mango Taalat Mw - Fresh Juices & Smoothies',
  description: 'Indulge in Mango Taalat\'s fresh and delicious creations. We offer a wide variety of fruit juices, smoothies, and desserts made from organic ingredients.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

