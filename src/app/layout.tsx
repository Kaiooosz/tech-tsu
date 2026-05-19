import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tech Tsu | Sistemas sob medida",
  description:
    "Tech Tsu cria sistemas sob medida para operações de serviços que precisam organizar clientes, tarefas, documentos, indicadores e comunicação.",
  openGraph: {
    title: "Tech Tsu | Sistemas sob medida",
    description:
      "Software sob medida para operações que não cabem em planilha.",
    url: "https://techtsu.com.br",
    siteName: "Tech Tsu",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
