import { Playfair_Display, Roboto_Condensed } from "next/font/google";

export const playfair = Playfair_Display({
    subsets: ["latin", "cyrillic"],
    variable: "--font-playfair",
    display: 'swap',
});

export const robotoCondensed = Roboto_Condensed({
    subsets: ["latin", "cyrillic"],
    variable: "--font-roboto-condensed",
    weight: ["300", "400", "500", "600", "700"],
    display: 'swap',
});