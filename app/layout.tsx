import "./globals.css";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import BackgroundBlobs from "@/components/background-blobs/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <BackgroundBlobs />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
