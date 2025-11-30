import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Wachayathorn Singsena | Software Engineer',
  description: 'Software Engineer with 5+ years of experience, specializing in building scalable microservices and high-performance APIs',
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}