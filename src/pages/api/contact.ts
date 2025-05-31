import type { APIContext } from "astro";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({ request, redirect }: APIContext) {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";

    if (!name || !email || !message) {
      return redirect("/contact?error=true");
    }

    await resend.emails.send({
      from: "Midlands Engraving <no-reply@midlandsengraving.com>",
      to: ["your@email.com"], // your email
      subject: "New Contact Form Submission",
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Message:</strong><br/>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return redirect("/contact?success=true");
  } catch (err) {
    console.error("Email error:", err);
    return redirect("/contact?error=true");
  }
}
