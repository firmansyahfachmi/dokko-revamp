import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "loominace",
  description: "loominace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/icons/loominace-favico.jpg" sizes="any" />
        <meta property="og:title" content="loominace" />
        <meta property="og:url" content="https://loominace.com" />
        <meta property="og:type" content="image/jpeg" />
        <meta property="og:image" content="/images/logo-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:description"
          content="Discover unrivaled excellence as we elevate your brand, exceeding expectations at every turn."
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
