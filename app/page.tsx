'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ContactSection } from "@/app/components/ContactSection";
import { ArrowRight } from 'lucide-react';
import './style.css';

const workCategories = [
    { title: 'Одинарні', slug: 'odynarni', img: '/img/image (5).webp', num: 'I' },
    { title: 'Подвійні', slug: 'podviyni', img: '/img/image (6).webp', num: 'II' },
    { title: 'Комплекси', slug: 'kompleksy', img: '/img/image (3).webp', num: 'III' },
    { title: 'Ексклюзив', slug: 'exclusive', img: '/img/image (1).webp', num: 'IV' }
];

export default function Home() {
    return (
        <main className="min-h-screen bg-[#050505]">
            <Header />

            <section className="hero-section">
                <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
                    <div className="hero-grid">

                        {/* ЛІВА ЧАСТИНА: Чиста типографіка */}
                        <div className="hero-text-block">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-[#b8860b] text-[10px] uppercase tracking-[0.6em] font-bold">Гранітна майстерня</span>
                            </div>

                            <h1 className="hero-title">
                                Мистецтво<br />
                                <span>Пам'яті</span>
                            </h1>

                            <p className="hero-description">
                                Професійне виготовлення меморіальних комплексів з натурального каменю. Стриманість у дизайні та бездоганна якість виконання.
                            </p>
                        </div>

                        {/* ПРАВА ЧАСТИНА: Елегантні категорії */}
                        <div className="hero-categories">
                            {workCategories.map((cat, i) => (
                                <Link href={`/works/${cat.slug}`} key={i} className="cat-card">
                                    <span className="cat-title">{cat.title}</span>
                                    <div className="cat-line" />
                                    <ArrowRight className="cat-arrow" size={16} />
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. ТЕКСТОВИЙ БЛОК (БІЛИЙ) */}
            <section className="content-section">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                        {/* Ліва колонка зафіксована при скролі на десктопі */}
                        <div className="lg:sticky lg:top-32">
                            <span className="text-[#b8860b] text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">Legacy & Quality</span>
                            <h2 className="content-title">
                                Професійна <br />
                                <span>допомога.</span>
                            </h2>
                            <div className="w-16 h-1 bg-black hidden md:block" />
                        </div>

                        {/* Права колонка з контентом */}
                        <div className="space-y-12 md:space-y-20">
                            <p className="text-xl md:text-3xl font-serif italic leading-snug text-zinc-800">
                                «Ми беремо на себе відповідальність за кожну деталь — від першого ескізу до останнього закладеного шва.»
                            </p>

                            <div className="grid gap-10 md:gap-16">
                                {[
                                    { h: "Створення та Дизайн", p: "Виготовлення пам'ятників з граніту та комбінованих матеріалів. Індивідуальний 3D дизайн кожного проекту." },
                                    { h: "Реставрація", p: "Відновлення пам'ятників з крихти, заміна елементів та професійні художні роботи." },
                                    { h: "Облаштування", p: "Вирівнювання пам'ятників та благоустрій території тротуарною плиткою." }
                                ].map((item, i) => (
                                    <div key={i} className="service-item group">
                                        <span className="service-label">{item.h}</span>
                                        <p className="text-zinc-600 leading-relaxed font-light text-base md:text-lg group-hover:text-black transition-colors">
                                            {item.p}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. EXPERTISE (ТЕМНИЙ) */}
            <section className="expertise-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="text-3xl md:text-6xl font-serif italic text-white">Чому Grany Style</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-1">
                        {[
                            { t: "Досвід", d: "Знання всіх тонкощів роботи з гранітом та крихтою." },
                            { t: "Гарантія", d: "Відповідальність за якість встановлення та матеріалів." },
                            { t: "Локальність", d: "Швидкий виїзд по Львову та області для замірів." }
                        ].map((item, i) => (
                            <div key={i} className="expertise-card">
                                <span className="expertise-number">0{i+1}</span>
                                <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-6">{item.t}</h4>
                                <p className="text-zinc-500 font-light leading-loose text-sm italic">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <ContactSection />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <Footer />
        </main>
    );
}