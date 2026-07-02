import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

type QuotePayload = {
  name: string;
  phone: string;
  vehicle: string;
};

const PHONE_REGEX = /^[0-9+()\s-]{8,20}$/;

function validate(data: Partial<QuotePayload>): string | null {
  if (!data.name || data.name.trim().length < 2) {
    return "Please enter your name.";
  }
  if (!data.phone || !PHONE_REGEX.test(data.phone.trim())) {
    return "Please enter a valid phone number.";
  }
  if (!data.vehicle || data.vehicle.trim().length < 2) {
    return "Let us know what car you're after.";
  }
  return null;
}

async function sendLeadEmail(submission: QuotePayload & { submittedAt: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return; // no key configured — log-only mode, see console output

  const resend = new Resend(apiKey);
  const to = process.env.LEAD_NOTIFICATION_EMAIL || site.email;
  const from = process.env.RESEND_FROM_EMAIL || "Finley McGrath Motors <onboarding@resend.dev>";

  try {
    await resend.emails.send({
      from,
      to,
      subject: `New quote request — ${submission.name}`,
      html: `
        <h2>New quote request</h2>
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Phone:</strong> ${submission.phone}</p>
        <p><strong>Vehicle:</strong> ${submission.vehicle}</p>
        <p><strong>Submitted:</strong> ${submission.submittedAt}</p>
      `,
    });
  } catch (err) {
    console.error("[quote-request] failed to send lead email:", err);
  }
}

export async function POST(request: Request) {
  let body: Partial<QuotePayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const error = validate(body);
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  const submission = {
    name: body.name!.trim(),
    phone: body.phone!.trim(),
    vehicle: body.vehicle!.trim(),
    submittedAt: new Date().toISOString(),
  };

  console.log("[quote-request]", submission);
  await sendLeadEmail(submission);

  return NextResponse.json({ ok: true });
}
