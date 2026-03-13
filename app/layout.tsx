import type { Metadata, Viewport } from "next";
import { playfair, robotoCondensed } from "./fonts"; // Імпортуємо налаштовані шрифти
import "./globals.css";


export const metadata: Metadata = {
    title: "Гран ПроКамінь — Гранітна майстерня",
    description: "Виготовлення пам'ятників та меморіальних комплексів з натурального граніту. Індивідуальний підхід, висока якість та довговічність. Працюємо з любов'ю та повагою.",
    keywords: ["гранітна майстерня", "пам'ятники з граніту", "виготовлення пам'ятників", "меморіальні комплекси", "Гран ПроКамінь"],
    icons: {
        icon: "/img/logo.jpg", // Використовуємо ваше лого як фавікон
    },
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