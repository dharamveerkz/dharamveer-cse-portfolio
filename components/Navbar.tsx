"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 h-16 flex items-center justify-between">
      <Link href="/" className="font-playfair text-xl font-black text-slate-900">DK<span className="text-blue-600">.</span></Link>
      <div className="hidden md:flex gap-6">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">{l.label}</Link>
        ))}
      </div>
      <button className="md:hidden text-slate-800" onClick={() => setOpen(!open)}>☰</button>
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 p-4 md:hidden flex flex-col gap-3 shadow-lg">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-slate-700 font-medium py-2 border-b border-slate-100" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
