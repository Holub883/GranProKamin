import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_4LfUxz5b_8HXcGy2gv1ckshsk8MuyDZnN');

export async function POST(request: Request) {
    try {
        const { name, phone, service, message, captcha } = await request.json();
        const secretKey = "6LdiHp0sAAAAACkjQjc_hu1aOgsa1K_qqCmDoTBG";
        const googleVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;

        const captchaResponse = await fetch(googleVerifyUrl, { method: 'POST' });
        const captchaData = await captchaResponse.json();

        if (!captchaData.success) {
            return NextResponse.json({ error: "Помилка перевірки reCAPTCHA. Спробуйте ще раз." }, { status: 400 });
        }

        // 2. ВІДПРАВКА ЛИСТА (якщо капча успішна)
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'granprokamin@gmail.com', // Лист прийде сюди
            subject: `Новий запит: ${service} — ${name}`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.5; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px;">
                    <h2 style="color: #000;">Нове повідомлення з сайту</h2>
                    <hr style="border: 0; border-top: 1px solid #eee;" />
                    <p><strong>Ім'я:</strong> ${name}</p>
                    <p><strong>Телефон:</strong> ${phone}</p>
                    <p><strong>Цікавить послуга:</strong> <span style="color: #b8860b; font-weight: bold;">${service}</span></p>
                    <p><strong>Повідомлення:</strong></p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #b8860b;">
                        ${message || 'Без коментарів'}
                    </div>
                    <footer style="margin-top: 20px; font-size: 12px; color: #999;">
                        Запит надіслано через форму зворотного зв'язку.
                    </footer>
                </div>
            `
        });

        return NextResponse.json({ success: true, data });

    } catch (error: any) {
        console.error("Server error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}