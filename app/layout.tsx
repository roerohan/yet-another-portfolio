import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohan Mukherjee | Portfolio",
  description:
    "Software Engineer at Cloudflare, ex-founding engineer at Dyte (YC W'21), open source contributor, and cybersecurity enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://blog.roerohan.com/favicon-32x32.png"
          sizes="32x32"
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-NSNFW3NL');
          `,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GTM-NSNFW3NL"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NSNFW3NL"
            height="0"
            width="0"
            style={{ display: "none; visibility: hidden" }}
          ></iframe>
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
