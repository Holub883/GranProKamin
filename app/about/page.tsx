'use client';

import React from "react";
import Image from 'next/image';
import { Award, CheckCircle2, Heart, ShieldCheck, Target, Sparkles } from 'lucide-react';
import Header from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import '../style/About.css';

const AboutSection = () => {
    const points = [
        "Унікальні пам'ятники за індивідуальними побажаннями",
        "Використання найкращих сортів натурального граніту",
        "Високоякісні меморіальні роботи будь-якої складності",
        "Художнє оформлення з увагою до кожної деталі",
        "Суворе дотримання термінів виконання",
        "Безкоштовна консультація та обговорення потреб",
        "Облаштування та благоустрій території",
        "Професійний монтаж з гарантією довговічності"
    ];

    return (
        <main className="about-page">
            <Header />

            {/* 1. ПЕРШИЙ БЛОК: ТЕКСТ ТА ФОТО */}
            <section className="about-hero">
                <div className="a-container a-grid-hero">

                    <div className="a-hero-content">
                        <div className="a-badge-gold">ГранПроКамінь</div>
                        <h2 className="a-hero-title">Вшануймо пам'ять <br /> <span>разом</span></h2>

                        <p className="a-hero-text">
                            Ми спеціалізуємось на створенні пам'ятників, які відображають вашу любов і повагу до близьких.
                            Наші майстри з багаторічним досвідом виготовляють високоякісні вироби, вкладаючи душу в кожен сантиметр каменю.
                        </p>

                        <ul className="a-points-list">
                            {points.map((item, idx) => (
                                <li key={idx} className="a-point-item">
                                    <div className="a-point-circle">
                                        <CheckCircle2 size={12} />
                                    </div>
                                    <span className="a-point-text">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="a-hero-footer">
                            <div className="a-line-gold" />
                            <p className="a-italic-zinc">Зв'яжіться з нами сьогодні для безкоштовної консультації.</p>
                        </div>
                    </div>

                    <div className="a-hero-image-box">
                        <div className="a-image-container">
                            <Image src="/img/logo.jpg" alt="Майстерня ГранПроКамінь" fill className="a-img" />
                        </div>
                    </div>

                </div>
            </section>

            {/* 2. ФІЛОСОФІЯ ЯКОСТІ */}
            <section className="a-philosophy">
                <div className="a-container">
                    <div className="a-center-header">
                        <span className="a-badge-gold">Наші цінності</span>
                        <h2 className="a-section-title">Чому обирають нас</h2>
                    </div>

                    <div className="a-grid-cards">
                        {[
                            { icon: <Heart size={36} />, title: "Любов та Повага", desc: "Створюємо меморіали, що передають найтепліші почуття до близьких." },
                            { icon: <Sparkles size={36} />, title: "Унікальність", desc: "Виготовляємо пам'ятники за вашими ескізами та побажаннями." },
                            { icon: <ShieldCheck size={36} />, title: "Якість матеріалів", desc: "Використовуємо лише відбірний камінь для вічної краси." },
                            { icon: <Award size={36} />, title: "Досвід майстрів", desc: "Багаторічний стаж роботи з увагою до найменших деталей." }
                        ].map((item, i) => (
                            <div key={i} className="a-philosophy-card">
                                <div className="a-card-icon">{item.icon}</div>
                                <h3 className="a-card-title">{item.title}</h3>
                                <div className="a-card-divider" />
                                <p className="a-card-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. ЦИФРИ */}
            <section className="a-stats">
                <div className="a-container a-grid-stats">
                    {[
                        { label: "Задоволених клієнтів", val: "1000+" },
                        { label: "Років у професії", val: "10+" },
                        { label: "Гарантія якості", val: "100%" },
                        { label: "Термін служби", val: "Вічність" }
                    ].map((stat, i) => (
                        <div key={i} className="a-stat-item">
                            <p className="a-stat-val">{stat.val}</p>
                            <span className="a-stat-line" />
                            <p className="a-stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutSection;