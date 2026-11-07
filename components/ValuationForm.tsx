"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Props = {
  variant?: "compact" | "full";
  title?: string;
  intro?: string;
  idPrefix?: string;
};

type Status = "idle" | "sending" | "done" | "error";

export default function ValuationForm({ variant = "compact", title, intro, idPrefix = "vf" }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const startedAt = useRef<number>(0);
  const full = variant === "full";

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const params = new URLSearchParams(window.location.search);

    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      postcode: data.get("postcode"),
      address: data.get("address"),
      propertyType: data.get("propertyType"),
      timescale: data.get("timescale"),
      message: data.get("message"),
      consent: data.get("consent") === "on",
      website: data.get("website"),
      elapsedMs: Date.now() - startedAt.current,
      sourcePage: window.location.pathname,
      utmSource: params.get("utm_source"),
      utmMedium: params.get("utm_medium"),
      utmCampaign: params.get("utm_campaign"),
    };

    try {
      const res = await fetch("/api/valuation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
      setError("We couldn't send that. Please check your connection and try again.");
    }
  }

  if (status === "done") {
    return (
      <div className="form-card form-done" role="status">
        <div className="tick" aria-hidden="true">✓</div>
        <h3>Thank you, we have your request.</h3>
        <p>
          One of us will be in touch shortly to arrange your free valuation. In the meantime, you can read{" "}
          <Link href="/certainty-promise">how our certainty promise works</Link>.
        </p>
      </div>
    );
  }

  const id = (n: string) => `${idPrefix}-${n}`;

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate={false} aria-describedby={id("note")}>
      <h3>{title ?? "Get your free valuation"}</h3>
      {intro ? <p className="form-intro">{intro}</p> : null}

      <div className="field">
        <label htmlFor={id("name")}>Your name</label>
        <input id={id("name")} name="name" type="text" autoComplete="name" required maxLength={120} />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor={id("phone")}>Phone</label>
          <input id={id("phone")} name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={30} />
        </div>
        <div className="field">
          <label htmlFor={id("email")}>Email</label>
          <input id={id("email")} name="email" type="email" autoComplete="email" maxLength={254} />
        </div>
      </div>
      <p className="hint">Add a phone number or an email, whichever you prefer.</p>

      <div className="field">
        <label htmlFor={id("postcode")}>Property postcode</label>
        <input
          id={id("postcode")}
          name="postcode"
          type="text"
          autoComplete="postal-code"
          required
          maxLength={10}
          placeholder="e.g. HP20 1AA"
        />
      </div>

      {full ? (
        <>
          <div className="field">
            <label htmlFor={id("address")}>Property address (optional)</label>
            <input id={id("address")} name="address" type="text" autoComplete="street-address" maxLength={300} />
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor={id("type")}>Property type</label>
              <select id={id("type")} name="propertyType" defaultValue="">
                <option value="">Select</option>
                <option>Detached house</option>
                <option>Semi-detached house</option>
                <option>Terraced house</option>
                <option>Flat or maisonette</option>
                <option>Bungalow</option>
                <option>New-build</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor={id("time")}>When are you hoping to sell?</label>
              <select id={id("time")} name="timescale" defaultValue="">
                <option value="">Select</option>
                <option>As soon as possible</option>
                <option>In the next 3 months</option>
                <option>In 3 to 6 months</option>
                <option>Just exploring my options</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor={id("message")}>Anything we should know? (optional)</label>
            <textarea id={id("message")} name="message" rows={4} maxLength={2000} />
          </div>
        </>
      ) : null}

      {/* Honeypot: hidden from people, visible to bots. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor={id("website")}>Leave this field empty</label>
        <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="consent">
        <input type="checkbox" name="consent" required />
        <span>
          I agree to Ryan &amp; Bartlett contacting me about my valuation. See our{" "}
          <Link href="/privacy">privacy notice</Link>.
        </span>
      </label>

      {status === "error" ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}

      <button className="btn btn-primary btn-block" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request my free valuation"}
      </button>
      <p className="form-note" id={id("note")}>
        No obligation. No sale, no fee.
      </p>
    </form>
  );
}
