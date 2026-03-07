import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageContext';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'CryptoMania - Modern Crypto Education',
  description: 'Master the world of digital finance with AI-powered education and real-time monitoring.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen bg-background text-foreground selection:bg-primary/30">
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
