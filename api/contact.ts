import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request: any, response: any) {
  if (request.method !== 'POST') {
    return response.status(405).end();
  }

  const { name, email, message } = request.body;

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'rowehessler@gmail.com',
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: message,
    });

    return response.status(200).json({ success: true });
  } catch {
    return response.status(500).json({ success: false });
  }
}