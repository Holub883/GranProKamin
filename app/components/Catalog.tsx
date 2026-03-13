"use client";
import { useState } from 'react';

const monuments = [
    { id: 1, title: 'Пам\'ятник одинарний №12', category: 'single', price: 'від 15 000 грн', image: '/m1.jpg' },
    { id: 2, title: 'Меморіальний комплекс з граніту', category: 'complex', price: 'від 50 000 грн', image: '/m2.jpg' },
    { id: 3, title: 'Пам\'ятник подвійний класичний', category: 'double', price: 'від 28 000 грн', image: '/m3.jpg' },
];

export default function Catalog() {
    const [filter, setFilter] = useState('all');

    return (
        <section id="catalog" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="border-l-4 border-blue-700 pl-6 mb-12">
                    <h2 className="text-3xl font-bold text-stone-800 uppercase tracking-tight">Каталог продукції</h2>
                    <p className="text-stone-500 mt-2">Виберіть категорію виробів з натурального каменю</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                    {['all', 'single', 'double', 'complex'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 text-sm font-bold uppercase transition border ${
                                filter === cat ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-stone-600 border-stone-200 hover:border-blue-700'
                            }`}
                        >
                            {cat === 'all' ? 'Всі моделі' : cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {monuments.filter(m => filter === 'all' || m.category === filter).map((item) => (
                        <div key={item.id} className="border border-stone-200 hover:shadow-xl transition group">
                            <div className="relative overflow-hidden aspect-[4/3] bg-stone-100">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-stone-800 mb-2">{item.title}</h3>
                                <p className="text-blue-700 font-bold mb-4">{item.price}</p>
                                <button className="w-full py-3 bg-stone-100 hover:bg-blue-700 hover:text-white text-stone-800 font-bold uppercase text-xs transition transition-colors">
                                    Переглянути деталі
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}