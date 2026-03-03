import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Scrollytelling Portfolio',
    description: 'High-end brand portfolio media agency',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-white/30 selection:text-white`}>
                {children}
            </body>
        </html>
    )
}
