// app/page.tsx

import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { interventions } from "@/data/interventions";
import styles from "./homePage.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

      <main className={styles.main}>
        <div className={styles.mainBg} />

        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>
              Chirurgie orthopédique &amp; médecine du sport
            </p>

            <h1 className={styles.heroTitle}>
              Médecine et chirurgie du sport à Dunkerque
            </h1>

            <p className={styles.heroText}>
              Diagnostic, traitement et suivi des blessures sportives, du
              sportif amateur au sportif de haut niveau.
            </p>

            <Link
              href="/prendre-rendez-vous"
              className={styles.heroButton}
            >
              <CalendarDays
                className={styles.heroButtonIcon}
                strokeWidth={2}
              />
              Prendre rendez-vous
            </Link>
          </div>
        </section>

        {/* SPÉCIALITÉS */}
        <section className={styles.specialites}>
          <p className={styles.sectionEyebrow}>
            Domaines d'intervention
          </p>

          <h2 className={styles.sectionTitle}>
            Toutes les interventions
          </h2>

          <div className={styles.interventionsGrid}>
            {interventions.map((item) => (
              <Link
                key={item.slug}
                href={`/interventions/${item.slug}`}
                className={styles.interventionCard}
              >
                <p className={styles.interventionEyebrow}>
                  Fiche pathologie
                </p>

                <h3 className={styles.interventionTitle}>
                  {item.titre}
                </h3>

                <p className={styles.interventionText}>
                  {item.resume}
                </p>

                <span className={styles.interventionLink}>
                  En savoir plus

                  <ArrowRight
                    className={styles.interventionIcon}
                    strokeWidth={2}
                  />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* SECTION RASSURANCE À AJOUTER PLUS TARD */}
      {/* <section className={styles.rassurance}>
        ...
      </section> */}
    </div>
  );
}