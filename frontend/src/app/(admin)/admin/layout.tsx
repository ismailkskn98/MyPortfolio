"use client";
import Footer from "@/components/admin/footer";
import Header from "@/components/admin/header";
import { AuthFromClient } from "@/hooks/AuthFromClient";
import type { Payload } from "@/hooks/AuthFromClient";
import "@/styles/globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const data = AuthFromClient();
  const payload: Payload | null = data[0];
  return (
    <>
      <Header payload={payload} />
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
}
