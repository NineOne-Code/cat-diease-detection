import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CatSkin AI - Feline Dermatology Assistant",
  description:
    "AI-powered analysis and detection of cat skin diseases including Scabies, Ringworm, Fleas, and more. Get instant insights for your feline companion.",
  keywords: "cat skin disease, feline dermatology, pet health, AI diagnosis, veterinary assistant",
  authors: [{ name: "CatSkin AI Team" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-md mx-auto bg-white min-h-screen">{children}</div>
      </body>
    </html>
  )
}
