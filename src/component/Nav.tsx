import React from "react";
import { Link } from "react-router-dom";
import { PROFILE } from "../data/profile";

export default function Nav() {
  return (
    <nav className="bg-white border-b sticky top-0 z-40">
  <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
    <Link to="/" className="font-bold text-lg">{PROFILE.name}</Link>
    <div className="flex gap-4 items-center">
      <Link 
        to="/" 
        className="text-sm text-slate-600 hover:text-slate-900 hover:underline transition"
      >
        Home
      </Link>
      <Link 
        to="/projects" 
        className="text-sm text-slate-600 hover:text-slate-900 hover:underline transition"
      >
        Projects
      </Link>
      <Link 
        to="/resume" 
        className="text-sm text-slate-600 hover:text-slate-900 hover:underline transition"
      >
        Resume
      </Link>
      {/* <Link to="/contact" className="text-sm text-slate-600 hover:text-slate-900 hover:underline transition">Contact</Link> */}
    </div>
  </div>
</nav>

  );
}
