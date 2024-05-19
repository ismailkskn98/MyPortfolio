"use client";
import Aside from "@/components/admin/aside";
import Footer from "@/components/admin/footer";
import Header from "@/components/admin/header";
import { AuthFromClient } from "@/hooks/AuthFromClient";
import type { Payload } from "@/hooks/AuthFromClient";
import "@/styles/globals.css";
import styles from "./styles.module.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const data = AuthFromClient();
  const payload: Payload | null = data[0];
  return (
    <>
      <section id="adminLayout" className={styles.adminLayout}>
        <Header payload={payload} />
        <Aside payload={payload} />
        <main id="adminMain" className={styles.adminMain}>
          {children}
        </main>
      </section>
    </>
  );
}
