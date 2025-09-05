import React from "react";
import { EXPERIENCE } from "../data/experience";
export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Selected Projects & Case Studies</h2>
      <div className="space-y-6">
        {EXPERIENCE.map((exp) => (
          <article key={exp.client+exp.company} className="p-6 bg-white border rounded-2xl">
            <h3 className="text-xl font-semibold">{exp.client} — {exp.title}</h3>
            <p className="text-sm text-slate-500">{exp.company} • {exp.period} • {exp.location}</p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700">
              {exp.bullets.map((b, i) => (<li key={i}>{b}</li>))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
