import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
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

export const metadata: Metadata = {
  title: "Tech Tsu | Sistemas sob medida",
  description:
    "Software sob medida para operações de serviços que precisam sair da planilha e transformar processo real em gestão.",
  openGraph: {
    title: "Tech Tsu | Sistemas sob medida",
    description: "Software sob medida para operações que não cabem em planilha.",
    url: "https://techtsu.com.br",
    siteName: "Tech Tsu",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      style={{ fontFamily: "var(--font-sans)" }}>
      <body>{children}</body>
    </html>
  )
}
