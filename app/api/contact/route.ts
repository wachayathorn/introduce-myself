import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  firstname?: unknown;
  lastname?: unknown;
  email?: unknown;
  message?: unknown;
};

function getStringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
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

  if (!firstname || !lastname || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "All fields are required" },
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
