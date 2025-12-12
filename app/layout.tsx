import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono();

export const metadata: Metadata = {
  title: "Introduce myself",
  description: "Let's me introduce myself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetBrainsMono.className}>
      <body className="items-center">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
