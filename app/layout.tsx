import type { Metadata, Viewport } from "next";
import { playfair, robotoCondensed } from "./fonts"; // Імпортуємо налаштовані шрифти
import "./globals.css";

export const metadata: Metadata = {
  title: "GranyStyle — Гранітна майстерня",
  description: "Виготовлення меморіальних комплексів та пам'ятників з натурального каменю",
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcfcfc",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="uk" className="scroll-smooth">
      <body className={`${playfair.variable} ${robotoCondensed.variable} antialiased`}>
      {/* Контент сторінки */}
      {children}
      </body>
      </html>
  );
}