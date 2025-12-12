import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/navbar";

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
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
