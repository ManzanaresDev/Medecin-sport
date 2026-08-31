import Link from "next/link";
import { interventions } from "@/data/interventions";
import styles from "./InterventionsPage.module.css";

export const metadata = {
  title: "Interventions courantes — Médecine du Sport",
  description:
    "Liste des pathologies et interventions sportives les plus fréquentes.",
};

export default function InterventionsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>
            Médecine et chirurgie du sport — Dunkerque
          </p>
          <h1 className={styles.h1}>
            Interventions et <em>pathologies</em>
            <br />
            courantes
          </h1>
          <p className={styles.heroSub}>
            Un aperçu des blessures et pathologies sportives les plus
            fréquemment prises en charge au cabinet, du diagnostic initial au
            suivi post-traitement.
          </p>
        </section>

        <section className={styles.listSection}>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Domaines d'intervention</p>
            <h2 className={styles.h2}>Toutes les interventions</h2>
          </div>

          <div className={styles.grid}>
            {interventions.map((item) => (
              <Link
                key={item.slug}
                href={`/interventions/${item.slug}`}
                className={styles.card}
              >
                <p className={styles.cardLabel}>Fiche pathologie</p>
                <h3 className={styles.cardTitle}>{item.titre}</h3>
                <p className={styles.cardResume}>{item.resume}</p>
                <span className={styles.cardLink}>En savoir plus →</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
