
import React from "react";
import { PROFILE } from "../data/profile";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-slate-500 border-t mt-12">
      <div className="max-w-6xl mx-auto px-6">© {new Date().getFullYear()} {PROFILE.name}. {PROFILE.bpss}.</div>
    </footer>
  );
}
