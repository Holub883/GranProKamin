import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_4LfUxz5b_8HXcGy2gv1ckshsk8MuyDZnN');

export async function POST(request: Request) {
    try {
        const { name, email, phone, message } = await request.json();

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'granprokamin@gmail.com',
            subject: `Новий запит: ${name}`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
                    <h2>Нове повідомлення з сайту</h2>
                    <hr />
                    <p><strong>Ім'я:</strong> ${name}</p>
                    <p><strong>Телефон:</strong> ${phone}</p>
                    <p><strong>Цікавить послуга:</strong> <span style="color: #b8860b; font-weight: bold;">${service}</span></p>
                    <p><strong>Повідомлення:</strong></p>
                    <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
                        ${message || 'Без коментарів'}
                    </div>
                </div>
            `
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}