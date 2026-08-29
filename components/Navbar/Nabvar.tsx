"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarDays, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarRow}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          Dr [X]
          <span className={styles.brandSubtitle}>Médecine du sport — Dunkerque</span>
        </Link>

        <nav className={styles.nav} aria-label="Navigation principale">
          <Link href="/interventions" className={styles.navLink}>
            Domaines d'intervention
          </Link>
          <Link href="/a-propos" className={styles.navLink}>
            Le praticien
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>

        <div className={styles.actions}>
          <Link href="/prendre-rendez-vous" className={styles.appointmentButton}>
            <CalendarDays className={styles.appointmentIcon} strokeWidth={2} />
            Prendre rendez-vous
          </Link>

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className={styles.mobileNav} aria-label="Navigation mobile">
          <Link
            href="/prendre-rendez-vous"
            className={styles.mobileCta}
            onClick={() => setOpen(false)}
          >
            <CalendarDays size={18} strokeWidth={2} />
            Prendre rendez-vous
          </Link>

          <Link href="/interventions" className={styles.mobileNavLink} onClick={() => setOpen(false)}>
            Domaines d'intervention
          </Link>
          <Link href="/a-propos" className={styles.mobileNavLink} onClick={() => setOpen(false)}>
            Le praticien
          </Link>
          <Link href="/contact" className={styles.mobileNavLink} onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}