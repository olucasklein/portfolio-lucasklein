import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Enviar email para você (proprietário do site)
    await resend.emails.send({
      from: 'noreply@resend.dev',
      to: 'olucasklein@hotmail.com', // Seu email para receber as mensagens
      subject: `Nova mensagem de ${name} - Portfolio`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Enviar email de confirmação para o usuário
    await resend.emails.send({
      from: 'noreply@resend.dev',
      to: email,
      subject: 'Recebemos sua mensagem! - Lucas Klein',
      html: `
        <h2>Obrigado pelo contato!</h2>
        <p>Oi ${name},</p>
        <p>Recebemos sua mensagem e vou responder em breve.</p>
        <p>Abraços,<br>Lucas Klein</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
