import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_5RGto5o5_L1m3c4GwndW8xQvsYyysMcu5'); // Отримаєте на resend.com

export async function POST(request: Request) {
    try {
        const { name, email, phone, message } = await request.json();

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'granprokamin@gmail.com',
            subject: `Новий запит: ${name}`,
            html: `
        <h2>Нове повідомлення з сайту</h2>
        <p><strong>Ім'я:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Повідомлення:</strong></p>
        <p>${message}</p>
      `
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}