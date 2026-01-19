import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucas Klein | Desenvolvedor Front-End",
  description: "Desenvolvedor Front-End com mais de 4 anos de experiência, especializado em React, Next.js, Angular e TypeScript. Apaixonado por criar interfaces limpas, escaláveis e de alta qualidade.",
  keywords: "Lucas Klein, Front-End Developer, React, Next.js, TypeScript, Angular, Portfolio",
  authors: [{ name: "Lucas Klein" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Lucas Klein | Desenvolvedor Front-End",
    description: "Desenvolvedor Front-End com mais de 4 anos de experiência, especializado em React, Next.js, Angular e TypeScript.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white`} suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
