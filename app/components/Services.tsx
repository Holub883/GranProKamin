import { Hammer, PenTool, Layout, RefreshCw, Layers, MoveUp } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Виготовлення та встановлення",
            desc: "Пам'ятники з граніту, а також комбіновані варіанти з крихти та граніту.",
            icon: <Hammer className="text-[#b8860b]" size={32} />
        },
        {
            title: "Індивідуальний 3D дизайн",
            desc: "Створюємо деталізовані 3D моделі перед початком виробництва.",
            icon: <Layout className="text-[#b8860b]" size={32} />
        },
        {
            title: "Реставрація пам’ятників",
            desc: "Відновлення виробів з крихти та надання їм первинного вигляду.",
            icon: <RefreshCw className="text-[#b8860b]" size={32} />
        },
        {
            title: "Облицювання гранітом",
            desc: "Заміна гранітних елементів та повне оновлення зовнішнього вигляду.",
            icon: <Layers className="text-[#b8860b]" size={32} />
        },
        {
            title: "Облаштування території",
            desc: "Укладання тротуарної плитки та вирівнювання пам’ятників, які «просіли».",
            icon: <MoveUp className="text-[#b8860b]" size={32} />
        },
        {
            title: "Художні роботи",
            desc: "Гравірування портретів, написів та художнє оформлення різного типу.",
            icon: <PenTool className="text-[#b8860b]" size={32} />
        }
    ];

    return (
        <section className="bg-[#0f0f0f] text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Заголовок-заклик */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-widest leading-tight">
                        Потрібно виготовити пам’ятник чи <br />
                        <span className="text-[#b8860b]">облаштувати територію?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light">
                        Ми готові допомогти вам на кожному етапі — від створення 3D-проєкту до повної реставрації та догляду за місцем пам'яті.
                    </p>
                </div>

                {/* Сітка послуг */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 border border-white/5 bg-[#161616] hover:border-[#b8860b]/50 transition-all duration-300 group"
                        >
                            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-lg uppercase tracking-wider mb-3 font-semibold">
                                {service.title}
                            </h3>
                            <p className="text-sm text-gray-500 font-light leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Додаткова інформація */}
                <div className="mt-16 p-8 bg-zinc-900/50 border-l-4 border-[#b8860b] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-lg font-light tracking-wide italic">
                        "Ми беремо на себе повну відповідальність за результат та якість кожного виробу."
                    </p>
                    <button className="whitespace-nowrap bg-[#b8860b] hover:bg-[#9a7109] text-white px-8 py-3 uppercase text-xs tracking-[0.2em] transition-colors">
                        Отримати консультацію
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Services;