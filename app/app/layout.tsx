
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { UserProvider } from '@/hooks/use-auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LitDrumBuddy - Professional Drum Practice App',
  description: 'A professional drum practice app with timer, metronome, progress tracking, and exercise library.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <UserProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  )
}
