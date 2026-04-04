import type { APIRoute } from "astro";
import { EmailMessage } from "cloudflare:email";
import { env } from "cloudflare:workers";
import { createMimeMessage } from "mimetext";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, message } = data as {
      name: string;
      email: string;
      message: string;
    };

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const msg = createMimeMessage();
    msg.setSender({ name: "Portfolio Contact Form", addr: "contact@roerohan.com" });
    msg.setRecipient("me@roerohan.com");
    msg.setSubject(`New contact form message from ${name}`);
    msg.addMessage({
      contentType: "text/plain",
      data: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    const emailMessage = new EmailMessage(
      "contact@roerohan.com",
      "me@roerohan.com",
      msg.asRaw(),
    );

    await env.SEND_EMAIL.send(emailMessage);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error: any) {
    console.error("Failed to send email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send message. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
