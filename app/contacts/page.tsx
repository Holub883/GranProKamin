'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import { Footer } from "@/app/components/Footer";
import { Phone, MapPin, Clock, Send, MessageSquare, Loader2, CheckCircle2, ChevronDown } from 'lucide-react';

const ContactsPage = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

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

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            setStatus('error');
            alert("Помилка при відправці. Спробуйте пізніше або зателефонуйте нам.");
        }
    };

    return (
        <main className="min-h-screen bg-[#050505] text-[#e5e5e5] font-sans">
            <Header />

            <section className="pt-32 pb-16 px-6 text-center border-b border-white/5 bg-black">
                <div className="max-w-4xl mx-auto space-y-6">
                    <span className="text-[#b8860b] text-[10px] uppercase tracking-[0.5em] font-bold block">Зворотній зв'язок</span>
                    <h1 className="text-5xl md:text-8xl font-serif italic text-white tracking-tight leading-none">Контакти</h1>
                    <p className="text-zinc-500 font-light text-sm md:text-lg max-w-xl mx-auto">
                        Ми завжди на зв'язку, щоб надати консультацію або домовитися про зустріч.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16">
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
                                            <a href="tel:+380986747919" className="text-xl md:text-2xl font-light hover:text-[#b8860b] transition-colors">+38 (098) 67 47 919</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 group">
                                        <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-[#b8860b]"><MapPin size={20} /></div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Локація</p>
                                            <p className="text-xl font-light">Коростишів, Житомирська область</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 bg-zinc-900/30 p-8 md:p-12 border border-white/5 relative overflow-hidden">
                            {status === 'success' && (
                                <div className="absolute inset-0 bg-black/95 z-20 flex flex-col items-center justify-center text-center p-6">
                                    <CheckCircle2 size={48} className="text-[#b8860b] mb-4" />
                                    <h3 className="text-2xl font-serif italic text-white mb-2">Надіслано успішно</h3>
                                    <button onClick={() => setStatus('idle')} className="px-8 py-3 border border-[#b8860b] text-[#b8860b] text-[10px] uppercase tracking-widest hover:bg-[#b8860b] hover:text-black transition-all">Закрити</button>
                                </div>
                            )}

                            <h3 className="text-2xl font-serif italic mb-8 text-white">Напишіть нам</h3>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Ваше ім'я</label>
                                    <input name="userName" required type="text" className="w-full bg-black border border-white/10 p-4 outline-none focus:border-[#b8860b] transition-colors text-white" placeholder="Іван" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Телефон</label>
                                    <input name="userPhone" required type="tel" className="w-full bg-black border border-white/10 p-4 outline-none focus:border-[#b8860b] transition-colors text-white" placeholder="+38 (098) 000 00 00" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Послуга</label>
                                    <select name="userService" className="w-full bg-black border border-white/10 p-4 outline-none focus:border-[#b8860b] appearance-none text-white cursor-pointer">
                                        <option value="Виготовлення пам'ятника">Виготовлення пам'ятника</option>
                                        <option value="3D Дизайн">3D Дизайн</option>
                                        <option value="Реставрація">Реставрація</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Повідомлення</label>
                                    <textarea name="userMessage" rows={4} className="w-full bg-black border border-white/10 p-4 outline-none focus:border-[#b8860b] text-white resize-none" placeholder="Опишіть ваше запитання..."></textarea>
                                </div>
                                <div className="md:col-span-2 pt-4">
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full py-5 bg-[#b8860b] text-black text-xs font-bold uppercase tracking-[0.4em] hover:bg-white transition-all flex items-center justify-center gap-3 disabled:bg-zinc-800"
                                    >
                                        {status === 'loading' ? <Loader2 className="animate-spin" size={18} /> : <>Відправити запит <Send size={14} /></>}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ContactsPage;