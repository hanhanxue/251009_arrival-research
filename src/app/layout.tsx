import type { Metadata } from "next"

import "../styles/main.scss"
import Header from "@/components/Header"
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants"
import Script from "next/script"
import PlausibleProvider from "next-plausible"

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* This script sets the plausible_ignore flag for Vercel deployments */}
        <Script id="disable-plausible" strategy="beforeInteractive">
          {`
            if (window.location.hostname.endsWith("vercel.app")) {
              localStorage.plausible_ignore = true;
            }
          `}
        </Script>
        {/* End of disable-plausible */}
        <PlausibleProvider
          domain="research.arrival.works"
          customDomain="https://plausible.gitpushoriginmain.com"
          selfHosted
          // trackLocalhost enabled
        />
      </head>
      <body data-theme="dark">
        <Header />
        {children}
      </body>
    </html>
  )
}
