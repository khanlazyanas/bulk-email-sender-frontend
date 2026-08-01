import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Premium modern font
const inter = Inter({ subsets: ["latin"] });

// Ultra-Premium Enterprise Metadata
export const metadata: Metadata = {
  title: "MailSender | Enterprise Email Infrastructure",
  description: "A high-performance, developer-first bulk email sender engineered for scale. Featuring real-time analytics and cinematic UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body 
        className={`${inter.className} min-h-screen bg-[#000000] text-slate-50 antialiased selection:bg-fuchsia-500/30 selection:text-fuchsia-100 flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}