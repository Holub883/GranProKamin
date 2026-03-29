import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_4LfUxz5b_8HXcGy2gv1ckshsk8MuyDZnN');

export async function POST(request: Request) {
    try {
        const { name, phone, service, message, captcha } = await request.json();

        // ПЕРЕВІРКА RECAPTCHA (тільки якщо вона прийшла з фронтенду)
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
            from: 'Arkel Granit <info@arkel-granit.com>', // Ваш підтверджений домен
            to: 'granprokamin@gmail.com',
            subject: `Запит: ${service} — ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                    <h2 style="color: #b8860b; border-bottom: 2px solid #eee; padding-bottom: 10px;">Новий запит із сайту</h2>
                    <p><strong>Клієнт:</strong> ${name}</p>
                    <p><strong>Телефон:</strong> ${phone}</p>
                    <p><strong>Послуга:</strong> ${service}</p>
                    <p><strong>Повідомлення:</strong></p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #b8860b;">
                        ${message || 'Без коментарів'}
                    </div>
                </div>
            `
        });

        if (error) return NextResponse.json({ error }, { status: 400 });

        return NextResponse.json({ success: true, data });

    } catch (error: any) {
        return NextResponse.json({ error: "Помилка сервера" }, { status: 500 });
    }
}