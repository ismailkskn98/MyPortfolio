import "@/styles/globals.css";
import * as fonts from "@/fonts/index";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { metadata as meta } from "@/components/MetaData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const ubuntuSans = localFont({
  src: [
    {
      path: "./fonts/Ubuntu-Bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/Ubuntu-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/Ubuntu-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Ubuntu-Light.ttf",
      weight: "300",
    },
  ],
  variable: "--font-ubuntu-sans",
});

const plexMono = localFont({
  src: [
    {
      path: "./fonts/IBMPlexMono-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/IBMPlexMono-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = { ...meta };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="w-full h-full">
      <body className={`${inter.className} ${ubuntuSans.variable} ${plexMono.variable} w-full h-full`}>{children}</body>
    </html>
  );
}
