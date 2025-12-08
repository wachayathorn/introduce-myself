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
      <body>
        <BackgroundBlobs />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
