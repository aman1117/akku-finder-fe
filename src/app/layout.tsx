import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  variable: "--font-pt-serif",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${ptSerif.className} antialiased bg-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
