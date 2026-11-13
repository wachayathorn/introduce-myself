import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/navbar";

export const metadata: Metadata = {
  title: "Wachayathorn Singsena · Senior Engineer",
  description:
    "Senior Engineer on the Virtual Bank team at Ascend Money. Kotlin, Spring Boot, and AWS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <body className="flex flex-col min-h-screen bg-white-off">
        <Navbar />
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
