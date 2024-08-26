"use client";
import Aside from "@/components/admin/aside";
import Header from "@/components/admin/header";
import "@/styles/globals.css";
import styles from "./styles.module.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <section id="adminLayout" className={styles.adminLayout}>
        <Header />
        <Aside />
        <main id="adminMain" className={styles.adminMain}>
          {children}
        </main>
      </section>
    </>
  );
}
