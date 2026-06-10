import { Metadata } from "next";
import SingleMonumentsPage from "./SingleMonumentsPage";

export const metadata: Metadata = {
    title: "Ексклюзивні пам'ятники у Коростишеві | Індивідуальні проєкти — Гран ПроКамінь",
    description: "Створення ексклюзивних гранітних пам'ятників та меморіальних комплексів за авторським дизайном. Професійне виготовлення у Коростишеві, 3D-проєктування та гарантія якості. Гран ПроКамінь — вшановуємо пам'ять гідно.",
    alternates: {
        canonical: 'https://gran-pro-kamin.com.ua/works/odynarni',
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Ексклюзивні пам'ятники — Гран ПроКамінь",
        "description": "Галерея унікальних авторських пам'ятників з натурального граніту, виготовлених майстрами нашої майстерні у Коростишеві.",
        "url": "https://gran-pro-kamin.com.ua/works/odynarni",
        "numberOfItems": "38",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Авторські меморіальні комплекси",
                "description": "Індивідуальне проєктування комплексів з врахуванням усіх побажань замовника."
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Скульптурні пам'ятники з граніту",
                "description": "Художня різьба по каменю, що створює неповторний вигляд пам'ятника."
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Ексклюзивні пам'ятники за ескізами",
                "description": "Виготовлення пам'ятників за індивідуальними кресленнями та фотографіями."
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <SingleMonumentsPage />
        </>
    );
}