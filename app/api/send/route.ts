import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_4LfUxz5b_8HXcGy2gv1ckshsk8MuyDZnN');

export async function POST(request: Request) {
    try {
        const { name, phone, service, message, captcha } = await request.json();

        // 1. ГНУЧКА ПЕРЕВІРКА RECAPTCHA
        // Якщо токен капчі передано (з головної сторінки), перевіряємо його
        if (captcha) {
            const secretKey = "6LdiHp0sAAAAACkjQjc_hu1aOgsa1K_qqCmDoTBG";
            const googleVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;

            const captchaResponse = await fetch(googleVerifyUrl, { method: 'POST' });
            const captchaData = await captchaResponse.json();

            if (!captchaData.success) {
                return NextResponse.json({
                    error: "Помилка перевірки капчі. Спробуйте ще раз."
                }, { status: 400 });
            }
        }
        // Якщо captcha === undefined або null (як на сторінці контактів),
        // ми просто ігноруємо цей крок і йдемо далі до відправки листа.

        // 2. ВІДПРАВКА ЛИСТА
        const { data, error } = await resend.emails.send({
            // Оскільки домен підтверджено, використовуємо фірмову пошту
            from: 'Arkel Granit <info@arkel-granit.com>',
            to: 'granprokamin@gmail.com',
            subject: `Новий запит: ${service} — ${name}`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.5; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #000; border-bottom: 2px solid #b8860b; padding-bottom: 10px;">Нове повідомлення з сайту</h2>
                    <p style="margin-top: 20px;"><strong>Ім'я:</strong> ${name}</p>
                    <p><strong>Телефон:</strong> ${phone}</p>
                    <p><strong>Цікавить послуга:</strong> <span style="color: #b8860b; font-weight: bold;">${service}</span></p>
                    <p><strong>Повідомлення:</strong></p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #b8860b;">
                        ${message || 'Без коментарів'}
                    </div>
                    <footer style="margin-top: 25px; font-size: 11px; color: #999; border-top: 1px solid #eee; padding-top: 10px;">
                        Запит надіслано через форму зворотного зв'язку ${captcha ? '(захищено reCAPTCHA)' : ''}.
                    </footer>
                </div>
            `
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });

    } catch (error: any) {
        console.error("Server error:", error);
        return NextResponse.json({ error: "Внутрішня помилка сервера" }, { status: 500 });
    }
}