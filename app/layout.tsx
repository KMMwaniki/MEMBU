import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "Membu Naturals - Your Hair Sanctuary",
  description: "Natural hair care products for beautiful, healthy hair.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${cormorantGaramond.variable} font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}




