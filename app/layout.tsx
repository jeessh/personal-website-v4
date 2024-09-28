import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jesse Huang",
  description: "My personal portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(montserrat)
  
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
