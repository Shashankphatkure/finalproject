import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google'
import './globals.css'
import Footers1 from '@/components/footers/Footers1'
import Headers1 from '@/components/headers/Headers1'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Headers1/>
      <div>{children}</div>
      <Footers1 />
      <SpeedInsights />
      </body>
    </html>
  )
}
