'use client';

import React, { useState, useRef } from 'react';
import { Send, ShieldCheck, Loader2, ChevronDown } from 'lucide-react';
import ReCAPTCHA from "react-google-recaptcha";
import './style/Contact.css';

export const ContactSection = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    return (
        <section className="contact-section">
            <div className="contact-container">

                {/* Заголовок у стилі Hero */}
                <div className="contact-header">
                    <div className="contact-badge">
                        <div className="badge-line" />
                        <span>Зворотний зв'язок</span>
                    </div>
                    <h2 className="contact-title">Обговорити <span>проект</span></h2>
                </div>

                {/* ФОРМА */}
                <div className="contact-form-container">
                    <form className="contact-form">

                        {status === 'success' && (
                            <div className="success-overlay">
                                <Send size={32} className="success-icon" />
                                <h3 className="success-title">Надіслано</h3>
                                <p className="success-desc">Ми зв'яжемося з вами найближчим часом.</p>
                                <button onClick={() => setStatus('idle')} className="back-btn">Повернутися</button>
                            </div>
                        )}

                        <div className="form-grid">
                            <div className="input-group">
                                <label className="input-label">Ваше ім'я</label>
                                <input type="text" placeholder="Олександр" required className="form-input" />
                            </div>

                            <div className="input-group">
                                <label className="input-label">Телефон</label>
                                <input type="tel" placeholder="+38 (0__) ___ __ __" required className="form-input" />
                            </div>

                            <div className="input-group full-width">
                                <label className="input-label">Яка послуга цікавить?</label>
                                <div className="select-wrapper">
                                    <select className="form-select">
                                        <option>Виготовлення пам'ятника</option>
                                        <option>3D Дизайн меморіалу</option>
                                        <option>Реставрація та догляд</option>
                                        <option>Благоустрій території</option>
                                    </select>
                                    <ChevronDown size={16} className="select-arrow" />
                                </div>
                            </div>

                            <div className="input-group full-width">
                                <label className="input-label">Повідомлення</label>
                                <textarea rows={2} placeholder="Опишіть ваші побажання..." className="form-textarea"></textarea>
                            </div>
                        </div>

                        <div className="form-footer">
                            <div className="captcha-container">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    theme="light"
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                    onChange={(token) => setCaptchaToken(token)}
                                />
                            </div>

                            <button type="submit" disabled={status === 'loading'} className="contact-submit">
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