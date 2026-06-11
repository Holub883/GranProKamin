'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Додали хук для визначення активного лінка
import { Send, Instagram, MessageSquare, Menu, X, Mail, Clock } from 'lucide-react';
import './style/Header.css';

const navLinks = [
    { name: 'Головна', href: '/' },
    { name: 'Наші роботи', href: '/works' },
    { name: 'Про нас', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Контакти', href: '/contacts' },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname(); // Отримуємо поточний шлях сторінки

    return (
        <header className="site-header">
            {/* 1. ВЕРХНЯ СМУГА */}
            <div className="header-top-bar">
                <div className="header-container">
                    {/* Кнопка бургера для мобільних */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Навігація для десктопа */}
                    <div className="desktop-nav">
                        <nav className="main-nav">
                            {navLinks.map((link) => {
                                // Перевіряємо, чи поточний шлях збігається з href посилання
                                const isActive = pathname === link.href;

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`nav-item ${isActive ? 'active' : ''}`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </nav>
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
                        <a href="https://www.instagram.com/_granit_koros?igsh=MXJpdTd5eWZseGtjcQ==" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <Instagram size={18} />
                        </a>
                        <a href="https://viber://chat?number=%2B380986747919" className="social-icon">
                            <MessageSquare size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* 3. МОБІЛЬНЕ МЕНЮ */}
            <div className={`mobile-drop-menu ${isMenuOpen ? 'show' : ''}`}>
                <div className="mobile-menu-inner">
                    {/* Замінили неіснуючий <Navbar /> на правильну мобільну навігацію */}
                    <nav className="mobile-nav">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                                    onClick={() => setIsMenuOpen(false)} // Закриваємо меню при кліку на лінк
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="mobile-menu-footer">
                        <a href="tel:+380986747919" className="m-phone">+38 (098) 67-47-919</a>
                        <p className="m-mail">granprokamin@gmail.com</p> {/* Синхронізував пошту з десктопною */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;