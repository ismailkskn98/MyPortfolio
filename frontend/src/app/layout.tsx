import "@/styles/globals.css";
import type { Metadata } from "next";
import * as fonts from "@/fonts/index";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body
        className={`${fonts.ubuntuLight.variable} ${fonts.ubuntuReguler.variable} ${fonts.ubuntuMedium.variable} ${fonts.plexMonoMedium.variable} ${fonts.plexMonoReguler.variable} bg-BG1`}
      >
        <Header />
        <main className="w-full my-16 md:my-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
