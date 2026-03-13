'use client';

import React from "react";
import Image from 'next/image';
import { Award, CheckCircle2, Heart, ShieldCheck, Target } from 'lucide-react';
import Header from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import '../style/About.css';

const AboutSection = () => {
    const points = [
        "Виготовлення та встановлення пам'ятників з граніту",
        "Комбіновані пам'ятники з крихти та граніту",
        "Індивідуальний 3D дизайн пам’ятників",
        "Реставрація пам’ятників з крихти",
        "Облицювання гранітом (заміна елементів)",
        "Облаштування тротуарної плитки довкола",
        "Вирівнювання пам’ятників, які «просіли»",
        "Художні роботи різного типу"
    ];

    return (
        <main className="about-page">
            <Header />

            {/* 1. ПЕРШИЙ БЛОК: ТЕКСТ ТА ФОТО */}
            <section className="about-hero">
                <div className="a-container a-grid-hero">

                    <div className="a-hero-content">
                        <div className="a-badge-gold">GranyStyle</div>
                        <h2 className="a-hero-title">Ми готові вам <br /> <span>допомогти</span></h2>

                        <p className="a-hero-text">
                            Потрібно виготовити пам’ятник чи облаштувати територію навколо нього?
                            Ми здійснюємо повний спектр робіт у Львові та області:
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
                            <p className="a-italic-zinc">...та багато іншого.</p>
                        </div>
                    </div>

                    <div className="a-hero-image-box">
                        <div className="a-image-container">
                            <Image src="/img/logo.jpg" alt="Майстерня" fill className="a-img" />
                        </div>
                    </div>

                </div>
            </section>

            {/* 2. ФІЛОСОФІЯ ЯКОСТІ */}
            <section className="a-philosophy">
                <div className="a-container">
                    <div className="a-center-header">
                        <span className="a-badge-gold">Наші принципи</span>
                        <h2 className="a-section-title">Філософія якості</h2>
                    </div>

                    <div className="a-grid-cards">
                        {[
                            { icon: <ShieldCheck size={36} />, title: "Відповідальність", desc: "Лише перевірений граніт та якісна крихта." },
                            { icon: <Target size={36} />, title: "Точність", desc: "3D дизайн дозволяє уникнути помилок у пропорціях." },
                            { icon: <Heart size={36} />, title: "Повага", desc: "Працюємо професійно та з глибокою повагою." },
                            { icon: <Award size={36} />, title: "Якість монтажу", desc: "Міцний фундамент запобігає просіданню." }
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
                        { label: "Населених пунктів", val: "50+" },
                        { label: "Років досвіду", val: "10+" },
                        { label: "Види граніту", val: "12" },
                        { label: "Гарантія на монтаж", val: "10 р." }
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