import React from 'react';
import { Mail, Clock, Send, Instagram, MessageSquare } from 'lucide-react';
import './style/Footer.css';

const socialLinks = [
    {
        Icon: Instagram,
        href: "https://www.instagram.com/_granit_koros?igsh=MXJpdTd5eWZseGtjcQ==",
        label: "Instagram"
    },
    {
        Icon: MessageSquare,
        href: "viber://chat?number=%2B380986747919",
        label: "Viber"
    }
];

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">

                    {/* 1. Блок контактів */}
                    <div className="footer-contacts">
                        <span className="contact-label">Зв'яжіться з нами</span>
                        <a href="tel:+380986747919" className="footer-phone">
                            +38 (098) 67-47-919
                        </a>

                        <div className="contact-details-list">
                            <a href="mailto:granprokamin@gmail.com" className="contact-link">
                                <Mail size={16} className="text-red" />
                                <span>granprokamin@gmail.com</span>
                            </a>
                            <div className="contact-link">
                                <Clock size={16} className="text-red" />
                                <span>Пн — Пт: 08:00 – 17:00</span>
                            </div>
                        </div>

                        <div className="social-links-wrapper">
                            {socialLinks.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label={item.label}
                                >
                                    <item.Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div> {/* ТУТ БУВ ПРОПУЩЕНИЙ ДІВ */}

                    {/* 2. Карта */}
                    <div className="footer-map-box">
                        <iframe

                            title="Location Map"

                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.9713537393313!2d29.016155200000004!3d50.2924626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c812d6ff32d43%3A0xef03817fc1afd532!2sGran%20Invest!5e0!3m2!1suk!2sua!4v1773401140513!5m2!1suk!2sua"

                            className="map-iframe"

                            loading="lazy"

                        ></iframe>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>© 2026 1K-Memorial. Усі права захищені.</p>
                    <div className="footer-legal-links">
                        <a href="#">Гарантія</a>
                        <a href="#">Конфіденційність</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};