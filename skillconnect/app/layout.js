import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google'
import './globals.css'
import Footers1 from '@/components/footers/Footers1'
import Headers1 from '@/components/headers/Headers1'
import { Providers } from "./lib/provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Skill Connect',
  description: 'Learn Courses, Build Projects, Earn Certificates',
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
      <UserProvider>
      <Headers1/>
      <div>{children}</div>
      <Footers1 />
      <SpeedInsights />
      <Analytics />
      </UserProvider>
      </Providers>
      </body>
    </html>
  )
}
