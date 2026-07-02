import { NextResponse } from "next/server";

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

  // TODO: replace this console log with a real destination — e.g. send via
  // Resend (https://resend.com), forward to Formspree, or insert into a
  // database (Postgres/Supabase/etc). Keeping this as a simple log means the
  // route works out of the box with zero external config.
  console.log("[quote-request]", submission);

  return NextResponse.json({ ok: true });
}
