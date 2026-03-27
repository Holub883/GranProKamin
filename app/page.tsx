'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ContactSection } from "@/app/components/ContactSection";
import { ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import './style.css';

const workCategories = [
    { title: 'Одинарні', slug: 'odynarni', img: '/img/image (5).webp', num: 'I' },
    { title: 'Подвійні', slug: 'podviyni', img: '/img/image (6).webp', num: 'II' },
    { title: 'Ексклюзив', slug: 'exclusive', img: '/img/image (3).webp', num: 'III' },
    { title: 'Для військових', slug: 'arms', img: '/img/image (1).webp', num: 'IV' },
];

export default function Home() {
    return (
        <main className="min-h-screen bg-[#050505]">
            <Header />

            {/* 1. HERO СЕКЦІЯ */}
            <section className="hero-section">
                <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
                    <div className="hero-grid">
                        <div className="hero-text-block">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-[#b8860b] text-[10px] uppercase tracking-[0.6em] font-bold">Гранітна майстерня ГранПроКамінь</span>
                            </div>

                            <h1 className="hero-title">
                                Відображення<br />
                                <span>Любові та Поваги</span>
                            </h1>

                            <p className="hero-description">
                                Спеціалізуємось на створенні пам'ятників, які стають гідним символом пам'яті про ваших близьких. Увага до кожної деталі та багаторічний досвід майстрів.
                            </p>
                        </div>

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

            {/* 2. ПРО ФІРМУ (БІЛИЙ БЛОК) */}
            <section className="content-section">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                        {/* Ліва частина: Заголовок */}
                        <div className="lg:sticky lg:top-32">
                            <span className="service-label">Про майстерню</span>
                            <h2 className="content-title">
                                Вшановуємо <br />
                                <span>пам'ять разом.</span>
                            </h2>
                            {/* Декоративна лінія в стилі вашого бренду */}
                            <div className="hero-badge-line hidden md:block" style={{ width: '60px', height: '2px', backgroundColor: '#000' }} />
                        </div>

                        {/* Права частина: Текст та Послуги */}
                        <div className="space-y-12 md:space-y-20">
                            <p className="text-xl md:text-3xl font-serif italic leading-snug text-zinc-800">
                                «Ми створюємо унікальні пам'ятники за вашими побажаннями, використовуючи лише найкращі матеріали для довговічності та краси.»
                            </p>

                            <div className="grid gap-10 md:gap-16">
                                {[
                                    {
                                        h: "Індивідуальний підхід",
                                        p: "Кожен проект розробляється з урахуванням ваших потреб. Ми пропонуємо безкоштовну консультацію, щоб обговорити всі деталі майбутнього меморіалу."
                                    },
                                    {
                                        h: "Матеріали та Якість",
                                        p: "Працюємо з високоякісним природним каменем. Гарантуємо стійкість виробів до зовнішніх впливів та збереження естетичного вигляду на десятиліття."
                                    },
                                    {
                                        h: "Дотримання термінів",
                                        p: "Ми цінуємо ваш час. Наші майстри виконують меморіальні роботи чітко в обумовлені терміни без жодних компромісів у якості."
                                    }
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

            {/* 3. ПЕРЕВАГИ (ТЕМНИЙ БЛОК) */}
            <section className="expertise-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="text-3xl md:text-6xl font-serif italic text-white">Чому ГранПроКамінь</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-1">
                        {[
                            {
                                t: "Досвід майстрів",
                                d: "Багаторічна практика виготовлення складних меморіальних робіт та увага до художніх деталей.",
                                icon: <Award className="text-[#b8860b] mb-4" size={20} strokeWidth={1}/>
                            },
                            {
                                t: "Надійні матеріали",
                                d: "Використовуємо лише відбірний граніт, що забезпечує довговічність і стійкість до будь-якої погоди.",
                                icon: <ShieldCheck className="text-[#b8860b] mb-4" size={20} strokeWidth={1}/>
                            },
                            {
                                t: "Пунктуальність",
                                d: "Суворе дотримання графіку робіт від ескізу до фінального встановлення на місці.",
                                icon: <Clock className="text-[#b8860b] mb-4" size={20} strokeWidth={1}/>
                            }
                        ].map((item, i) => (
                            <div key={i} className="expertise-card">
                                {item.icon}
                                <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-4">{item.t}</h4>
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