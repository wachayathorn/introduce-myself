import './globals.css';

export const metadata = {
  title: 'Wachayathorn Singsena | Software Engineer',
  description: 'Software Engineer with 5+ years of experience, specializing in building scalable microservices and high-performance APIs',
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}