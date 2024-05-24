import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "loominace",
  description: "loominace",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="https://www.loominace.com/icons/loominace-favico.jpg" sizes="any" />

        <meta property="og:title" content="loominace" />
        <meta property="og:url" content="https://www.loominace.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.loominace.com/images/logo-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:description"
          content="Discover unrivaled excellence as we elevate your brand, exceeding expectations at every turn."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="loominac.com" />
        <meta property="twitter:url" content="https://www.loominace.com" />
        <meta name="twitter:title" content="loominace" />
        <meta
          name="twitter:description"
          content="Discover unrivaled excellence as we elevate your brand, exceeding expectations at every turn."
        />
        <meta name="twitter:image" content="https://www.loominace.com/images/logo-og.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
