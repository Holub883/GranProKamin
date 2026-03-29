import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_4LfUxz5b_8HXcGy2gv1ckshsk8MuyDZnN');

export async function POST(request: Request) {
    try {
        const { name, phone, service, message, captcha } = await request.json();

        // ПЕРЕВІРКА ТІЛЬКИ ЯКЩО КАПЧА ПРИЙШЛА (з інших сторінок)
        if (captcha) {
            const secretKey = "6LdiHp0sAAAAACkjQjc_hu1aOgsa1K_qqCmDoTBG";
            const googleVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;
            const captchaResponse = await fetch(googleVerifyUrl, { method: 'POST' });
            const captchaData = await captchaResponse.json();

            if (!captchaData.success) {
                return NextResponse.json({ error: "Капча недійсна" }, { status: 400 });
            }
        }

        // ВІДПРАВКА ЛИСТА
        const { data, error } = await resend.emails.send({
            from: 'Arkel Granit <info@arkel-granit.com>',
            to: 'granprokamin@gmail.com',
            subject: `Запит: ${service} — ${name}`,
            html: `<h3>Нове замовлення</h3><p>Ім'я: ${name}</p><p>Тел: ${phone}</p><p>Послуга: ${service}</p>`
        });

        if (error) return NextResponse.json({ error }, { status: 400 });
        return NextResponse.json({ success: true, data });

    } catch (error: any) {
        return NextResponse.json({ error: "Серверна помилка" }, { status: 500 });
    }
}