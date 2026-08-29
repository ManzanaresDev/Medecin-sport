"use client";

import Link from "next/link";
import { CalendarDays } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.brand}>
        Dr [X]

        <span className={styles.brandSubtitle}>
          Médecine du sport — Dunkerque
        </span>
      </Link>

      <nav
        className={styles.nav}
        aria-label="Navigation principale"
      >
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

      <Link
        href="/prendre-rendez-vous"
        className={styles.appointmentButton}
      >
        <CalendarDays
          className={styles.appointmentIcon}
          strokeWidth={2}
        />

        Prendre rendez-vous
      </Link>
    </header>
  );
}