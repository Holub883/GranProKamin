'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { projects } from '@/data/projects'; // Імпортуємо наш файл з даними
import { ArrowLeft, Maximize2, Ruler, ShieldCheck, Paintbrush } from 'lucide-react';

const SingleMonumentsPage = () => {
    // Фільтруємо лише одинарні пам'ятники з нашої бази даних
    const singleMonuments = projects.filter(p => p.category === 'Одинарні');

    return (
        <main className="min-h-screen bg-[#050505] text-[#e5e5e5]">
            <Header />

            {/* 1. HERO СЕКЦІЯ КАТЕГОРІЇ */}
            <section className="pt-32 pb-20 px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto">
                    <Link href="/works" className="flex items-center gap-2 text-[#b8860b] text-[10px] uppercase tracking-[0.3em] mb-12 hover:translate-x-[-5px] transition-transform">
                        <ArrowLeft size={14} /> Назад до всіх робіт
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-end">
                        <div>
                            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.5em] mb-4 block">Категорія</span>
                            <h1 className="text-5xl md:text-8xl font-serif italic text-white tracking-tighter">
                                Одинарні <br /> <span className="text-[#b8860b]">пам'ятники</span>
                            </h1>
                        </div>
                        <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-md">
                            Класичні та авторські рішення для облаштування одного місця поховання. Від стриманих стел до складних різьблених форм.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. ПЕРЕВАГИ САМЕ ЦІЄЇ КАТЕГОРІЇ */}
            <section className="py-12 bg-[#0a0a0a] border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    <div className="flex items-center gap-4">
                        <Ruler className="text-[#b8860b]" size={24} strokeWidth={1} />
                        <span className="text-[10px] uppercase tracking-widest">Компактність та естетика</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Paintbrush className="text-[#b8860b]" size={24} strokeWidth={1} />
                        <span className="text-[10px] uppercase tracking-widest">Художнє гравіювання</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <ShieldCheck className="text-[#b8860b]" size={24} strokeWidth={1} />
                        <span className="text-[10px] uppercase tracking-widest">Висока стійкість граніту</span>
                    </div>
                </div>
            </section>

            {/* 3. ГАЛЕРЕЯ РОБІТ */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {singleMonuments.map((item) => (
                            <div key={item.id} className="group space-y-6">
                                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />

                                    {/* Кнопка збільшення */}
                                    <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Maximize2 size={20} className="text-white" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl font-serif italic text-white">{item.title}</h3>
                                    <p className="text-zinc-500 text-sm font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                    <div className="pt-4 flex items-center justify-between border-t border-white/5">
                                        <span className="text-[9px] uppercase tracking-widest text-[#b8860b]">Матеріал: {item.material}</span>
                                        <Link href="/contacts" className="text-[9px] uppercase tracking-widest text-white hover:text-[#b8860b] transition-colors">
                                            Замовити прорахунок
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CTA БЛОК */}
            <section className="py-24 bg-white text-black text-center px-6">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-serif italic leading-tight">
                        Маєте власний ескіз чи фото пам'ятника?
                    </h2>
                    <p className="text-zinc-600 font-light text-lg">
                        Ми реалізуємо проект будь-якої складності за вашим зразком або розробимо унікальну 3D-модель.
                    </p>
                    <div className="pt-6">
                        <Link href="/contacts" className="inline-block bg-black text-white px-12 py-5 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-[#b8860b] transition-all">
                            Надіслати свій варіант
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default SingleMonumentsPage;