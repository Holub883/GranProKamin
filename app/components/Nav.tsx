'use client';

import Link from 'next/link';
import React from "react";
import { usePathname } from 'next/navigation';
import "./style/Navbar.css";

const navLinks = [
    { name: 'Головна', href: '/' },
    { name: 'Наші роботи', href: '/works' },
    { name: 'Про нас', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Контакти', href: '/contacts' },
];

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="main-nav">
            {navLinks.map((link) => {
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
    );
};

export default Navbar;