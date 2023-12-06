import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
// import { ThemeProvider } from "@/components/theme-provider"

// const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: 'Prodigy',
  description: 'AI Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <ClerkProvider>
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  </ClerkProvider>
  )
}
