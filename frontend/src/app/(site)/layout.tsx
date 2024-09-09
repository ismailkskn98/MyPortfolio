import "@/styles/globals.css";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import { metadata as meta } from "@/components/MetaData";
// types
import type { Metadata } from "next";

export const metadata: Metadata = { ...meta };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="min-h-full w-full bg-BG1">{children}</main>
      <Footer />
    </>
  );
}
