import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Head from "next/head";
import { DM_Serif_Text } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerifText = DM_Serif_Text({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: "WTrindade Transportes",
  description: "Oferecemos soluções logísticas completas, garantindo segurança e eficiência no transporte de cargas.",
  icons: {
    icon: '/assets/icons/favicon.ico',
    apple: '/assets/images/logo.png',
  },
  openGraph: {
    images: '/assets/images/ogimage.webp',
    title: "WTrindade Transportes",
    description: "Oferecemos soluções logísticas completas, garantindo segurança e eficiência no transporte de cargas.",
    url: 'https://wtrindadetransportes.com.br',
    siteName: "WTrindade Transportes",
    locale: "pt-BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="icon" href="/assets/icons/favicon.ico" sizes="any" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerifText} antialiased relative`}
      >
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
