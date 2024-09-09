import "@/styles/globals.css";
import * as fonts from "@/fonts/index";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { metadata as meta } from "@/components/MetaData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = { ...meta };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="w-full h-full">
      <body
        className={`${inter.className} ${fonts.ubuntuLight.variable} ${fonts.ubuntuReguler.variable} ${fonts.ubuntuMedium.variable} ${fonts.plexMonoMedium.variable} ${fonts.plexMonoReguler.variable} w-full h-full`}
      >
        {children}
      </body>
    </html>
  );
}
