import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { CookieConsent } from "@/components/CookieConsent"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300","400","500","600","700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300","400","500"],
})

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tech Tsu | Sistemas sob medida",
  description:
    "Software sob medida para operações de serviços que precisam sair da planilha e transformar processo real em gestão.",
  openGraph: {
    title: "Tech Tsu | Sistemas sob medida",
    description: "Software sob medida para operações que não cabem em planilha.",
    url: "/",
    siteName: "Tech Tsu",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Tsu | Sistemas sob medida",
    description: "Software sob medida para operações que não cabem em planilha.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      style={{ fontFamily: "var(--font-sans)" }}>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
