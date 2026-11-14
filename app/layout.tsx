import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/layout/footer";
import ThemeClock from "./components/layout/theme-clock";

export const metadata: Metadata = {
  title: "Wachayathorn Singsena",
  description:
    "Software Engineer focused on backend microservices. Kotlin and Spring Boot. Virtual Bank at Ascend Money.",
};

const themeScript = `(function(){try{var saved=sessionStorage.getItem("theme");if(saved==="light"||saved==="dark"){document.documentElement.dataset.theme=saved;return}var d=new Date();var minutes=d.getHours()*60+d.getMinutes();document.documentElement.dataset.theme=minutes>=360&&minutes<=1080?"light":"dark"}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans" suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--page)] text-[var(--body)] antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeClock />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
