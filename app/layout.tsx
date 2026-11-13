import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";

export const metadata: Metadata = {
  title: "Wachayathorn Singsena · Senior Software Engineer",
  description:
    "Senior Software Engineer focused on backend microservices. Kotlin and Spring Boot. Virtual Bank at Ascend Money.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <body className="min-h-screen bg-[#f8f9fa] text-[#191c1d] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
