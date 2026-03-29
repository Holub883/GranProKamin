'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import { Footer } from "@/app/components/Footer";
import { Phone, MapPin, Clock, Send, MessageSquare, Loader2, CheckCircle2, ChevronDown } from 'lucide-react';

const ContactsPage = () => {
    // Стан для відстеження процесу відправки
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        // Збір даних з полів форми
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('userName'),
            phone: formData.get('userPhone'),
            service: formData.get('userService'),
            message: formData.get('userMessage'),
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                throw new Error(result.error || 'Failed to send');
            }
        } catch (error) {
            setStatus('error');
            console.error("Form error:", error);
            alert("Помилка при відправці. Спробуйте пізніше або зателефонуйте нам.");
            setStatus('idle');
        }
    };

    return (
        <main className="min-h-screen bg-[#050505] text-[#e5e5e5] font-sans">
            <Header />

            {/* 1. HERO / HEADER */}
            <section className="pt-32 pb-16 px-6 text-center border-b border-white/5 bg-black">
                <div className="max-w-4xl mx-auto space-y-6">
                    <span className="text-[#b8860b] text-[10px] uppercase tracking-[0.5em] font-bold block">Зворотній зв'язок</span>
                    <h1 className="text-5xl md:text-8xl font-serif italic text-white tracking-tight leading-none">
                        Контакти
                    </h1>
                    <p className="text-zinc-500 font-light text-sm md:text-lg max-w-xl mx-auto">
                        Ми завжди на зв'язку, щоб надати консультацію або домовитися про зустріч.
                    </p>
                </div>
            </section>

            {/* 2. ОСНОВНА СЕКЦІЯ */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16">

                        {/* ЛІВА КОЛОНКА: Контактна інформація */}
                        <div className="lg:col-span-5 space-y-12">
                            <div className="space-y-8">
                                <h2 className="text-3xl font-serif italic text-white">Як нас знайти</h2>

                                <div className="space-y-6">
                                    <div className="flex gap-6 group cursor-pointer">
                                        <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-[#b8860b] group-hover:bg-[#b8860b] group-hover:text-black transition-all">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Телефон</p>
                                            <a href="tel:+380986747919" className="text-xl md:text-2xl font-light hover:text-[#b8860b] transition-colors">
                                                +38 (098) 67 47 919
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 group">
                                        <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-[#b8860b]">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Локація</p>
                                            <p className="text-xl font-light">
                                                Коростишів, Житомирська область
                                            </p>
                                            <p className="text-sm text-zinc-600 mt-1 italic">Працюємо з виїздом на об'єкт</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 group">
                                        <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-[#b8860b]">
                                            <Clock size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Графік роботи</p>
                                            <p className="text-xl font-light text-zinc-300">Пн — Пт: 08:00 - 17:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-6">Швидкий зв'язок у месенджерах</p>
                                <div className="flex flex-wrap gap-4">
                                    <a href="viber://chat?number=%2B380986747919" className="flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-white/5 hover:border-[#b8860b]/50 transition-all text-xs uppercase tracking-widest font-bold">
                                        <MessageSquare size={16} className="text-[#b8860b]" /> Viber
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ПРАВА КОЛОНКА: Форма */}
                        <div className="lg:col-span-7 bg-zinc-900/30 p-8 md:p-12 border border-white/5 relative overflow-hidden">

                            {/* Екран успіху (Overlay) */}
                            {status === 'success' && (
                                <div className="absolute inset-0 bg-black/95 z-20 flex flex-col items-center justify-center text-center p-6 transition-all duration-500">
                                    <CheckCircle2 size={48} className="text-[#b8860b] mb-4" />
                                    <h3 className="text-2xl font-serif italic text-white mb-2">Надіслано успішно</h3>
                                    <p className="text-zinc-400 mb-8 max-w-xs text-sm">Дякуємо! Ми отримали ваш запит і зателефонуємо вам найближчим часом.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="px-8 py-3 border border-[#b8860b] text-[#b8860b] text-[10px] uppercase tracking-widest hover:bg-[#b8860b] hover:text-black transition-all"
                                    >
                                        Закрити
                                    </button>
                                </div>
                            )}

                            <h3 className="text-2xl font-serif italic mb-8 text-white">Напишіть нам</h3>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Ваше ім'я</label>
                                    <input
                                        name="userName"
                                        required
                                        type="text"
                                        className="w-full bg-black border border-white/10 p-4 outline-none focus:border-[#b8860b] transition-colors font-light text-white"
                                        placeholder="Іван"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Телефон</label>
                                    <input
                                        name="userPhone"
                                        required
                                        type="tel"
                                        className="w-full bg-black border border-white/10 p-4 outline-none focus:border-[#b8860b] transition-colors font-light text-white"
                                        placeholder="+38 (098) 000 00 00"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Яка послуга цікавить?</label>
                                    <div className="relative">
                                        <select
                                            name="userService"
                                            className="w-full bg-black border border-white/10 p-4 outline-none focus:border-[#b8860b] transition-colors font-light appearance-none text-white cursor-pointer"
                                        >
                                            <option value="Виготовлення пам'ятника">Виготовлення пам'ятника</option>
                                            <option value="3D Дизайн">3D Дизайн</option>
                                            <option value="Реставрація">Реставрація</option>
                                            <option value="Благоустрій території">Благоустрій території</option>
                                            <option value="Інше">Інше</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                                            <ChevronDown size={14} />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Повідомлення</label>
                                    <textarea
                                        name="userMessage"
                                        rows={4}
                                        className="w-full bg-black border border-white/10 p-4 outline-none focus:border-[#b8860b] transition-colors font-light text-white resize-none"
                                        placeholder="Опишіть ваше запитання..."
                                    ></textarea>
                                </div>
                                <div className="md:col-span-2 pt-4">
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full py-5 bg-[#b8860b] text-black text-xs font-bold uppercase tracking-[0.4em] hover:bg-white transition-all shadow-2xl flex items-center justify-center gap-3 disabled:bg-zinc-800 disabled:text-zinc-500"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 className="animate-spin" size={18} />
                                                Відправляємо...
                                            </>
                                        ) : (
                                            <>Відправити запит <Send size={14} /></>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP SECTION */}
            <section className="relative h-[500px] w-full bg-black overflow-hidden border-y border-white/5">
                <div className="absolute inset-0 w-full h-full invert-[0.9] contrast-[1.2] opacity-60 hover:opacity-100 transition-opacity duration-700">
                    <iframe
                        title="Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81765.48529369406!2d28.9818815195048!3d50.316656041011854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472942472d8a3915%3A0x67341851e3914a24!2z0JrQvtGA0L7RgdGC0YvRiNC10LIsINCW0LjRgtC-0LzQuNGA0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDEyNTAx!5e0!3m2!1sru!2sua!4v1711234567890!5m2!1sru!2sua"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'contrast(1.2) brightness(0.8)' }}
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="absolute inset-0 pointer-events-none border-[20px] border-black/20"></div>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                    <div className="bg-black/80 backdrop-blur-md border border-[#b8860b]/30 px-8 py-3 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#b8860b] animate-pulse" />
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white font-bold">
                            Коростишів, Житомирська область
                        </span>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ContactsPage;