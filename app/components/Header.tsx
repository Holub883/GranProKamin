'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, Instagram, MessageSquare, Menu, X, Mail, Clock } from 'lucide-react';
import Navbar from "./Nav";
import './style/Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="site-header">
            {/* 1. ВЕРХНЯ СМУГА */}
            <div className="header-top-bar">
                <div className="header-container">
                    {/* Кнопка бургера для мобільних */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Навігація для десктопа */}
                    <div className="desktop-nav">
                        <Navbar />
                    </div>
                </div>
            </div>

            {/* 2. ГОЛОВНИЙ БЛОК */}
            <div className="header-main-body">
                <div className="header-left">
                    <div className="search-container">
                        <img src="/img/logo.jpg" alt="Logo" />
                    </div>
                </div>

                <div className="header-center">
                    <Link href="/" className="logo-link">
                        <span className="logo-sub">Гранітна майстерня</span>
                        <h1 className="logo-main">
                            Гран Про<span className="logo-accent">Камінь</span>
                        </h1>
                    </Link>
                </div>

                <div className="header-right">
                    <div className="contact-info-block">
                        <a href="tel:+380986747919" className="header-phone">
                            +38 (098) 67-47-919
                        </a>

                        <div className="header-details">
                            <a href="mailto:granprokamin@gmail.com" className="detail-item">
                                <Mail size={16} className="detail-icon" />
                                <span>granprokamin@gmail.com</span>
                            </a>
                            <div className="detail-item">
                                <Clock size={16} className="detail-icon" />
                                <span>Пн-Пт: 08:00 - 17:00</span>
                            </div>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://www.instagram.com/_granit_koros?igsh=MXJpdTd5eWZseGtjcQ==" className="social-icon"><Instagram size={18} /></a>
                        <a href="https://viber://chat?number=%2B380986747919" className="social-icon">
                            <MessageSquare size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* 3. МОБІЛЬНЕ МЕНЮ (Показується при кліку) */}
            <div className={`mobile-drop-menu ${isMenuOpen ? 'show' : ''}`}>
                <div className="mobile-menu-inner">
                    <Navbar />
                    <div className="mobile-menu-footer">
                        <a href="tel:+380986747919" className="m-phone">+38 (098) 67-47-919</a>
                        <p className="m-mail">stepanikolaevitch@gmail.com</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;