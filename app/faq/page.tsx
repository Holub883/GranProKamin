'use client';

import { useState } from 'react';
import Header from '../components/Header';
import { ChevronDown, MessageCircle, Phone, Send } from 'lucide-react';
import { Footer } from "@/app/components/Footer";

const faqData = [
    {
        question: "Чому більшість проєктів починаються з 3D-моделі?",
        answer: "Це дозволяє чітко розуміти фінальний вигляд виробу до початку виробництва, уникнути помилок і переробок, точно прорахувати вартість та отримати результат, який відповідає очікуванням. Форма, пропорції та композиція фіксуються на етапі проєктування."
    },
    {
        question: "З якими матеріалами ви працюєте?",
        answer: "Ми спеціалізуємося на виготовленні меморіалів із натурального каменю — граніту та мармуру. Також виготовляємо комбіновані пам'ятники з крихти та граніту, що дозволяє знайти оптимальне рішення під ваш бюджет."
    },
    {
        question: "Як камінь витримує погодні умови України?",
        answer: "Натуральний камінь стійкий до вологи, морозів, сонця та перепадів температур. Завдяки професійній обробці та правильному монтажу, пам'ятники зберігають свій вигляд десятки років і не потребують складного догляду."
    },
    {
        question: "Чи займаєтеся ви реставрацією пам'ятників?",
        answer: "Так, ми проводимо реставрацію пам'ятників з крихти, облицювання гранітом, заміну окремих елементів, а також вирівнювання пам’ятників, які «просіли» з часом у Львові та області."
    },
    {
        question: "Які терміни виготовлення пам'ятника?",
        answer: "Терміни залежать від складності проєкту. Оскільки ми — виробництво повного циклу, ми самостійно відбираємо камінь та виконуємо художні роботи без посередників, що забезпечує чітке дотримання графіку."
    },
    {
        question: "Чи здійснюєте ви облаштування території?",
        answer: "Так, ми надаємо комплексні послуги: укладання тротуарної плитки довкола пам’ятника, встановлення столів, лавок та декоративних елементів для створення завершеного вигляду меморіалу."
    }
];

const FAQItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/5 group">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-8 flex justify-between items-center text-left transition-all"
            >
                <div className="flex gap-6 items-center">
                    <span className="text-[#b8860b] text-[10px] font-serif opacity-50">0{index + 1}</span>
                    <span className="text-sm md:text-lg uppercase tracking-[0.15em] font-light group-hover:text-[#b8860b] transition-colors leading-snug">
                        {question}
                    </span>
                </div>
                <ChevronDown className={`text-[#b8860b] transition-transform duration-500 shrink-0 ${isOpen ? 'rotate-180' : ''}`} size={20} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                <div className="pl-10 md:pl-12">
                    <p className="text-zinc-500 font-light leading-relaxed text-sm md:text-base max-w-2xl">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FAQPage = () => {
    return (
        <main className="min-h-screen bg-[#050505] text-[#e5e5e5] font-sans">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-black to-[#050505] border-b border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[#b8860b] text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">Відповіді на запитання</span>
                    <h1 className="text-4xl md:text-7xl font-serif italic mb-6 text-white tracking-tight leading-none">
                        Поширені запитання
                    </h1>
                    <div className="h-px w-24 bg-[#b8860b]/30 mx-auto" />
                </div>
            </section>

            {/* 2. FAQ ACCORDION */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {faqData.map((item, index) => (
                        <FAQItem key={index} index={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </section>

            {/* 3. CONTACT PROMPT */}
            <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
                <div className="max-w-3xl mx-auto text-center space-y-10">
                    <div className="inline-block p-4 rounded-full bg-[#b8860b]/5 border border-[#b8860b]/10">
                        <MessageCircle size={32} className="text-[#b8860b]" />
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-4xl font-serif italic text-white tracking-wide">Не знайшли відповіді?</h2>
                        <p className="text-zinc-500 font-light text-lg">
                            Ми розуміємо, що кожен випадок унікальний. <br className="hidden md:block"/> Зв'яжіться з нами для персональної консультації.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
                        <a
                            href="tel:+380961144111"
                            className="flex items-center justify-center gap-4 bg-[#b8860b] hover:bg-white text-black px-10 py-5 transition-all uppercase text-[11px] tracking-[0.3em] font-bold shadow-2xl shadow-[#b8860b]/10 w-full sm:w-auto"
                        >
                            <Phone size={14} /> Зателефонувати
                        </a>
                        <a
                            href="viber://chat?number=%2B380961144111"
                            className="flex items-center justify-center gap-4 border border-white/10 hover:border-[#b8860b]/50 hover:bg-white/5 px-10 py-5 transition-all uppercase text-[11px] tracking-[0.3em] font-bold w-full sm:w-auto"
                        >
                            <Send size={14} className="text-[#b8860b]" /> Viber / Telegram
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default FAQPage;