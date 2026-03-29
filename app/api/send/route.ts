import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_4LfUxz5b_8HXcGy2gv1ckshsk8MuyDZnN');

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, service, message, captcha } = body;
        if (captcha) {
            const secretKey = "6LdiHp0sAAAAACkjQjc_hu1aOgsa1K_qqCmDoTBG";
            const googleVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;

            const captchaResponse = await fetch(googleVerifyUrl, { method: 'POST' });
            const captchaData = await captchaResponse.json();

            if (!captchaData.success) {
                return NextResponse.json(
                    { error: "Помилка перевірки reCAPTCHA. Спробуйте ще раз." },
                    { status: 400 }
                );
            }
        }
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'granprokamin@gmail.com',
            subject: `Новий запит: ${service} — ${name}`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.5; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                    <h2 style="color: #000; border-bottom: 2px solid #b8860b; padding-bottom: 10px;">Нове повідомлення з сайту</h2>
                    <p><strong>Ім'я:</strong> ${name}</p>
                    <p><strong>Телефон:</strong> ${phone}</p>
                    <p><strong>Послуга:</strong> <span style="color: #b8860b; font-weight: bold;">${service}</span></p>
                    <p><strong>Повідомлення:</strong></p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #b8860b;">
                        ${message || 'Без коментарів'}
                    </div>
                    <footer style="margin-top: 20px; font-size: 11px; color: #999;">
                        Запит надіслано через форму ${captcha ? '(захищено капчею)' : '(без капчі)'}.
                    </footer>
                </div>
            `
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json({ error: "Помилка відправки листа через Resend" }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });

    } catch (error: any) {
        console.error("Server error:", error);
        return NextResponse.json({ error: "Внутрішня помилка сервера" }, { status: 500 });
    }
}