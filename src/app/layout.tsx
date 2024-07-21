import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plex_mono = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "<< pyro.social >>",
  description: "Something's cooking at Pyro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plex_mono.className}>{children}</body>
    </html>
  );
}
