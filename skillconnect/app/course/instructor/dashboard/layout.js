import DashboardHeaderInstructor from '@/components/dashboard-headers/DashboardheadersInstructor'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <div className={inter.className}>
            
            <DashboardHeaderInstructor/>
            {children}
        </div>
    )
}

