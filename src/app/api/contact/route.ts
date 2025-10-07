// src/app/api/contact/route.ts
import { Resend } from "resend";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;
  if (!name || !email) {
    return new Response(JSON.stringify({ ok: false, error: "invalid" }), { status: 400 });
  }
  const resend = new Resend(process.env.RESEND_API_KEY!);
  await resend.emails.send({
    from: "noreply@example.com",
    to: "contact@example.com",
    subject: "サイト問い合わせ",
    text: `Name: ${name}\nEmail: ${email}\n\n${message ?? ""}`,
  });
  return Response.json({ ok: true });
}