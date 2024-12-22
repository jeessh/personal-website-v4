import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-bricolage',
});

export const metadata: Metadata = {
  title: "Jesse Huang",
  description: "My personal portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bricolage.variable}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={bricolage.className}>{children}</body>
    </html>
  );
}
