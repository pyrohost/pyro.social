import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plex_mono = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pyro.social/"),
  title: "<< pyro.social >>",
  description: "Something's cooking at Pyro.",
  openGraph: {
    title: "<< pyro.social >>",
    description: "Something's cooking at Pyro.",
    images: [
      {
        url: "./ogimage.png",
      },
    ],
    url: "https://pyro.social",
  },
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
