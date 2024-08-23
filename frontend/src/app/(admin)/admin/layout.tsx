"use client";
import Aside from "@/components/admin/aside";
import Header from "@/components/admin/header";
import "@/styles/globals.css";
import styles from "./styles.module.css";
import { Suspense } from "react";
import LoadingComponents from "@/components/site/loading";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <section id="adminLayout" className={styles.adminLayout}>
        <Suspense fallback={<LoadingComponents />}>
          <Header />
          <Aside />
          <main id="adminMain" className={styles.adminMain}>
            {children}
          </main>
        </Suspense>
      </section>
    </>
  );
}
