import LoadingComponents from "@/components/site/loading";
import "@/styles/globals.css";
import { Suspense } from "react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="w-full h-full">
        <Suspense fallback={<LoadingComponents />}>{children}</Suspense>
      </main>
    </>
  );
}
