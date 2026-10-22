"use client";
import { useState, type FormEvent } from "react";

const field = "w-full border border-line bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted focus:border-accent";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    // Swap for fetch("/api/contact", ...) when you add a backend or a service like Resend.
    const body = `${d.get("message")}\n\nFrom: ${d.get("name")} (${d.get("email")})`;
    window.location.href = `mailto:hello@thorfin.dev?subject=${encodeURIComponent("Project enquiry: " + d.get("type"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <label className="sr-only" htmlFor="name">Name</label>
      <input id="name" name="name" required placeholder="Your name" className={field} />
      <label className="sr-only" htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required placeholder="Work email" className={field} />
      <label className="sr-only" htmlFor="type">Project type</label>
      <select id="type" name="type" className={field} defaultValue="Ecommerce">
        <option className="bg-ink">Ecommerce</option>
        <option className="bg-ink">Fintech</option>
        <option className="bg-ink">Platform or API</option>
        <option className="bg-ink">Something else</option>
      </select>
      <label className="sr-only" htmlFor="message">Message</label>
      <textarea id="message" name="message" required rows={5} placeholder="What are you building?" className={field} />
      <button type="submit" className="mt-2 bg-fg px-5 py-3 text-sm font-medium text-ink hover:bg-white">Send message</button>
      {sent && <p role="status" className="font-mono text-xs text-accent">Opening your email app to send this message.</p>}
    </form>
  );
}
