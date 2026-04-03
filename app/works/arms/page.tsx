'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { projects } from '@/data/projects';
import { ArrowLeft, Maximize2, Sparkles, Shield, PenTool, ArrowUpDown } from 'lucide-react';

const ArmsPage = () => {
    // Стан для сортування: default, asc (дешевші), desc (дорожчі)
    const [sortOrder, setSortOrder] = useState<'default' | 'asc' | 'desc'>('default');

    // 1. Фільтруємо елементи
    const filteredItems = useMemo(() => {
        return projects.filter(p => p.category === 'Для військових');
    }, []);

    // 2. Сортуємо елементи
    const sortedItems = useMemo(() => {
        const getPrice = (val: string | number | undefined | null): number => {
            if (!val) return 0;
            return parseFloat(val.toString().replace(/\D/g, '')) || 0;
        };

        const items = [...filteredItems];

        if (sortOrder === 'asc') {
            return items.sort((a, b) => getPrice(a.material) - getPrice(b.material));
        } else if (sortOrder === 'desc') {
            return items.sort((a, b) => getPrice(b.material) - getPrice(a.material));
        }

        return items; // default
    }, [filteredItems, sortOrder]);

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
                                Для військових<br /> <span className="text-[#d32f2f]">меморіали</span>
                            </h1>
                        </div>
                        <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-md">
                            Вшанування пам'яті героїв. Проекти з військовою символікою, емблемами родів військ та особливим художнім оформленням.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-[#0a0a0a] border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    <div className="flex items-center gap-4">
                        <Shield className="text-[#d32f2f]" size={24} strokeWidth={1} />
                        <span className="text-[10px] uppercase tracking-widest font-medium">Військова символіка</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Sparkles className="text-[#d32f2f]" size={24} strokeWidth={1} />
                        <span className="text-[10px] uppercase tracking-widest font-medium">Гідне вшанування</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <PenTool className="text-[#d32f2f]" size={24} strokeWidth={1} />
                        <span className="text-[10px] uppercase tracking-widest font-medium">Індивідуальні шеврони</span>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* ПАНЕЛЬ СОРТУВАННЯ */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-white/5">
                        <div className="flex items-center gap-2 text-zinc-500">
                            <ArrowUpDown size={14} />
                            <span className="text-[10px] uppercase tracking-widest font-bold">Сортувати:</span>
                        </div>
                        <div className="flex gap-2">
                            {[
                                { label: 'За замовчуванням', value: 'default' },
                                { label: 'Дешевші', value: 'asc' },
                                { label: 'Дорожчі', value: 'desc' },
                            ].map((btn) => (
                                <button
                                    key={btn.value}
                                    onClick={() => setSortOrder(btn.value as any)}
                                    className={`px-4 py-2 text-[9px] uppercase tracking-widest font-bold transition-all border ${
                                        sortOrder === btn.value
                                            ? 'bg-[#d32f2f] border-[#d32f2f] text-white'
                                            : 'bg-transparent border-white/10 text-zinc-400 hover:border-white/40'
                                    }`}
                                >
                                    {btn.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {sortedItems.map((item) => (
                            <div key={item.id} className="group space-y-6">
                                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5">
                                    <Image
                                        src={item.img}
                                        alt="Військові пам'ятники у Коротишеві"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                    <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                                        <Maximize2 size={20} className="text-white" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="pt-4 flex items-start justify-between border-t border-white/5">
                                        <div className="space-y-1.5">
                                            <h3 className="text-xl font-serif italic text-white leading-tight">{item.title}</h3>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-white text-lg font-semibold tracking-tight">
                                                    {item.material ? item.material : 'Ціна за запитом'}
                                                </span>
                                                {item.material && <span className="text-white text-lg font-semibold tracking-tight ml-1">грн</span>}
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

export default ArmsPage;