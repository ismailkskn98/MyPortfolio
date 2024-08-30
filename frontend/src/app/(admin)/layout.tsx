"use client";
import "@/styles/globals.css";
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main className="w-full h-full">{children}</main>;
}
