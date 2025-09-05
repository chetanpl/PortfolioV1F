import React from "react";
import { PROFILE, SKILLS, ACHIEVEMENTS } from "../data/profile";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold">{PROFILE.name}</h1>
          <p className="text-xl mt-2">{PROFILE.title}</p>
          <p className="mt-4 text-slate-600">
            Frontend Theme Engineer with over 8 years of experience building scalable, customer-focused, and automation-driven applications in the telecom, finance, energy, and e-commerce sectors. Skilled in ReactJS, TypeScript, Liquid, and Shopify theme development. Experienced in building modular storefronts, customizing Shopify themes, and integrating with headless commerce architectures using GraphQL and APIs. Adept at automated testing (Jest, Cypress), CI/CD workflows (AWS, Jenkins, Docker), and Agile delivery. Passionate about delivering engaging and high-performing e-commerce experiences.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/resume" className="px-5 py-3 bg-slate-900 text-white rounded-2xl inline-flex items-center gap-2">View Resume <ArrowRight className="w-4 h-4"/></a>
            <a href="/projects" className="px-5 py-3 border rounded-2xl inline-flex items-center gap-2">Projects</a>
          </div>
        </div>
        <div className="rounded-3xl p-6 border bg-white">
          <h4 className="font-semibold mb-3">Contact</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3"><Mail className="w-4 h-4"/> <a href={`mailto:${PROFILE.email}`} className="hover:underline">{PROFILE.email}</a></div>
            <div className="flex items-center gap-3"><Phone className="w-4 h-4"/> <a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a></div>
            <div className="flex items-center gap-3"><MapPin className="w-4 h-4"/> {PROFILE.location}</div>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h3 className="text-2xl font-bold mb-4">Core Skills & Tech</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {SKILLS.map((s) => (
            <div key={s} className="p-4 bg-white border rounded-xl">{s}</div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map((a) => (
            <li key={a} className="p-4 bg-white border rounded-xl">{a}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}

