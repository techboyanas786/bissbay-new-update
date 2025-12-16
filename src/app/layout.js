// app/layout.js
"use client";
import './globals.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Footer from '@/components/Footer';
import TranslationProvider from '@/components/TranslationProvider';
import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isBlogPage = pathname?.startsWith('/blogs');

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <TranslationProvider>
          {!isBlogPage && <Navbar />}
          <main className="mx-auto bg-white">
            {children}
          </main>
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}
