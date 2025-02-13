import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "./components/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WTrindade Transportes",
  description: "Oferecemos soluções logísticas completas, garantindo segurança e eficiência no transporte de cargas.",
  icons: {
    icon: '/assets/icons/favicon.ico',
    apple: '/assets/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
