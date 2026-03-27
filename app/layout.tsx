import type { Metadata, Viewport } from "next";
import { playfair, robotoCondensed } from "./fonts"; // Імпортуємо налаштовані шрифти
import "./globals.css";

export const metadata: Metadata = {
    title: "Гран ПроКамінь — Пам'ятники у Коростишеві | Гранітна майстерня",
    description: "Виготовлення пам'ятників, меморіальних комплексів та виробів з натурального граніту в Коростишеві. Пам'ятники для військових Індивідуальний підхід, 3D дизайн та гарантія якості від майстрів Житомирщини.",
    metadataBase: new URL('https://gran-pro-kamin.com.ua'),
    icons: {
        icon: "/img/logo.jpg",
    },
    keywords: [
        "Гран ПроКамінь", "ГранПроКамінь", "пам'ятники Коростишів",
        "гранітна майстерня Коростишів", "виготовлення пам'ятників Житомирська область",
        "купити пам'ятник з граніту", "меморіальні комплекси", "пам'ятники від виробника"
    ],

    alternates: {
        canonical: 'https://gran-pro-kamin.com.ua',
    },

    openGraph: {
        title: "Гран ПроКамінь — Гранітні пам'ятники будь-якої складності",
        description: "Вшановуємо пам'ять разом. Унікальні пам'ятники з високоякісного природного каменю у Коростишеві. Надійність та естетика на десятиліття.",
        url: 'https://gran-pro-kamin.com.ua',
        siteName: 'Гран ПроКамінь',
        images: [
            {
                url: '/img/logo.jpg',
                alt: 'Гранітна майстерня Гран ПроКамінь Коростишів',
            },
        ],
        locale: 'uk_UA',
        type: 'website',
    },

    other: {
        "apple-mobile-web-app-title": "ГранПроКамінь",
    }
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

      {children}
      </body>
      </html>
  );
}