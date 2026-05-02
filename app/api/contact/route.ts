import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxRequestBodyLength = 8_000;
const fieldLimits = {
  firstname: 100,
  lastname: 100,
  email: 254,
  message: 2_000,
};

type ContactPayload = {
  firstname?: unknown;
  lastname?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

function getStringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function hasInvalidLength(value: string, limit: number) {
  return value.length > limit;
}

function hasControlCharacters(value: string) {
  return /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    const rawBody = await request.text();

    if (rawBody.length > maxRequestBodyLength) {
      return NextResponse.json(
        { ok: false, error: "Request body is too large" },
        { status: 413 }
      );
    }

    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body" },
      { status: 400 }
    );
  }

  const firstname = getStringValue(payload.firstname);
  const lastname = getStringValue(payload.lastname);
  const email = getStringValue(payload.email).toLowerCase();
  const message = getStringValue(payload.message);
  const website = getStringValue(payload.website);

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!firstname || !lastname || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "All fields are required" },
      { status: 400 }
    );
  }

  if (
    hasInvalidLength(firstname, fieldLimits.firstname) ||
    hasInvalidLength(lastname, fieldLimits.lastname) ||
    hasInvalidLength(email, fieldLimits.email) ||
    hasInvalidLength(message, fieldLimits.message)
  ) {
    return NextResponse.json(
      { ok: false, error: "Submitted content is too long" },
      { status: 400 }
    );
  }

  if (
    hasControlCharacters(firstname) ||
    hasControlCharacters(lastname) ||
    hasControlCharacters(email) ||
    hasControlCharacters(message)
  ) {
    return NextResponse.json(
      { ok: false, error: "Submitted content contains invalid characters" },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email address" },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("contacts").insert({
    firstname,
    lastname,
    email,
    message,
  });

  if (error) {
    return NextResponse.json(
      { ok: false, error: "Unable to submit contact message" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
