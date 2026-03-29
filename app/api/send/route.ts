import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('ВАШ_RESEND_API_KEY');

export async function POST(request: Request) {
    try {
        const { name, phone, service, message, captcha } = await request.json();

        // 1. ПЕРЕВІРКА КАПЧІ В GOOGLE
        const googleVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=6LftG50sAAAAAB3zRfotwyCib9cn5396heOjFeUR&response=${captcha}`;

        const captchaResponse = await fetch(googleVerifyUrl, { method: 'POST' });
        const captchaData = await captchaResponse.json();

        if (!captchaData.success) {
            return NextResponse.json({ error: "Капча недійсна або застаріла" }, { status: 400 });
        }

        // 2. ВІДПРАВКА ЛИСТА, ЯКЩО КАПЧА ПРАВИЛЬНА
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'granprokamin@gmail.com',
            subject: `Новий запит: ${service}`,
            html: `
                <h2>Нове повідомлення</h2>
                <p><strong>Ім'я:</strong> ${name}</p>
                <p><strong>Телефон:</strong> ${phone}</p>
                <p><strong>Послуга:</strong> ${service}</p>
                <p><strong>Повідомлення:</strong> ${message}</p>
            `
        });

        return NextResponse.json({ success: true, data });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}