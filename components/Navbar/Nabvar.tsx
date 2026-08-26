// components/Navbar/Navbar.txt
"use client"

import Link from "next/link";
import { CalendarDays } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-white border-b border-green-900/10">
      <Link href="/" className="font-display font-semibold text-2xl text-green-950 leading-tight flex flex-col gap-1.5">
        Dr [X]
        <span className="font-mono text-sm uppercase tracking-widest text-green-700 font-normal">
          Médecine du sport — Dunkerque
        </span>
      </Link>

      <nav className="hidden md:flex gap-9 font-mono text-base uppercase tracking-wide" aria-label="Navigation principale">
<Link href="/interventions" className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-900 after:transition-all after:duration-200 hover:after:w-full">
  Domaines d'intervention
</Link>
<Link href="/a-propos" className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-900 after:transition-all after:duration-200 hover:after:w-full">
  Le praticien
</Link>
<Link href="/contact" className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-900 after:transition-all after:duration-200 hover:after:w-full">
  Contact
</Link>
      </nav>

      <Link
        href="/prendre-rendez-vous"
        className="flex items-center gap-2 bg-[#1B71E1] hover:bg-[#1560c4] text-white font-mono text-base uppercase tracking-wide px-5 py-2.5 rounded-md transition-colors"
      >
        <CalendarDays className="w-4 h-4" strokeWidth={2} />
        Prendre rendez-vous
      </Link>
    </header>
  );
}