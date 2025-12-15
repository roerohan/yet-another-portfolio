import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Sanitize HTML to prevent XSS
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Create MIME message manually for edge runtime compatibility
function createMimeMessage(
  from: { name: string; email: string },
  to: string,
  subject: string,
  replyTo: { name: string; email: string },
  textContent: string,
  htmlContent: string
): string {
  const boundary = `----=_Part_${Date.now()}_${Math.random().toString(36).substring(7)}`;

  const mimeMessage = [
    `From: ${from.name} <${from.email}>`,
    `To: ${to}`,
    `Reply-To: ${replyTo.name} <${replyTo.email}>`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    ``,
    `--${boundary}`,
    `Content-Type: text/plain; charset=utf-8`,
    `Content-Transfer-Encoding: 7bit`,
    ``,
    textContent,
    ``,
    `--${boundary}`,
    `Content-Type: text/html; charset=utf-8`,
    `Content-Transfer-Encoding: 7bit`,
    ``,
    htmlContent,
    ``,
    `--${boundary}--`,
  ].join('\r\n');

  return mimeMessage;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Sanitize inputs to prevent XSS
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    // Get the email binding from Cloudflare context
    const { env } = getCloudflareContext();

    // Prepare email content
    const textContent = `You have a new contact form submission:

Name: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from your portfolio contact form.`;

    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #06b6d4; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">New Contact Form Submission</h2>

  <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <p style="margin: 10px 0;"><strong>Name:</strong> ${safeName}</p>
    <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #06b6d4;">${safeEmail}</a></p>
  </div>

  <div style="margin: 20px 0;">
    <h3 style="color: #555;">Message:</h3>
    <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #06b6d4; white-space: pre-wrap;">${safeMessage}</p>
  </div>

  <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

  <p style="color: #999; font-size: 12px; text-align: center;">
    This email was sent from your portfolio contact form at roerohan.com
  </p>
</body>
</html>`;

    // Create MIME message
    const mimeMessage = createMimeMessage(
      { name: 'Portfolio Contact Form', email: 'noreply@roerohan.com' },
      'roerohan@gmail.com',
      `New Contact Form Submission from ${name}`,
      { name: name, email: email },
      textContent,
      htmlContent
    );

    // Send email using the EMAIL binding
    try {
      // Pass the raw MIME message to the send method
      // Note: The EMAIL binding expects a raw message string
      await env.EMAIL.send({
        from: 'noreply@roerohan.com',
        to: 'roerohan@gmail.com',
        message: mimeMessage,
      });
    } catch (e: any) {
      console.error('Email sending error:', e);
      return NextResponse.json(
        { error: e.message || 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
