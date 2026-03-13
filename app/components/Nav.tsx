'use client';

import Link from 'next/link';
import React from "react";
import "./style/Navbar.css";

const navLinks = [
    { name: 'Головна', href: '/' },
    { name: 'Гарантії', href: '/guarantees' },
    { name: 'Наші роботи', href: '/works' },
    { name: 'Про нас', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Контакти', href: '/contacts' },
];

const Navbar = () => {
    return (
        <nav className="main-nav">
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="nav-item"
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;