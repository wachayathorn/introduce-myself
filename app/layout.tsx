import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

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
    <html lang="en" className="font-mono">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow py-1">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
