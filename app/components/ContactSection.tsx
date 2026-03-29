'use client';

import React, { useState, useRef } from 'react';
import { Send, ShieldCheck, Loader2, ChevronDown } from 'lucide-react';
import ReCAPTCHA from "react-google-recaptcha";
import './style/Contact.css';

export const ContactSection = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!captchaToken) {
            alert("Будь ласка, підтвердіть, що ви не робот");
            return;
        }

        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('userName'),
            phone: formData.get('userPhone'),
            service: formData.get('userService'),
            message: formData.get('userMessage'),
            captcha: captchaToken,
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                setCaptchaToken(null);
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
                setCaptchaToken(null);
                recaptchaRef.current?.reset();
            }
        } catch (error) {
            setStatus('error');
            setCaptchaToken(null);
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <div className="contact-badge">
                        <div className="badge-line" />
                        <span>Зворотний зв'язок</span>
                    </div>
                    <h2 className="contact-title">Обговорити <span>проєкт</span></h2>
                </div>

                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        {status === 'success' && (
                            <div className="success-overlay">
                                <Send size={32} className="success-icon" />
                                <h3 className="success-title">Надіслано</h3>
                                <p className="success-desc">Ми зв'яжемося з вами найближчим часом.</p>
                                <button type="button" onClick={() => setStatus('idle')} className="back-btn">
                                    Повернутися
                                </button>
                            </div>
                        )}

                        <div className="form-grid">
                            <div className="input-group">
                                <label className="input-label">Ваше ім'я</label>
                                <input name="userName" type="text" placeholder="Олександр" required className="form-input" />
                            </div>

                            <div className="input-group">
                                <label className="input-label">Телефон</label>
                                <input name="userPhone" type="tel" placeholder="+38 (0__) ___ __ __" required className="form-input" />
                            </div>

                            <div className="input-group full-width">
                                <label className="input-label">Яка послуга цікавить?</label>
                                <div className="select-wrapper">
                                    <select name="userService" className="form-select">
                                        <option value="Виготовлення пам'ятника">Виготовлення пам'ятника</option>
                                        <option value="3D Дизайн меморіалу">3D Дизайн меморіалу</option>
                                        <option value="Реставрація та догляд">Реставрація та догляд</option>
                                        <option value="Благоустрій території">Благоустрій території</option>
                                    </select>
                                    <ChevronDown size={16} className="select-arrow" />
                                </div>
                            </div>

                            <div className="input-group full-width">
                                <label className="input-label">Повідомлення</label>
                                <textarea name="userMessage" rows={2} placeholder="Опишіть ваші побажання..." className="form-textarea"></textarea>
                            </div>
                        </div>

                        <div className="form-footer">
                            <div className="captcha-container">
                                {!captchaToken && (
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        theme="light"
                                        sitekey="6LdiHp0sAAAAALmOAHMl0ZhbCmG6fuRzWxcI5do7"
                                        onChange={(token) => setCaptchaToken(token)}
                                    />
                                )}
                            </div>

                            <button
                                type="submit"
                                // Кнопка активна ТІЛЬКИ коли капча пройдена (token існує)
                                disabled={status === 'loading' || !captchaToken}
                                className="contact-submit"
                            >
                                {status === 'loading' ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : (
                                    <>Відправити запит <Send size={14} /></>
                                )}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="privacy-footer">
                    <ShieldCheck size={14} className="text-[#b8860b]" />
                    <span>Ваші дані захищені та не передаються третім особам</span>
                </div>
            </div>
        </section>
    );
};