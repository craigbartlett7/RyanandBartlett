import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

type Body = Record<string, unknown>;

const str = (v: unknown, max: number): string => {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
};

// Very small in-memory rate limit (per server instance). It is a speed bump
// against casual spam, not a security boundary.
const hits = new Map<string, number[]>();
function limited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const UK_POSTCODE = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function notify(lead: Record<string, string | boolean | null>) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL;
  const from = process.env.FROM_EMAIL;
  if (!key || !to || !from) return;
  const lines = [
    `New valuation request`,
    ``,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone || "-"}`,
    `Email: ${lead.email || "-"}`,
    `Postcode: ${lead.postcode}`,
    `Address: ${lead.address || "-"}`,
    `Property type: ${lead.property_type || "-"}`,
    `Timescale: ${lead.timescale || "-"}`,
    `Message: ${lead.message || "-"}`,
    ``,
    `Source page: ${lead.source_page || "-"}`,
    `UTM: ${lead.utm_source || "-"} / ${lead.utm_medium || "-"} / ${lead.utm_campaign || "-"}`,
  ];
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()),
        subject: `New valuation request: ${lead.name} (${lead.postcode})`,
        text: lines.join("\n"),
        ...(lead.email ? { reply_to: lead.email } : {}),
      }),
    });
  } catch (err) {
    console.error("Lead email failed", err);
  }
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real people leave this empty. Pretend success for bots.
  if (str(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }
  // Bots often submit instantly.
  const elapsed = Number(body.elapsedMs);
  if (Number.isFinite(elapsed) && elapsed < 1500) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name, 120);
  const email = str(body.email, 254);
  const phone = str(body.phone, 30);
  const postcode = str(body.postcode, 10).toUpperCase();
  const consent = body.consent === true;

  if (!name) return NextResponse.json({ ok: false, error: "Please tell us your name." }, { status: 400 });
  if (!email && !phone)
    return NextResponse.json({ ok: false, error: "Please give us a phone number or email." }, { status: 400 });
  if (email && !EMAIL.test(email))
    return NextResponse.json({ ok: false, error: "That email address doesn't look right." }, { status: 400 });
  if (phone && phone.replace(/\D/g, "").length < 10)
    return NextResponse.json({ ok: false, error: "That phone number looks too short." }, { status: 400 });
  if (!UK_POSTCODE.test(postcode))
    return NextResponse.json({ ok: false, error: "Please enter a valid UK postcode." }, { status: 400 });
  if (!consent)
    return NextResponse.json({ ok: false, error: "Please tick the box so we can contact you." }, { status: 400 });

  const lead = {
    name,
    email: email || null,
    phone: phone || null,
    postcode,
    address: str(body.address, 300) || null,
    property_type: str(body.propertyType, 40) || null,
    timescale: str(body.timescale, 60) || null,
    message: str(body.message, 2000) || null,
    consent: true,
    source_page: str(body.sourcePage, 200) || null,
    utm_source: str(body.utmSource, 100) || null,
    utm_medium: str(body.utmMedium, 100) || null,
    utm_campaign: str(body.utmCampaign, 100) || null,
  };

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("Supabase is not configured (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY).");
    return NextResponse.json(
      { ok: false, error: "We couldn't save your request just now. Please call or email us instead." },
      { status: 503 },
    );
  }

  const { error } = await supabase.from("valuation_requests").insert(lead);
  if (error) {
    console.error("Supabase insert failed", error);
    return NextResponse.json(
      { ok: false, error: "We couldn't save your request just now. Please call or email us instead." },
      { status: 500 },
    );
  }

  await notify(lead);
  return NextResponse.json({ ok: true });
}
