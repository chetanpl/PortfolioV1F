import React from "react";
import { PROFILE, SKILLS } from "../data/profile";
import { EXPERIENCE } from "../data/experience";

export default function Resume() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <aside className="md:col-span-1 p-6 bg-white border rounded-2xl">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">{PROFILE.email}</p>
          <p className="text-sm">{PROFILE.phone}</p>
          <p className="text-sm">{PROFILE.location}</p>
          <div className="mt-4">
            <h4 className="font-semibold">Education</h4>
            <p className="text-sm">Masters in IT, Sikkim Manipal University (2015)</p>
            <p className="text-sm">Bachelor’s, Delhi University</p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Certifications</h4>
            <p className="text-sm">BPSS Cleared | UK Driving License</p>
          </div>
        </aside>
        <div className="md:col-span-2 space-y-6">
          {EXPERIENCE.map((exp) => (
            <section key={exp.client+exp.company} className="p-6 bg-white border rounded-2xl">
              <h4 className="font-semibold">{exp.title}</h4>
              <div className="text-sm text-slate-500">{exp.company} • {exp.period} • {exp.location}</div>
              <ul className="list-disc list-inside mt-3 text-slate-700">
                {exp.bullets.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
            </section>
          ))}
          <section className="p-6 bg-white border rounded-2xl">
            <h3 className="font-semibold">Technical Skills</h3>
            <div className="mt-3 grid md:grid-cols-2 gap-2 text-sm text-slate-700">
              {SKILLS.map((s) => (<div key={s} className="p-2 border rounded">{s}</div>))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
