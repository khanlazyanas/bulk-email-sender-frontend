import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Premium modern font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bulk Email Sender | Workspace",
  description: "A modern, fast, and scalable bulk email sender dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}