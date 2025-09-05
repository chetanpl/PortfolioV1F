import React, { useRef, useState } from "react";
import { PROFILE } from "../data/profile";
import { Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formRef.current,
      "YOUR_PUBLIC_KEY"
    )
    .then(() => {
      setMessage("Message sent successfully!");
      formRef.current?.reset();
    })
    .catch(() => setMessage("Failed to send message. Try again later."));
  };

  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="bg-white border p-6 rounded-2xl space-y-4">
        <input name="name" className="w-full border rounded px-4 py-3" placeholder="Your name" required />	
        <input name="email" className="w-full border rounded px-4 py-3" placeholder="Your email" required />
        <textarea name="message" className="w-full border rounded px-4 py-3 min-h-[120px]" placeholder="Tell me about your project" required></textarea>
        <button type="submit" className="px-5 py-3 bg-slate-900 text-white rounded-2xl">Send message</button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
      <div className="mt-8 text-sm text-slate-600">
        <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> {PROFILE.email}</div>
        <div className="flex items-center gap-2 mt-2"><Phone className="w-4 h-4"/> {PROFILE.phone}</div>
      </div>
    </section>
  );
}
    