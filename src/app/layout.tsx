import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lucasklein.dev'),
  title: {
    default: "Lucas Klein | Desenvolvedor Front-End",
    template: "%s | Lucas Klein"
  },
  description: "Desenvolvedor Front-End com mais de 4 anos de experiência, especializado em React, Next.js, Angular e TypeScript. Apaixonado por criar interfaces limpas, escaláveis e de alta qualidade.",
  keywords: ["Lucas Klein", "Front-End Developer", "React Developer", "Next.js", "TypeScript", "Angular", "Portfolio", "Web Development", "UI/UX", "JavaScript"],
  authors: [{ name: "Lucas Klein", url: "https://lucasklein.dev" }],
  creator: "Lucas Klein",
  publisher: "Lucas Klein",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Lucas Klein | Desenvolvedor Front-End",
    description: "Desenvolvedor Front-End com mais de 4 anos de experiência, especializado em React, Next.js, Angular e TypeScript.",
    url: "https://lucasklein.dev",
    siteName: "Lucas Klein Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Klein | Desenvolvedor Front-End",
    description: "Desenvolvedor Front-End especializado em React, Next.js e TypeScript",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "seu-codigo-google-search-console",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white`} suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
