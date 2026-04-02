'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { projects } from '@/data/projects';
import { ArrowLeft, Maximize2, Sparkles, Gem, PenTool } from 'lucide-react';

const ExclusivePage = () => {
    const filteredItems = projects.filter(p => p.category === 'Ексклюзив');
    const sortedItems = [...filteredItems].sort((a, b) => {
        // Явно вказуємо тип string | any для параметра val
        const getPrice = (val: any) => {
            if (!val) return 0;
            // Видаляємо всі нецифрові символи
            return parseFloat(val.toString().replace(/\D/g, '')) || 0;
        };

        return getPrice(a.material) - getPrice(b.material);
    });
    return (
        <main className="min-h-screen bg-[#050505] text-[#e5e5e5]">
            <Header />

            <section className="pt-32 pb-20 px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto">
                    <Link href="/" className="flex items-center gap-2 text-[#d32f2f] text-[10px] uppercase tracking-[0.3em] mb-12 hover:translate-x-[-5px] transition-transform font-bold">
                        <ArrowLeft size={14} /> Назад до всіх робіт
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-end">
                        <div>
                            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.5em] mb-4 block">Категорія</span>
                            <h1 className="text-5xl md:text-8xl font-serif italic text-white tracking-tighter">
                                Ексклюзивні<br /> <span className="text-[#d32f2f]">вироби</span>
                            </h1>
                        </div>
                        <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-md">
                            Унікальні авторські проекти, створені за індивідуальними ескізами. Складне ручне різьблення та рідкісні породи каменю.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-[#0a0a0a] border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    <div className="flex items-center gap-4">
                        <Sparkles className="text-[#d32f2f]" size={24} strokeWidth={1} />
                        <span className="text-[10px] uppercase tracking-widest font-medium">Ручна робота</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Gem className="text-[#d32f2f]" size={24} strokeWidth={1} />
                        <span className="text-[10px] uppercase tracking-widest font-medium">Рідкісні граніти</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <PenTool className="text-[#d32f2f]" size={24} strokeWidth={1} />
                        <span className="text-[10px] uppercase tracking-widest font-medium">Авторський ескіз</span>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="group space-y-6">
                                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5">
                                    <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                    <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                                        <Maximize2 size={20} className="text-white" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="pt-4 flex items-start justify-between border-t border-white/5">
                                        <div className="space-y-1.5">
                                            <h3 className="text-xl font-serif italic text-white leading-tight">{item.title}</h3>
                                            {/* Оновлений блок ціни */}
                                            <div className="flex items-baseline gap-1">
                                    <span className="text-white text-lg font-semibold tracking-tight">
                                        {item.material ? item.material : 'Ціна за запитом'}
                                    </span>
                                                {item.material && <span className="text-white text-lg font-semibold tracking-tight">грн</span>}
                                            </div>
                                        </div>
                                        <Link href="/contacts" className="inline-block px-4 py-2 border border-white/10 text-[10px] uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300 font-bold">
                                            Замовити
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ExclusivePage;