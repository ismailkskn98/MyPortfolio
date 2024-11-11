import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import { metadata as meta } from "@/components/MetaData";
import "@/styles/globals.css";
// types
import type { Metadata } from "next";

export const metadata: Metadata = { ...meta };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="container-fluid">
      <Header />
      <main className="fluid container-fluid min-h-full bg-BG1">{children}</main>
      <Footer />
    </section>
  );
}
