import { TranslatorProvider } from "@/components/translator-provider"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import type React from "react"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Maël Bertocchi - Développeur",
  description: "Portfolio de Maël Bertocchi, étudiant en ingénierie logicielle et développeur.",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="fr">
      <body className={`font-sans antialiased`}>
        <TranslatorProvider>
          {children}
        </TranslatorProvider>
        <Analytics />
      </body>
    </html>
  )
}
