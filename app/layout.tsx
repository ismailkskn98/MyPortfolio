import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

type Props = {
  children: ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'İsmail Keskin',
  description: 'Generated by create next app',
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
