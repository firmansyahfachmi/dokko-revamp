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
      </head>
      <body>{children}</body>
    </html>
  );
}
