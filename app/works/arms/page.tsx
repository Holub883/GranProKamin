import { Metadata } from "next";
import ArmsPage from "./ArmsPage";

export const metadata: Metadata = {
    title: "Військові пам'ятники у Коростишеві | Пам'ятники Героям — Гран ПроКамінь",
    description: "Виготовлення пам'ятників для військових та Героїв України. Створення гідних меморіалів з високоякісного граніту у Коростишеві. Індивідуальний підхід та шана до подвигу. Гран ПроКамінь — вшановуємо пам'ять разом.",
    alternates: {
        canonical: 'https://gran-pro-kamin.com.ua/works/arms',
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Пам'ятники військовим — Гран ПроКамінь",
        "description": "Галерея пам'ятників, присвячених Захисникам України, виготовлених з натурального граніту.",
        "url": "https://gran-pro-kamin.com.ua/works/arms",
        "numberOfItems": "3",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Пам'ятники Захисникам України",
                "description": "Виготовлення монументів з елементами військової символіки та почесних знаків."
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Меморіальні комплекси Героям",
                "description": "Масштабні меморіальні споруди, що увічнюють пам'ять про подвиг."
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Індивідуальні військові пам'ятники",
                "description": "Створення пам'ятників за ескізами рідних із використанням якісного граніту."
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ArmsPage />
        </>
    );
}