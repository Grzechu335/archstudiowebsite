import { League_Spartan } from 'next/font/google'
import './globals.css'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'

const leagueSparatan = League_Spartan({
    subsets: ['latin'],
    variable: '--leagueSparatan',
    weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata = {
    title: 'Arch Website',
    description: 'Designed by Frontend Mentor, coded by Grzegorz Skrabucha',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`pt-[96px] md:pt-[152px] wrapper-padding ${leagueSparatan.variable}`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
