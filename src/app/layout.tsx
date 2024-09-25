"use client"

import ScrollToTop from "../../components/hooks/scroll-to-top";
import { AdenaWalletProvider } from "../../components/hooks/use-adena-wallet";
import "../../styles/index.css";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <head>
        <title>Naming Service | VAR META</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700|Rubik:400,500,700"
          rel="stylesheet" />
      </head>
      <body>
        <AdenaWalletProvider>
          {children}
          <ScrollToTop />
        </AdenaWalletProvider>
      </body>
    </html>
  )
}
