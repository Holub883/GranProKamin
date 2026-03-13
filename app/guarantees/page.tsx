'use client';

import React from 'react';
import Header from '../components/Header';
import { Footer } from "@/app/components/Footer";
import { ShieldCheck, Snowflake, Sun, Droplets, Gem, Award, ArrowRight } from 'lucide-react';
import '../style/Guarantees.css';

const GuaranteesPage = () => {
    const features = [
        {
            icon: <Droplets size={32} />,
            title: "Стійкість до вологи",
            desc: "Натуральний граніт має мінімальний коефіцієнт водопоглинання, що запобігає руйнуванню каменю."
        },
        {
            icon: <Snowflake size={32} />,
            title: "Морозостійкість",
            desc: "Матеріал витримує сотні циклів заморожування, що критично для українського клімату."
        },
        {
            icon: <Sun size={32} />,
            title: "Захист від вигорання",
            desc: "Природний камінь не втрачає колір під прямими сонячними променями протягом десятиліть."
        }
    ];

    return (
        <main className="guarantees-page">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="guarantees-hero">
                <div className="g-container">
                    <span className="g-subtitle">Надійність & Відповідальність</span>
                    <h1 className="g-main-title">Гарантія якості</h1>
                    <p className="g-hero-desc">
                        Poliasyk Memorial — це не просто виріб. Це пам’ять та відповідальність перед родиною.
                        Ми контролюємо результат від першої ідеї до фінального монтажу.
                    </p>
                </div>
            </section>

            {/* 2. ДЕТАЛЬНИЙ БЛОК */}
            <section className="g-details-section">
                <div className="g-container g-flex">

                    <div className="g-info-column">
                        <h2 className="g-section-title">Минуле, що триває <br/><span>у майбутньому</span></h2>
                        <p className="g-text">
                            Натуральний камінь проходить ретельний відбір. Завдяки власному виробництву ми контролюємо
                            шліфування, художні роботи та кожен закладений шов.
                        </p>

                        <div className="g-cards-stack">
                            <div className="g-mini-card">
                                <ShieldCheck className="g-icon-gold" />
                                <div>
                                    <h5>Гарантія на камінь</h5>
                                    <p>Лише сертифікований граніт, стійкий до перепадів температур.</p>
                                </div>
                            </div>
                            <div className="g-mini-card">
                                <Award className="g-icon-gold" />
                                <div>
                                    <h5>Гарантія на монтаж</h5>
                                    <p>Дотримання технологічних норм, що запобігає просіданню пам'ятника.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="g-image-column">
                        <div className="g-image-wrapper">
                            <div className="g-img-overlay" />
                            <div className="g-badge">
                                <Gem size={32} />
                                <span>Premium Quality<br/>Since 2015</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. ТЕХНІЧНІ ПЕРЕВАГИ */}
            <section className="g-features-section">
                <div className="g-container g-grid-3">
                    {features.map((f, i) => (
                        <div key={i} className="g-feature-item">
                            <div className="g-feature-icon">{f.icon}</div>
                            <h4>{f.title}</h4>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. CTA (ЗАКЛИК) */}
            <section className="g-cta-section">
                <div className="g-cta-box">
                    <h3>Залишилися питання щодо якості?</h3>
                    <p>Ми готові надати інформацію про походження каменю та технологію його обробки.</p>
                    <button className="g-cta-btn">
                        Зв'язатися з майстром <ArrowRight size={16} />
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default GuaranteesPage;