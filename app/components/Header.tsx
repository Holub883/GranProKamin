'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Send, Instagram, Facebook, MessageSquare, Menu, Mail, Clock } from 'lucide-react';
import Navbar from "./Nav";
import './style/Header.css';

const Header = () => {
    return (
        <header className="site-header">
            {/* 1. ВЕРХНЯ СМУГА */}
            <div className="header-top-bar">
                <div className="header-container">
                    <button className="mobile-menu-btn">
                        <Menu size={20} />
                    </button>

                    <Navbar />
                </div>
            </div>

            {/* 2. ГОЛОВНИЙ БЛОК */}
            <div className="header-main-body">
                {/* ЛІВО: Пошук */}
                <div className="header-left">
                    <div className="search-container">
                        <img src={"/img/logo.jpg"}/>
                    </div>
                </div>

                {/* ЦЕНТР: Логотип */}
                <div className="header-center">
                    <Link href="/" className="logo-link">
                        <span className="logo-sub">Гранітна майстерня</span>
                        <h1 className="logo-main">
                            Гран Про<span className="logo-accent">Камінь</span>
                        </h1>
                    </Link>
                </div>

                {/* ПРАВО: Контакти, Пошта та Час */}
                <div className="header-right">
                    <div className="contact-info-block">
                        {/* Телефон */}
                        <a href="tel:+380986747919" className="header-phone">
                            +38 (098) 67-47-919
                        </a>

                        <div className="header-details">
                            {/* Пошта — тепер велика і клікабельна */}
                            <a href="mailto:stepanikolaevitch@gmail.com" className="detail-item">
                                <Mail size={16} className="detail-icon" />
                                <span>stepanikolaevitch@gmail.com</span>
                            </a>

                            {/* Години роботи */}
                            <div className="detail-item">
                                <Clock size={16} className="detail-icon" />
                                <span>Пн-Пт: 08:00 - 17:00</span>
                            </div>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://t.me/+380986747919" className="social-icon"><Send size={18} /></a>
                        <a href="https://www.instagram.com/_granit_koros?igsh=MXJpdTd5eWZseGtjcQ==" className="social-icon"><Instagram size={18} /></a>
                        <a href="https://viber://chat?number=%2B380986747919" className="social-icon">
                            <MessageSquare size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;