import { Metadata } from "next";
import DoubleMonumentsPage from "./DoubleMonumentsPage";

export const metadata: Metadata = {
    title: "Подвійні пам'ятники у Коростишеві | Каталог та ціни — Гран ПроКамінь",
    description: "Виготовлення подвійних пам'ятників з натурального граніту. Професійне проєктування, художня різьба та встановлення у Коростишеві. Гран ПроКамінь — надійність та якість для вшанування пам'яті.",
    alternates: {
        canonical: 'https://gran-pro-kamin.com.ua/works/podviyni',
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Каталог подвійних пам'ятників — Гран ПроКамінь",
        "description": "Галерея подвійних гранітних пам'ятників, виготовлених майстрами нашої майстерні у Коростишеві.",
        "url": "https://gran-pro-kamin.com.ua/works/podviyni",
        "numberOfItems": "3",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Класичні подвійні пам'ятники",
                "description": "Традиційні моделі гранітних пам'ятників для двох осіб."
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Горизонтальні пам'ятники",
                "description": "Широкі гранітні стели з художнім гравіюванням."
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Подвійні меморіальні комплекси",
                "description": "Комплексні рішення для вшанування пам'яті двох рідних людей."
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <DoubleMonumentsPage />
        </>
    );
}